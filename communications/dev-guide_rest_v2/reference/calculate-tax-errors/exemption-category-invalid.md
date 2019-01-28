---
layout: page
title:  Exemption Error - Bad data in exemption - Category value must be in the range 0 to 13
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>

<h3>Error Description</h3>
The Category field (<code>cat</code>) is set to an invalid enumerator in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemption</a> (<code>exms</code>).

<h3>Example</h3>
{% highlight json %}
{
  "err": [
    {
      "code": -2000,
      "msg": "Exemption Error - {\"frc\":true,\"loc\":{\"ctry\":\"USA\",\"st\":\"NC\",\"zip\":\"27701\"},\"tpe\":1,\"lvl\":200,\"cat\":200,\"dom\":0,\"scp\":0,\"exnb\":true} - Bad data in exemption: Category value must be in the range 0 to 13."
    }
  ]
}
{% endhighlight %}

<h3>How to Resolve</h3>
Ensure that Category (<code>cat</code>) in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemption</a> (<code>exms</code>) is set to a valid selection:
<ul class="dev-guide-list">
  <li><code>0</code>: No Category Description</li>
  <li><code>1</code>: Sales and Use Taxes</li>
  <li><code>2</code>: Business Taxes</li>
  <li><code>3</code>: Gross Receipts Taxes</li>
  <li><code>4</code>: Excise Taxes</li>
  <li><code>5</code>: Connectivity Charges</li>
  <li><code>6</code>: Regulatory Charges</li>
  <li><code>7</code>: E-911 Charges</li>
  <li><code>8</code>: Utility User Taxes</li>
  <li><code>9</code>: Right of Way Fees</li>
  <li><code>10</code>: Communications Services Tax</li>
  <li><code>11</code>: Cable Regulatory Fees</li>
  <li><code>12</code>: Reserved</li>
  <li><code>13</code>: Value Added Taxes</li>
</ul>

For more information, see <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/exemption/">Exemption</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>