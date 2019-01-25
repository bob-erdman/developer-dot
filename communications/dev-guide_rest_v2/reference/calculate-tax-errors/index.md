---
layout: page
title:  Chapter 5.5.2 - Calculate Tax Errors
product: communications
doctype: comms_rest_v2_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/general-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/calculating-tax-offline/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3><code>CalcTaxes</code> Request</h3>
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
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/request-body-cannot-be-empty/">Request body cannot be empty.</a></td>
        <td>Body of the API request is empty or incomplete</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/company-data-is-null/">CompanyData is null.</a></td>
        <td>The CompanyData object is missing</td>
      </tr> 
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/invoice-cannot-be-null-or-empty/">Invoice cannot be null or empty.</a></td>
        <td>The Invoice object is missing or incomplete</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
<h3>CompanyData</h3>
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
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/business-class-is-required/">BusinessClass is required.</a></td>
        <td>Missing BusinessClass field in CompanyData</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/business-class-is-invalid/">BusinessClass is invalid.</a></td>
        <td>Invalid BusinessClass value</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/service-class-is-required/">ServiceClass is required.</a></td>
        <td>Missing ServiceClass field in CompanyData</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/service-class-is-invalid/">ServiceClass is invalid.</a></td>
        <td>ServiceClass value is invalid</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/facilities-is-required/">Facilities is required.</a></td>
        <td>Missing Facilities field in CompanyData</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/franchise-is-required/">Franchise is required.</a></td>
        <td>Missing Franchise field in CompanyData</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/regulated-is-required/">Regulated is required.</a></td>
        <td>Missing Regulated field in CompanyData</td>
      </tr> 
    </tbody>
  </table>
</div>
<br/>
<h4>Exclusion</h4>
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
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/required-in-exclusions/">County, State, and ExclusionOn are required in Exclusions.</a></td> <!--PLAT-8023 to fix misspelling of "Country" -->
        <td>Missing fields in Exclusion</td>
      </tr> 
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/number-of-exclusions/">Number of Exclusions cannot exceed 100</a></td>
        <td>Too many exclusions in Exclusions list</td>
      </tr> 
      <tr>
        <td>-1000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/invalid-exclusion/">Invalid Exclusion: {\"ctry\":\"XXX\",\"st\":\"YYY\",\"excl\":true} - EZTax failed to add the exclusion information..</a></td>
        <td>Invalid data in Exclusion</td>
      </tr> 
    </tbody>
  </table>
</div>
<br/>
<h3>Invoice</h3>
<!-- LKK 1/17/19 - No error message for total invoices over a max -->
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
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/document-code-is-required/">DocumentCode is required in order to commit transactions.</a></td>
        <td>Missing DocumentCode field in Invoice when Commit is true</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/document-code-too-long/">DocumentCode cannot exceed 150 characters.</a></td>
        <td>DocumentCode contains too many characters</td>
      </tr>
      <tr>
        <td>-1008</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/bill-to-is-required/">BillTo is required.</a></td>
        <td>Missing BillTo location in Invoice</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/insufficient-bill-to-location/">Invalid BillTo location: Insufficient information provided to determine taxing jurisdiction.</a></td>
        <td>Not enough information to determine a BillTo location</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/customer-type-is-required/">CustomerType is required.</a></td>
        <td>Missing CustomerType field in Invoice</td>
      </tr> 
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/customer-type-is-invalid/">CustomerType is invalid.</a></td>
        <td>CustomerType value is invalid</td>
      </tr> 
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/date-is-required/">Date is required.</a></td>
        <td>Missing Invoice Date field in Invoice</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/items-list-is-empty/">Items list is empty.</a></td>
        <td>Missing Line Item list in Invoice</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/dtl_or_summ_set_to_true/">ReturnDetail and/or ReturnSummary must be set to true.</a></td>
        <td>Either ReturnDetail, ReturnSummary, or both must be true</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
<h4>Exemption</h4>
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
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/exemption-location-is-required/">Exemption Error - {\"frc\":true,\"tpe\":1,\"lvl\":1,\"cat\":0,\"dom\":0,\"scp\":0,\"exnb\":true} - Bad data in exemption: Location is required.</a></td>
        <td>Missing location in Exemption</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/invalid-exemption-location/">Invalid TaxExemption: {\"loc\":{\"ctry\":\"USA\",\"st\":\"PA\",\"zip\":\"27701\"},\"tpe\":35,\"dom\":1,\"scp\":256} - Unable to determine jurisdiction for TaxExemption: County/State/Zip not found..</a></td> <!--PLAT-8023 to fix misspelling of "Country" -->
        <td>Invalid Exemption location</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/insufficient-exemption-location/">Exemption Error - {\"frc\":true,\"loc\":{},\"tpe\":1,\"lvl\":1,\"cat\":0,\"dom\":0,\"scp\":0,\"exnb\":true} - Insufficient information provided to determine taxing jurisdiction.</a></td>
        <td>Not enough information to determine an Exemption location</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/exemption-required-fields/">Exemption Error - {\"frc\":true,\"loc\":{\"ctry\":\"USA\",\"st\":\"NC\",\"zip\":\"27701\"}} - Bad data in exemption: Tax Type value and one of (Tax Level, Domain) or Category are required.</a></td>
        <td>Missing required fields in Exemption</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/exemption-category-invalid/">Exemption Error - {\"frc\":true,\"loc\":{\"ctry\":\"USA\",\"st\":\"NC\",\"zip\":\"27701\"},\"tpe\":1,\"lvl\":200,\"cat\":200,\"dom\":0,\"scp\":0,\"exnb\":true} - Bad data in exemption: Category value must be in the range 0 to 13.</a></td>
        <td>Exemption Category value is invalid</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/exemption-domain-invalid/">Exemption Error - {\"frc\":true,\"loc\":{\"ctry\":\"USA\",\"st\":\"NC\",\"zip\":\"27701\"},\"tpe\":1,\"lvl\":1,\"cat\":0,\"dom\":10,\"scp\":0,\"exnb\":true} - Bad data in exemption: Domain value is not a valid numeric tax level.</a></td>
        <td>Exemption Domain value is invalid</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/exemption-scope-invalid/">Exemption Error - {\"frc\":true,\"loc\":{\"ctry\":\"USA\",\"st\":\"NC\",\"zip\":\"27701\"},\"tpe\":1,\"lvl\":1,\"cat\":0,\"dom\":0,\"scp\":10,\"exnb\":true} - Bad data in exemption: Scope value does not represent a supported numeric tax category scope combination.</a></td>
        <td>Exemption Scope value is invalid</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
<h3>LineItem</h3>
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
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/line-item-reference-too-long/">LineNumber cannot exceed 150 characters.</a></td>
        <td>LineItem Reference too long</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/insufficient-from-location/">Invalid From location: Insufficient information provided to determine taxing jurisdiction.</a></td>
        <td>Not enough information to determine a From/Origination location</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/insufficient-to-location/">Invalid To location: Insufficient information provided to determine taxing jurisdiction.</a></td>
        <td>Not enough information to determine a To/Termination location</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/sale-is-required/">Sale is required.</a></td>
        <td>Missing Sale field in LineItem</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/tran-serv-required/">A valid TransactionType and/or ServiceType are required.</a></td>
        <td>Missing Transaction Type or Service Type field in LineItem</td>
      </tr>
      <tr>
        <td>-28</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/tran-serv-invalid/">Invalid transaction/service pair.</a></td>
        <td>Transaction Type or Service Type is invalid</td>
      </tr>
      <tr>
        <td>-28</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/tran-auto-determination-not-supported/">TransactionType does not support auto-determination of ServiceType.</a></td>
        <td>Transaction Type cannot determine an Interstate or Intrastate Service Type</td>
      </tr>
      <tr>
        <td>-28</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/serv-auto-determination-not-supported/">ServiceType does not support auto-determination of TransctionType.</a></td>
        <td>Service Type cannot determine an Interstate or Intrastate Transaction Type</td>
      </tr>
      <tr>
        <td>-48</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/international-auto-determination-not-supported/">Can't determine call type for international calls.</a></td>
        <td>Interstate/Intrastate Determination no valid on cross-border transactions</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/adjustment-method-is-invalid/">AdjustmentMethod is invalid.</a></td>
        <td>Adjustment Method value is invalid</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/discount-type-is-invalid/">DiscountType is invalid.</a></td>
        <td>Discount Type value is invalid</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/line-item-limit/">Total LineItems cannot exceed 10000</a></td>
        <td>Too many LineItems on an invoice</td>
      </tr>
      <tr>
        <td>-1000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/private-line-not-supported/">Exception: The IsPrivateLine parameter is not supported for CalculateTaxInclusiveTaxes.</a></td>
        <td>Private Line functionality not supported on a Tax Inclusive request</td>
      </tr>
      <tr>
        <td>-36</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/private-line-split-invalid/">Split for private line transaction must be greater than or equal to 0 and less than or equal to 1.</a></td>
        <td>Private Line Split value is invalid</td>
      </tr>
      <tr>
        <td>-16</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/one-or-more-line-items-failed/">One or more LineItems failed.</a></td>
        <td>Errors in the request are causing one or more line items to fail</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
<h3>Tax Override</h3>
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
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/tax-override-location-is-required/">Invalid TaxOverride: {\"scp\":0,\"tid\":162,\"lvl\":0,\"lvlExm\":true,\"brkt\":[{\"rate\":0.0,\"max\":2147483647.0}]} - Invalid location for override: Location is null.</a></td>
        <td>Missing location in Tax Override</td>
      </tr>
      <tr>
        <td>-1011</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/invalid-tax-override-location/">Invalid Override: {\"loc\":{\"ctry\":\"USA\",\"st\":\"PA\",\"zip\":\"27701\"},\"scp\":0,\"tid\":162,\"lvl\":0,\"lvlExm\":true,\"brkt\":[{\"rate\":0.0,\"max\":2147483647.0}]} - County/State/Zip not found..</a></td>
        <td>Invalid Tax Override location</td> <!--PLAT-8023 to fix misspelling of "Country" -->
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/insufficient-tax-override-location/">Invalid TaxOverride: {\"loc\":{},\"scp\":0,\"tid\":162,\"lvl\":0,\"lvlExm\":true,\"brkt\":[{\"rate\":0.0,\"max\":2147483647.0}]} - Invalid location for override: Insufficient information provided to determine taxing jurisdiction.</a></td>
        <td>Not enough information to determine a Tax Override location</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/tax-override-scope-is-required/">Invalid TaxOverride: {\"loc\":{\"ctry\":\"USA\",\"st\":\"NC\",\"zip\":\"27701\"},\"tid\":162,\"lvl\":0,\"lvlExm\":true,\"brkt\":[{\"rate\":0.0,\"max\":2147483647.0}]} - Scope is required.</a></td>
        <td>Missing Scope field in Tax Override</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/tax-override-scope-invalid/">Invalid TaxOverride: {\"loc\":{\"ctry\":\"USA\",\"st\":\"NC\",\"zip\":\"27701\"},\"scp\":10,\"tid\":162,\"lvl\":0,\"lvlExm\":true,\"brkt\":[{\"rate\":0.0,\"max\":2147483647.0}]} - Scope is invalid.</a></td>
        <td>Tax Override Scope value is invalid</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/tax-override-tax-type-is-required/">Invalid TaxOverride: {\"loc\":{\"ctry\":\"USA\",\"st\":\"NC\",\"zip\":\"27701\"},\"scp\":3,\"lvl\":0,\"lvlExm\":true,\"brkt\":[{\"rate\":0.0,\"max\":2147483647.0}]} - TaxType is required.</a></td>
        <td>Missing Tax Type field in Tax Override</td>
      </tr>
      <tr>
        <td>-1011</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/tax-override-tax-type-invalid/">Invalid TaxOverride: {\"loc\":{\"ctry\":\"USA\",\"pcd\":2757800,\"st\":\"NC\",\"zip\":\"27701\"},\"scp\":3,\"tid\":999,\"lvl\":0,\"lvlExm\":true,\"brkt\":[{\"rate\":0.0,\"max\":2147483647.0}]} - EZTax failed to insert the override..</a></td>
        <td>Tax Override Tax Type value is invalid for the jurisdiction and tax level</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/tax-override-tax-level-is-required/">Invalid TaxOverride: {\"loc\":{\"ctry\":\"USA\",\"st\":\"NC\",\"zip\":\"27701\"},\"scp\":3,\"tid\":162,\"lvlExm\":true,\"brkt\":[{\"rate\":0.0,\"max\":2147483647.0}]} - TaxLevel is required.</a></td>
        <td>Missing Tax Level field in Tax Override</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/tax-override-tax-level-invalid/">Invalid TaxOverride: {\"loc\":{\"ctry\":\"USA\",\"st\":\"NC\",\"zip\":\"27701\"},\"scp\":3,\"tid\":162,\"lvl\":10,\"lvlExm\":true,\"brkt\":[{\"rate\":0.0,\"max\":2147483647.0}]} - TaxLevel is invalid.</a></td>
        <td>Tax Override Tax Level value is invalid</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/tax-bracket-is-required/">Invalid TaxOverride: {\"loc\":{\"ctry\":\"USA\",\"st\":\"NC\",\"zip\":\"27701\"},\"scp\":3,\"tid\":162,\"lvl\":0,\"lvlExm\":true} - BracketInfo is required.</a></td>
        <td>Missing Tax Bracket in Tax Override</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/tax-bracket-fields-required/">Invalid TaxOverride: {\"loc\":{\"ctry\":\"USA\",\"st\":\"NC\",\"zip\":\"27701\"},\"scp\":3,\"tid\":162,\"lvl\":0,\"lvlExm\":true,\"brkt\":[{}]} - Rate and MaxBase are required in each BracketInfo.</a></td>
        <td>Missing Rate or Max Base in Tax Bracket</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/tax-override-limit/">Number of TaxOverrides cannot exceed 100.</a></td>
        <td>Too many Tax Overrides on a <code>CalcTaxes</code> request</td>
      </tr>
    </tbody>
    </table>
  </div>
  <br/>
  <h3>Safe Harbor Override</h3>
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
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/safe-harbor-type-is-required/">Invalid SafeHarborOverride: {\"old\":0.0,\"new\":0.0} - SafeHarborType is required.</a></td>
        <td>Missing Safe Harbor Type field in Safe Harbor Override</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/original-federal-tam-is-required/">Invalid SafeHarborOverride: {\"sh\":0,\"new\":0.0} - OriginalFederalTam is required.</a></td>
        <td>Missing Original Federal TAM field in Safe Harbor Override</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/new-federal-tam-is-required/">Invalid SafeHarborOverride: {\"sh\":0,\"old\":0.0} - NewFederalTam is required.</a></td>
        <td>Missing New Federal TAM field in Safe Harbor Override</td>
      </tr>
      <tr>
        <td>-42</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/safe-harbor-type-is-invalid/">Invalid SafeHarborOverride: {\"sh\":5,\"old\":0.0,\"new\":0.0} - The Traffic Study Type is Invalid..</a></td>
        <td>Safe Harbor Type value is invalid</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/original-federal-tam-is-invalid/">Invalid SafeHarborOverride: {\"sh\":2,\"old\":64.9,\"new\":0.0} - OriginalFederalTam is invalid.</a></td>
        <td>Original Federal TAM value is invalid</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/new-federal-tam-is-invalid/">Invalid SafeHarborOverride: {\"sh\":2,\"old\":0.649,\"new\":61.0} - NewFederalTam is invalid.</a></td>
        <td>New Federal TAM value is invalid</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/duplicate-safe-harbor-overrides/">Cannot have multiple SafeHarborOverrides for the same safe harbor type.</a></td>
        <td>Only one Safe Harbor Override allowed for each Safe Harbor Type</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/safe-harbor-override-limit/">Number of SafeHarborOverrides cannot exceed 100.</a></td>
        <td>Too many Safe Harbor Overrides on a <code>CalcTaxes</code> request</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
<h3>Location</h3>
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
        <td>-16</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/invalid-location/">County/State/Zip not found.</a></td> <!--PLAT-8023 to fix misspelling of "Country" -->
        <td>Invalid location information</td>
      </tr>
      <tr>
        <td>-12</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/pcode-not-found/">PCode not found.</a></td> 
        <td>Invalid PCode on a location</td>
      </tr>
      <tr>
        <td>-14</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/npanxx-not-found/">NPANXX not found.</a></td> 
        <td>Invalid NPANXX on a location</td>
      </tr>
      <tr>
        <td>-24</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/fips-not-found/">FIPS not found.</a></td> 
        <td>Invalid FIPS code on a location</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>
<h3>Optional Fields</h3>
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
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/optional-field-limit/">Number of OptionalField elements in LineItem cannot exceed 10.</a></td>
        <td>Too many Optional Field elements included in the request</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/unique-optional-field-key/">Key in OptionalFields must be unique.</a></td>
        <td>Duplicate key used in multiple Optional Fields</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/numeric-optional-field-key/">Key in OptionalFields must have a numeric value between 1 and 10.</a></td>
        <td>Optional Field key must be a number between 1 and 10</td>
      </tr>
      <tr>
        <td>-2000</td>
        <td><a class="dev-guide-link" href="/communications/dev-guide_rest_v2/reference/calculate-tax-errors/optional-field-value-too-long/">OptionalField values cannot exceed 150 characters.</a></td>
        <td>Optional Field value contains too many characters</td>
      </tr>
    </tbody>
  </table>
</div>
<br/>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_rest_v2/reference/general-errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_rest_v2/calculating-tax-offline/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>