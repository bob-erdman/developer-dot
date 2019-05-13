---
layout: page
title: InvitationOnly
number: 602
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

You attempted to contact an API that is available by invitation only.

## Example

```json
{
  "code": "InvitationOnly",
  "target": "Unknown",
  "details": [
    {
      "code": "InvitationOnly",
      "number": 602,
      "message": "The user or host is not whitelisted to use this API",
      "description": "This API is available to specially invited partners and developers only.  Please contact your business development representative.  Feature: -0- Action: -1-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/InvitationOnly",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Some AvaTax APIs, such as Returns-related and Onboarding-related APIs, are available to specially approved partners only.

For more information about these APIs, please contact your account manager.
