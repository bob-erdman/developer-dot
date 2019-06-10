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

Mapping to the correct tax type is important for calculating accurate taxes for your situation. If you are new to mapping tax types, take a look at this [overview of tax types](https://help.avalara.com/000_Avalara_AvaTax/About_Tax_Types) from Avalara's help center. If you want more information on choosing the correct tax type for your situation, use [our tax type table](https://help.avalara.com/001_Avalara_AvaTax/000_AvaTax_Update/Pick_the_Right_Tax_Type).
