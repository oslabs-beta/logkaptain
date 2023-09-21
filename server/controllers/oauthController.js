// const OAuth = require('oauth-1.0a');
// const crypto = require('crypto');

// const oauthController = {};


// oauthController.authenticate = async (req, res, next) => {
//   const { privateKeyPem, publicKeyPem } = req.body; // NEED TO SEND FROM F.E.

//   try {
    
//     const oauth = OAuth({
//       consumer: {
//         key: publicKeyPem,
//         secret: privateKeyPem
//       },
//       signature_method: 'HMAC-SHA1',
//       hash_function(base_string, key) {
//         return crypto.createHmac('sha1', key).update(base_string).digest('base64');
//       }
//     });

//     const request_data = {
//       url: 'https://api.example.com/request-endpoint',
//       method: 'GET'
//     };

//     const token = {
//       key: 'USER_ACCESS_TOKEN',
//       secret: 'USER_ACCESS_TOKEN_SECRET'
//     };

//     const requestData = {
//       url: request_data.url,
//       method: request_data.method,
//       data: {} // Any additional request parameters
//     };

//     const authorization = oauth.authorize(requestData, token);

//     const headers = oauth.toHeader(authorization);

//     // Now you can make a request using the headers with your HTTP client (e.g., axios, fetch)
//     // Example using fetch:
//     fetch(request_data.url, {
//       method: request_data.method,
//       headers: headers
//     })
//       .then(response => response.json())
//       .then(data => console.log('API Response:', data))
//       .catch(error => console.error('Error:', error));

//   }
//   catch (error) {
//     return next({
//       log: `Express error handler caught in oauthController error: ${error}`,
//       status: 400,
//       message: { err: 'An error occurred while trying to authenticate with oauth.' },
//     });
//   }
// }