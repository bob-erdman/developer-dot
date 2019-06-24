---
layout: page
title: SameDocumentDescription
number: 2207
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

All documents have same description.

## Example

```json
{
  "code": "SameDocumentDescription",
  "target": "Unknown",
  "details": [
    {
      "code": "SameDocumentDescription",
      "number": 2207,
      "message": "All documents for the company have same description.",
      "description": "In order for the company to be certified, all documents cannot have the same description, in the past month or among the last 100 documents.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/SameDocumentDescription",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Recent documents for the company all have the same description. For company certification, the recent documents cannot have the same description. Recent documnets include the past 100 documents or those from the past month. 
