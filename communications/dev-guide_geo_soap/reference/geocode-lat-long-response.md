---
layout: page
title:  Chapter 4.2.3 - Geocode Lat Long Response
product: communications
doctype: comms_geo_soap_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/geocode-all-matches-response"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/reference/address-location/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Geocode Lat Long Result</h3>

<code>GeocodeLatLongResponse</code> contains a single (<code>GeocodeLatLongResult</code>):

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
        <td><code>GeocodeLatLongResult</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/address-location/"><code>[AddressLocation]</code></a> Geocode Lat Long Result
        <br/>
        Contains a single <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/address-location/">address location</a> based on your input location</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

<h3>Example</h3>

{% highlight xml %}
<GeocodeLatLongResponse>
  <GeocodeLatLongResult>
    // Address Location
  </GeocodeAddressResult>
</GeocodeLatLongResponse>
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/geocode-all-matches-response"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/reference/address-location/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>