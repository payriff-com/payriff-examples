# payriff-examples

This is examples for payriff for api v2

# Authorization

1. Replace merchant with your own which is in dashboard (Applications)
2. Replace Authorization header value with your secret key which is in dashboard (Applications)

# CreateOrder

set amount in human-readable format and set approve, cancel, decline urls as a result you will have two request to that
urls one GET for redirect page then POST to send payment information. 
# Card Storage
if you want store card for future usage set
cardStorage ture in request body:

```json
 {
    "body": {
        "amount": 1.2,
        "currencyType": "AZN",
        "description": "Example",
        "cardStorage":true,
        "language": "AZ",
        "approveURL": "approveURL",
        "cancelURL": "cancelURL",
        "declineURL": "https://decline,com"
    },
    "merchant": "ES100000 (dashborda)"
 }
 ```

# Unofficial Examples and guides

1. https://github.com/nasimic/payriff
