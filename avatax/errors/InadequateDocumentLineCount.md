---
layout: page
title: InadequateDocumentLineCount
number: 2206
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Company has inadequate document line count.

## Example

```json
{
  "code": "InadequateDocumentLineCount",
  "target": "Unknown",
  "details": [
    {
      "code": "InadequateDocumentLineCount",
      "number": 2206,
      "message": "Company has inadequate document line count.",
      "description": "In order for the company to be certified, there should be at least one document with more than one document line, in the past month or among the last 100 documents.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InadequateDocumentLineCount",
      "severity": "Error"
    }
  ]
}
```

## Explanation

In order for the company to be certified, there should be at least one document with more than one document line, in the past month or among the last 100 documents.
