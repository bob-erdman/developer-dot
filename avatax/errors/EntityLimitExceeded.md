---
layout: page
title: EntityLimitExceeded
number: 10
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The number of entities in the request exceeded the limit. 

## Example

```json
{
  "code": "EntityLimitExceeded",
  "target": "Unknown",
  "details": [
    {
      "code": "EntityLimitExceeded",
      "number": 10,
      "message": "The request contained too many entities.",
      "description": "The request contained -0- entities, which exceeds the -1- entity limit.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/EntityLimitExceeded",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Only a defined number of entities is allowed for this type of request. The error description will tell you the entity limit for your type of request. Check your request for the amount of `entityUseCode` fields and ensure the total does not exceed the limit.
