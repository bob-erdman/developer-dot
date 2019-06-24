---
layout: page
title: AccountTypeNotSupported
number: 28
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This account type cannot perform this operation.

## Example

```json
{
  "code": "AccountTypeNotSupported",
  "target": "Unknown",
  "details": [
    {
      "code": "AccountTypeNotSupported",
      "number": 28,
      "message": "Unsupported",
      "description": "AccountType -0- is not supported for this operation.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/AccountTypeNotSupported",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Avalara has [3 account types](/api-reference/avatax/rest/v2/models/enums/AccountModel%20>%20accountTypeId/) and each has its own capabilites, features and available actions. In the case of this error, the account type performing the action does not have the necessary support to complete the task.
