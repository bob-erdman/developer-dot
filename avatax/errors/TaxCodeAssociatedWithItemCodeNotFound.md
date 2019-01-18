---
layout: page
title: TaxCodeAssociatedWithItemCodeNotFound
number: 1704
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The tax code in the request could not be found.

## Example

```json
{
  "code": "TaxCodeAssociatedWithItemCodeNotFound",
  "target": "Unknown",
  "details": [
    {
      "code": "TaxCodeAssociatedWithItemCodeNotFound",
      "number": 1704,
      "message": "The tax code -0- could not be found.",
      "description": "The tax code -0- associated with the item code -1- could not be found.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/TaxCodeAssociatedWithItemCodeNotFound",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The tax code used is not available or does not exist. 

To find the tax code causing the error, check your error's description. Using the example error above, the error-causing tax code can be found at position `-0-` and the item code it is associated with can be found at position `-1-`.
