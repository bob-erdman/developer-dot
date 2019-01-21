---
layout: page
title: InvalidParameterValueDataType
number: 2102
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A parameter value in the request has an invalid data type.

## Example

```json
{
  "code": "InvalidParameterValueDataType",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidParameterValueDataType",
      "number": 2102,
      "message": "The parameter value is not valid for the required data type.",
      "description": "The parameter value '-0-' is not valid for the '-1-' data type required by parameter '-2-'.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidParameterValueDataType",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Certain parameters expect specific data types to ensure proper tax calculations and accurate information. 

The information regarding the invalid parameter value and correct data type can be found in the description of your error. Looking at the example error above, the invalid parameter will be named at position `-2-`. The expected data type can be found in the description at position `1`.
