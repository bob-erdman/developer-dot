---
layout: page
title:  Chapter 5.5.3 - Commit REST v2 Errors
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/jurisdiction-determination-errors/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Commit</h3>
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
    <!--LKK - 1/21/19 - There should be many more errors in this section, but just about all of the expected OptionalField errors are generated Internal Server 500 errors or no errors at all (PLAT-8033)-->
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/commit-errors/document-code-is-invalid/">DocumentCode is invalid.</a></td>
        <td>Document Code is missing or too long</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/commit-errors/no-transactions-found-for-document-code/">No transactions found for document code.</a></td>
        <td>No transactions contain the specified Document Code</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/commit-errors/document-code-has-been-locked/">Document code has been locked.</a></td>
        <td>The Document Code can't be uncommitted - the transactions have been pulled into Compliance</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/commit-errors/commit-cannot-be-null/">Commit cannot be null.</a></td>
        <td>Commit field is required</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/commit-errors/numeric-optional-field-key/">OptionalField keys must be numeric.</a></td>
        <td>Optional Field key must be a number between 1 and 10</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/reference/jurisdiction-determination-errors/">Next<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>