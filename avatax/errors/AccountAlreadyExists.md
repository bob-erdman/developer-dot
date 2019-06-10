---
layout: page
title: AccountAlreadyExists
number: 611
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The account already exists.

## Example

```json
{
  "code": "AccountAlreadyExists",
  "target": "Unknown",
  "details": [
    {
      "code": "AccountAlreadyExists",
      "number": 611,
      "message": "The account already exists.",
      "description": "The account provisioning failed. An account with the combination of account name and company address already exists.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/AccountAlreadyExists",
      "severity": "Error"
    }
  ]
}
```

## Explanation

An account with the combination of account name and company address already exists. Please try a different combination of account name and company address. If you continue to have trouble, reach out to [our help center](https://help.avalara.com/Directory/Contact_Avalara).
