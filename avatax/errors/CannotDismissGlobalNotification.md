---
layout: page
title: CannotDismissGlobalNotification
number: 1706
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

This notification cannot be dismissed because it is a global notification.

## Example

```json
{
  "code": "CannotDismissGlobalNotification",
  "target": "Unknown",
  "details": [
    {
      "code": "CannotDismissGlobalNotification",
      "number": 1706,
      "message": "This is a global notification and cannot be dismissed.",
      "description": "Notification -0- is a global notification which is set to expire automatically.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/CannotDismissGlobalNotification",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Global notification cannot be dismissed. The notification name and type can be found at position `-0-` of the error's description (see example error above).
