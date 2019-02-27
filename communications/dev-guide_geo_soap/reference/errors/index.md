---
layout: page
title:  Chapter 4.3 - Errors
product: communications
doctype: comms_geo_soap_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/fault"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode-offline/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

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
        <td>HTTP 500 Internal Server Error</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/errors/invalid-security/">An error occurred when verifying security for the message</a></td>
        <td>Problems with <code>Security</code> object</td>
      </tr>
      <tr>
        <td>HTTP 500 Internal Server Error</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/errors/user-not-found/">User not found!</a></td>
        <td>Invalid username</td>
      </tr>
      <tr>
        <td>HTTP 500 Internal Server Error</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/errors/password-is-invalid/">Password is invalid!</a></td>
        <td>Invalid password</td>
      </tr>
      <tr>
        <td>HTTP 500 Internal Server Error</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/errors/user-validation-error/">USER VALIDATION ERROR - userName or password is null</a></td>
        <td>Password field missing in the header</td>
      </tr>
      <tr>
        <td>HTTP 500 Internal Server Error</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/errors/user-account-is-inactive/">User account is inactive!</a></td>
        <td>User account is inactive</td>
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
        <td>HTTP 400 Bad Request</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/errors/400-bad-request/">400 Bad Request</a></td>
        <td>Format of the XML request is incorrect</td>
      </tr>
      <tr>
        <td>HTTP 500 Internal Server Error</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/errors/deserialization-failed/">The formatter threw an exception while trying to deserialize the message: There was an error while trying to deserialize parameter http://tempuri.org/:inputAddress.</a></td>
        <td>Format of the XML request is incorrect</td>
      </tr>
      <tr>
        <td>HTTP 200 OK</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/errors/empty-result/">No error message</a></td>
        <td>No error message returned but the geocode result is empty</td>
      </tr>
    </tbody>
  </table>
</div>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/fault"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode-offline/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>