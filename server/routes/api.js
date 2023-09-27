const express = require('express');
const router = express.Router();
const json2csv = require('json2csv').Parser;
const k8sControllers = require('../controllers/k8sControllers');
const issueController = require('../controllers/issueController');

router.get('/logs', k8sControllers.getLogs, (req, res) =>
  res.status(200).json(res.locals.aggregatedPodsLogs)
);


router.get(
  '/download', k8sControllers.getLogs, k8sControllers.downloadLogs,
  /*k8sControllers.getLogs,*/ (req, res) => {
    return res.send(res.locals.csvData);
  }
);

router.post('/issue', issueController.createIssue, (req, res) =>
  res.status(200).json(res.locals.key)
);

module.exports = router;
