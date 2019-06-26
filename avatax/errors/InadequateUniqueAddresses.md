---
layout: page
title: InadequateUniqueAddresses
number: 2209
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Recent documents do not show at least 2 unique addresses.

## Example

```json
{
  "code": "InadequateUniqueAddresses",
  "target": "Unknown",
  "details": [
    {
      "code": "InadequateUniqueAddresses",
      "number": 2209,
      "message": "Inadequate unique addresses",
      "description": "In order for the company to be certified, there should be at least two unique addresses in the documents, in the past month or among the last 100 documents.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InadequateUniqueAddresses",
      "severity": "Error"
    }
  ]
}
```

## Explanation

For company certification, recent documents must show at least 2 unique addresses. Recent documents include those from the past month or the last 100 documents. This error indicates that your most recent documents have fewer than 2 unique addresses. 