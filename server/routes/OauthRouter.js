const express = require('express');
const router = express.Router();
const axios = require('axios');
const bodyParser = require('body-parser');
// const authController = require('../controllers/authController');
// const cookieController = require('../controllers/cookieController');
router.use(bodyParser.urlencoded({extended: true}));

const JIRA_INSTANCE = 'https://mnelson98.atlassian.net';  // Replace with your Jira instance URL
const CLIENT_ID = 'LogKaptain';  // Replace with your OAuth consumer client ID
const CLIENT_SECRET = 'LogKaptain';  // Replace with your OAuth consumer client secret
const CALLBACK_URL = 'http://localhost:5173/dashboard';


let requestToken = '';

// router.get('/', async (req, res) => {
//   try {
//     // Step 1: Obtain a request token
//     const response = await axios.post(`${JIRA_INSTANCE}/plugins/servlet/oauth/request-token`, null, {
//       auth: {
//         username: CLIENT_ID,
//         password: CLIENT_SECRET
//       }
//     });

//     // Extract the request token and secret
//     const { oauth_token, oauth_token_secret } = response.data;
//     requestToken = oauth_token_secret;

//     // Step 2: Redirect user for authorization
//     res.redirect(`${JIRA_INSTANCE}/plugins/servlet/oauth/authorize?oauth_token=${oauth_token}&oauth_callback=${CALLBACK_URL}`);
//   } catch (error) {
//     console.error('Error initiating OAuth:', error);
//     res.status(500).send('Error initiating OAuth');
//   }
// });

// router.get('/callback', async (req, res) => {
//   const { oauth_token, oauth_verifier } = req.query;

//   try {
//     // Step 3: Exchange request token for access token
//     const response = await axios.post(`${JIRA_INSTANCE}/plugins/servlet/oauth/access-token`, null, {
//       params: {
//         oauth_token,
//         oauth_verifier
//       },
//       auth: {
//         username: CLIENT_ID,
//         password: `${CLIENT_SECRET}&${requestToken}`
//       }
//     });

//     const { oauth_token: accessToken, oauth_token_secret: accessTokenSecret } = response.data;

//     // Store the access token and secret securely (e.g., in a database)
//     console.log('Access Token:', accessToken);
//     console.log('Access Token Secret:', accessTokenSecret);

//     res.send('OAuth process completed successfully!');
//   } catch (error) {
//     console.error('Error exchanging request token for access token:', error);
//     res.status(500).send('Error exchanging request token for access token');
//   }
// });


// >> WE SHOULD STORE EACH JIRA USERS ACCESS TOKEN INSIDE OF OUR DATABSE CONNECTED TO THEIR ACCOUNT DATA (new column in table), MAKE SURE TO ENCRYPT THE TOKEN FIRST << //
// THIS WILL ENABLE US TO AUTOMATICALLY GIVE THEM JIRA ACCESS AFTER AUTHORIAZATION AS LONG AS THE TOKEN HAS NOT EXPIRED // 

// Route to initiate the OAuth process
router.get('/', async (req, res) => {

  try {
    const requestTokenResponse = await axios.post('https://mnelson98.atlassian.net/plugins/servlet/oauth/request-token', null, {
      params: {
        oauth_callback: 'http://localhost:3000/oauth/callback',
        oauth_consumer_key: 'LogKaptain'
      }
    })
  } catch(error) {
    console.log('ERROR')
  }


  const jiraAuthUrl = 'https://mnelson98.atlassian.net/plugins/servlet/oauth/authorize';
// Redirect the user to the Jira authorization endpoint
console.log('HERE')
  res.redirect(`${jiraAuthUrl}?oauth_token=&oauth_callback=http://localhost:3000/oauth/callback/&client_id=LogKaptain&scope=read%3Ajira-user%20read%3Ajira-work`);
});

// Callback route to handle the OAuth callback
router.get('/callback', async (req, res) => {
  console.log('CALLBACK HIT')
  
  const { code } = req.query;

  // Exchange authorization code for access token
  const tokenResponse = await axios.post('https://mnelson98.atlassian.net/plugins/servlet/oauth/access-token', null, {
    params: {
      oauth_verifier: code,
      oauth_token: '',
      client_id: 'LogKaptain',
      client_secret: 'LogKaptain',
      redirect_uri: 'http://localhost:5173/dashboard',
      grant_type: 'authorization_code'
    }
  });

  const accessToken = tokenResponse.data.oauth_token;
  console.log(accessToken);
  // Store the access token securely in your backend database

  res.send('OAuth process completed successfully!');
});

module.exports = router;