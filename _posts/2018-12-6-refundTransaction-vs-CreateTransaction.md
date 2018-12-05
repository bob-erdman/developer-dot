---
layout: post
title: RefundTransaction vs ReturnInvoice
description: When to use refundTransaction endpoint vs returnInvoice type with createTransaction endpoint
date: 2018-12-06 12:00
author: Genevieve Conty
comments: true
categories: avatax
product: [avatax, how to]
doctype: blog
disqus: 1
---

<h2>When you find you need to refund a transaction, you have two options:</h2>
* Use the RefundTransaction API endpoint
* Use the CreateTransaction API endpoint with `type = ReturnInvoice`

What’s the difference? The RefundTransaction endpoint is a shortcut that requires a few inputs so you can make refunds quick and easy. On the other hand, CreateTransaction can still be useful in situations where refunds are especially complex, like when you want to refund partial quantities or partial lines. 

<h2>When do you use Refund Transaction Endpoint?</h2>

For most refunds, the RefundTransaction endpoint can do everything you need. The endpoint sets up a certain amount of automation for creating a [return invoice](https://developer.avalara.com/api-reference/avatax/rest/v2/models/enums/DocumentType/#comment-3475229272). While the CreateTransaction endpoint can also create return invoices, it requires more user input to do so. The RefundTransaction endpoint was made to help our users get the task done with less hassle. 

The [RefundTransaction endpoint](https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Transactions/RefundTransaction/#comment-3895519974) is ideal for situations where you need to:
* Issue a full refund
* Issue a partial refund
* Specify a specific line to refund
* Ensure the refunded amount matches the original transaction regardless of any settings or configuration changes

To fully utilize the versatility of the endpoint, check out the options and examples below. 

<h2>How do you use the RefundTransaction Endpoint?</h2>

Below is an example of a request for the RefundTransaction:
```json
{
  "refundTransactionCode": "a5bc33c0-76c2-479a-a4c2-f5b3403c9692",
  "refundDate": "2018-10-23",
  "refundType": "Full",
  "referenceCode": "Refund for a committed transaction"
}
```
It’s a straight forward [RefundTransactionModel](https://developer.avalara.com/api-reference/avatax/rest/v2/models/RefundTransactionModel/#comment-3838867467) with a transaction code and date. The reference code is simply a user generated message for your records. However, the `refundType` is key to utilizing the endpoint’s flexibility. You can have several different types of refunds: 

* `Full` refunds the full amount of the transaction
* `TaxOnly` only refunds the calculated tax. This is great for cases when customers give you a tax exemption certificate after the sale.
* `Percentage` allows you to refund a certain percentage of your transaction.
* `Partial` will allow you to refund only certain lines of the transaction.


The  `refundType = Percentage` request also uses another input called `refundPercentage` where the user can dictate the correct amount to return. 
```json
{
  "refundTransactionCode": "a5bc33c0-76c2-479a-a4c2-f5b3403c9692",
  "refundDate": "2018-10-23",
  "refundType": “Percentage”,
  “refundPercentage”: 25,
  "referenceCode": "Refund for a committed transaction"
}
```

Checkout full example with `refundType = Partial` below. Notice that the the lines that need to be refunded are specified with the  `refundLines` input using their line numbers. In this case, lines 2 and 7 will be refunded on the transaction.
```json
{
  "refundTransactionCode": "a5bc33c0-76c2-479a-a4c2-f5b3403c9692",
  "refundDate": "2018-10-23",
  "refundType": “Partial”,
  “refundLines”: [“2”],
  "referenceCode": "Refund for a committed transaction"
}
```

In response to the Partial example, the API would return a response similar to the truncated one below:
```json
{
  "id": 0123456789,
  "code": "df2ad34a-7c56-4705-abaf-3d11c1dbc4ca",
  "companyId": 1234567,
  "date": "2018-12-05",
  "status": "Committed",
  "type": "ReturnInvoice",
  "currencyCode": "USD",
  "customerVendorCode": "1234",
  "customerCode": "1234",
  "referenceCode": "Refund for a committed transaction",
  "totalAmount": -1234,
  "totalTax": -92.56,
  "totalTaxable": -1234,
  "totalTaxCalculated": -92.56,
  "region": "NC",
  "country": "US",
  "exchangeRateEffectiveDate": "2018-12-05",
  "exchangeRate": 1,
  [...]
  "lines": [
    {
      "id": 19483081973,
      "transactionId": 8454818665,
      "lineNumber": "2",
      "destinationAddressId": 15539135659,
      "originAddressId": 15539135659,
      "isItemTaxable": true,
      "isSSTP": true,
      "itemCode": "234",
      "lineAmount": -1234,
      "quantity": 1,
      "reportingDate": "2018-12-05",
      "sourcing": "Destination",
      "tax": -92.56,
      "taxableAmount": -1234,
      "taxCalculated": -92.56,
      "taxCode": "P0000000",
      "taxCodeId": 4316,
      "taxDate": "2018-12-05",
      "taxOverrideType": "TaxAmount",
      "taxOverrideAmount": -92.56,
      "taxOverrideReason": "Refund request on 2018-12-05",
      [...]
    }
  ],
  "addresses": [...],
  "locationTypes": [...],
  "summary": [
    {
      "country": "US",
      "region": "NC",
      "jurisType": "State",
      "jurisCode": "37",
      "jurisName": "NORTH CAROLINA",
      "taxAuthorityType": 45,
      "taxType": "Sales",
      "taxName": "NC STATE TAX",
      "rateType": "General",
      "taxable": -1234,
      "rate": 0.0475,
      "tax": -58.62,
      "taxCalculated": -58.62,
      "nonTaxable": 0,
    },
    {
      "country": "US",
      "region": "NC",
      "jurisType": "County",
      "jurisCode": "135",
      "jurisName": "ORANGE",
      "taxAuthorityType": 45,
      "stateAssignedNo": "68",
      "taxType": "Sales",
      "taxName": "NC COUNTY TAX",
      "rateType": "General",
      "taxable": -1234,
      "rate": 0.0225,
      "tax": -27.77,
      "taxCalculated": -27.77,
      "nonTaxable": 0,
    },
    {
      "country": "US",
      "region": "NC",
      "jurisType": "Special",
      "jurisCode": "1237135001",
      "jurisName": "ORANGE CO TR",
      "taxAuthorityType": 45,
      "stateAssignedNo": "68",
      "taxType": "Sales",
      "taxName": "NC SPECIAL TAX",
      "rateType": "General",
      "taxable": -1234,
      "rate": 0.005,
      "tax": -6.17,
      "taxCalculated": -6.17,
      "nonTaxable": 0,
    }
  ],
}
```

<h2>Conclusion</h2>
As you can see, the RefundTransaction endpoint is robust and easy to use. For most situations, this endpoint is flexible enough to provide what you need for your refund. However, for those especially nuanced scenarios, CreateTransaction gives you access to all the bells and whistles so you can cater to you niche users and edge cases. 

If you find you need more information about this endpoint, comment below or checkout our responsive [community forums](https://community.avalara.com/avalara/category_sets/developers). 