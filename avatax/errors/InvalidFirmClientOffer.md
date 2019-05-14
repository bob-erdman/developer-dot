---
layout: page
title: InvalidFirmClientOffer
number: 29
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The offer is invalid for firm client accounts.

## Example

```json
{
  "code": "InvalidFirmClientOffer",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidFirmClientOffer",
      "number": 29,
      "message": "Offer is not valid for a firm client account",
      "description": "Offer -0- is not valid for the client account that firm needs to manage. Supported offers are ARA and ManagedARA",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidFirmClientOffer",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Avalara provides [3 different types of accounts](/api-reference/avatax/rest/v2/models/enums/AccountModel%20>%20accountTypeId/) with varying settings and action sets. For the firm client account type, some offers are not valid since a firm manages the account on behalf of the client. Offers supported for this type of account include ARA and ManagaedARA. 
