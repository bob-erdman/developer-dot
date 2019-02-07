---
layout: page
title: InvalidParameterUnitMeasurementType
number: 2100
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A paremeter in the request has an unexpected unit of measurement type.

## Example

```json
{
  "code": "InvalidParameterUnitMeasurementType",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidParameterUnitMeasurementType",
      "number": 2100,
      "message": "The unit measurement type was not valid for the parameter.",
      "description": "The parameter '-0-' requires a unit of measure with a '-1-' measurement type, but the provided unit '-2-' has a '-3-' measurement type.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidParameterUnitMeasurementType",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Parameters related to units of measurement expect a certain measurement type. For example, some items will expect a measurement of inches while others will expect pounds (lbs). 

To identify the right unit of measurement type for your paraments, look are your error description. Using the example error above, you can see that expected measurement type will be in position `-1-`.
