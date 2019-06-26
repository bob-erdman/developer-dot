---
layout: page
title:  Chapter 5.1.2 - Request Config
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/company-data/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Request Configuration</h3>

The <code>RequestConfig</code> object allows you to set request configuration option properties:

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
        <td><code>retnb</code></td>
        <td><code>[bool]</code> Return Non-Billable Taxes
        <br/>
        Flag indicating if non-billable taxes should be returned.  Defaults to the account-level setting if not provided.
        <ul class="dev-guide-list">
          <li><code>true</code>: Return non-billable taxes.  Setting <code>retnb</code> to <code>true</code> overrides the account-level setting</li>
          <li><code>false</code>: Don't return non-billable taxes</li>
        </ul>
        </td>
      </tr>
      <tr>
        <td><code>retext</code></td>
        <td><code>[bool]</code> Return Extended Data
        <br/>
        Flag indicating if extended tax information should be returned in the response.
        <ul class="dev-guide-list">
          <li><code>true</code>: Return the extended tax information</li>
          <li><code>false</code>: Don't return extended tax information</li>
        </ul>
        Forces Return Detail (<code>dtl</code>) to <code>true</code> on the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">invoice</a>.  The return list resulting from this configuration option may change over time as additional data elements are added.
        </td>
      </tr>
      <tr>
        <td><code>incrf</code></td>
        <td><code>[bool]</code> Return Reporting Information
        <br/>
        Flag indicating if reporting information should be returned in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/">response</a>.
        <ul class="dev-guide-list">
          <li><code>true</code>: Return the reporting information</li>
          <li><code>false</code>: Don't return the reporting information</li>
        </ul>
        The return list resulting from this configuration option may change over time as additional data elements are added. 
        </td>
      </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
"cfg": {
  "retnb": false,
  "retext": false,
  "incrf": true
}
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/company-data/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>