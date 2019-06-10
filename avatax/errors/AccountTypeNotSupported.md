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

Some operations and functions are limited based on the type of account being used. For more information, visit [our help center](https://help.avalara.com/).
