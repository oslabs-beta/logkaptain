const k8sControllers = {};
const { coreV1Api } = require('../utils/k8sAPI');

k8sControllers.getLogs = async (req, res, next) => {
  try {
    const namespace = 'default';
    const labelSelector = 'bb=web';

    const podListResponse = await coreV1Api.listNamespacedPod(
      namespace,
      labelSelector
    ); // Retrieve a list of pods that match the label selector

    const aggregatedPodsLogs = {};

    for (const pod of podListResponse.body.items) {
      // Iterate through the list of pods and retrieve logs for each
      const podName = pod.metadata.name;
      const logs = await getLogsForPod(podName, namespace);
      const logsString = trimLogsForPres(logs);
      const logsArr = logsString.split('---');
      logsArr.pop(); // removing string at the end of the array
      aggregatedPodsLogs[podName] = [];
      for (const log of logsArr) {
        const logObject = parseLogEntryB(log);
        console.log('logObject', logObject);
        if (logObject) aggregatedPodsLogs[podName].push(logObject);
      }
      console.log('aggregatedPodsLogs', aggregatedPodsLogs);
    }

    res.locals.aggregatedPodsLogs = aggregatedPodsLogs;
    return next();
  } catch (err) {
    return next({
      log: `k8sControllers.getLogs ERROR: ${err}`,
      message:
        'Error occurred in k8sControllers.getLogs. Check server logs for more details.',
      status: 500,
    });
  }
};

async function getLogsForPod(podName, namespace) {
  const logsResponse = await coreV1Api.readNamespacedPodLog(podName, namespace); // read log of the specified Pod
  return logsResponse.body;
}

function trimLogsForPres(log) {
  //removing dummy app log: "Using sqlite database at /etc/todos/todo.db"
  return log.slice(67, log.length);
}

function parseLogEntryA(logEntry) {
  console.log('type', logEntry);
  //const regex = /^\[(.*?)\] (.*)$/; // Regular expression to capture date and message
  const regex = new RegExp(/^\[(.*?)\] (.*)$/);
  const match = logEntry.match(regex);

  if (match) {
    const [, date, message] = match;
    return { date, message };
  } else {
    return null;
  }
}

function parseLogEntryB(logEntry) {
  logEntry = logEntry.trim();
  const index = logEntry.indexOf(']');
  if (index === -1) return null;
  return {
    date: logEntry.slice(1, index),
    message: logEntry.slice(index + 1).trim(),
  };
}

module.exports = k8sControllers;
