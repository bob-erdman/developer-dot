---
layout: page
title:  Chapter 5.1.7 - Billing Period
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/line-item/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/tax-override/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Billing Period</h3>

The <code>BillingPeriod</code> object allows the user to specify the billing period for the invoice.

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
        <td><code>month</code></td>
        <td><code>[int]</code> Month
        <br/>
        Billing Period month
        </td>
      </tr>
      <tr>
        <td><code>year</code></td>
        <td><code>[int]</code> Year
        <br/>
        Billing Period year
        </td>
      </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
"bpd": {
  "month": 06,
  "year": 2019
}
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/line-item/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/tax-override/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>