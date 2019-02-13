---
layout: page
title: TooManyParametersError
number: 20
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The filter parameter has too many values.

## Example

```json
{
  "code": "TooManyParametersError",
  "target": "Unknown",
  "details": [
    {
      "code": "TooManyParametersError",
      "number": 20,
      "message": "Incorrect $filter parameter.",
      "description": "Your filter was too large.  Please create a filter with fewer values.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/TooManyParametersError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Depending on the query, the `$filter` paramater has a size limit. Check to ensure your filter is not too large for the given query. For more information on filtering in REST, visit this [guide for REST filtering](ttps://developer.avalara.com/blog/2016/10/06/filtering-in-rest-v2). Additionally, check the documention for the method or model used to gain further insight into the filtering guidelines.
