---
layout: page
title: AdvancedRuleError
number: 1605
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

An error occured when using or applying Advanced Tax Rules.

## Example

```json
{
  "code": "AdvancedRuleError",
  "target": "Unknown",
  "details": [
    {
      "code": "AdvancedRuleError",
      "number": 1605,
      "message": "-0-",
      "description": "-0-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/AdvancedRuleError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Advanced rules are complex tax rules applied to special tax cases. Check your error's message and description to locate the core issue at hand. For more information about creating and managing advanced tax rules, check out [our article on the topic](https://help.avalara.com/001_Avalara_AvaTax/000_AvaTax_Update/Create_and_Manage_Advanced_Tax_Rules).
