---
layout: page
title: InvalidTaxTypeMapping
number: 64
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The tax type mapping provided is not valid.

## Example

```json
{
  "code": "InvalidTaxTypeMapping",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidTaxTypeMapping",
      "number": 64,
      "message": "An invalid tax type mapping was provided.",
      "description": "The combination of tax type group '-0-', tax type '-1-', tax sub type '-2-', rate type '-3-', and country '-4-' is invalid.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidTaxTypeMapping",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The combination of tax type group, tax type, tax subtype, rate type and country is invalid. See the error description for more information on the invaid portions of the provided tax type mapping.
