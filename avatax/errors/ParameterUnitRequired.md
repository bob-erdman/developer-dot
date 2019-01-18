---
layout: page
title: ParameterUnitRequired
number: 2101
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A parameter in the request doesn't have a unit of measure.

## Example

```json
{
  "code": "ParameterUnitRequired",
  "target": "Unknown",
  "details": [
    {
      "code": "ParameterUnitRequired",
      "number": 2101,
      "message": "A unit of measure is required for the parameter.",
      "description": "The parameter '-0-' requires a unit of measure with a '-1-' measurement type.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ParameterUnitRequired",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Some parameters are expected to have a unit of measure. A parameter in your request does not have the expected unit of measure element. 

You can find which parameter is causing the error and the expected unit of measure type in your error's description. Looking at the example error, the error-causing parameter is at position `-0-` and the measurement type is at poistion `-1-`.
