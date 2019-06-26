---
layout: page
title:  Chapter 5.1.20 - Reporting Information
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/summarized-tax-result/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/commit-request/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Reporting Information</h3>

The <code>ReportingInformation</code> object contains optional reporting information that is only returned when <code>incrf</code> in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/request-config/">RequestConfig</a> is set to <code>true</code>:

<div class="mobile-table">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Key</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>acct</code></td>
                <td><code>[string]</code> Account Reference
                <br/>
                Account Reference field for use in reporting
                <ul class="dev-guide-list">
                    <li>Max length: 150 bytes</li>
                </ul>
                </td>
            </tr>
            <tr>
                <td><code>custref</code></td>
                <td><code>[string]</code> Customer Reference
                <br/>
                Customer Reference field for use in reporting
                <ul class="dev-guide-list">
                    <li>Max length: 150 bytes</li>
                </ul>
                </td>
            </tr>
            <tr>
                <td><code>invn</code></td>
                <td><code>[string]</code> Invoice Number Reference
                <br/>
                Invoice Number Reference field for use in reporting
                <ul class="dev-guide-list">
                    <li>Max length: 150 bytes</li>
                </ul>
                </td>
            </tr>
            <tr>
                <td><code>bcyc</code></td>
                <td><code>[string]</code> Bill Cycle Reference
                <br/>
                Bill Cycle Reference field for use in reporting
                <ul class="dev-guide-list">
                    <li>Max length: 150 bytes</li>
                </ul>
                </td>
            </tr>
            <tr>
                <td><code>ccycd</code></td>
                <td><code>[string]</code> Currency Code
                <br/>
                Currency code for the invoice
                <ul class="dev-guide-list">
                    <li>Max length: 150 bytes</li>
                </ul>
                </td>
            </tr>
            <tr>
                <td><code>ccydesc</code></td>
                <td><code>[string]</code> Currency Description
                <br/>
                Currency description
                <ul class="dev-guide-list">
                    <li>Max length: 150 bytes</li>
                </ul>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
"incrf": {
    "acct": "Account Reference",
    "custref": "Customer Reference",
    "invn": "Invoice Number Reference",
    "bcyc": "Bill Cycle Reference",
    "ccycd": "USD",
    "ccydesc": "United States Dollar"
}

{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/summarized-tax-result/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/commit-request/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>