---
layout: page
title: Chapter 2 - Geocode
product: communications
doctype: comms_geo_soap_dev_guide
chapter: geocode
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/getting-started"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode/address-geocoding/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The input to AFC Geo SaaS Pro Soap is either an <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/address-geocoding/">address</a> or a <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/lat-long-geocoding/">latitude/longitude coordinate pair</a>.  Indicate in <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/address-geocoding/">address geocoding</a> if <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/">USPS CASS Validation</a> should be performed - setting <code>CassCertify</code> to <code>true</code> ensures the most accurate input address.

AFC Geo primarily uses NavTeq map data to return one or more locations from the street databases, providing you details about the location (such as PCode and <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/special-tax-jurisdictions/">Special Tax Jurisdiction</a> information) and a confidence <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/scoring/">score</a>.  Census Block Group (<code>CensusBlockGroup</code>) and Census Tract (<code>CensusTract</code>) data is available in the geocoding results (use <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/options/">Options</a> bitwise value 32).

<h3>AFC Geo Viewer</h3>
Use <a class="dev-guide-link" href="https://communications.avalara.net/AFC/GeoViewer">AFC Geo Viewer</a> for US address verification and assignment of tax jurisdictions through the input of a <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/address-geocoding/">street address</a> or a <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/lat-long-geocoding/">latitude and longitude coordinate pair</a>.  AFC Geo Viewer is accessible on the <a class="dev-guide-link" href="https://communications.avalara.net/AFC/GeoViewer">Geo Viewer</a> page of the <a class="dev-guide-link" href="https://communications.avalara.net">AFC Customer Portal</a>.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/getting-started"><i class="glyphicon glyphicon-chevron-left"></i>Previous Chapter</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode/address-geocoding/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>