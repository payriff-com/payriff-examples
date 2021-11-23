var request = require('request');
var options = {
    'method': 'POST',
    'url': 'https://api.payriff.com/api/v2/createOrder',
    'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'SIZIN_SECRET_KEY(dashboarda)'
    },
    body: JSON.stringify({
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
    })

};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});
