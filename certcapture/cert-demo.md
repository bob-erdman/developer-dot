---
layout: default
product: certCapture
nav: apis
doctype: overview
---
<h1>CertCapture Demo</h1>
<p>Hi! I will be filled with instructions soon, so you can understand what this page does.</p>
<div id="gencert_test" class="">
    <div class="row" style="display: inline-block;">
        <select class="form-control" id="req-type" style="display: inline;width: 100px;">
            <option value="v3">Version 3</option>
            <option value="v2">Version 2</option>
        </select>
        <label>GenCert URL *</label>
        <input id="gencert_url" value="http://dev.certcapture.com/Gencert2/js" placeholder="https://beta.certcapture.com/Gencert2/js" type="text">
        <label>Exposure Zone *</label>
        <select id="set_zone"></select>
    </div> 
    <hr style="margin: 20px 0px 20px 0px" id="divider">
    <!-- V3 section -->
    <div class="row">
        <div class="col-md-3">
            <h3>Step 1: Enter your customer info (Required)</h3>
            <div>
                <input id="token" placeholder="Token *" type="text">
                <input id="api_url" class=" " placeholder="API URL" placeholder="https://beta-api.certcapture.com/v2/auth/get-token" value="http://dev.api.certcapture.com/v2/auth/get-token" type="text">
            </div>
            <div>
                <input id="api_user" class="" placeholder="API User Name" type="text">
                <input id="api_password" class="" placeholder="API Password" type="password">
            </div>
            <div>
                <input id="token_client_id" class="" placeholder="Client ID" type="text">
                <input id="token_customer_number" class="" placeholder="Customer Number" type="text">
            </div>
            <button class="btn btn-primary" style="margin-top: 10px;" onclick="get_token()">Get Token</button>
            <!-- option -->
            <!-- TODO: make data file, do for loop for this -->
            <h3>Step 2: Select your options</h3>
            <div class="" style="">
                <ul id="test_options">
                    <li>
                        <label>
                            <input type='checkbox' id="edit_purchaser">Edit Purchaser
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type='checkbox' id="show_files">Show Files
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type='checkbox' id="submit_to_stack">Submit To Stack
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type='checkbox' id="preview">Preview
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type='checkbox' id="upload_only">Upload Only
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type='checkbox' id="fill_only">Fill Only
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type='checkbox' id="customer_list">Customer List
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type='checkbox' id="append_barcode">Append Barcode
                        </label> 
                    </li>
                    <li>
                        <label>
                            <input type='checkbox' id="upload_form_unavailable">Upload If Form Unavailable
                        </label>
                    </li>
                </ul>
            </div>
        </div>
        <!-- response output -->
        <div class="col-md-9">
            <h3 style="">Step 3: Load your example response</h3>
            <div id="script_test" class="  ">
                <div id="sample_script" class="code-snippet respScroll api-console-output" style="height: 400px;">
                    <div class="loading-pulse" style="display: none;"></div>
                    <pre id="demo-console-output" style="height: 400px">{ }</pre>
                </div>
                <button class="btn btn-primary" id="gencert2_button" onclick="init_script();">Load script</button>
            </div>
        </div>
    </div>
    <hr style="margin: 20px 0px 20px 0px" id="divider">
</div>

<!-- Form ouput -->
<div id="form_parent_container">
    <div id="form_parent" style="display:none"></div>
</div>

