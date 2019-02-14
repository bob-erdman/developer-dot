---
layout: page
title: FieldNotQueryableError
number: 1408
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A field in the query is not a queryable. 

## Example

```json
{
  "code": "FieldNotQueryableError",
  "target": "Unknown",
  "details": [
    {
      "code": "FieldNotQueryableError",
      "number": 1408,
      "message": "The field '-0-' in the query '-1-' is not queryable.",
      "description": "The field '-0-' in the query '-1-' is not queryable.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/FieldNotQueryableError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Queries have a defined list of acceptable fields that are queryable. The field at position `-0-` of the error's description is not accepted for the query at positoin `-1-`. To find a list the accepted fields for your query, consult the documentation for the model or method used. 
