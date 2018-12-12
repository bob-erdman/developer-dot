---
layout: default
title: AvaTax Communications Badge Requirements
product: avaTax
doctype: integration_checklists
---
 <div class="row padding-top padding bottom">
    <div class="col-sm-2">
      <img src="/public/images/devdot/badges/Comms.png" class="img-responsive" alt="Avalara Certified Solution">
    </div>
    <div class="col-sm-8 padding-top">
      <h2>Avalara Communications Badge</h2>
      <!--<h3>Do we want to say anything here?</h3>-->
      
      <hr>
        <h3>Administration/Utilities Requirements</h3>
                        
            <h5>Validate specific data in transactional inputs - <em>Required</em></h5>
                <p class="badgerequirement">Submit transactions with required data values. For example, ability to calculate taxes using API call and get correct tax results.</p>
                <p class="badgerequirement">Demonstrate in souce system how each of the input values are configured and passed to the API fields.
                    <ul class="normal">
                    <li><h3>System level settings</h3></li>
                        <ul class="normal">
                            <li>Account/Key - API access tokens</li>
                            <li>Client ID - Required</li>
                            <li>Profile - this allows Sellers / Operators to override the default bahavior of Avalara and use a custom tax profile - <b>Suggested</b></li>
                        </ul>
                    <li><h3>Company or Seller Level Settings</h3></li>
                        <ul class="normal">
                            <li>Company Identifier - This value identifies the Seller / Separate Legal Entity / Division / etc.</li>
                            <li>Service Class: Primary Local or Primary Long Distance</li>
                            <li>Business Class: ILEC, CLEC, or Other</li>
                            <li>Facilities Based</li>
                            <li>Franchise</li>
                        </ul>
                    <li><h3>Customer or Buyer Level Settings</h3></li>
                        <ul class="normal">
                            <li>Sale Type - Retail or Wholesale</li>
                            <li>Customer Type: Business, Residential, Industrial, Senior Citizen</li>
                            <li>Lifeline</li>
                            <li>Exemptions</li>
                        </ul>
                    <li><h3>Transaction Level Settings</h3></li>
                        <ul class="normal">
                            <li>Company Identifier - Depends on use case if this value is required</li>
                            <li>T/S Pairs</li>
                            <li>Bundles</li>
                        </ul>
                    </ul>
                </p>
                <p class="badgerequirement">Demonstrate results in source system based upon different input parameters required for a basic transaction.</p>
            
            <h5>Validate process to determine Jurisdiction(s) - <em>Required</em></h5>
                <p class="badgerequirement">You should be able to obtain correct Pcode for the jurisdiction. For example, ability to obtain correct Pcode using Location lookup APIs.<br>
                Provide the ability to set the Incorporated/Unincorporated status of Locations.
                </p>
            
            <h5>Validate ability to associate materials/products to Transaction Service type pair (T/S pair) - <em>Required</em></h5>
                <p class="badgerequirement">You should be able to run a transaction with valid AFC T/S pair.<br>
                How AFC T/S pairs are aligned to material/product in source system.
                </p>

            <h5>Validate Adjustment handling - <em>Required</em></h5>
                <p class="badgerequirement">Ability to use an adjustment call for a normal transaction.</p>
                <p class="badgerequirement">Ability to apply adjustment call for current/previous month transactions.</p>
                <p class="badgerequirement">You should be able to submit adjustment transactions. For example, ability to apply adjustments using API call and get correct tax results.</p>
                <p class="badgerequirement">Pre API call setup and display adjustment results in source system.
                </p>
                
            <h5>Validate Exemption handling - <em>Required</em></h5>
                <p class="badgerequirement">Ability to handle specific exemptions</p>
                <p class="badgerequirement">Ability to handle category exemptions</p>
                
            <h5>Ability to handle level exemptions - <em>optional</em><br></h5>
                <p class="badgerequirement">You should be able to submit transactions with exemption information for Level, category, and specific exemption. The results should reflect the exempted taxes.</p>
                <p class="badgerequirement">Display Pre API setup and execute transaction without exemption, displaying results in originating system.</p>
                <p class="badgerequirement">Display Pre API setup with level exemptions and execute transaction, displaying results in originating system.</p>
                <p class="badgerequirement">Display Pre API setup with specify exemptions and execute transaction, displaying results in originating system.</p>
                <p class="badgerequirement">Display Pre API setup with category exemptions and execute transaction, displaying results in originating system.</p>
                
            <h5>Validate Invoices/Transactions get committed - <em>Required</em></h5>
                <p class="badgerequirement">Validate invoices/transactions are identified by DocumentCode</p>
                <p class="badgerequirement">Validate the related / unrelated flag gets set appropriately</p>
                <p class="badgerequirement">Validate fact patterns</p>

            <h5>Validate ability to pass a single channel line and a multi-channel line - <em>Required</em></h5>
                <p class="badgerequirement">Ability to pass following line transactions together for system to return taxes.<br>
                Local/PBX Trunk, Local/PBX Extension, Local/PBX outbound channel.</p>
                <p class="badgerequirement">Ability to pass following Trunk transactions together<br>
                Local/Centrex/DID Extension, Local/Centrex Trunk, Local/Centrex, outbound Channel.</p>
                <p class="badgerequirement">Ability to pass following channel transactions together<br>
                Local/High Capacity Trunk Bundle, Local/High Capacity Extension Bundle,Local/High Capacity Outbound Channel Bundle.</p>
                <p class="badgerequirement">Display API set and execute transaction, showing results in source system.
                </p>
                
            <h5>Validate ability to treat common AFC returned exceptions - <em>Required</em></h5>
                <p class="badgerequirement">Invalid Address<br>
                No Jurisdiction found<br>
                Ability to distinguish between these exceptions and how to handle these:<br>
                Display error code
                </p>
      