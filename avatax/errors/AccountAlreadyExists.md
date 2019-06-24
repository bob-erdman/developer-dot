---
layout: page
title: AccountAlreadyExists
number: 611
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This combination of the account name and company address already exists.

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

To create an account, the combination of account name and company address must be unique. In the case of this error, the user should ensure the account name and company address were inputed correctly. Additionally, check if you've already activated an account and try using the existing account. 

If you haven't already created an account with the inputed account name and company address combination, reach out to [our support team](https://help.avalara.com/Directory/Contact_Avalara) for assistence.
