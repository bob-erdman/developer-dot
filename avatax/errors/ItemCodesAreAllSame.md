---
layout: page
title: ItemCodesAreAllSame
number: 2210
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

All item codes for the document are the same.

## Example

```json
{
  "code": "ItemCodesAreAllSame",
  "target": "Unknown",
  "details": [
    {
      "code": "ItemCodesAreAllSame",
      "number": 2210,
      "message": "All item codes for the document are the same.",
      "description": "In order for the company to be certified, all the ItemCodes for documents cannot be the same, in the past month or among the last 100 documents.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/ItemCodesAreAllSame",
      "severity": "Error"
    }
  ]
}
```

## Explanation

For company certification, ItemCodes in recent documnets must be different. Recent documents include all those in the past month or the last 100 documents. Please update your ItemCodes (if applicable) to attain company certification. 
