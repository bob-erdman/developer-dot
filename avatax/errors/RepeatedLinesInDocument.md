---
layout: page
title: RepeatedLinesInDocument
number: 2213
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Company has repeated lines in a document.

## Example

```json
{
  "code": "RepeatedLinesInDocument",
  "target": "Unknown",
  "details": [
    {
      "code": "RepeatedLinesInDocument",
      "number": 2213,
      "message": "Company has repeated lines in a document.",
      "description": "In order for the company to be certified, there should be no repeated lines(same itemCode, ExemptNo and same address) in the same document, in the past month or among the last 100 documents.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/RepeatedLinesInDocument",
      "severity": "Error"
    }
  ]
}
```

## Explanation

In order for the company to be certified, there should be no repeated lines in the same document. Repeated lines might include same itemCode, ExemptNo and same address. Check the fields of your documents for repeated lines and update them where applicable. Be sure to check all recent documents which include those from the past month or the last 100 documents. 
