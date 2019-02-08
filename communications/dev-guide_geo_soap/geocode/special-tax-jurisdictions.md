---
layout: page
title: Chapter 2.3 - Special Tax Jurisdictions
product: communications
doctype: comms_geo_soap_dev_guide
chapter: geocode
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/geocode/lat-long-geocoding"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode/scoring/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

A Special Tax Jurisdiction is an area of a city or county that requires a tax for a specific purpose, applicable for entities such as:
<ul class="dev-guide-list">
  <li>Fire</li>
  <li>Police</li>
  <li>Ambulance</li>
  <li>Library</li>
  <li>Transportation</li>
  <li>Economic Development</li>
  <li>Cultural and Science</li>
</ul>  
  
The boundaries of special tax jurisdictions can be arbitrary and may not be related to any other boundary, such as city limits.  Some states contain Townships that segment a county into smaller sections.  AFC Geo SaaS Pro Soap uses a special tax jurisdiction to identify a township when a township has different taxes than the county level.

Returning a special tax jurisdiction in the geocoding results is optional - use <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/options/">Options</a> bitwise value 16 to enable Special Tax Jurisdictions.  Not including the Special Tax Jurisdiction <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/options/">Options</a> bitwise value returns the city or county where the Special Tax Jurisdiction is located.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/geocode/lat-long-geocoding"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode/scoring/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>