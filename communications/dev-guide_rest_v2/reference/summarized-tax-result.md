---
layout: page
title:  Chapter 5.1.19 - Summarized Tax Result
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/detailed-tax-result/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/reporting-information/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Summarized Tax Result</h3>

The <code>SummarizedTax</code> object contains the <b>tax data</b> for summarized invoice taxes:

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
            <td><code>max</code></td>
            <td><code>[double]</code> Max Base
            <br/>
            The maximum base for the tax bracket
            </td>
        </tr>
        <tr>
            <td><code>min</code></td>
            <td><code>[double]</code> Min Base
            <br/>
            The minimum base for the tax bracket
            </td>
        </tr>
        <tr>
            <td><code>tchg</code></td>
            <td><code>[double]</code> Total Charge
            <br/>
            Summarized charge amounts applied to the tax item from Invoice processing.  Each entry in the summarized data has an individual total charge as it applies to the calculation of that specific summarized tax type and jurisdiction
            </td>
        </tr>
        <tr>
            <td><code>calc</code></td>
            <td><code>[int]</code> Calculation Type
            <br/>
            Indicates how the tax is calculated
            <ul class="dev-guide-list">
                <li><code>1</code> <b>Rate</b>: Taxable Measure is multiplied by Rate</li>
                <li><code>2</code> <b>Fixed</b>: Fixed taxes represent a fixed tax that applies to the product being taxed</li>
                <li><code>3</code> <b>PerMinute</b>: Number of Minutes is multiplied by Rate</li>
                <li><code>4</code> <b>PerLine</b>: Number of Lines is multiplied by Rate</li>
                <li><code>5</code> <b>SelfTaxingRate</b>: Taxable Measure is multiplied by Self-Taxing Rate</li>
                <li><code>6</code> <b>PerBracket</b>: Number of Lines is multiplied by Rate based on tax bracket for line count</li>
                <li><code>7</code> <b>FixedOnTier</b>: Sale Amount is multiplied by Rate based on tax tier for sale amount</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>cat</code></td>
            <td><code>[string]</code> Tax Category Name 
            <ul class="dev-guide-list">
              <li>Max length: 50 bytes</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>cid</code></td>
            <td><code>[int]</code> Tax Category ID</td>
        </tr>
        <tr>
            <td><code>name</code></td>
            <td><code>[string]</code> Tax Name 
            <ul class="dev-guide-list">
              <li>Max length: 50 bytes</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>exm</code></td>
            <td><code>[double]</code> Exempt Sale Amount</td>
        </tr>
        <tr>
            <td><code>lns</code></td>
            <td><code>[int]</code> Number of lines taxed</td>
        </tr>
        <tr>
            <td><code>pcd</code></td>
            <td><code>[int]</code> Reporting PCode
            <br/>
            PCode representing reporting tax jurisdiction</td>
        </tr>
        <tr>
            <td><code>taxpcd</code></td>
            <td><code>[int]</code> Taxing PCode
            <br/>
            PCode representing taxing jurisdiction.   Only returned when <code>retext</code> in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/request-config/">RequestConfig</a> is set to <code>true</code></td>
        </tr>
        <tr>
            <td><code>rate</code></td>
            <td><code>[double]</code> Applicable tax rate</td>
        </tr>
        <tr>
            <td><code>sur</code></td>
            <td><code>[bool]</code> Surcharge
            <br/>
            Indicates if this tax is a surcharge
            <ul class="dev-guide-list">
                <li><code>true</code>: Surcharge rules apply to this tax</li>
                <li><code>false</code>: Tax is not a surcharge</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>tax</code></td>
            <td><code>[double]</code> Summarized Tax Amount</td>
        </tr>
        <tr>
            <td><code>lvl</code></td>
            <td><code>[int]</code> Tax Level
            <br/>
            Indicates the jurisdiction level of the tax
            <ul class="dev-guide-list">
                <li><code>0</code>: Federal</li>
                <li><code>1</code>: State</li>
                <li><code>2</code>: County</li>
                <li><code>3</code>: City</li>
                <li><code>4</code>: Unincorporated</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>tid</code></td>
            <td><code>[int]</code> Tax Type ID</td>
        </tr>
        <tr>
            <td><code>usexm</code></td>
            <td><code>[bool]</code> User Exempt
            <br/>
            Flag indicating if the tax has been exempted by the user via <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/exemption/">Exemptions</a> (<code>exms</code>)
            <ul class="dev-guide-list">
                <li><code>true</code>: Tax has been exempted by the user</li>
                <li><code>false</code>: Tax hasn't been exempted by the user</li>
            </ul>
            Only returned when <code>retext</code> in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/request-config/">RequestConfig</a> is set to <code>true</code></td>
        </tr>
        <tr>
            <td><code>notax</code></td>
            <td><code>[bool]</code> Is No Tax Transaction
            <br/>
            Flag indicating that the transaction processed successfully but returned no taxes.  If no taxes are generated, the taxing jurisdiction used in the response is returned.
            <ul class="dev-guide-list">
                <li><code>true</code>: Item is a no tax entry</li>
                <li><code>false</code>: Item returned taxes</li>
            </ul>
            Only returned when <code>retext</code> in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/request-config/">RequestConfig</a> is set to <code>true</code></td>
        </tr>
        <tr>
            <td><code>trans</code></td>
            <td><code>[int]</code> Transaction Type
            <br/>
            Transaction type use to calculate tax.  For bundles, this field shows the specific bundled item transaction type.  Only returned when <code>retext</code> in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/request-config/">RequestConfig</a> is set to <code>true</code></td>
        </tr>
        <tr>
            <td><code>svc</code></td>
            <td><code>[int]</code> Service Type
            <br/>
            Service type use to calculate tax.  For bundles, this field shows the specific bundled item transaction type.  Only returned when <code>retext</code> in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/request-config/">RequestConfig</a> is set to <code>true</code></td>
        </tr>
        <tr>
            <td><code>chg</code></td>
            <td><code>[double]</code> Charge
            <br/>
            Charge used to calculate tax.  
            <ul class="dev-guide-list">
                <li>For bundles, this field shows the percentage of the charge applied to the bundled item</li>
                <li>For tax inclusive calls, this field shows the calculated charge</li>
            </ul>
            Only returned when <code>retext</code> in <a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/request-config/">RequestConfig</a> is set to <code>true</code></td>
        </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight json %}
"summ": [
  {
    "max": 2147483647,
    "min": 0,
    "tchg": 25,
    "calc": 1,
    "cat": "SALES AND USE TAXES",
    "cid": 1,
    "name": "Sales Tax",
    "exm": 0,
    "lns": 0,
    "pcd": 377300,
    "taxpcd": 377300
    "rate": 0.0125,
    "sur": false,
    "tax": 0.3125,
    "lvl": 2,
    "tid": 1,
    "usexm": false,
    "notax": false,
    "trans": 19,
    "svc": 6,
    "chg": 25
  }
]
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/detailed-tax-result/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/reporting-information/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>