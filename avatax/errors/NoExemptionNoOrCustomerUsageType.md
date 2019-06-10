---
layout: page
title: NoExemptionNoOrCustomerUsageType
number: 2208
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The exemption number or customer usage type is missing.

## Example

```json
{
  "code": "NoExemptionNoOrCustomerUsageType",
  "target": "Unknown",
  "details": [
    {
      "code": "NoExemptionNoOrCustomerUsageType",
      "number": 2208,
      "message": "Company has no exemption number or customer usage type.",
      "description": "In order for the company to be certified, there should be at least one 'ExemptNo' or 'CustomerUsageType' (or 'EntityUseCode') in the documents, in the past month or among the last 100 documents. ",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/NoExemptionNoOrCustomerUsageType",
      "severity": "Error"
    }
  ]
}
```

## Explanation

In order for the company to be certified, there should be at least one 'ExemptNo' or 'CustomerUsageType' (or 'EntityUseCode') in the documents, in the past month or among the last 100 documents.
