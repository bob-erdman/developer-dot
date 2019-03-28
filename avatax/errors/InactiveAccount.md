---
layout: page
title: InactiveAccount
number: 51
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The account is currently inactive.

## Example

```json
{
  "code": "InactiveAccount",
  "target": "Unknown",
  "details": [
    {
      "code": "InactiveAccount",
      "number": 51,
      "message": "The account '-0-' is inactive.",
      "description": "Please contact your account administrator to reactivate this account.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InactiveAccount",
      "severity": "Exception"
    }
  ]
}
```

## Explanation

The account in the request is inactive so the action cannot be applied or completed. To reactivate your account or find more information, contact your account administrator.
