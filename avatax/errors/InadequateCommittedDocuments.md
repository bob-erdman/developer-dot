---
layout: page
title: InadequateCommittedDocuments
number: 2203
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Company must have at least two committed documents.

## Example

```json
{
  "code": "InadequateCommittedDocuments",
  "target": "Unknown",
  "details": [
    {
      "code": "InadequateCommittedDocuments",
      "number": 2203,
      "message": "Company must have at least two committed documents.",
      "description": "In order for an integration to be certified, the company should have at least two committed documents in the past month or among the last 100 documents.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InadequateCommittedDocuments",
      "severity": "Error"
    }
  ]
}
```

## Explanation

In order for an integration to be certified, the company should have at least two committed documents in the past month or among the last 100 documents.
