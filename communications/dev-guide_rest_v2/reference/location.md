---
layout: page
title:  Chapter 5.1.5 - Location
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/invoice/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/line-item/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Location</h3>

The <code>Location</code> object contains information about a <b>jurisdiction</b>:

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
            <td><code>cnty</code></td>
            <td><code>[string]</code> County 
            <ul class="dev-guide-list">
              <li>Max length: 25 bytes</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>ctry</code></td>
            <td><code>[string]</code> Country ISO code 
            <ul class="dev-guide-list">
              <li>Max length: 3 bytes</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>int</code></td>
            <td><code>[bool]</code> Incorporated
                <br/>
                Indicates if the location is within city limits
                <ul class="dev-guide-list">
                    <li><code>true</code>: Address is within city limits</li>
                    <li><code>false</code>: Address is outside of city limits (unincorporated)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>geo</code></td>
            <td><code>[bool]</code> Geocode
                <br/>
                Indicates if this address should be geocoded in order to obtain taxing jurisdiction
                <ul class="dev-guide-list">
                    <li><code>true</code>: Use Geo lookup</li>
                    <li><code>false</code>: Do not use Geo lookup</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><code>pcd</code></td>
            <td><code>[int]</code> PCode
                <br>
                Proprietary code returned from AFC Geo.  PCodes provide the <b>most accurate</b> jurisdiction determination for calculating taxes with the AFC tax engine
            </td>
        </tr>
        <tr>
            <td><code>npa</code></td>
            <td><code>[int]</code> NPANXX 
                <br/>
                The first 6 digits of a phone number
            </td>
        </tr>
        <tr>
            <td><code>fips</code></td>
            <td><code>[string]</code> FIPS code
            <br/>
            10-digit USAF FIPS for taxing jurisdiction 
            <ul class="dev-guide-list">
              <li>Max length: 10 bytes</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>addr</code></td>
            <td><code>[string]</code> Street Address 
            <ul class="dev-guide-list">
              <li>Max length: Unlimited (within reason)</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>city</code></td>
            <td><code>[string]</code> City
            <ul class="dev-guide-list">
              <li>Max length: Unlimited (within reason)</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>st</code></td>
            <td><code>[string]</code> State
            <br/>
            State name or abbreviation
            <ul class="dev-guide-list">
              <li>Max length: Unlimited (within reason)</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td><code>zip</code></td>
            <td><code>[string]</code> Postal Code
            <br/>
            Postal code in the format of 12345-6789 or A0A 1B1 
            <ul class="dev-guide-list">
              <li>Max length: 10 bytes</li>
            </ul>
            </td>
        </tr>
    </tbody>
  </table>
</div>
<h3>Locations can be specified with a...</h3>

<h4>Street Address</h4>
{% highlight json %}
"bill": {
  "ctry": "USA",
  "addr": "11 West 53 Street",
  "city": "Manhattan",
  "st": "NY",
  "zip": "10019"
}
{% endhighlight %}

<h4>Geocoded Street Address</h4>
Geocoding doesn't support PO Box address

{% highlight json %}
"bill": {
  "ctry": "USA",
  "geo": true,
  "addr": "11 West 53 Street",
  "city": "Manhattan",
  "st": "NY",
  "zip": "10019"
}
{% endhighlight %}

<h4>FIPS code</h4>
{% highlight json %}
"to": {
  "fips": "9902604301"
}
{% endhighlight %}

<h4>NPANXX code</h4>
{% highlight json %}
"to": {
  "npa": 212200
}
{% endhighlight %}

<h4>PCode</h4>
{% highlight json %}
"from": {
  "pcd": 2604301
}
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/invoice/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/line-item/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>