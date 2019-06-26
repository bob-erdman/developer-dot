---
layout: page
title: TaxCodesAreAllSame
number: 2211
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

All tax codes for the documents are the same.

## Example

```json
{
  "code": "TaxCodesAreAllSame",
  "target": "Unknown",
  "details": [
    {
      "code": "TaxCodesAreAllSame",
      "number": 2211,
      "message": "All tax codes for the documents are the same.",
      "description": "In order for the company to be certified, all the TaxCodes for documents cannot be the same, in the past month or among the last 100 documents.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/TaxCodesAreAllSame",
      "severity": "Error"
    }
  ]
}
```

## Explanation

For company certification, recent documents cannot have the same taxcodes. Recent documents include those from the past month or the last 100 documents. Update your taxcodes where applicable. 
