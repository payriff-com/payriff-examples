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

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
    }
});

xhr.open("POST", "https://api.payriff.com/api/v2/createOrder");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "SIZIN_SECRET_KEY(dashboarda)");

xhr.send(data);