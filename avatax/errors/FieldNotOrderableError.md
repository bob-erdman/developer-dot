---
layout: page
title: FieldNotOrderableError
number: 1411
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

The field you have tried to sort cannot be organized in the desired manner. 

## Example

```json
{
  "code": "FieldNotOrderableError",
  "target": "Unknown",
  "details": [
    {
      "code": "FieldNotOrderableError",
      "number": 1411,
      "message": "The field '-0-' in the query '-1-' is not orderable.",
      "description": "The field '-0-' in the query '-1-' is not orderable.",
      "faultCode": "Client",
      "helpLink": "http://developer.avalara.com/avatax/errors/FieldNotOrderableError",
      "severity": "Error"
    }
  ]
}
```

## Explanation

Check the query you sent with your REST call. It is possible a field you've sent with your query is not eligible for ordering or sorting. For more information, check the [documentation for your endpoint here](https://developer.avalara.com/api-reference/avatax/rest/v2/) or consult [REST's filtering documenation](https://developer.avalara.com/avatax/filtering-in-rest/).  
