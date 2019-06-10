---
layout: page
title: InvalidDocumentStatus
number: 1314
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The document status is incorrect for this operation.

## Example

```json
{
  "code": "InvalidDocumentStatus",
  "target": "Unknown",
  "details": [
    {
      "code": "InvalidDocumentStatus",
      "number": 1314,
      "message": "This document status is incorrect for this operation.",
      "description": "The document -0- has a status of -1-. This operation is not allowed for a document with the status of -1-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvalidDocumentStatus",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Some document actions are dependant on the status of the document. To complete the desired action, make sure the document is in the proper status. 
