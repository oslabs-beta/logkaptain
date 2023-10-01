require('dotenv').config();

module.exports = {
    dbConnection: process.env.DB_CONNECTION,
    apiTokenJira: process.env.API_TOKEN_JIRA,
    jiraUsername: process.env.USERNAME_JIRA,
    jiraApiUrl: process.env.API_URL_JIRA,
}