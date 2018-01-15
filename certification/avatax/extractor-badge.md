---
layout: default
title: AvaTax Extractor Badge Requirements
product: avaTax
doctype: integration_checklists
---
 <div class="row padding-top padding bottom">
    <div class="col-sm-2">
      <img src="/public/images/devdot/badges/Extractor.svg" class="img-responsive" alt="Avalara Certified Solution">
    </div>
    <div class="col-sm-8 padding-top">
      <h2>Avalara AvaTax Extractor Badge Requirements</h2>
      <!--<h3>Do we want to say anything here?</h3>-->
      <hr>
      <!--Creating tab for the Sales Tax Extractor Requirements -->
        <ul class="nav nav-tabs">
          <li class="active"><a data-toggle="tab" href="#salesTax"><h4>Sales Tax</h4></a></li>
          <li><a data-toggle="tab" href="#useTax"><h4>Use Tax</h4></a></li>
          <li><a data-toggle="tab" href="#trustFile"><h4>TrustFile</h4></a></li>
        </ul>
        
        <div class="tab-content">
          <div id="salesTax" class="tab-pane fade in active">
                <h3>Sales Tax Extractor Requirements</h3>
                <h5>Disable address validation option - <em>Required</em></h5>
                    <p class="badgerequirement">The Seller should be able to disable or enable address validations in the config screen.</p>
                    
                
                <hr>
                
                <h3>Address Validation Touchpoints</h3>
                    <h5>Send required header level data elements - <em>Required</em></h5>
                        <p class="badgerequirement">Destination Address<br>
                        Origin Address</p>
                    
                    
                <hr>
                
                <h3>Server Audit Clarity</h3>
                    <h5>Pass connector identifier information via the TaxSvc.Profile.Client property   - <em>Required</em></h5>
                        <p class="badgerequirement">Integrations must include information about the connector, such as name, version, and company name, as a signature to each transaction. EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</p>
          </div>
          <div id="useTax" class="tab-pane fade">
                <h3>Use Tax Extractor Requirements</h3>
                <h5>Disable address validation option - <em>Required</em></h5>
                    <p class="badgerequirement">The Seller should be able to disable or enable address validations in the config screen.</p>
                    
                
                <hr>
                
                <h3>Address Validation Touchpoints</h3>
                    <h5>Send required header level data elements - <em>Required</em></h5>
                        <p class="badgerequirement">Destination Address<br>
                        Origin Address</p>
                    
                    
                <hr>
                
                <h3>Server Audit Clarity</h3>
                    <h5>Pass connector identifier information via the TaxSvc.Profile.Client property   - <em>Required</em></h5>
                        <p class="badgerequirement">Integrations must include information about the connector, such as name, version, and company name, as a signature to each transaction. EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</p>
          </div>
          <div id="trustFile" class="tab-pane fade">
                <h3>TrustFile Extractor Requirements</h3>
                <h5>Disable address validation option - <em>Required</em></h5>
                    <p class="badgerequirement">The Seller should be able to disable or enable address validations in the config screen.</p>
                    
                
                <hr>
                
                <h3>Address Validation Touchpoints</h3>
                    <h5>Send required header level data elements - <em>Required</em></h5>
                        <p class="badgerequirement">Destination Address<br>
                        Origin Address</p>
                    
                    
                <hr>
                
                <h3>Server Audit Clarity</h3>
                    <h5>Pass connector identifier information via the TaxSvc.Profile.Client property   - <em>Required</em></h5>
                        <p class="badgerequirement">Integrations must include information about the connector, such as name, version, and company name, as a signature to each transaction. EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</p>
          </div>
        </div>

<hr>

<h3>Accordian style</h3>
    <div class="panel-group" id="accordion">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
            Sales Tax Extractor Requirements</a>
          </h4>
        </div>
        <div id="collapse1" class="panel-collapse collapse in">
                  <h3>Administration/Utilities Integration</h3>
            <h5>Disable address validation option - <em>Required</em></h5>
                <p class="badgerequirement">The Seller should be able to disable or enable address validations in the config screen.</p>
                
            
        <hr>
        
        <h3>Address Validation Touchpoints</h3>
            <h5>Send required header level data elements - <em>Required</em></h5>
                <p class="badgerequirement">Destination Address<br>
                Origin Address</p>
            
            
        <hr>
        
        <h3>Server Audit Clarity</h3>
            <h5>Pass connector identifier information via the TaxSvc.Profile.Client property   - <em>Required</em></h5>
                <p class="badgerequirement">Integrations must include information about the connector, such as name, version, and company name, as a signature to each transaction. EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</p>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
            Use Tax Extractor Requirements</a>
          </h4>
        </div>
        <div id="collapse2" class="panel-collapse collapse">
                  <h3>Administration/Utilities Integration</h3>
            <h5>Disable address validation option - <em>Required</em></h5>
                <p class="badgerequirement">The Seller should be able to disable or enable address validations in the config screen.</p>
                
            
        <hr>
        
        <h3>Address Validation Touchpoints</h3>
            <h5>Send required header level data elements - <em>Required</em></h5>
                <p class="badgerequirement">Destination Address<br>
                Origin Address</p>
            
            
        <hr>
        
        <h3>Server Audit Clarity</h3>
            <h5>Pass connector identifier information via the TaxSvc.Profile.Client property   - <em>Required</em></h5>
                <p class="badgerequirement">Integrations must include information about the connector, such as name, version, and company name, as a signature to each transaction. EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</p>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
            TrustFile Extractor Requirements</a>
          </h4>
        </div>
        <div id="collapse3" class="panel-collapse collapse">
                  <h3>Administration/Utilities Integration</h3>
            <h5>Disable address validation option - <em>Required</em></h5>
                <p class="badgerequirement">The Seller should be able to disable or enable address validations in the config screen.</p>
                
            
        <hr>
        
        <h3>Address Validation Touchpoints</h3>
            <h5>Send required header level data elements - <em>Required</em></h5>
                <p class="badgerequirement">Destination Address<br>
                Origin Address</p>
            
            
        <hr>
        
        <h3>Server Audit Clarity</h3>
            <h5>Pass connector identifier information via the TaxSvc.Profile.Client property   - <em>Required</em></h5>
                <p class="badgerequirement">Integrations must include information about the connector, such as name, version, and company name, as a signature to each transaction. EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</p>
        </div>
      </div>
    </div>


        <h3>Administration/Utilities Integration</h3>
            <h5>Disable address validation option - <em>Required</em></h5>
                <p class="badgerequirement">The Seller should be able to disable or enable address validations in the config screen.</p>
                
            
        <hr>
        
        <h3>Address Validation Touchpoints</h3>
            <h5>Send required header level data elements - <em>Required</em></h5>
                <p class="badgerequirement">Destination Address<br>
                Origin Address</p>
            
            
        <hr>
        
        <h3>Server Audit Clarity</h3>
            <h5>Pass connector identifier information via the TaxSvc.Profile.Client property   - <em>Required</em></h5>
                <p class="badgerequirement">Integrations must include information about the connector, such as name, version, and company name, as a signature to each transaction. EXAMPLE: TaxSvc.Profile.Client = “Dynamics AX,9.0,MyApp for AX by ACME INC,1.0”</p>