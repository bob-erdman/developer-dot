---
layout: post
title: AvaTax API 19.1 Patch Notes
description: Release Notes for the December 2018 update to the AvaTax API
relevantapimethods: ListTaxCodes, BuildTaxContentFile, BuildTaxContentFileForLocation
date: 2019-01-15 17:00
author: Qijing Yu
comments: true
categories: [avatax, patch notes]
product: blog
doctype: blog
disqus: 1
---

This article is about the January 2019 monthly update to the AvaTax API.

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
            <td>2019-01-21</td>
        </tr>
        <tr>
            <td>Production</td>
            <td><a href="https://rest.avatax.com">https://rest.avatax.com</a></td>
            <td>2019-01-30</td>
        </tr>
    </table>
</div>

<h3>Sandbox Testing Window</h3>

The AvaTax release schedule includes a preview period where the latest software is available for integration testing in the [AvaTax Sandbox Environment](https://sandbox-rest.avatax.com) two weeks before launching to production. If your engineering team would like a sandbox account for integration testing purposes, please contact your account manager or [open a support ticket](https://help.avalara.com/Directory/Contact_Avalara/Submit_a_Case).

<h3>AVATAXCODE as a classification system</h3>

In addition to globally recognized classification systems, as TARIC, HTS, etc., Avalara maintains our own classification system, called AVATAXCODE. If you have used our [ListTaxCodes](/api-reference/avatax/rest/v2/methods/Definitions/ListTaxCodes) API, you must be familiar with it. In this new release, you will notice this system be presented as one of the classification systems by our <b>ListProductClassificationSystems</b> API.

<h3>New TaxSubTypes</h3>

A few new Lodging TaxSubTypes are published in this release:

<ul class="normal">
    <li>Casino</li>
    <li>CulturalCenter</li>
    <li>Exhibition</li>
    <li>Exposition</li>
    <li>NeighborhoodImprovement</li>
    <li>Resort</li>
    <li>SportsFacilities</li>
</ul>

<h3>Other Fixes and Improvements</h3>

<ul class="normal">
    <li>Fix Onboarding API and CreateTransaction API unhandled errors</li>
    <li>Publish enum integer values into Swagger.json file</li>
    <li>Improve call efficiency for CommitTransaction API</li>
    <li>Enforce EcmsSstCertsRequired to true for SST users</li>
    <li>Fix an error in fetching deleted objects</li>
</ul>
