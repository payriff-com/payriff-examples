var settings = {
    "url": "https://api.payriff.com/api/v2/createOrder",
    "method": "POST",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/json",
        "Authorization": "SIZIN_SECRET_KEY(dashboarda)"
    },
    "data": JSON.stringify({
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
    }),
};

$.ajax(settings).done(function (response) {
    console.log(response);
});