---
layout: page
title: GenericTaxCodeForItem
number: 1707
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Company item contains a generic taxcode.

## Example

```json
{
  "code": "GenericTaxCodeForItem",
  "target": "Unknown",
  "details": [
    {
      "code": "GenericTaxCodeForItem",
      "number": 1707,
      "message": "Item -0- of this company contains a generic taxcode",
      "description": "TaxCode of P0000000 cannot be associated to any company item.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/GenericTaxCodeForItem",
      "severity": "Error"
    }
  ]
}
```

## Explanation

To certify a company, the generic tax code of P0000000 cannot be associated to any company item from the past month.
