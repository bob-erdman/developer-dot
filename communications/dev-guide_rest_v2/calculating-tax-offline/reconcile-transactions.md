---
layout: page
title:  Chapter 6.4 - Reconcile Your Transactions
product: communications
doctype: comms_rest_v2_dev_guide
chapter: calculating-tax-offline
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/calculating-tax-offline/recover-data/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>

<h3>Reconcile Transactions</h3>
If you used a fallback tax type and tax rate for a transaction, you must reconcile the transaction after your application comes back online. Temporary transactions such as uncommited tax estimates do not need to be reconciled.  Send all transactions that used cache tax data to REST v2 so that they are available in the <a class="dev-guide-link" href="https://communications.avalara.net/AFC/Reporting/Explorer">Customer Portal Data Explorer</a> and for compliance reports.

<h3>Duplicate Transactions</h3>
Review all transactions processed during the time of the outage to confirm that a transaction is only accounted for once.  The transactions and related tax data can be reconciled by reviewing reports and tax data using the <a class="dev-guide-link" href="https://communications.avalara.net/AFC/Reporting/Explorer">Customer Portal Data Explorer</a>.

When a transaction is included more times than expected:
<ul class="dev-guide-list">
  <li>Use the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/commit-request/">Commit endpoint</a> to uncommit the duplicate Document Code (<code>doc</code>) and commit only the final Document Code</li>
  <li>Reprocess duplicate transactions using a new unique Document Code (<code>doc</code>) and <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/commit-uncommit/commit-request/">commit</a> this final Document Code</li>
  <li>Run <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/adjustment/">adjustment transactions</a> (<code>adj</code> = <code>true</code>) to negate the duplicate amounts</li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/calculating-tax-offline/recover-data/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>