---
layout: page
title: CannotCertifyCompany
number: 1708
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

One or more check for this company to be certified have failed.

## Example

```json
{
  "code": "CannotCertifyCompany",
  "target": "Unknown",
  "details": [
    {
      "code": "CannotCertifyCompany",
      "number": 1708,
      "message": "Company is not certified.",
      "description": "One or more check for this company to be certified have failed. Please look at the error messages for more details.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CannotCertifyCompany",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Before a company can be certified, one or more checks must succeed. In the case of this error, the one or more checks have failed. Please check your error message for more details on which checks have failed.
