---
layout: page
title: LinkageStatusUpdateNotSupported
number: 53
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The status cannot be updated. 

## Example

```json
{
  "code": "LinkageStatusUpdateNotSupported",
  "target": "Unknown",
  "details": [
    {
      "code": "LinkageStatusUpdateNotSupported",
      "number": 53,
      "message": "Unsupported",
      "description": "Cannot update status from -0- to -1-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/LinkageStatusUpdateNotSupported",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Currently, the status change is not supported. Please see the error description for more information on which status cannot be updated.
