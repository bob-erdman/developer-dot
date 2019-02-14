---
layout: page
title: SyntaxError
number: 19
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The filter parameter has a syntax error.

## Example

```json
{
  "code": "SyntaxError",
  "target": "Unknown",
  "details": [
    {
      "code": "SyntaxError",
      "number": 19,
      "message": "Incorrect $filter parameter.",
      "description": "Unexpected token '-0-' in the filter. Please refer https://developer.avalara.com/blog/2016/10/06/filtering-in-rest-v2 to correct your filter",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/SyntaxError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

An unexpected token (found at position `-0-` of the error's description) was found in the `$filter` parameter of the query. Check out this [guide for filtering in REST ](ttps://developer.avalara.com/blog/2016/10/06/filtering-in-rest-v2) to find the correct syntax for the `$filter`.
