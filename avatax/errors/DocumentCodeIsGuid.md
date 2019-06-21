---
layout: page
title: DocumentCodeIsGuid
number: 1711
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Company has a document code which is a GUID.

## Example

```json
{
  "code": "DocumentCodeIsGuid",
  "target": "Unknown",
  "details": [
    {
      "code": "DocumentCodeIsGuid",
      "number": 1711,
      "message": "Company has a document code which is a GUID.",
      "description": "Document '-0-' has a GUID as the document code. In order for the company to be certified, there shouldn't be any GUID in the document code in the past month or among the last 100 documents. ",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/DocumentCodeIsGuid",
      "severity": "Error"
    }
  ]
}
```

## Explanation

For companies to be certified, GUIDs cannot be used in document codes or the last 100 documents. To certify this company, the issue must be corrected.
