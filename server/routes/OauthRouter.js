const express = require('express');
const router = express.Router();
const axios = require('axios');
const bodyParser = require('body-parser');
//const authController = require('../controllers/authController');
//const cookieController = require('../controllers/cookieController');
router.use(bodyParser.urlencoded({ extended: true }));


// >> WE SHOULD STORE EACH JIRA USERS ACCESS TOKEN INSIDE OF OUR DATABSE CONNECTED TO THEIR ACCOUNT DATA (new column in table), MAKE SURE TO ENCRYPT THE TOKEN FIRST << //
// THIS WILL ENABLE US TO AUTOMATICALLY GIVE THEM JIRA ACCESS AFTER AUTHORIAZATION AS LONG AS THE TOKEN HAS NOT EXPIRED // 

// Route to initiate the OAuth process
router.get('/', async (req, res) => {

  try {
    const requestTokenResponse = await axios.post('https://mnelson98.atlassian.net/rest/api/2/issue/', null, {
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

// >> CODE TO CREATE THE TICKET ONCE AUTHORIZED << //

// const requestBody = {
//   fields: {
//     project: {
//       key: 'KAN'
//     },
//     summary: 'REST ye merry gentlemen.',
//     description: 'Creating of an issue using project keys and issue type names using the REST API',
//     issuetype: {
//       name: 'Bug',
//       id: "10001"
//     }
//   }
// };


// let requestToken = '';
// router.post('/', async (req, res) => {
//   axios.post('https://mnelson98.atlassian.net/rest/api/2/issue/', requestBody)
//     .then(response => {
//       console.log('Issue created successfully:', response.data);
//     })
// });


module.exports = router;