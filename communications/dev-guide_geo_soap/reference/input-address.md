---
layout: page
title:  Chapter 4.1.3 - Input Address
product: communications
doctype: comms_geo_soap_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/geocode-all-matches"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/reference/geocode-lat-long/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Input Address</h3>

The <code>InputAddress</code> object contains the address information to geocode:

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
        <td><code>CassCertify</code></td>
        <td><code>[bool]</code> <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/">Cass Certify</a>
        <br/>
        Indicates if <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/">CASS validation</a> should be performed
        <ul class="dev-guide-list">
            <li><code>true</code>: <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/">CASS Validation</a> is attempted</li>
            <li><code>false</code>: <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/">CASS validation</a> is bypassed, unless the address is in Florida where CASS validation is always performed</li>
        </ul>
        </td>
      </tr>
      <tr>
        <td><code>City</code></td>
        <td><code>[string]</code> City
        <br/>
        City name
        <br/>
        Use in conjunction with <code>State</code> and <code>Zip</code> to replace <code>CityStateZip</code>
        </td>
      </tr>
      <tr>
        <td><code>CityStateZip</code></td>
        <td><code>[string]</code> City, State, and Zip
        <br/>
        Specifies the city, state, and Zip code in a single line
        <br/>
        Use in place of individual <code>City</code>, <code>State</code>, and <code>Zip</code> fields 
        </td>
      </tr>
      <tr>
        <td><code>MinimumScore</code></td>
        <td><code>[double]</code> Minimum Score
        <br/>
        <ul class="dev-guide-list">
            <li>Specifies the minimum score that identifies the resulting address as a match</li>
            <li>Value between 0 and 1, inclusive</li>
            <li>Default is 0.7</li>
        </ul>
        </td>
      </tr>
      <tr>
        <td><code>Offset</code></td>
        <td><code>[double]</code> Offset
        <br/>
        <ul class="dev-guide-list">
            <li>Distance in meters at which the resulting location is offset from the side of the link</li>
            <li>Default is 3</li>
        </ul>
        </td>
      </tr>
      <tr>
        <td><code>Options</code></td>
        <td><code>[int]</code> <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/options/">Options</a>
        <br/>
        Bit mask of additional <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/options/">options</a> to use when matching addresses
        </td>
      </tr>
      <tr>
        <td><code>SecondaryUnit</code></td>
        <td><code>[string]</code> Secondary Unit
        <br/>
        A part of the street address - an apartment, suite, or other unit type in USPS Publication 28
        </td>
      </tr>
      <tr>
        <td><code>Source</code></td>
        <td><code>[string]</code> Source
        <br/>
        Internal use only - do not populate
        </td>
      </tr>
      <tr>
        <td><code>State</code></td>
        <td><code>[string]</code> State
        <br/>
        2-character state abbreviation
        <br/>
        Use in conjunction with <code>City</code> and <code>Zip</code> to replace <code>CityStateZip</code>
        </td>
      </tr>
      <tr>
        <td><code>StreetAddress</code></td>
        <td><code>[string]</code> Street Address
        <br/>
        Contains the street number, street name, and optional unit number.  Typically starts with a numeric street number
        </td>
      </tr>
      <tr>
        <td><code>Zip</code></td>
        <td><code>[string]</code> Zip Code
        <br/>
        Zip code
        <br/>
        Use in conjunction with <code>City</code> and <code>State</code> to replace <code>CityStateZip</code>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

<h3>Examples</h3>

<h4>Using Combined City, State, Zip</h4>
{% highlight xml %}
<inputAddress>
    <CassCertify>false</CassCertify>
    <City/>
    <CityStateZip>Seattle,WA 98104</CityStateZip>
    <MinimumScore>0.7</MinimumScore>
    <Offset>3</Offset>
    <Options>0</Options>
    <SecondaryUnit/>
    <Source/>
    <State/>
    <StreetAddress>255 South King St</StreetAddress>
    <Zip/>
</inputAddress>
{% endhighlight %}

<h4>Individual City, State, Zip</h4>
{% highlight xml %}
<inputAddress>
    <CassCertify>false</CassCertify>
    <City>Seattle</City>
    <CityStateZip/>
    <MinimumScore>0.7</MinimumScore>
    <Offset>3</Offset>
    <Options>0</Options>
    <SecondaryUnit/>
    <Source/>
    <State>WA</State>
    <StreetAddress>255 South King St</StreetAddress>
    <Zip>98104</Zip>
</inputAddress>
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/geocode-all-matches"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/reference/geocode-lat-long/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>