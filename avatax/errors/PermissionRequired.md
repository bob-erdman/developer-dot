---
layout: page
title: PermissionRequired
number: 49
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The user does not have permission for the desired action.

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

Different users and administrators have varying access to features such as updating account information or creating new tax rules. These permissions are based on the role of the user. The users role can be found in position `-1-` and the denied action is at position `-0-` of the error. 
