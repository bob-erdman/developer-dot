---
layout: default
title: AvaTax Extractor Badge Requirements
product: avaTax
doctype: integration_checklists
---
 <div class="row padding-top padding bottom">
    <div class="col-sm-2">
      <img src="/public/images/devdot/badges/Extractor.png" class="img-responsive" alt="Avalara Certified Solution">
    </div>
    <div class="col-sm-8 padding-top">
      <h2>Avalara Extractor Badge</h2>      
      <hr>
        <h3>Requirements</h3>  
        <!-- section -->
        <h5>Authenticate to AvaTax & Select Company - <em>Required</em></h5> 
        <p class="badgerequirement"> 
           Should provide Account ID and License Key input fields. Once those are input should do a   <a target="_blank" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Companies/QueryCompanies/">GET companies request</a>and surface existing companies within account, allowing using to select the company they want to interface with. Should also provide toggle between sandbox and production environments.
        </p>
        <p class="badgerequirement">
            Demonstrate results in source system based upon different input parameters required for a basic transaction.
        </p>
        <!-- section -->
        <h5>Extract required data from platform for specified date range  - <em>Required</em></h5>
        <p class="badgerequirement">
            Should provide an interface for user to choose date range of transactions to extract. Transactions within the selected range should then be extracted along with all required details.
        </p>
        <!-- section -->
        <h5>Transform Data into Batch Import format - <em>Required</em></h5>
        <p class="badgerequirement">
            Extracted transactional data should be transformed into CSV form and conform to the <a target="_blank" href="https://help.avalara.com/000_Avalara_AvaTax/Add_or_Import_Transactions#tab=login">AvaTax Transaction Import format</a>. Must use Process Code 2.
        </p>
        <!-- section -->
        <h5>Transmit file via BatchSVC API - <em>Required</em></h5>
        <p class="badgerequirement">
            Should send the extracted data to the account after it has been formatted via a <a target="_blank" href="https://developer.avalara.com/api-reference/avatax/rest/v2/methods/Batches/CreateBatches/">Batch SVC request</a>.
        </p>
        <!-- section -->
        <h5>Display post transmission page with deep link to AvaTax import status - <em>Suggested</em></h5>
        <p class="badgerequirement">
            Suggested to display a post transmission page linking to the customer's account and company page for reviewing imports in our UI.
        </p>
        <p class="badgerequirement">
            <ul class="normal">
                <li>URL for production: https://admin.avalara.com/cup/a/{ACCOUNT_ID}/c/{COMPANY_ID}/transaction-batches</li>
                <li>URL for sandbox: https://sandbox.admin.avalara.com/cup/a/{ACCOUNT_ID}/c/{COMPANY_ID}/transaction-batches</li>
            </ul>
        </p>
    </div>
</div>
