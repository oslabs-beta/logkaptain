const issueController = {};

issueController.createIssue = (req, res, next) => {
// Jira API endpoint and authentication credentials
const jiraApiUrl ='https://sharmarke.atlassian.net/jira/software/projects/LOGKAPTAIN/boards/3/backlog'
const jiraUsername = 'sharmarke';
const jiraPassword = 'ATATT3xFfGF0UDil9MbxEviI-1e-4oheaE-e8URSU5g81otq7SOzUzqDEK8_NgIACy9Fhdk02MSyA84zLBbXv33OzEflJ0ip8elqUpKTD8eNx_TvZEnmGdgLKpCwufBmjqj9hbQtb7OwJoz4hyseRP0TzhTlcUNMllvdVDswjznJjdqHnl3hLGQ=C449B612'; // You can generate an API token in Jira

// Jira issue data (We can customize this based on our requirements)
const issueData = {
  fields: {
    project: {
      key: 'LOGKAPTAIN-75', 
    },
    summary: 'Bug Title test',
    description: 'Bug Description test',
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
  fetch(jiraApiUrl, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Jira bug ticket created successfully:', data.key);
    })
    .catch(error => {
      console.error('Error creating Jira bug ticket:', error);
    });

    next();

}





module.exports = issueController;