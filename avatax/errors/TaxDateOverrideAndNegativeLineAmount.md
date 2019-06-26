---
layout: page
title: TaxDateOverrideAndNegativeLineAmount
number: 2214
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Company has tax DateOverride and negative LineAmount.

## Example

```json
{
  "code": "TaxDateOverrideAndNegativeLineAmount",
  "target": "Unknown",
  "details": [
    {
      "code": "TaxDateOverrideAndNegativeLineAmount",
      "number": 2214,
      "message": "Company has tax DateOverride and negative LineAmount.",
      "description": "In order for the company to be certified, there should not be any document with tax DateOverride and negative LineAmount, in the past month or among the last 100 documents.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/TaxDateOverrideAndNegativeLineAmount",
      "severity": "Error"
    }
  ]
}
```

## Explanation

In order for the company to be certified, recent documents cannot have a tax DateOverride and negative LineAmount. Recent documents include those from the past month or the last 100 documents. 
