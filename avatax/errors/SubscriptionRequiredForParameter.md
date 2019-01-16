---
layout: page
title: SubscriptionRequiredForParameter
number: 2104
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The account's subscription level doesn't include use of the parameter in your request.

## Example

```json
{
  "code": "SubscriptionRequiredForParameter",
  "target": "Unknown",
  "details": [
    {
      "code": "SubscriptionRequiredForParameter",
      "number": 2104,
      "message": "Account -0- does not have the subscription required to use the parameter.",
      "description": "The '-1-' parameter requires one of the following subscriptions: -2-.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/SubscriptionRequiredForParameter",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Avalara has various subscriptions that grant access to different features. The parameter in your request cannot be accessed or used with your current subscription. If you want to gain access and use the parameter, you must update or add a subscription. 

To find the error-causing parameter, look in your error's description. Using the example error above, you can see the error-causing parameter is located at position `-1-`. Additionally, subscriptions allowing the use of the parameter can be found at position `-2-`.
