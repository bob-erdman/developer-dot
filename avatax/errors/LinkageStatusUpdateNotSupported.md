---
layout: page
title: LinkageStatusUpdateNotSupported
number: 53
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The status update attempted is not supported.

## Example

```json
{
  "code": "LinkageStatusUpdateNotSupported",
  "target": "Unknown",
  "details": [
    {
      "code": "LinkageStatusUpdateNotSupported",
      "number": 53,
      "message": "Unsupported",
      "description": "Cannot update status from -0- to -1-",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/LinkageStatusUpdateNotSupported",
      "severity": "Error"
    }
  ]
}
```

## Explanation

The status cannot be updated to from the current state to the desired state, because the action is not supported. Check the description of your error and ensure the change from `-0-` to `-1-` follows the intended workflow. If you believe there is an issue with your account, please reach out to [Avalara's client support network](https://help.avalara.com/Directory/Contact_Avalara).
