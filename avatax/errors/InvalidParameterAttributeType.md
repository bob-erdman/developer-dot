---
layout: page
title: InvalidParameterAttributeType
number: 2103
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A parameter in the request doesn't match the expected attribute type. 

## Example

```json
{
  "code": "InvalidParameterAttributeType",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidParameterAttributeType",
      "number": 2103,
      "message": "The parameter's attribute type is invalid for the current operation.",
      "description": "The current operation expects a parameter with a '-0-' attribute type, but the provided parameter '-1-' has a '-2-' attribute type.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidParameterAttributeType",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Certain parameters are expected to be of a certian type. In your request, you've sent a parameter with an unexpected attriubte type.

To find the correct attribute type for your request's parameter, look at the error's description. Using the example error above, you can see the correct parameter type in the `-2-` position of your error description. If you aren't sure what parameter caused the error, check the `-1-` position of your error's description. 
