const k8sControllers = {};
const { coreV1Api } = require('../utils/k8sAPI');

k8sControllers.getLogs = async (req, res, next) => {

    try {
        const namespace = 'default'; 
        const labelSelector = 'bb=web';  
    
        
        const podListResponse = await coreV1Api.listNamespacedPod(namespace,labelSelector); // Retrieve a list of pods that match the label selector
    
        const aggregatedPodsLogs = {};
    
        
        for (const pod of podListResponse.body.items) { // Iterate through the list of pods and retrieve logs for each
          const podName = pod.metadata.name;
          const logs = await getLogsForPod(podName, namespace);
          aggregatedPodsLogs[podName] = logs;
        }
    
        res.locals.aggregatedPodsLogs = aggregatedPodsLogs;
        return next();
      } catch (err) {
        return next({
          log: `k8sControllers.getLogs ERROR: ${err}`,
          message: 'Error occurred in k8sControllers.getLogs. Check server logs for more details.',
          status: 500,
        });
      }
};


async function getLogsForPod(podName, namespace) {
    const logsResponse = await coreV1Api.readNamespacedPodLog(podName, namespace); // read log of the specified Pod
    return logsResponse.body;
  }


module.exports = k8sControllers;