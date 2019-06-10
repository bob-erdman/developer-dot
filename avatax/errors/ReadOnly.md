---
layout: page
title: ReadOnly
number: 25
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The field is read-only.

## Example

```json
{
  "code": "ReadOnly",
  "target": "Unknown",
  "details": [
    {
      "code": "ReadOnly",
      "number": 25,
      "message": "-0- is read-only.",
      "description": "This API requires ownership of the -0- with -2- '-1-'.  You have read-only permissions for this object.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ReadOnly",
      "severity": "Error"
    }
  ]
}
```

## Explanation

There are multiple user roles such as Account Admin or Company User. Each role has it's own permissions and authorized actions. The user does not have editing permissions for the field. 
