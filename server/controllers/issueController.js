const issueController = {};
const config = require('../config')
issueController.createIssue = async (req, res, next) => {

  const {summary, description} = req.body
// Jira API endpoint and authentication credentials
const jiraApiUrl = config.jiraApiUrl
const jiraUsername = config.jiraUsername
//Atlassian API token 
const jiraPassword = config.apiTokenJira
// Jira issue data (We can customize this based on our requirements)
const issueData = {
  fields: {
    project: {
      key: 'LOGKAPTAIN', 
    },
    summary: summary,
    description: description,
    issuetype: {
      name: 'Bug',
    },
  },
};




  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + Buffer.from(`${jiraUsername}:${jiraPassword}`).toString('base64'),
    },
    body: JSON.stringify(issueData),
  };
  
  //POST request to create the issue
  try {
    const response = await fetch(jiraApiUrl, requestOptions);

    const data = await response.json();

    if (data.key){ // 'Jira bug ticket created successfully => "LOGKAPTAIN-#" 
      res.locals.key = {key: data.key}
      return next();
    }else {

      return next({
        log: `issueController.createIssue ERROR: Jira API response did not contain a key. Token possibly expired`,
        message:
          'Error occurred in issueController.createIssue. Check server logs for more details.',
        status: 500,
      });

    }
    
  } catch (err) {
    return next({
      log: `issueController.createIssue ERROR: ${err}`,
      message:
        'Error occurred in issueController.createIssue. Check server logs for more details.',
      status: 500,
    });
  }
}



module.exports = issueController;