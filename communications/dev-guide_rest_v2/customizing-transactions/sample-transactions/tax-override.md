---
layout: page
title: Chapter 4.3.6 - Tax Override
product: communications
doctype: comms_rest_v2_dev_guide
chapter: customizing-transactions
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/inter-intrastate/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/safe-harbor-override/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The Communications REST v2 <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-override/">Tax Override</a> object (<code>ovr</code>) allows you to change the rate of a tax in the AFC tax engine within the context of a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a>.

<h4 id="note">Note</h4>
We recommend using a <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/client-profiles/">client profile</a> with a custom override file applied even though the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a> gives you the flexibility to input Override information for each transaction. This results in better performance from the AFC Tax Engine because your override settings are cached <i>before</i> tax calculation begins.

<h3>Tax Override Fields</h3>
<a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-override/">Tax Override</a> fields used for overriding a tax type rate:
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Name</th>
        <th>Definition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>loc</code></td>
        <td>Location</td>
        <td>Override location information
          <br>
          There are several ways to input location information. See the <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Location</a> for more information</td>
      </tr>
      <tr>
        <td><code>scp</code></td>
        <td><a class="dev-guide-link" href="#scope">Scope</a></td>
        <td>Scope to which the override is applied:  Country, State, County, or City</td>
      </tr>
      <tr>
        <td><code>tid</code></td>
        <td>Tax Type ID</td>
        <td>Tax Type to override.  A list of Tax Type IDs is available in the <a class ="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints"><code>/api/v2/afc/taxtype/{taxType}</code> endpoint</a>
        </td>
      </tr>
      <tr>
        <td><code>lvl</code></td>
        <td>Tax Level ID</td>
        <td>Tax Level to override
          <br/>
          <ul class="dev-guide-list">
            <li><code>0</code>: Federal</li>
            <li><code>1</code>: State</li>
            <li><code>2</code>: County</li>
            <li><code>3</code>: City</li>
          </ul> 
        </td>
      </tr>
      <tr>
        <td><code>lvlExm</code></td>
        <td>Level Exemptible</td>
        <td>Indicates if the tax can be exempted using level exemptions
        <br/>
          <ul class="dev-guide-list">
            <li><code>true</code>: Level Exemptible</li>
            <li><code>false</code>: Not Level Exemptible</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>brkt</code></td>
        <td><a class="dev-guide-link" href="#brkt">Tax Bracket</a></td>
        <td>List of <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-bracket/">tax brackets</a> for the override</td>
      </tr>
    </tbody>
  </table>
</div>

<h4 id="scope">Scope</h4>
Scope (<code>scp</code>) defines the tax levels in which the taxes will be considered as candidates for override.  The field is a combination of one or more of these values (add the appropriate values together):
<ul class="dev-guide-list">
    <li><code>128</code>: Federal</li>
    <li><code>256</code>: State</li>
    <li><code>512</code>: County</li>
    <li><code>1024</code>: Local</li>
</ul>
For example: 
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Scope</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>1920</td>
            <td>All (Federal + State + County + Local)</td>
        </tr>
        <tr>
            <td>1792</td>
            <td>State + County + Local</td>
        </tr>
        <tr>
            <td>384</td>
            <td>Federal + State</td>
        </tr>
        <tr>
            <td>128</td>
            <td>Federal</td>
        </tr>
    </tbody>
  </table>
</div>
<br/>

<h4 id="brkt">Tax Bracket</h4>
<a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-bracket/">Tax Bracket</a> sets the rate and bracket information for the override.
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Name</th>
        <th>Definition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>rate</code></td>
        <td>Tax Rate</td>
        <td>Tax rate for this tax bracket
          <br/>
          <ul class="dev-guide-list">
            <li>Value cannot be negative</li>
            <li>Value must be between 0 and 1 for rated (percentage) taxes</li>
            <li>Value may be greater than 1 for per-line or fixed rate taxes</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>rate</code></td>
        <td>Max Base</td>
        <td>The maximum base that this rate applies to
          <br/>
          <ul class="dev-guide-list">
            <li>Set Max Base to the max amount for the bracket if applicable</li>
            <li>Use <code>2147483647</code> for "unlimited" or if the tax does not use brackets</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Tax Override Example</h3>
This request contains these overrides:
<ol class="dev-guide-list">
  <li>Tax Type (<code>tid</code>) <b>162</b> is overridden to a <b>0</b> rate (<code>rate</code> within <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-bracket/">tax bracket</a> (<code>brkt</code>)) for <b>all tax brackets</b> (<code>max</code> within <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-bracket/">tax bracket</a> (<code>brkt</code>) set to the "unlimited" value (<code>2147483647</code>)) for <b>all jurisdictions</b> within the USA (<code>ctry</code> within <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">location</a> (<code>loc</code>))</li>
  <li>Tax Type (<code>tid</code>) <b>163</b> is overridden to a <b>0.195</b> rate (<code>rate</code> within <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-bracket/">tax bracket</a> (<code>brkt</code>)) for <b>all tax brackets</b> (<code>max</code> within <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-bracket/">tax bracket</a> (<code>brkt</code>) set to the "unlimited" value (<code>2147483647</code>)) for <b>all jurisdictions</b> within the USA (<code>ctry</code> within <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">location</a> (<code>loc</code>))</li>
</ol>

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
      "doc": "TEST-VOIP RATE OVERRIDE INVOICE 2018.05.01:12.00 AVA",
      "cmmt": false,
      "bill": {
        "cnty": "New York",
        "ctry": "USA",
        "int": true,
        "geo": false,
        "city": "New York",
        "st": "NY",
        "zip": "10001"
      },
      "cust": 0,
      "lfln": false,
      "date": "2018-05-01T12:00:00Z",
      "itms": [
        {
          "ref": "Line Item 001 - VoIP/Interstate Usage",
          "chg": 100,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 49,
          "dbt": false,
          "adj": false
        },
        {
          "ref": "Line Item 002 - VoIP/International Usage",
          "chg": 100,
          "line": 0,
          "sale": 1,
          "incl": false,
          "tran": 19,
          "serv": 51,
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
          "val": "VoIP Sample Rate Override - Remove 162 and add 163"
        }
      ]
    }
  ],
  "ovr": [
    {
      "loc": {
        "ctry": "USA"
      },
      "scp": 0,
      "tid": 162,
      "lvl": 0,
      "lvlExm": true,
      "brkt": [
        {
          "rate": 0,
          "max": 2147483647
        }
      ]
    },
    {
      "loc": {
        "ctry": "USA"
      },
      "scp": 0,
      "tid": 163,
      "lvl": 0,
      "lvlExm": true,
      "brkt": [
        {
          "rate": 0.195,
          "max": 2147483647
        }
      ]
    }
  ]
 }
 {% endhighlight %}

 <h4>Response</h4>
 Tax Type (<code>tid</code>) 163 uses the overridden rate (<code>rate</code>) of 0.195 for all line items (<code>txs</code>) and the summarized taxes (<code>summ</code>).  Tax Type 162 is not returned as a tax for this transaction since the rate has been overridden to 0.

 <div class="panel-group">
  <a data-toggle="collapse" href="#collapse1">View the Response JSON</a>
  <div id="collapse1" class="panel-collapse collapse">
    <div class="panel-body">
 {% highlight json %}
 {
  "inv": [
    {
      "doc": "TEST-VOIP RATE OVERRIDE INVOICE 2018.05.01:12.00 AVA",
      "itms": [
        {
          "ref": "Line Item 001 - VoIP/Interstate Usage",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 123.55782948940758,
              "calc": 1,
              "cat": "EXCISE TAXES",
              "cid": 4,
              "name": "NY MCTD 186c",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 2604000,
              "rate": 0.00595,
              "sur": true,
              "tax": 0.7351690854619752,
              "lvl": 2,
              "tid": 27
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 123.55794753937319,
              "calc": 1,
              "cat": "EXCISE TAXES",
              "cid": 4,
              "name": "Excise Tax",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 2502500,
              "rate": 0.025,
              "sur": true,
              "tax": 3.08894868848433,
              "lvl": 1,
              "tid": 5
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 100.195998,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "FUSF",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.195,
              "sur": false,
              "tax": 19.53821961,
              "lvl": 0,
              "tid": 163
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
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.00302,
              "sur": false,
              "tax": 0.19599800000000003,
              "lvl": 0,
              "tid": 226
            }
          ]
        },
        {
          "ref": "Line Item 002 - VoIP/International Usage",
          "txs": [
            {
              "bill": true,
              "cmpl": true,
              "tm": 123.68852798255152,
              "calc": 1,
              "cat": "EXCISE TAXES",
              "cid": 4,
              "name": "NY MCTD 186c",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 2604000,
              "rate": 0.00595,
              "sur": true,
              "tax": 0.7359467414961818,
              "lvl": 2,
              "tid": 27
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 123.68865037347913,
              "calc": 1,
              "cat": "EXCISE TAXES",
              "cid": 4,
              "name": "Excise Tax",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 2502500,
              "rate": 0.025,
              "sur": true,
              "tax": 3.0922162593369786,
              "lvl": 1,
              "tid": 5
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 100.302,
              "calc": 1,
              "cat": "CONNECTIVITY CHARGES",
              "cid": 5,
              "name": "FUSF",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.195,
              "sur": false,
              "tax": 19.55889,
              "lvl": 0,
              "tid": 163
            },
            {
              "bill": true,
              "cmpl": true,
              "tm": 100,
              "calc": 1,
              "cat": "REGULATORY CHARGES",
              "cid": 6,
              "name": "FCC Regulatory Fee (VoIP)",
              "exm": 0,
              "lns": 0,
              "min": 0,
              "pcd": 0,
              "rate": 0.00302,
              "sur": false,
              "tax": 0.302,
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
          "tchg": 247.2463574719591,
          "calc": 1,
          "cat": "EXCISE TAXES",
          "cid": 4,
          "name": "NY MCTD 186c",
          "exm": 0,
          "lns": 0,
          "pcd": 2604000,
          "rate": 0.00595,
          "sur": true,
          "tax": 1.471115826958157,
          "lvl": 2,
          "tid": 27
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 247.24659791285234,
          "calc": 1,
          "cat": "EXCISE TAXES",
          "cid": 4,
          "name": "Excise Tax",
          "exm": 0,
          "lns": 0,
          "pcd": 2502500,
          "rate": 0.025,
          "sur": true,
          "tax": 6.181164947821308,
          "lvl": 1,
          "tid": 5
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 200.497998,
          "calc": 1,
          "cat": "CONNECTIVITY CHARGES",
          "cid": 5,
          "name": "FUSF",
          "exm": 0,
          "lns": 0,
          "pcd": 0,
          "rate": 0.195,
          "sur": false,
          "tax": 39.097109610000004,
          "lvl": 0,
          "tid": 163
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
          "lns": 0,
          "pcd": 0,
          "rate": 0.00302,
          "sur": false,
          "tax": 0.19599800000000003,
          "lvl": 0,
          "tid": 226
        },
        {
          "max": 2147483647,
          "min": 0,
          "tchg": 100,
          "calc": 1,
          "cat": "REGULATORY CHARGES",
          "cid": 6,
          "name": "FCC Regulatory Fee (VoIP)",
          "exm": 0,
          "lns": 0,
          "pcd": 0,
          "rate": 0.00302,
          "sur": false,
          "tax": 0.302,
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

<h3>See Also</h3>
<h4>Input Objects</h4>
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-request/"><code>CalcTaxes</code> request</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/invoice/">Invoice</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/line-item/">Line item</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-override/">Tax override</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/location/">Location</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/tax-bracket/">Tax bracket</a></li>
</ul>

<h4>Output Objects</h4>
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calc-taxes-response/"><code>CalcTaxes</code> response</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/detailed-tax-result/">Detailed tax results</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/summarized-tax-result/">Summarized tax results</a></li>
</ul>

<h4>Helpful Pages</h4>
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/getting-started/environments-endpoints#lookups">Lookups endpoints</a></li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/customizing-transactions/client-profiles/">Client profile</a></li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/inter-intrastate/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/customizing-transactions/sample-transactions/safe-harbor-override/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>