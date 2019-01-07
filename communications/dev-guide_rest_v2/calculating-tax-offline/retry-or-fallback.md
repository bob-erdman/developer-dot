---
layout: page
title:  Chapter 6.2 - Retry or Fallback
product: communications
doctype: comms_rest_v2_dev_guide
chapter: calculating-tax-offline
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/calculating-tax-offline/detect-dropped-connection/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/calculating-tax-offline/recover-data/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

After your application detects a timeout or an error, it must next make a decision whether to retry the transaction or fallback to cached tax types and tax rates.

<h3>Retry a Transaction</h3>
Retry your transaction a few times if timeouts are still being returned:
<ol class="dev-guide-list">
  <li>Retry the transaction</li>
  <li>Wait 1 second and retry the transaction</li>
  <li>Wait several seconds and retry the transaction</li>
</ol>

It's important that you don't retry so often that your attempts are mistaken as a denial-of-service attack.  Limit your retries to 5 to 10 attempts to prevent a backlog of concurrent requests and allow system time to recover.

Things to consider when retrying a transaction:
<ul class="dev-guide-list">
  <li>Some applications attempt to reuse HTTP connections. In the event that you experience a connection disruption, we suggest creating a completely new connection for the next attempt</li>
  <li>You may not know whether REST v2 received your original request if you receive a timeout. The request may be received and processed successfully by REST v2, but you do not receive the response. In this case, using the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/">Commit/Uncommit functionality</a> is helpful
  <ul class="dev-guide-list">
    <li>Set a unique Document Code (<code>doc</code>), such as a GUID, in your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a></li>
    <li>Update the Document Code (<code>doc</code>) to a new unique value if a timeout or other error is detected again</li>
    <li>Commit everything at once using the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/commit-request/">Commit endpoint</a> once all transactions contained in your bill run are successfully processed</li>
  </ul>
  </li>
</ul>

<h4>What if AFC Geo is unresponsive?</h4>
If you are using embedded geolocation (<code>geo</code> = <code>true</code> in a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">location</a> object) as part of your <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a> and AFC Geo is not responding, the entire transaction fails.  To resolve, turn embedded geolocation off (<code>geo</code> = <code>false</code>) and retry the transaction.  The AFC Tax Engine determines the taxing jurisdiction based on the address information provided.

<h5>Note</h5>
<a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/best-practices">We recommend</a> not using the embedded geolocation functionality on a regular basis since it impacts performance and can cause the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a> to fail if AFC Geo is experiencing issues.

<h3>Fall back to cached tax data</h3>
Cache tax types and tax rates daily by running a set number of unique transactions that cover your business needs.  In the event of a timeout or other type of error, fall back to these cached types and rates. The transactions that have used cached tax data need to be processed through REST v2 in order for that data to be available in the <a class="dev-guide-link" href="https://communications.avalara.net/AFC/Reporting/Explorer">Customer Portal Data Explorer</a> and for compliance reports. 
<br/><br/> 
Caching the tax data is only beneficial if your transactions are largely created the same way and can easily be identified as one of the unique transactions you ran at the beginning of the day.  Tax type and tax rates are based on a number of characteristics:
<ul class="dev-guide-list">
  <li>Jurisdiction</li>
  <li>Transaction and Service Types</li>
  <li>Invoice Date</li>
  <li>Other characteristics, such as customer type and sale type</li>
</ul>

Things to consider when falling back to cached tax data:
<ul class="dev-guide-list">
  <li>Tax types and tax rates vary by transaction/service type, jurisdiction rules, and other factors</li>
  <li>You are obligated to remit the over-collected amount if you use a cached tax rate that is higher than the actual tax rate</li>
  <li>You are obligated to remit all taxes collected in a jurisdiction even if you have an exemption or exclusion normally in place (in the event that REST v2 can't be reached and a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/client-profiles/">client profile</a> can't be applied to the transaction)</li>
</ul>

Whatever approach you select, the cardinal rule of tax auditors is what whatever amount of tax you collect, you must remit. 
<ul class="dev-guide-list">
  <li>If you accidentally over-collect tax you must still remit the amount you collect</li>
  <li>If you collect tax in a jurisdiction where you are not registered as a business, you must choose to either register your business and begin filing taxes or refund the tax collected to the customer</li>
  <li>Contact <a class="dev-guide-link" href="https://www.avalara.com/contact-us/">Avalara’s Professional Services</a> team for advice about tax over-collection policies suitable to your business - this Developer Guide is not a substitute for obtaining professional compliance advice</li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/calculating-tax-offline/detect-dropped-connection/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/calculating-tax-offline/recover-data/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>