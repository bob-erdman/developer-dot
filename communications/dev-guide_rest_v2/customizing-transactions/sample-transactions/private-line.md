---
layout: page
title: Chapter 4.3.9 - Private Line
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/sau-attribute-property/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/proration/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The Private Line Split (<code>plsp</code>) key provides you with the ability to obtain taxes for a private line transaction.  Simply provide a percentage in the form of a decimal to indicate the percentage which applies to the origination (<code>from</code>) point. Any remaining charges are then applied to the termination (<code>to</code>) point.

For example:
<ul class="dev-guide-list">
    <li>A transaction has two points: Point 'A' and Point 'Z'</li>
    <li>A <code>plsp</code> of <code>0.25</code> means 25% of the taxes are attributed to Point 'A', the remaining 75% to Point 'Z'</li>
</ul>

Remove the Private Line Split (<code>plsp</code>) key from the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item"> line item</a> (<code>itms</code>) if you don't want to use the Private Line functionality.  Setting <code>plsp</code> to 0 is interpreted as a private line split of 0% for Point 'A' and 100% for Point 'Z'.

<h4>Note</h4>
Private Line functionality is not supported on a Tax Inclusive (<code>incl</code> set to <code>true</code>) <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">line item</a> (<code>itms</code>).  The following exception is thrown in the event that a <code>plsp</code> is greater than 0 while <code>incl</code> is set to <code>true</code>.  To resolve, set <code>incl</code> to <code>false</code>.

{% highlight json %}
{
  "inv": [
    {
      "itms": [
        {
          "err": [
            {
              "code": -1000,
              "msg": "Exception: The IsPrivateLine parameter is not supported for CalculateTaxInclusiveTaxes."
            }
          ]
        }
      ]
    }
  ]
}
{% endhighlight %}

<h3>Private Line Example</h3>
Point 'A' is Louisville, KY while Point 'Z' is Irving, TX.  A 50% Private Line split (<code>plsp</code>) is set, meaning that 50% of the transaction is applied to Point 'A' and the remaining 50% to Point 'Z'.

{% highlight json %}
{
  "cmpn": {
    "bscl": 0,
    "svcl": 0,
    "fclt": false,
    "frch": false,
    "reg": false
  },
  "inv": [
    {
      "doc": "INV1237A-56999",
      "cmmt": false,
      "bill": {
        "ctry": "USA",
        "int": true
      },
      "cust": 0,
      "lfln": false,
      "date": "2018-05-01T12:00:00Z",
      "itms": [
        {
          "ref": "PrivateLineTest",
          "from": {
            "ctry": "USA",
            "city": "Louisville",
            "st": "KY",
            "zip": "40201"
          },
          "to": {
            "ctry": "USA",
            "city": "Irving",
            "st": "TX",
            "zip": "75038"
          },
          "chg": 1000,
          "sale": 1,
          "plsp": 0.50,
          "tran": 1,
          "serv": 4
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
Taxes for both Point 'A' and Point 'Z' are returned.

<div class="panel-group">
  <a class="dev-guide-link" data-toggle="collapse" href="#collapse1">View the Response JSON</a>
  <div id="collapse1" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "inv": [
    {
      "doc": "INV1237A-56999",
      "itms": [
        {
          "ref": "PrivateLineTest",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 593.51,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Sales Tax",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 3727200,
              "rate": 0.0625,
              "sur": false,
              "tax": 37.094375,
              "lvl": 1,
              "tid": 1
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 1000,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Fed Universal Service Fund",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.184,
              "sur": false,
              "tax": 184,
              "lvl": 0,
              "tid": 18
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 1000,
              "calc": 1,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "FCC Regulatory Fee (Wireline)",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.00302,
              "sur": false,
              "tax": 3.02,
              "lvl": 0,
              "tid": 169
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 593.51,
              "calc": 1,
              "cat": "GROSS RECEIPTS TAXES",
              "cid": 3,
              "name": "Statutory Gross Receipts",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 1365200,
              "rate": 0.013,
              "sur": false,
              "tax": 7.71563,
              "lvl": 1,
              "tid": 14
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 593.51,
              "calc": 1,
              "cat": "SALES AND USE TAXES",
              "cid": 1,
              "name": "Sales Tax",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 1365400,
              "rate": 0.06,
              "sur": false,
              "tax": 35.6106,
              "lvl": 1,
              "tid": 1
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
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/error-response/">Error response</a></li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/sau-attribute-property/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/proration/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>