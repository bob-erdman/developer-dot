---
layout: page
title: InvalidQueryField
number: 17
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A field in the query was not found.

## Example

```json
{
  "code": "InvalidQueryField",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidQueryField",
      "number": 17,
      "message": "An invalid field was provided in the query.",
      "description": "The field named '-0-' could not be found.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidQueryField",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Looking at the error's description, the field at position `-0-` cannot be found. Check your field for any syntax errors. For more information on accepted fields for your query, check the documentation for the model or method used.
