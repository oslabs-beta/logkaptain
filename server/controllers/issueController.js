const issueController = {};

issueController.createIssue = async (req, res, next) => {
// Jira API endpoint and authentication credentials
//const jiraApiUrl ='https://sharmarke.atlassian.net/rest/api/3/issue'
const jiraApiUrl = 'https://sharmarke.atlassian.net/rest/api/2/issue';

const jiraUsername = 'sqk7b844ky@privaterelay.appleid.com';
const jiraPassword = 'ATATT3xFfGF0UDil9MbxEviI-1e-4oheaE-e8URSU5g81otq7SOzUzqDEK8_NgIACy9Fhdk02MSyA84zLBbXv33OzEflJ0ip8elqUpKTD8eNx_TvZEnmGdgLKpCwufBmjqj9hbQtb7OwJoz4hyseRP0TzhTlcUNMllvdVDswjznJjdqHnl3hLGQ=C449B612'; // You can generate an API token in Jira

// Jira issue data (We can customize this based on our requirements)
const issueData = {
  fields: {
    project: {
      key: 'LOGKAPTAIN', 
    },
    summary: 'Bug Title test',
    description: 'Bug Description test',
    issuetype: {
      name: 'Bug',
    },
  },
};


const bodyData = {
  "fields": {
    "project": {
      "key": "LOGKAPTAIN" // Replace with your project's key
    },
    "summary": "Issue Summary",
    "issuetype": {
      "name": "Task" // Replace with the appropriate issue type
    }
  }
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

    console.log("la rep",response);
   
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Jira bug ticket created successfully:', data.key);

    res.locals.key = {key: data.key}
   return next();
  } catch (error) {
    console.error('Error creating Jira bug ticket:', error);
  }
}



module.exports = issueController;