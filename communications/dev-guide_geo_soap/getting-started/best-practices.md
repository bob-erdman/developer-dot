---
layout: page
title: Chapter 1.4 - Best Practices
product: communications
doctype: comms_geo_soap_dev_guide
chapter: getting-started
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/getting-started/sample-messages/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Minimum Score</h3>
Specify a minimum score (<code>MinimumScore</code>) for an address or check the score returned for any matching addresses before using the address.  We recommend using addresses with a score of 0.7 (for 70%) or greater. 
<ul class="dev-guide-list">
    <li>Minimum Score (<code>MinimumScore</code>) of 0.7 allows for a reasonable number of typos in the input address</li>
    <li>Increase or decrease the Minimum Score (<code>MinimumScore</code>) to allow for a higher or lower level accuracy</li>
    <li>Setting Minimum Score (<code>MinimumScore</code>) to 1.0 returns only exact matches - this may not return a valid jurisdiction if the input data contains a small error</li>
    <li>Setting Minimum Score (<code>MinimumScore</code>) to 0.0 returns all matches that AFC Geo can find, regardless of confidence in the results</li>
</ul>

<h3>Special Tax Jurisdictions</h3>
Return Special Tax Jurisdictions (Options bit flag 16) to get the most accurate jurisdiction.  Only the city or county is returned when the Special Tax Jurisdictions option is not include.

<h3>Numeric Street Number</h3>
<ul class="dev-guide-list">
    <li>Always start the street address (<code>StreetAddress</code>) with a numeric street number</li>
    <li>Exception to the rule is for states that allow a one letter prefix on the street (for example, a "G" prefix on the street number is valid in Michigan)</li>
    <li>A letter as a suffix on the street number is acceptable, but may not return valid results</li>
</ul>

<h3>Post Office (PO) Box</h3>
<ul class="dev-guide-list">
    <li>PO Boxes aren't supported because a PO Box is not considered acceptable by tax jurisdictions for tax situsing purposes</li>
    <li>Zip Codes associated with a PO Box should not be used for geocoding because the zip code represents the physical location of a PO Box, not the location of the actual transaction</li>
</ul>

<h3>CASS Validation</h3>
Turn CASS Validation (Coding Accuracy Support System) on to increase the accuracy of the address results. 

<h4>Note</h4>
CASS Validation is always be performed on Florida addresses, no matter what the value of the input flag.


<h3>Secondary Unit</h3>
When the input address contains an apartment or suite numbers, use <code>SecondaryUnit</code> to enter this information rather than including apartment or suite numbers at the end of the street address. The Secondary Unit (<code>SecondaryUnit</code>) is not using in the geocoding process, but including an apartment or suite number on the street address line can cause the score to be lowered to the point that a valid match is missed.

<h3>Endpoints</h3>
Use the <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/getting-started/endpoints-methods/">endpoints</a> ending in <code>/2.0</code> so that any exceptions generated are returned to you and you can better handle the exceptions in your code.

<h3>Request</h3>
The order of input fields is important. AFC Geo SaaS Pro Soap requires a static order of input values, such as fields for <code>inputAddress</code>.  Fields that are out of order remain unassigned, impacting the final geocoding results.

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/getting-started/sample-messages/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>