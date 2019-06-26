---
layout: page
title:  Chapter 5.1.15 - Invoice Result
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/error-response/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Invoice Result</h3>

The <code>InvoiceResult</code> object contains the <b>tax calculation results</b> for each invoice submitted in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/">CalcTaxes request</a>:

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
        <td><code>doc</code></td>
        <td><code>[string]</code> Document Code
        <br>
        The Document Code for the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a> 
        <ul class="dev-guide-list">
          <li>Max length: 150 bytes</li>
        </ul>
        </td>
      </tr>
      <tr>
        <td><code>itms</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item-result/"><code>[LineItemResult]</code></a> Line Item Results
        <br>
        Contains the <b>tax calculation results</b> for each <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line item</a>
        </td>
      </tr>
      <tr>
        <td><code>summ</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/summarized-tax-result/"><code>[SummarizedTax]</code></a> Summarized Taxes
        <br>
        Contains the <b>summarized taxes</b> for the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a>
        </td>
      </tr>
      <tr>
        <td><code>err</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/error-response/"><code>[Error]</code></a> Error
        <br>
        Contains information about any errors returned (as applicable)
        </td>
      </tr>
      <tr>
        <td><code>incrf</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/reporting-information/"><code>[ReportingInformation]</code></a> Reporting Information
        <br>
        Contains reporting information.  Returned when <code>incrf</code> in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/request-config/">RequestConfig</a> is set to <code>true</code>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
"inv": [
  {
    "doc": "DocumentCode12345",
    "itms": [
      {
        // Line Item Result
      }
    ],
    "summ": [
      {
        // Summarized Tax
      }
    ],
    "err": [
      {
        // Error
      }
    ],
    "incrf": {
      // Reporting Information
    }
  }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/error-response/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>