---
layout: page
title: ReadOnly
number: 25
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The field is read only. 

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

The field cannot be changed because it is read only. This 'read only' status may be due to the user's role and the associated permissions. 
