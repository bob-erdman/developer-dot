---
layout: page
title: UnterminatedValueError
number: 21
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

A filter value was not properly terminated.

## Example

```json
{
  "code": "UnterminatedValueError",
  "target": "Unknown",
  "details": [
    {
      "code": "UnterminatedValueError",
      "number": 21,
      "message": "Incorrect $filter parameter.",
      "description": "The filter contained a value that was not properly terminated: -0-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/UnterminatedValueError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

A paramter value in the `$filter` of the query was not terminated properly. Check out this [guide for filtering in REST ](ttps://developer.avalara.com/blog/2016/10/06/filtering-in-rest-v2) for more information on filters and parameters. Additionally, check the documention for the method or model used to gain further insight into the filtering guidelines.
