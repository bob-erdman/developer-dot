---
layout: page
title: InvalidAccountType
number: 2105
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Account Type must be 'firm' for this action.

## Example

```json
{
  "code": "InvalidAccountType",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidAccountType",
      "number": 2105,
      "message": "Account Type of the account is not firm.",
      "description": "The account type of the account -0- is not firm. A FirmAdmin or a FirmUser can only be added to a firm account",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidAccountType",
      "severity": "Error"
    }
  ]
}
```

## Explanation

For firm accounts, only FirmAdmin or a FirmUser can be added. 
