---
layout: page
title: LinkageNotAllowed
number: 52
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The client account cannot be linked to the firm.

## Example

```json
{
  "code": "LinkageNotAllowed",
  "target": "Unknown",
  "details": [
    {
      "code": "LinkageNotAllowed",
      "number": 52,
      "message": "Unsupported",
      "description": "Cannot link client account to firm",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/LinkageNotAllowed",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The linking of the client account and firm is unsupported at this time.
