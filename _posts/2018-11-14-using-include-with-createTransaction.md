---
layout: post
title: Using $include with CreateTransaction
description: How can you determine the rate for a line on an invoice?
date: 2018-11-14 12:00
author: Genevieve Conty
comments: true
categories: avatax
product: avatax
doctype: blog
disqus: 1
---

The CreateTransaction endpoint is one of our most used endpoints, so we’ve baked in a certain flexibility to allow our users to makes sure they get the exact information they need to continue making accurate and well-informed tax calculations. How did we do this? Our team built the `$include` parameter to help you unearth the information you need. Now the question is: how do you actually make use of this parameter?

First, let’s start with an example of an unedited response from the CreateTransaction endpoint: 

```json
code example
```

As you can see, the response can be quite lengthy, because we try to send back everything that might be useful. However, you might not need every single line of this response every time you call this endpoint. That’s exactly where the `$include` parameter comes into play. If you find you only need some of this information, you can tailor your response to fit your needs. 

<h2>So, what are the options?</h2>

Here are all 8 options for the `$include` query string:

*  Lines
*  Details
*  Summary
*  Addresses
*  SummaryOnly
*  LinesOnly
*  ForceTimeout
*  TaxDetailsByTaxType

When you build your query string, you can use any combination of the above, but be sure to separate them with commas! 

<h2>What are these options for?</h2>
These options specify what you want included in your response. The REST API can be verbose in it’s responses which is great for accuracy and understanding. However, if you find you only need a certain object to do you calculations, you can tell the api to respond with only what you need.

<h3>Lines</h3>
Each transaction can have multiple lines items detailing the various items involved. The lines object array will give you each line involved in the transaction. Each line focuses will have information like item cost, item quantity, tax codes, total tax and more. 

Here is a truncated example of the lines object array:
```json
code example
```

<h3>LinesOnly</h3>
Is everything you really need in the lines object array? Great! All you need to do is add `LinesOnly` to your `$inlcude` query string and you are all set. 

<h3>Details</h3>
The details object contains an abundance of information about your individual line items, such as the locations involved, the units of measure and the name of the tax being applied. Each line will have a details object similar to the truncated example below:
```json
code example
```

<h3>Summary</h3>
The summary object array will give you a brief, but information rich, overview of relevant tax information for your transaction. This typically will include the taxing jurisdictions involved and the total tax calculated for your transaction.

```json
code example
```

<h3>SummaryOnly</h3>
If you find all the information you really need is in the summary, you can use `SummaryOnly` to get a concise response from out API. 

<h3>Addresses</h3>
The addresses object array will contain any of the shipping locations involved. If you choose to create a transaction with `ShipFrom` and `ShipTo` addresses, your response would likely have an `addresses` array similar to the one below:
```json
code example
```

<h3>ForceTimeout</h3>
As the name implies, this option will force a time out which will simply result in an empty object `{ }`.  

<h3>TaxDetailsByTaxType</h3>
With this object array, you can expect to see things like aggregated tax, non-taxable totals, exempt tax totals and more for each tax type in the summary. Here is a quick example of the `TaxDetailsByTaxType` object array:
```json
code example
```

<h2>Want to give it a try?</h2>
On the CreateTransaction page, you can test out the `$include` feature with some sample data. For the `$include` input, put any combination of filters separated by commas and press submit. You’ll see the full output for the CreateTransaction endpoint, so you know what to expect before you test out your own code.

You can also find links to our swagger in addition to more information about the capabilities of the `CreateTransaction` endpoint. If you can’t find the answer you are looking for, don’t hesitate to comment below!