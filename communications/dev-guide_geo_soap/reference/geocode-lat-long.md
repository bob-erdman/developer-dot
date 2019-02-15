---
layout: page
title:  Chapter 4.1.4 - Geocode Lat Long
product: communications
doctype: comms_geo_soap_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/input-address"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/reference/get-server-time">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Geocode Lat Long</h3>

<code>GeocodeLatLong</code> accepts a latitude/longitude coordinate pair for geocoding:

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
        <td><code>latitude</code></td>
        <td><code>[double]</code> Latitude
        <br>
        Latitude of location to geocode
        </td>
      </tr>
      <tr>
        <td><code>longitude</code></td>
        <td><code>[double]</code> Longitude
        <br>
        Longitude of location to geocode
        </td>
      </tr>
      <tr>
        <td><code>Source</code></td>
        <td><code>[string]</code> Source
        <br/>
        Leave blank - Internal use only
        </td>
      </tr>
    </tbody>
  </table>
</div>
<br>

<h3>Example</h3>

{% highlight xml %}
<GeocodeLatLong>
    <latitude>35.991130741436415</latitude>
    <longitude>-78.90267307450108</longitude>
    <Source/>
</GeocodeLatLong>
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/input-address"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/reference/get-server-time">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>