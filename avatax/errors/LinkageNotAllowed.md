---
layout: page
title: LinkageNotAllowed
number: 52
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The client account cannot be linked to the firm.

## Example

```json
{
  "code": "LinkageNotAllowed",
  "target": "Unknown",
  "details": [
    {
      "code": "LinkageNotAllowed",
      "number": 52,
      "message": "Unsupported",
      "description": "Cannot link client account to firm",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/LinkageNotAllowed",
      "severity": "Error"
    }
  ]
}
```

## Explanation

This client account and firm are not compatible and cannot be linked. Please check to ensure you've provided the corrent client and firm information in your request. If you believe there is an issue with either the client or firm account, please reach out to [Avalara's client support network](https://help.avalara.com/Directory/Contact_Avalara). 
