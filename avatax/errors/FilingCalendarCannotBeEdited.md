---
layout: page
title: FilingCalendarCannotBeEdited
number: 904
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The filing calander cannot be edited.

## Example

```json
{
  "code": "FilingCalendarCannotBeEdited",
  "target": "Unknown",
  "details": [
    {
      "code": "FilingCalendarCannotBeEdited",
      "number": 904,
      "message": "Unable to Edit this filing calendar",
      "description": "There is a current approved worksheet for this filing calendar.  Filing calendars cannot be edited with an approved worksheet associated with it.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/FilingCalendarCannotBeEdited",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Worksheets are generated monthly and approved between the 5th and the 10th. For monthly returns, the worksheet will be approved monthly. Quartly returns' worksheets will stay in a `pending approval` state until the quarter expires. 

Once the worksheet approval occurs, the filing calander cannot be edited or adjusted. For more information about filing calendar actions, look at the [Api Reference for Filing calendars](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/FilingCalendars/).
