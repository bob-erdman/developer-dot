---
layout: page
title:  Chapter 4.2.1 - Geocode Address Response
product: communications
doctype: comms_geo_soap_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/get-server-time"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/reference/geocode-address-result/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Geocode Address Result</h3>

<code>GeocodeAddressResponse</code> contains a single (<code>GeocodeAddressResult</code>):

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
        <td><code>GeocodeAddressResult</code></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/address-location/"><code>[AddressLocation]</code></a> Geocode Address Result
        <br/>
        Contains a single <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/address-location/">address location</a> based on your input location</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

<h3>Example</h3>

{% highlight xml %}
<GeocodeAddressResponse>
  <GeocodeAddressResult>
    // Address Location
  </GeocodeAddressResult>
</GeocodeAddressResponse>
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/get-server-time"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/reference/geocode-address-result/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>