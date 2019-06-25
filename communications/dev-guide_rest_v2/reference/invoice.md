---
layout: page
title:  Chapter 5.1.3 - Invoice
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/company-data/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/location/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Invoice</h3>

The <code>Invoice</code> object contains information about one or more <b>transactions</b>:

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
          The Document Code is a unique string that is used to <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/">Commit or Uncommit</a> transactions.  It is required when Commit is <code>true</code> 
          <ul class="dev-guide-list">
            <li>Max length: 150 bytes</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>cmmt</code></td>
        <td><code>[bool]</code> Commit
          <br/>
          Indicates if invoice should be committed as soon as it is processed
          <ul class="dev-guide-list">
            <li><code>true</code>: The transaction should be <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/">committed</a></li>
            <li><code>false</code>: The transaction should be <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/">uncommitted</a></li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>bill</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/"><code>[Location]</code></a> <span class="t5">required</span> Bill To Location
          <br>
          There are several ways to input location information. FOr more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Location</a>
        </td>
      </tr>
      <tr>
        <td><code>cust</code></td>
        <td><code>[int]</code> <span class="t5">required</span> Customer Type
          <br>
          <ul class="dev-guide-list">
            <li><code>0</code>: Residential</li>
            <li><code>1</code>: Business</li>
            <li><code>2</code>: Senior Citizen</li>
            <li><code>3</code>: Industrial</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>lfln</code></td>
        <td><code>[bool]</code> Lifeline
          <ul class="dev-guide-list">
            <li><code>true</code>: The customer is a Lifeline participant</li>
            <li><code>false</code>: The customer is not a Lifeline participant</li>
          </ul>
          Lifeline is a federal program that subsidizes the cost of phone and internet for eligible customers
        </td>
      </tr>
      <tr>
        <td><code>date</code></td>
        <td><code>[timestamp]</code> <span class="t5">required</span> Invoice Date
          <br>
          <i>ex.</i><code> 2009-12-01T03:00:00</code>
          <br>
          The date when the transaction took place. <b>An accurate timestamp in this field is important!</b> This affects the rules our tax engine applies when calculating taxes
          <br>
          <br>
          For example, if you submit a CalcTaxes request with a <code>date</code> of <code>7/1/2018</code>, the tax engine uses the rules that apply for your jurisdiction on <code>7/1/2018</code>. If the transaction <i>actually</i> occurred on <code>7/25/2018</code>, and the tax rate for this transaction changed after <code>7/1/2018</code>, you may receive incorrect tax information.
        </td>
      </tr>
      <tr>
        <td><code>exms</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/"><code>[Exemption]</code></a> Exemptions
          <br>
          A list of <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemptions</a> to apply to this transaction
        </td>
      </tr>
      <tr>
        <td><code>itms</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/"><code>[LineItem]</code></a> <span class="t5">required</span> Line Items
          <br>
          A list of <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">Line Items</a> to process for this transaction
          <ul class="dev-guide-list">
            <li>Limit 10,000 line items per request</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>invm</code></td>
        <td><code>[bool]</code> Invoice Mode
          <br/>
          Indicates if all line items within invoice should be processed in invoice mode
          <ul class="dev-guide-list">
            <li><code>true</code>: Line Items are part of a single invoice; caps, thresholds, tax brackets, and tiers applied per invoice as a whole</li>
            <li><code>false</code>: Line Items are unrelated; caps, thresholds, tax brackets, and tiers applied per line item individually</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>dtl</code></td>
        <td><code>[bool]</code> Return Detail
          <br/>
          Indicates if individual line item taxes should be included in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/">response</a>
          <ul class="dev-guide-list">
            <li><code>true</code>: Return Line Item level tax results</li>
            <li><code>false</code>: Do not return Line Item level tax results</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>summ</code></td>
        <td><code>[bool]</code> Return Summary
          <br/>
          Indicates if the summarized taxes for the invoice should be included in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/">response</a>
          <ul class="dev-guide-list">
            <li><code>true</code>: Return summarized tax results</li>
            <li><code>false</code>: Do not return summarized tax results</li>
          </ul>
          <br/>
          Summarized tax results are only returned when in Invoice Mode.
        </td>
      </tr>
      <tr>
        <td><code>opt</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/key-value-pair/"><code>[KeyValuePair]</code></a> Optional Fields
          <br>
          A list of <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/key-value-pair/">Optional Fields</a> to apply to this invoice
        </td>
      </tr>
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
        <td><code>bpd</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/billing-period/"><code>[BillingPeriod]</code></a> Billing Period
          <br>
          The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/billing-period/">Billing Period</a> for the invoice
        </td>
      </tr>
      <tr>
        <td><code>ccycd</code></td>
        <td><code>[string]</code> Currency Code
        <br/>
        Currency code for the invoice.  Example: use CAD for Canadian Dollar
        <ul class="dev-guide-list">
          <li>Max length: 150 bytes</li>
        </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<br>

<h4>Note</h4>
Limited to 1,000 invoices per request.

<h4>Note</h4>
These fields can be overridden on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">Line Item</a>:
<ul class="dev-guide-list">
    <li>Bill To (<code>bill</code>)</li>
    <li>Customer Type (<code>cust</code>)</li>
    <li>Lifeline (<code>lfln</code>)</li>
    <li>Invoice Date (<code>date</code>)</li>
</ul>

<h3>Example</h3>

{% highlight json %}
"inv": [
  {
    "doc": "DocumentCode12345",
    "cmmt": false,
    "bill": {
      // Location
    },
    "cust": 0,
    "lfln": false,
    "date": "2018-09-23T20:31:53.452Z",
    "exms": [
      {
        // Exemption
      }
    ],
    "itms": [
      {
        // Line Item
      }
    ],
    "invm": true,
    "dtl": true,
    "summ": false,
    "opt": [
      {
        // Key Value Pair
      }
    ],
    "acct": "Account Reference",
    "custref": "Customer Reference",
    "invn": "Invoice Number Reference",
    "bcyc": "Bill Cycle Reference",
    "bpd": {
      // Billing Period
    },
    "ccycd": "USD"
  }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/company-data/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/location/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>