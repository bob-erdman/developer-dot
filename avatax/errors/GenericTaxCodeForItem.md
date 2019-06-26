---
layout: page
title: GenericTaxCodeForItem
number: 2200
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
      "number": 2200,
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

Company items cannot use the generic taxcode, `P0000000`. To resolve this error, associate a specific taxcode to the item mentioned in the error's description. For more information on available tax codes, consult [this Tax Code article](https://help.avalara.com/000_Avalara_AvaTax/Select_Avalara_Tax_Codes) or search for codes using our [tax code tool](https://taxcode.avatax.avalara.com/).
