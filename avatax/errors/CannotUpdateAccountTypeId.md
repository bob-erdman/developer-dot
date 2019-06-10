---
layout: page
title: CannotUpdateAccountTypeId
number: 1713
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Cannot update AccountTypeId.

## Example

```json
{
  "code": "CannotUpdateAccountTypeId",
  "target": "Unknown",
  "details": [
    {
      "code": "CannotUpdateAccountTypeId",
      "number": 1713,
      "message": "Cannot update AccountTypeId from and to FirmClient.",
      "description": "AccountTypeId of FirmClient can only be created during the account creation and cannot be moved to or from that value.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CannotUpdateAccountTypeId",
      "severity": "Error"
    }
  ]
}
```

## Explanation

For Firm Clients, the AccountTypeId can only be created during account creation. It is not possible to update this value after account creation. 
