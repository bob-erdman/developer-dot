---
layout: post
title: AvaTax API 18.12 Patch Notes
description: Release Notes for the December 2018 update to the AvaTax API
relevantapimethods: ListTaxCodes, BuildTaxContentFile, BuildTaxContentFileForLocation
date: 2018-12-13 16:00
author: Qijing Yu
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the December 2018 monthly update to the AvaTax API.

<div class="mobile-table">
    <table class="styled-table">
        <tr>
            <th>Environment</th>
            <th>URL</th>
            <th>Release Date</th>
        </tr>
        <tr>
            <td>Sandbox</td>
            <td><a href="https://sandbox-rest.avatax.com">https://sandbox-rest.avatax.com</a></td>
            <td>2018-12-17</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2019-01-07</td>
        </tr>
    </table>
</div>

<h3>Sandbox Testing Window</h3>

The AvaTax release schedule includes a preview period where the latest software is available for integration testing in the [AvaTax Sandbox Environment](https://sandbox-rest.avatax.com) two weeks before launching to production. If your engineering team would like a sandbox account for integration testing purposes, please contact your account manager or [open a support ticket](https://help.avalara.com/Directory/Contact_Avalara/Submit_a_Case).

<h3>Extended configurations for Items</h3>

Parameters were used to be only supported in transactions, e.g., in order to specify attributes of a sold item, those attributes were used to be passed when creating a transaction. We are now allowing parameters be saved together with items, so that we you create a transaction with the saved item, pre-configured parameters will be applied to your transaction automatically.

Classification information can also be configured for items now. You can tag an item into different classification systems worldwide, with the recognized code for your item in the system.

<h3>Definition APIs in supporting configuring Item</h3>

We are providing a suite of definition APIs in supporting you configuring your advanced item. These APIs include:

[GetParametersDefinitionByCompanyItem](/api-reference/avatax/rest/v2/methods/Definitions/GetParametersDefinitionByCompanyItem) provides parameters recommended be configured for your item.
[GetProductSystems](/api-reference/avatax/rest/v2/methods/Definitions/GetProductSystems) provides all classification systems available worldwide.
[GetProductsBySystem](/api-reference/avatax/rest/v2/methods/Definitions/GetProductsBySystem) provides all recognized codes and their description in a system.
[GetTaxTypes](api-reference/avatax/rest/v2/methods/Definitions/GetTaxTypes) provides tax type configuration tuples when creating your custom tax rule.
[GetRateTypes](api-reference/avatax/rest/v2/methods/Definitions/GetRateTypes) provides rate types configurable for a tax type when creating your custom tax rule.

<h3>Swagger loading time is improved</h3>

We improved Swagger loading time by pre-compiling the swagger.json file and cached it in memory.

<h3>Other Fixes and Improvements</h3>

<ul class="normal">
    <li>Enhance error code handling for Onboarding requests</li>
    <li>Improve error messages for the postal code rate file API</li>
    <li>Improve error message from CreateTransaction and SettleTransaction</li>
    <li>Fix TaxContent API behavior for certain county/country jurisdictions</li>
    <li>Fix issue where parameters listed in CreateTransaction broke if separated by a space</li>
    <li>Fix issue where filtering by date range of 1900-01-01 results in an unhandled error</li>
    <li>Fix unhandled exception in CommitTransaction and UncommitTransaction</li>
</ul>
