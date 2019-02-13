---
layout: page
title: InvalidQueryValue
number: 18
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The value provided for a query field is invalid.

## Example

```json
{
  "code": "InvalidQueryValue",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidQueryValue",
      "number": 18,
      "message": "An invalid query value was provided.",
      "description": "The field named '-0-' is type -1- and cannot be compared to '-2-'",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidQueryValue",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Looking at the error's description, the value provided for the field at position `-0-` is invalid. Valid values for the field may be discerned from the type at position `-1-` of the error's description. For further information regarding valid values for the field, check the documentation for the method or model used. 
