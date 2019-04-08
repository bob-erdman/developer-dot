---
layout: page
title:  Chapter 5.1.1 - CalcTaxes Request
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/company-data/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>The CalcTaxes Request</h3>

<code>CalcTaxesRequest</code> supports a list of invoices and override options. Actual limit varies depending on message size and your timeout values, but the standard recommendation is to process no more than 1,000 entries per request.

At the highest level, a <code>CalcTaxes</code> request is a JSON object comprised of the following:

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
        <td><code>cmpn</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/company-data/"><code>[CompanyData]</code></a> Company Data
        <br>
        Contains information about <b>your</b> company or the Seller</td>
      </tr>
      <tr>
        <td><code>inv</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/"><code>[Invoice]</code></a> Invoice
        <br/>
        Contains information about the <b>transaction</b>, including a list of line items to be taxed.  
        <ul class="dev-guide-list">
          <li>Limit 1,000 invoices per request</li>
        </ul>
        </td>
      </tr>
      <tr>
        <td><code>ovr</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-override/"><code>[TaxOverride]</code></a> Tax Override
        <br/>
        Contains information about <b>tax overrides</b> you want to <a class="dev-guide-link" href="#note">apply to the transaction</a></td>
      </tr>
      <tr>
        <td><code>sovr</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/safe-harbor-override/"><code>[SafeHarborOverride]</code></a> Safe Harbor Override
        <br/>
        Contains information about <b>safe harbor overrides</b> you want to <a class="dev-guide-link" href="#note">apply to the transaction</a></td>
      </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
{
  "cmpn": {
    // Company Data 
  },
  "inv": [
    {
      // Invoice
    }
  ],
  "ovr": [
    {
      // Override
    }
  ],
  "sovr": [
    {
      // Safe Harbor Override
    }
  ]
}
{% endhighlight %}

<h4>Note</h4>
We recommend using a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/client-profiles/">client profile</a> with an override file or configuration update included were possible.  Using a client profile results in better performance from the Tax Engine because your override settings are cached <i>before</i> tax calculation begins.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/company-data/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>