---
layout: page
title: Chapter 2.4 - Scoring
product: communications
doctype: comms_geo_soap_dev_guide
chapter: geocode
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/geocode/special-tax-jurisdictions"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>

AFC Geo SaaS Pro Soap provides a confidence score  when returning a location.  The score is based on how well street database values match the input (<a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/address-geocoding/">address</a> or <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/lat-long-geocoding/">latitude/longitude coordinate pair</a>).  A score of 1.0 (100%) indicates an exact match.

Scoring is based only on the fields provided in the input - the score is not lowered because you do not include the Zip code, for instance.  The score is impacted, however, if incorrect information is supplied, such as the wrong Zip code.

<h3>Address Scoring</h3>
The values of the address fields are scored based on an algorithm that calculates the minimum number of single-character changes, removals, or additions required to convert the input value into the street database value. The more typos you make, the larger the difference between the input and street database values. A 0 difference produces a perfect score (1.0), and so on.

The combined score for the resulting location is computed as a weighted average of the individual scores by field.

<h3>Fallback Score</h3>
<h4>1.01 Score</h4>
The fallback score is 1.01 and is returned in the event that the address cannot be geocoded, but a match is found using a combination of the zip code, the Zip+4 (if available in the input address), and the location name.  The 1.01 score indicates that the geocode data is not available, but the jurisdiction information has been retrieved anyway.  A 1.01 score doesn't impact <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/">CASS validation</a>. The <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/">CASS-validated</a> address may still be returned in the results if you turn on <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/">CASS validation</a> (<code>CassCertify</code> set to <code>true</code> ) and the <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/cass/">CASS validation</a> process is successful.

<h4>Street Number Snapping</h4>
Links exist in the data set that do not have an address range assigned due to a new street being digitized, but no houses have been built yet.  Links without address ranges are approached using these rules:
<ul class="dev-guide-list">
  <li>Links without address ranges aren't considered unless the Street Number Snapping (Options bitwise value 1) is used</li>
  <li>A single street within the address range is used, even if it the only link available</li>
  <li>Streets, especially in new developments, may not have any address ranges assigned - AFC Geo SaaS Pro Soap returns an arbitrary segment on the street to get you in the proper area</li>
</ul>

Use Street Number Snapping (<a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/options/">Options</a> bitwise value 1) to return a result when a street number can't be found in the street database.

<h4>Postal Code Centroid</h4>
Postal Code Centroid (<a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/options/">Options</a> bitwise value 2) reverts to the centroid of a postal code area when:
<ul class="dev-guide-list">
  <li>Geocoding fails to produce a match</li>
  <li>Zip code (<code>Zip</code>) is supplied in the input address</li>
  <li>Street data set contains at least one street in the Zip code</li>
</ul>

The centroid is a very coarse approximation of the real location.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/geocode/special-tax-jurisdictions"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>