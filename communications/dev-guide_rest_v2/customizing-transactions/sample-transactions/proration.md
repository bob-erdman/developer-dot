---
layout: page
title: Chapter 4.3.10 - Proration
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/private-line/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/transaction-information/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The Proration (<code>pror</code>) key calculates prorated taxes on a transaction that represents a partial month of service. Percentage-based taxes are prorated by way of the charge (<code>chg</code>) amount passed. However, fixed and per line taxes are subject to special prorating rules and procedures. Some tax authorities allow sellers to prorate fixed and per line taxes for partial months, but many insist on receiving the full amount. REST v2 applies these rules automatically if the pro-rating feature is used.  Just specify the percentage of the month the service was active as a decimal in the <code>pror</code> key.  

A few things to keep in mind:
<ul class="dev-guide-list">
    <li>If prorating <b>is not</b> allowed on a tax, the full amount is taxed.</li>
    <li>If prorating <b>is</b> allowed on a tax, the fixed or per line tax applicable to the service will be returned, multiplied by the percentage supplied.</li>
    <li>If the proration is being used for an adjustment credit rather than a partial charge, the ratio of the percentage applied should reflect the portion of the month in which the service was not active.</li>
    <li>Remove the Proration (<code>prop</code>) key from the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item"> line item</a> (<code>itms</code>) if you don't want to use Proration functionality.  Setting <code>prop</code> to 0 means 0% proration for pro-rateable fixed taxes.</li>
</ul>

<h4>Note</h4>
Proration functionality is not supported on a Tax Inclusive (<code>incl</code> set to <code>true</code>) <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line item</a> (<code>itms</code>).  

<h3>Proration Example</h3>
Proration (<code>pror</code>) is set to 50% for 10 lines (<code>line</code>).

{% highlight json %}
{
  "cmpn": {
    "bscl": 1,
    "svcl": 0,
    "fclt": false,
    "frch": false,
    "reg": false
  },
  "inv": [
    {
      "bill": {
        "pcd": 534300
      },
      "cust": 1,
      "lfln": false,
      "date": "2018-05-15T12:00:00Z",
      "itms": [
        {
          "ref": "ProrationTest",
          "chg": 0,
          "line": 10,
          "sale": 1,
          "pror": 0.50,
          "tran": 7,
          "serv": 42
        }
      ],
      "invm": false,
      "dtl": true,
      "summ": false
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
The prorated tax amounts (<code>tax</code>) are seen on Tax Type IDs (<code>tid</code>) 6 and 23.

<div class="panel-group">
  <a class="dev-guide-link" data-toggle="collapse" href="#collapse1">View the Response JSON</a>
  <div id="collapse1" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "inv": [
    {
      "itms": [
        {
          "ref": "ProrationTest",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 4,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Telecom Relay Surcharge",
              "exm": 0,
              "lns": 10,
              "min": 0,
              "pcd": 534100,
              "rate": 0.1,
              "sur": true,
              "tax": 0.5,
              "lvl": 1,
              "tid": 23
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 0,
              "calc": 4,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "E-911",
              "exm": 0,
              "lns": 10,
              "min": 0,
              "pcd": 534200,
              "rate": 0.4,
              "sur": false,
              "tax": 4,
              "lvl": 1,
              "tid": 10
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 0.5,
              "calc": 1,
              "cat": "EXCISE TAXES",
              "cid": 4,
              "name": "Federal Excise Tax",
              "exm": 0,
              "lns": 10,
              "min": 0,
              "pcd": 0,
              "rate": 0.03,
              "sur": false,
              "tax": 0.015,
              "lvl": 0,
              "tid": 6
            }
          ]
        }
      ]
    }
  ]
}
{% endhighlight %}
    </div>
  </div>
</div>

<h3>See Also</h3>
<h4>Input Objects</h4>
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">Line item</a></li>
</ul>

<h4>Output Objects</h4>
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/"><code>CalcTaxes</code> response</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/detailed-tax-result/">Detailed tax results</a></li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/private-line/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/transaction-information/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>