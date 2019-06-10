---
layout: page
title: CustomerVendorCodeIsGuid
number: 1712
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

TBD

## Example

```json
{
  "code": "CustomerVendorCodeIsGuid",
  "target": "Unknown",
  "details": [
    {
      "code": "CustomerVendorCodeIsGuid",
      "number": 1712,
      "message": "Company has a customer vendor code which is a GUID.",
      "description": "Document '-0-' has a GUID as the customer vendor code. In order for the company to be certified, there shouldn't be any GUID in the document code in the past month or among the last 100 documents. ",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CustomerVendorCodeIsGuid",
      "severity": "Error"
    }
  ]
}
```

## Explanation

TBD
