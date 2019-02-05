---
layout: page
title: Chapter 2.1.1 - Options
product: communications
doctype: comms_geo_soap_dev_guide
chapter: geocode
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/geocode/address-geocoding"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode/cass/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

The Options field (<code>Options</code>) in <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/address-geocoding/">address geocoding</a> is a bitwise combination of additional options to use when matching addresses in the street database.

<h3>How to use</h3>
The <code>Options</code> field uses a bitwise combination of values.  Set <code>Options</code> to the option you want to use.  Add the values together to enable multiple options.  For example, to enable the return of Special Tax Jurisdictions (bitwise value 16) and Census IDs (bitwise value 32), set Options (<code>Options</code>) to 48 (16+32).

<h3>Options Bitwise Values</h3>
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <tr>
        <th>Options Bitwise Value</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
      </tr>
    </thead>
    <tbody>
      <tr>
         <td>1</td>
         <td>Street Number Snapping (Number Out Of Range)</td>
         <td>AFC Geo SaaS Pro Soap finds the location with the closest street number and returns that as a match.  Street Number Snapping is helpful when an incorrect street number has been entered or the location is in a new development and has not been incorporated into the street database yet.  Street Number Snapping does not significantly affect the performance of the system
         <br/><br/>
         We recommend that you don't enable Street Number Snapping unless no results are returned because an incorrect street number is normally returned when the street link is fully defined</td>
      </tr>
      <tr>
         <td>2</td>
         <td>Postal Code Centroid</td>
         <td>The center of the postal code area is returned if no match is found
         <br/><br/>
         We recommend that you don't enable Postal Code Centroid unless no results are returned because the returned location has no relationship to the input address other than the input and resulting addresses both being in the same Zip code.  It is also possible that the taxing jurisdiction is incorrect</td>
      </tr>
      <tr>
         <td>8</td>
         <td>Return Zip+4</td>
         <td>Causes the Postal Code extension field to be populated with the Zip+4 value
         <br/><br/>
         This option has been <b>deprecated</b>.  The Zip+4 value is <i>always</i> returned even if the 8 bitwise value is not included in the Options total</td>
      </tr>
      <tr>
         <td>16</td>
         <td>Return Special Tax Jurisdictions</td>
         <td>Special Tax Jurisdiction is returned if there is a <a class="dev-guide-link" href="/communications/dev-guide_geo_soap/geocode/special-tax-jurisdictions/">special tax jurisdiction</a> that applies to the returned location</td>
      </tr>
      <tr>
         <td>32</td>
         <td>Return Census IDs</td>
         <td>Returns Census information (Block Group ID (<code>CensusBlockGroup</code> and Tract ID <code>CensusTract</code>)</td>
      </tr>
      <tr>
         <td>256</td>
         <td>Return Building Zip Code</td>
         <td>Returns the Zip code specific to a building if it is different than the street address</td>
      </tr>
    </tbody>
  </table>
</div>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/geocode/address-geocoding"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode/cass/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>