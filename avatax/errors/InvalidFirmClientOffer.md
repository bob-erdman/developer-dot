---
layout: page
title: InvalidFirmClientOffer
number: 29
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Offer is not valid for a firm client account.

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

Some offers are limited to certain types of accounts. The offer used is not valid for the client account that firm needs to manage. Suuported offers for this account include ARA and ManagedARA.
