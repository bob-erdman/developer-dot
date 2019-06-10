---
layout: page
title: NoVoidedDocuments
number: 1709
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Company does not have any voided documents.

## Example

```json
{
  "code": "NoVoidedDocuments",
  "target": "Unknown",
  "details": [
    {
      "code": "NoVoidedDocuments",
      "number": 1709,
      "message": "Company does not have any voided documents.",
      "description": "In order for an integration to be certified, the company should have at least one voided document in the past month or among the last 100 documents.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/NoVoidedDocuments",
      "severity": "Error"
    }
  ]
}
```

## Explanation

In order for an integration to be certified, the company should have at least one voided document in the past month or among the last 100 documents.
