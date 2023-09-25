const express = require('express');
const router = express.Router();
const json2csv = require('json2csv').Parser;
const k8sControllers = require('../controllers/k8sControllers');
const issueController = require('../controllers/issueController');

router.get('/logs', k8sControllers.getLogs, (req, res) =>
  res.status(200).json(res.locals.aggregatedPodsLogs)
);

//middleware to get the logs from json to csv
router.get(
  '/download',
  /*k8sControllers.getLogs,*/ (req, res) => {
    // replaced with data from the logs when i'm able to connect with kube.config
    // const jsonLogs = res.locals.aggregatedPodsLogs;
    // TODO: remove this sample array with jsonLogs when connected to k8s
    const jsonLogs = [
      { name: 'John', age: 21, city: 'London' },
      { name: 'Smith', age: 23, city: 'Paris' },
      { name: 'Jane', age: 20, city: 'New York' },
    ];

    // parse the json data into csv format
    // abstract the keys from the first object in the array
    const fields = Object.keys(jsonLogs[0]);
    // create an instance of the json2csv parser to convert the jsonLogs array into csv format
    const csvData = new json2csv({ fields }).parse(jsonLogs);

    // send back as an attachment, which the browser will handle as a download
    res.header('Content-Type', 'text/csv');
    res.attachment(`logkaptain__${new Date().toISOString()}.csv`);
    return res.send(csvData);
  }
);

router.post('/issue',issueController.createIssue, (req, res) =>
  res.status(200).json(res.locals.key)
);

module.exports = router;
