---
layout: page
title: NoDocumentsToTest
number: 2218
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This company doesn't have documents.

## Example

```json
{
  "code": "NoDocumentsToTest",
  "target": "Unknown",
  "details": [
    {
      "code": "NoDocumentsToTest",
      "number": 2218,
      "message": "There are no documents present for this company",
      "description": "In order to self test integrations the company needs to have documents to start the testing process.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/NoDocumentsToTest",
      "severity": "Error"
    }
  ]
}
```

## Explanation

In order to self test integrations, the company needs to have documents to start the testing process. Please add documents to resolve the issue.