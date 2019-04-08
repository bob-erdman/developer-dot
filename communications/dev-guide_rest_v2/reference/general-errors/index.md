---
layout: page
title:  Chapter 5.5.1 - General REST v2 Errors
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/ts-pair-data/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>General</h3>
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
        <td>HTTP 403 Forbidden</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/general-errors/forbidden/">Forbidden</a></td>
        <td>The request has been denied</td>
      </tr>
      <tr>
        <td>HTTP 500</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/general-errors/internal-server-error/">Internal Server Error</a></td>
        <td>A problem has occurred with the service</td>
      </tr>
      <tr>
        <td>HTTP 503</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/general-errors/service-unavailable/">Service Unavailable</a></td>
        <td>The service is unavailable</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

<h3>Authentication</h3>
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
        <td>HTTP 401</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/general-errors/unauthorized/">Unauthorized</a></td>
        <td>Not properly authenticated with REST v2 or problems in the header</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
<h3>Header</h3>
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
        <td></td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/general-errors/profile-id-not-found/">Profile ID not found.</a></td>
        <td>Client Profile passed in the header is not valid</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
<h3>Request</h3>
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
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/general-errors/request-body-cannot-be-empty/">Request body cannot be empty.</a></td>
        <td>Body of the API request is empty or incomplete</td>
      </tr>
    </tbody>
  </table>
</div>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/ts-pair-data/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>