---
layout: page
title: EcmsSstCertsRequired
number: 1223
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The `EcmsSstCertsRequired` field should be set to true. 

## Example

```json
{
  "code": "EcmsSstCertsRequired",
  "target": "Unknown",
  "details": [
    {
      "code": "EcmsSstCertsRequired",
      "number": 1223,
      "message": "EcmsSstCertsRequired's value should be set to true.",
      "description": "Exemption certificates must be provided due to compliance to Streamlined Sales Tax rules.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/EcmsSstCertsRequired",
      "severity": "Error"
    }
  ]
}
```

## Explanation

As part of complieance with the Streamlined Sales Tax program rules, the `EcmsSstCertsRequired` field must be set to true. Check the request for this field and set it to true.