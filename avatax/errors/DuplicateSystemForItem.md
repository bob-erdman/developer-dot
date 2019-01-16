---
layout: page
title: DuplicateSystemForItem
number: 1705
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

An item in this request has multiple entries for a given system code. 

## Example

```json
{
  "code": "DuplicateSystemForItem",
  "target": "Unknown",
  "details": [
    {
      "code": "DuplicateSystemForItem",
      "number": 1705,
      "message": "Multiple entries of system '-0-' found for item '-1-'.",
      "description": "An item can have only a single entry of any given system code. Please check your input.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/DuplicateSystemForItem",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Each item can have one entry per given system code. The API supports more than 100 classification systems inluding the Avalara Tax Code. See the [18.12 Path Notes](/blog/2018/12/13/AvaTax-18-12-patch-notes/#18-12-advanced-items-setup) for more information about supported system codes. 
