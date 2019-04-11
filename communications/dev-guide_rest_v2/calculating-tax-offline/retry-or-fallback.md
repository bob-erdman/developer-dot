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

After your application detects a timeout or an error, it must next make a decision whether to retry the transaction immediately or wait before retrying.

<h3 id="timeout">Set the Timeout Setting</h3>
Set your timeout setting appropriately.  Run a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/simple-request/">single line item request</a> and record the response time.  Add 2 to 3 seconds to the response time to get a recommended client-side Timeout Setting value.  Scale the timeout setting value accordingly for transactions containing <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/multi-line-request/">multiple line items</a>.

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

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/calculating-tax-offline/geocode-offline/">Geocode Offline</a>.

<h5>Note</h5>
<a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/best-practices">We recommend</a> not using the embedded geolocation functionality on a regular basis since it impacts performance and can cause the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a> to fail if AFC Geo is experiencing issues.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/calculating-tax-offline/detect-dropped-connection/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/calculating-tax-offline/recover-data/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>