var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "SIZIN_SECRET_KEY(dashboarda)");

var raw = JSON.stringify({
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

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("https://api.payriff.com/api/v2/createOrder", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));