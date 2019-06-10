---
layout: page
title: PermissionRequired
number: 49
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

User doesn't have permission for action.

## Example

```json
{
  "code": "PermissionRequired",
  "target": "Unknown",
  "details": [
    {
      "code": "PermissionRequired",
      "number": 49,
      "message": "Not permitted",
      "description": "Permission -0- not available for role -1-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/PermissionRequired",
      "severity": "Exception"
    }
  ]
}
```

## Explanation

There are multiple user roles such as Account Admin or Company User. Each role has it's own permissions and authorized actions. The user cannot complete the desired action because the role does not have the required permissions.
