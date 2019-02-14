---
layout: page
title:  Chapter 4.2.2 - Geocode All Matches Response
product: communications
doctype: comms_geo_soap_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/geocode-address-response"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/reference/geocode-lat-long-response/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Geocode All Matches Response</h3>

<code>GeocodeAllMatchesResponse</code> contains a single (<code>GeocodeAllMatchesResult</code>):

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
        <td><code>GeocodeAllMatchesResult</code></td>
        <td><code>[ArrayOfAddressLocation]</code> Geocode All Matches Result
        <br/>
        Contains one or more <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/address-location/">address locations</a> based on your input location</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

<h3>Example</h3>

{% highlight xml %}
<GeocodeAllMatchesResponse>
  <GeocodeAllMatchesResult>
    <AddressLocation>
        // Address Location
    </AddressLocation>
  </GeocodeAllMatchesResult>
</GeocodeAllMatchesResponse>
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/get-server-time"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/reference/geocode-address-result/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>