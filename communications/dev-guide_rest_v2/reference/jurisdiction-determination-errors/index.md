---
layout: page
title:  Chapter 5.5.4 - Jurisdiction Determination REST v2 Errors
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/commit-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/lookup-errors/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>PCode</h3>
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Error Code</th>
        <th>Message</th>
        <th>Summary</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>-1000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/jurisdiction-determination-errors/request-not-formatted/">Object reference not set to an instance of an object.</a></td>
        <td>Request is not properly formatted</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
<h3>Geocode</h3>
<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Error Code</th>
        <th>Message</th>
        <th>Summary</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>HTTP 400 Bad Request</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/jurisdiction-determination-errors/geocode-requests-cannot-be-null-or-empty/">geocodeRequests cannot be null or empty.</a></td>
        <td>Request is not properly formatted</td>
      </tr>
      <tr>
        <td>HTTP 404 Not Found</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/jurisdiction-determination-errors/geocode-limit/">Number of geocode requests cannot exceed 1000 in a single call.</a></td>
        <td>Too many geocode requests</td>
      </tr>
      <tr>
        <td></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/jurisdiction-determination-errors/street-address-required/">StreetAddress must be provided for address geocoding.</a></td>
        <td>Missing Street Address field in GeocodeRequests</td>
      </tr>
      <tr>
        <td></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/jurisdiction-determination-errors/geocode-address-required-fields/">City and State and/or Postalcode must be provided for address geocoding.</a></td>
        <td>Missing City and State or PostalCode in GeocodeRequests</td>
      </tr>
      <tr>
        <td>E0001</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/jurisdiction-determination-errors/could-not-geocode-address/">Error E0001-113864854 - Could not geocode address.  Check InputAddress values.</a></td>
        <td>Valid address not provided in GeocodeRequests</td>
      </tr>
      <tr>
        <td></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/jurisdiction-determination-errors/unable-to-geocode-address/">Unable to geocode address.</a></td>
        <td>Valid address not provided in GeocodeRequests</td>
      </tr>
      <tr>
        <td></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/jurisdiction-determination-errors/geocode-lat-long-required/">Latitude and Longitude must be provided for lat/long geocoding.</a></td>
        <td>Missing Latitude or Longitude in GeocodeRequest</td>
      </tr>
      <tr>
        <td></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/jurisdiction-determination-errors/unable-to-geocode-lat-long/">Unable to geocode lat/long.</a></td>
        <td>Valid Latitude and Longitude not provided in GeocodeRequests</td>
      </tr>
    </tbody>
  </table>
</div>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/commit-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/lookup-errors/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>