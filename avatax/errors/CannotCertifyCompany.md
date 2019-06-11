---
layout: page
title: CannotCertifyCompany
number: 1708
categories: [AvaTax Error Codes]
disqus: 1
---

## Summary

Company cannot be certified.

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

For companies, there are several checks to ensure it is certified. One or more of the checks have failed for the company used. Here's a checklist for what will **disqualify** a company for certification:

* Any past month items contains generic tax code of P0000000.
* All the companies on the requesting account are test companies.
* No Voided/Cancelled documents in the past 30 days.
* There are less than 2 committed documents.
* Any documentCode is a generic GUID string.
* Any customerCode on document is a generic GUID string.
* No document has more than 1 documentLine.
* All of the documents have missing exemptionNo, customerUsageType, taxDateOverride or negative amount.
* Any document quantity is a negative number.
* Any document have repeated lines.
* No document has shipping charge.
* All documents have same ItemCodes, descriptions and taxCodes.
* Less than 2 addresses used across all documents.
* Whether locationCode was used in documents.
* Account with AvaGlobal subscription and no documents have VATBuyerId.
* Any document has currencyCode not being USD for accounts with AvaGlobal subscription.
* All documents have countryCode used for accounts with AvaGlobal subscription.
