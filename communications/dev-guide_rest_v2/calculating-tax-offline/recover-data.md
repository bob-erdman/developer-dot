---
layout: page
title:  Chapter 6.3 - Data Recovery Using Commit/Uncommit
product: communications
doctype: comms_rest_v2_dev_guide
chapter: calculating-tax-offline
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/calculating-tax-offline/retry-or-fallback/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/calculating-tax-offline/reconcile-transactions/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/">Commit/Uncommit functionality</a> in REST v2 allows you to process a transactions, but not include the transactions in compliance reports until you are ready.  

To use <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/">Commit</a> to recover data impacted by an outage:
<ol class="dev-guide-list">
    <li>Run your transactions with a unique Document Code (<code>doc</code>), such as a GUID</li>
    <li>Rerun your transactions using a new unique Document Code (<code>doc</code>) if timeouts or other errors occur during processing</li>
    <li>Validate your data using the <a class="dev-guide-link" href="https://communications.avalara.net/AFC/Reporting/Explorer">Customer Portal Data Explorer</a></li>
    <li>Commit the final Document Code (<code>doc</code>) using the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/commit-request/">Commit endpoint</a> once all totals have been confirmed</li>
</ol>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/calculating-tax-offline/retry-or-fallback/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/calculating-tax-offline/reconcile-transactions/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>