---
layout: page
title: AllUSDCurrencyCodes
number: 2215
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

All recent documents have USD currency codes. 

## Example

```json
{
  "code": "AllUSDCurrencyCodes",
  "target": "Unknown",
  "details": [
    {
      "code": "AllUSDCurrencyCodes",
      "number": 2215,
      "message": "Company has all documents with USD currency codes",
      "description": "In order for the company with AvaGlobal subscription to be certified, there should be document/documents with non-USD currency codes, in the past month or among the last 100 documents.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/AllUSDCurrencyCodes",
      "severity": "Error"
    }
  ]
}
```

## Explanation

In order for the company with AvaGlobal subscription to be certified, there should be recent document/documents with non-USD currency codes, Recent documents include those from the past month or the last 100 documents. 

To certify your AvaGlobal subscription, update current documents with non-USD currency codes wherever applicable or add new documents with non-USD currency codes.