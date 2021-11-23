var axios = require('axios');
var data = JSON.stringify({
  "body": {
    "amount": 1.2,
    "currencyType": "AZN",
    "description": "Example",
    "language": "AZ",
    "approveURL": "approveURL",
    "cancelURL": "cancelURL",
    "declineURL": "https://decline,com"
  },
  "merchant": "ES100000 (dashborda)"
});

var config = {
  method: 'post',
  'url': 'https://api.payriff.com/api/v2/createOrder',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'SIZIN_SECRET_KEY(dashboarda)'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
