---
layout: page
title: Chapter 4.3.5 - Interstate/Intrastate Determination
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-type-exemption/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-override/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The Communications REST v2 Interstate/Intrastate Determination feature allows you to apply interstate or intrastate charges without specifying either the transaction type or the service type. 

To use the Interstate/Intrastate Determination feature (pick one):
<ul class="dev-guide-list">
    <li>Transaction Type Determination: Set the transaction type (<code>tran</code>) to "-1" and a <a class="dev-guide-link" href="#tran">valid service type</a> (<code>serv</code>)</li>
    <li>Service Type Determination: Set the transaction type (<code>tran</code>) to a <a class="dev-guide-link" href="#serv">valid transaction type</a> and the service type (<code>serv</code>) to "-1"</li>
</ul>

REST v2 determines the correct interstate or intrastate transaction or service type based on the jurisdiction and Transaction/Service Pair provided.

<h3>How to use Interstate/Intrastate Determination</h3>

<h4 id="tran">Transaction Type Determination</h4>
For Transaction Type determination, you already know the <b>service type</b>, so the <b>transaction type</b> needs to be determined.  Provide a service type (<code>serv</code>) found in this table and set the transaction type (<code>tran</code>) to "-1".

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Service Type</th>
        <th>Service Type Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>TOLL</td>
      </tr>
      <tr>
        <td>2</td>
        <td>TOLL FREE</td>
      </tr>
      <tr>
        <td>3</td>
        <td>WATS</td>
      </tr>
      <tr>
        <td>4</td>
        <td>PRIVATE LINE</td>
      </tr>
      <tr>
        <td>14</td>
        <td>LATE CHARGE</td>
      </tr>
      <tr>
        <td>16</td>
        <td>900</td>
      </tr>
      <tr>
        <td>27</td>
        <td>DATA</td>
      </tr>
      <tr>
        <td>54</td>
        <td>DIRECTORY ASSISTANCE</td>
      </tr>
      <tr>
        <td>635</td>
        <td>TOLL FREE NUMBER</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
The <b>transaction type</b> is set to one of these based on the jurisdiction information and service type (<code>serv</code>):
<ul class="dev-guide-list">
    <li><code>1</code>: INTERSTATE</li>
    <li><code>2</code>: INTRASTATE</li>
</ul>
<br/>


<h4 id="serv">Service Type Determination</h4>
For Service Type Determination, you already know the <b>transaction type</b>, so the <b>service type</b> needs to be determined.  Provide a transaction type (<code>tran</code>) from in these tables and set the service type (<code>serv</code>) is to set to "-1".

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Transaction Type</th>
        <th>Transaction Type Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>61</td>
        <td>VPN</td>
      </tr>
    </tbody>
  </table>
</div>
The <b>service types</b> is set to one of these based on the jurisdiction information and transaction type (<code>tran</code>) from above:
<ul class="dev-guide-list">
    <li><code>585</code>: INTERSTATE MPLS</li>
    <li><code>586</code> INTRASTATE MPLS</li>
</ul>

Or

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Transaction Type</th>
        <th>Transaction Type Description</th>
      </tr>
    </thead>
    <tbody> 
      <tr>
        <td>19</td>
        <td>VoIP</td>
      </tr>
      <tr>
        <td>20</td>
        <td>VoIPA</td>
      </tr>
      <tr>
        <td>21</td>
        <td>PAYPHONE</td>
      </tr>
      <tr>
        <td>59</td>
        <td>VoIP NOMADIC</td>
      </tr>
    </tbody>
  </table>
</div>
The <b>service types</b> is set to one of these based on the jurisdiction information and transaction type (<code>tran</code>) from above:
<ul class="dev-guide-list">
    <li><code>49</code>: INTERSTATE USAGE</li>
    <li><code>50</code>: INTRASTATE USAGE</li>
</ul>


<h3>Transaction Type Determination Example</h3>
The Transaction Type (<code>tran</code>) is set to <code>-1</code> and is automatically determined based on the jurisdiction and Service Type (<code>serv</code>) provided.
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
      "doc": "TEST-VOIP INVOICE 2017.12.26:12.02 AVA",
      "cmmt": false,
      "bill": {
        "cnty": "San Francisco",
        "ctry": "USA",
        "int": true,
        "geo": false,
        "city": "San Francisco",
        "st": "CA",
        "zip": "94102"
      },
      "cust": 0,
      "lfln": false,
      "date": "2017-05-01T12:00:00Z",
      "itms": [
        {
          "ref": "Line Item 001: -1/4 Intra/Inter for Transaction (Intrastate Test)",
          "chg": 100,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": -1,
          "serv": 4,
          "dbt": false,
          "adj": false
        }
      ],
      "invm": true,
      "dtl": true,
      "summ": true,
      "opt": [
        {
          "key": "1",
          "val": "VoIP Sample Line Items Invoice ABC-ZZZ"
        }
      ]
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
Taxes are returned based on the <b>Intrastate</b> transaction type since San Francisco is the only jurisdiction set in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request"><code>CalcTaxes</code> request</a>.

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse1">View the Response JSON</a>
  <div id="collapse1" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json %}
{
  "inv": [
    {
      "doc": "TEST-VOIP INVOICE 2017.12.26:12.02 AVA",
      "itms": [
        {
          "ref": "Line Item 001: -1/4 Intra/Inter for Transaction (Intrastate Test)",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 100,
              "calc": 1,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "CA PUC Fee",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.003,
              "sur": true,
              "tax": 0.3,
              "lvl": 1,
              "tid": 468
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 100,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA TRS",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.005,
              "sur": true,
              "tax": 0.5,
              "lvl": 1,
              "tid": 466
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 100,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA High Cost Fund A",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0035,
              "sur": true,
              "tax": 0.35000000000000003,
              "lvl": 1,
              "tid": 60
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 100,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Universal Lifeline Telephone Service Charge",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0475,
              "sur": true,
              "tax": 4.75,
              "lvl": 1,
              "tid": 22
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 100,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA Teleconnect Fund",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0108,
              "sur": true,
              "tax": 1.08,
              "lvl": 1,
              "tid": 21
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 106.98,
              "calc": 1,
              "cat": "UTILITY USER TAXES",
              "cid": 8,
              "name": "Utility Users Tax",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 377300,
              "rate": 0.075,
              "sur": false,
              "tax": 8.0235,
              "lvl": 3,
              "tid": 16
            }
          ]
        }
      ],
      "summ": [
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 100,
          "calc": 1,
          "cat": "REGULATORY CHARGES",
          "cid": 6,
          "name": "CA PUC Fee",
          "exm": 0,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.003,
          "sur": true,
          "tax": 0.3,
          "lvl": 1,
          "tid": 468
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 100,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA TRS",
          "exm": 0,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.005,
          "sur": true,
          "tax": 0.5,
          "lvl": 1,
          "tid": 466
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 100,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA High Cost Fund A",
          "exm": 0,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0035,
          "sur": true,
          "tax": 0.35000000000000003,
          "lvl": 1,
          "tid": 60
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 100,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "Universal Lifeline Telephone Service Charge",
          "exm": 0,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0475,
          "sur": true,
          "tax": 4.75,
          "lvl": 1,
          "tid": 22
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 100,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA Teleconnect Fund",
          "exm": 0,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0108,
          "sur": true,
          "tax": 1.08,
          "lvl": 1,
          "tid": 21
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 106.98,
          "calc": 1,
          "cat": "UTILITY USER TAXES",
          "cid": 8,
          "name": "Utility Users Tax",
          "exm": 0,
          "lns": 0,
          "pcd": 377300,
          "rate": 0.075,
          "sur": false,
          "tax": 8.0235,
          "lvl": 3,
          "tid": 16
        }
      ]
    }
  ]
}
{% endhighlight %}
    </div>
  </div>
</div>

<h3>Service Type Determination Example</h3>
The Service Type (<code>serv</code>) is set to <code>-1</code> and is automatically determined based on the jurisdiction provided.

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
      "doc": "TEST-VOIP INVOICE 2017.12.26:12.02 AVA",
      "cmmt": false,
      "bill": {
        "cnty": "San Francisco",
        "ctry": "USA",
        "int": true,
        "geo": false,
        "city": "San Francisco",
        "st": "CA",
        "zip": "94102"
      },
      "cust": 0,
      "lfln": false,
      "date": "2017-05-01T12:00:00Z",
      "itms": [
        {
          "ref": "Line Item 002: 19/-1 Intra/Inter for Service (Intrastate Test)",
          "chg": 100,
          "line": 10,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": -1,
          "dbt": false,
          "adj": false
        }
      ],
      "invm": true,
      "dtl": true,
      "summ": true,
      "opt": [
        {
          "key": "1",
          "val": "VoIP Sample Line Items Invoice ABC-ZZZ"
        }
      ]
    }
  ]
}
{% endhighlight %}

<h4>Response</h4>
Taxes are returned based on the <b>Intrastate</b> service type since San Francisco is the only jurisdiction set in the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request"><code>CalcTaxes</code> request</a>.

<div class="panel-group">
  <a data-toggle="collapse" href="#collapse2">View the Response JSON</a>
  <div id="collapse2" class="panel-collapse collapse">
    <div class="panel-body">
{% highlight json%}
{
  "inv": [
    {
      "doc": "TEST-VOIP INVOICE 2017.12.26:12.02 AVA",
      "itms": [
        {
          "ref": "Line Item 002: 19/-1 Intra/Inter for Service (Intrastate Test)",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "Universal Lifeline Telephone Service Charge (VoIP)",
              "exm": 64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0475,
              "sur": true,
              "tax": 1.6672499999999997,
              "lvl": 1,
              "tid": 454
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA Teleconnect Fund (VoIP)",
              "exm": 64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0108,
              "sur": true,
              "tax": 0.37908,
              "lvl": 1,
              "tid": 452
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "CA High Cost Fund A (VoIP)",
              "exm": 64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0035,
              "sur": true,
              "tax": 0.12284999999999999,
              "lvl": 1,
              "tid": 450
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "TRS (VoIP)",
              "exm": 64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.005,
              "sur": true,
              "tax": 0.17549999999999996,
              "lvl": 1,
              "tid": 217
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 35.099999999999994,
              "calc": 1,
              "cat": "E-911 CHARGES",
              "cid": 7,
              "name": "E911 (VoIP)",
              "exm": 64.9,
              "lns": 0,
              "min": 0,
              "pcd": 253500,
              "rate": 0.0075,
              "sur": false,
              "tax": 0.26324999999999993,
              "lvl": 1,
              "tid": 161
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 64.9,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "FUSF (VoIP)",
              "exm": 35.099999999999994,
              "lns": 10,
              "min": 0,
              "pcd": 0,
              "rate": 0.174,
              "sur": false,
              "tax": 11.2926,
              "lvl": 0,
              "tid": 162
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 64.9,
              "calc": 1,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "FCC Regulatory Fee (VoIP)",
              "exm": 35.099999999999994,
              "lns": 10,
              "min": 0,
              "pcd": 0,
              "rate": 0.00302,
              "sur": false,
              "tax": 0.19599800000000003,
              "lvl": 0,
              "tid": 226
            }
          ]
        }
      ],
      "summ": [
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 35.099999999999994,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "Universal Lifeline Telephone Service Charge (VoIP)",
          "exm": 64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0475,
          "sur": true,
          "tax": 1.6672499999999997,
          "lvl": 1,
          "tid": 454
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 35.099999999999994,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA Teleconnect Fund (VoIP)",
          "exm": 64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0108,
          "sur": true,
          "tax": 0.37908,
          "lvl": 1,
          "tid": 452
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 35.099999999999994,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "CA High Cost Fund A (VoIP)",
          "exm": 64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0035,
          "sur": true,
          "tax": 0.12284999999999999,
          "lvl": 1,
          "tid": 450
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 35.099999999999994,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "TRS (VoIP)",
          "exm": 64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.005,
          "sur": true,
          "tax": 0.17549999999999996,
          "lvl": 1,
          "tid": 217
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 35.099999999999994,
          "calc": 1,
          "cat": "E-911 CHARGES",
          "cid": 7,
          "name": "E911 (VoIP)",
          "exm": 64.9,
          "lns": 0,
          "pcd": 253500,
          "rate": 0.0075,
          "sur": false,
          "tax": 0.26324999999999993,
          "lvl": 1,
          "tid": 161
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 64.9,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "FUSF (VoIP)",
          "exm": 35.099999999999994,
          "lns": 10,
          "pcd": 0,
          "rate": 0.174,
          "sur": false,
          "tax": 11.2926,
          "lvl": 0,
          "tid": 162
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 64.9,
          "calc": 1,
          "cat": "REGULATORY CHARGES",
          "cid": 6,
          "name": "FCC Regulatory Fee (VoIP)",
          "exm": 35.099999999999994,
          "lns": 10,
          "pcd": 0,
          "rate": 0.00302,
          "sur": false,
          "tax": 0.19599800000000003,
          "lvl": 0,
          "tid": 226
        }
      ]
    }
  ]
}
{% endhighlight %}
    </div>
  </div>
</div>


<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-type-exemption/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/tax-override/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>