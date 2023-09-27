const issueController = {};

issueController.createIssue = async (req, res, next) => {

  const {summary, description} = req.body
// Jira API endpoint and authentication credentials
const jiraApiUrl = 'https://sharmarke.atlassian.net/rest/api/2/issue';
const jiraUsername = 'sqk7b844ky@privaterelay.appleid.com';
//Atlassian API token 
const jiraPassword = 'ATATT3xFfGF0UDil9MbxEviI-1e-4oheaE-e8URSU5g81otq7SOzUzqDEK8_NgIACy9Fhdk02MSyA84zLBbXv33OzEflJ0ip8elqUpKTD8eNx_TvZEnmGdgLKpCwufBmjqj9hbQtb7OwJoz4hyseRP0TzhTlcUNMllvdVDswjznJjdqHnl3hLGQ=C449B612'; // You can generate an API token in Jira

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


// // Jira API endpoint and authentication credentials
// const jiraApiUrl = 'https://yourDomain.atlassian.net/rest/api/2/issue';
// const jiraUsername = 'your atlassian email adress';
// //Atlassian API token 
// const jiraPassword = 'your api token'; // You can generate an API token in Jira

// // Jira issue data (We can customize this based on our requirements)
// const issueData = {
//   fields: {
//     project: {
//       key: 'your project key on Jira', 
//     },
//     summary: summary,
//     description: description,
//     issuetype: {
//       name: 'Bug',
//     },
//   },
// };


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
    console.log('Jira bug ticket created successfully:', data.key); // "LOGKAPTAIN-#"
    res.locals.key = {key: data.key}
   return next();
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