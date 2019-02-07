---
layout: page
title: InvalidDecimalValue
number: 48
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A field in your request has too many decimal places or too many digits over all.

## Example

```json
{
  "code": "InvalidDecimalValue",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidDecimalValue",
      "number": 48,
      "message": "The field -0- has too many digits.",
      "description": "-0- is expected to have less than -1- digits, with fewer than -2- after the decimal point.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidDecimalValue",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Certain numeric fields have a limit for the size of the number. This restriction limits both the number of decimal places and the number of total digits. In the `message` of your error, you'll find the name of the field you should check where the `-0-` is located. 

Once you've identified the field, check that the demical places and total digits do not exceed the field's limit. The decimal (see `-1-` above) and digit (see `-2-` above) limits will be in your error `description`.
