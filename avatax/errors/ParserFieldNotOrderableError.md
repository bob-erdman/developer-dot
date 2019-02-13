---
layout: page
title: ParserFieldNotOrderableError
number: 1411
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The field in the query cannot be ordered. 

## Example

```json
{
  "code": "ParserFieldNotOrderableError",
  "target": "Unknown",
  "details": [
    {
      "code": "ParserFieldNotOrderableError",
      "number": 1411,
      "message": "The field '-0-' in the query '-1-' is not orderable.",
      "description": "The field '-0-' in the query '-1-' is not orderable.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ParserFieldNotOrderableError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Looking at the error's description, the field at position `-0-` is not orderable. For more information about the query and accepted behavior for the various fields, check the documentation for the method or model used. 
