---
layout: page
title: Chapter 2.1 - Address Geocoding
product: communications
doctype: comms_geo_soap_dev_guide
chapter: geocode
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/geocode"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode/options/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

Address geocoding accepts an address and returns 1 or more addresses.
<ul class="dev-guide-list">
   <li><code>GeocodeAddress</code> <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/getting-started/endpoints-methods#methods/">method</a> returns the single best match</li>
   <li><code>GeocodeAllMatches</code> <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/getting-started/endpoints-methods#methods">method</a> returns the all matches above the minimum score requested</li>
</ul>

<h4>Note</h4>
AFC Geo SaaS Pro Soap supports geocoding for the United States, Puerto Rico, and other US territory addresses.  Addresses in foreign countries (<b>including Canada and Mexico</b>) are not supported and don't return results.

<h3>Address Parsing</h3>
An address is made up of several parts:
<ul class="dev-guide-list">
   <li><code>StreetAddress</code>: First line of address (for example, "255 South King St")</li>
   <li><code>SecondaryUnit</code>: Second line of address, but not used in the geocoding process (for example, "Suite 1800")</li>
   <li><code>CityStateZip</code>: Combined city, state, and Zip code (for example, "Seattle, WA 98104")</li>
   <li><code>City</code>: City name (for example, "Seattle")</li>
   <li><code>State</code>: State abbreviation (for example, "WA")</li>
   <li><code>Zip</code>: Zip code (for example, "98104")</li>
</ul>

<h4>Note</h4>
The <code>CityStateZip</code> is used in place of the individual <code>City</code>, <code>State</code>, and <code>Zip</code> fields.  Pick the approach that works best for you.

See <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/getting-started/best-practices/">Best Practices</a> for additional guidance when setting up an input address.

<h3>Matching</h3>
The input address is used to look up candidate locations within the street database.  Some fields, such as <code>StreetAddress</code> and <code>City</code>, don't require a strict match to produce a candidate.  For example "1 Renee Street" matches "1 Rena Street".  A street with an alternate name (alias) in the database is considered as a candidate as well.

The street number is matched against the address ranges supplied in the vendor's street database.  A single street is represented in the street database as a chain of segments called a street link.  A link is:
<ul class="dev-guide-list">
   <li>Small segment of the street, usually between two intersections</li>
   <ul class="dev-guide-list">
      <li>A single block can consist of multiple links</li>
   </ul>
   <li>Characterized by a range of street numbers on either side of the street</li>
   <li>A precise match occurs when the street number supplied for geocoding falls within the address range of a link</li>
   <li>Example:</li>
   <ul class="dev-guide-list">
      <li>Right side of the street has the street number range 1 - 47</li>
      <li>Left side of the street has the street number range of 2 - 48</li>
      <li>Input address has street number 24</li>
      <li>AFC Geo SaaS Pro Soap computes the geographic coordinates based on the location (street number 24) being approximately in the middle of the link on the left side of the street</li>
   </ul>
</ul>

<h4>Finding the best match</h4>
<ol class="dev-guide-list">
   <li>Full address (street address (<code>StreetAddress</code>), city (<code>City</code>), state (<code>State</code>), and Zip code (<code>Zip</code>)) is used first</li>
   <ul class="dev-guide-list">
      <li>Result returned if the full address produces a match with a score above the <code>MinimumScore</code></li>
   </ul>
   <li>Street address (<code>StreetAddress</code>) and zip code (<code>Zip</code>) are used next if no location is found with a score above <code>MinimumScore</code></li>
   <li>Street address (<code>StreetAddress</code>), city (<code>City</code>), and state (<code>State</code>) are geocoded last if a location still isn't returned with with a score above <code>MinimumScore</code></li>
</ol>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/geocode"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode/options/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>