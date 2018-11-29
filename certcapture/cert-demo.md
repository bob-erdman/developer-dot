---
layout: default
product: certCapture
nav: apis
doctype: overview
---
<h1>CertCapture Demo</h1>
<!-- Options container -->
<div id="gencert_test" class="col-md-6">
    <div class="p5" style="display: inline-block;">
        <label>GenCert URL *</label>
        <input id="gencert_url" value="http://dev.certcapture.com/Gencert2/js" placeholder="https://beta.certcapture.com/Gencert2/js" type="text">
        <label>Exposure Zone *</label>
        <select id="set_zone"></select>
    </div> 
    <!-- Accordian section -->
    <div>
        <button class="accordion" id="default_panel">VERSION 3</button>
        <div class="panel" style="display:block;">
            <div >
                <input id="token" placeholder="Token *" type="text">
                <input id="api_url" class="tm10" placeholder="API URL" placeholder="https://beta-api.certcapture.com/v2/auth/get-token" value="http://dev.api.certcapture.com/v2/auth/get-token" type="text">
            </div>
            <div>
                <input id="api_user" class="tm10" placeholder="API User Name" type="text">
                <input id="api_password" class="tm10" placeholder="API Password" type="password">
            </div>
            <div>
                <input id="token_client_id" class="tm10" placeholder="Client ID" type="text">
                <input id="token_customer_number" class="tm10" placeholder="Customer Number" type="text">
            </div>
            <button class="btn btn-primary" style="margin-top: 10px;" onclick="get_token()">Get Token</button>
        </div>
    </div>
    <button class="accordion">VERSION 2</button>
    <div class="panel" style="display: none;">
        <input id="client_id" class="tm10" placeholder="Client ID *" type="text">
        <input id="key" class="tm10" placeholder="GenCert Key *" type="text">
        <input id="customer_number" class="tm10 mb20" placeholder="Customer Number *" type="text" class="mb20">
    </div>
    <button class="accordion">OPTIONS</button>
    <div class="panel" style="display: none;">
        <ul id="test_options">
            <li>
                <input type='checkbox' id="edit_purchaser">
                <label>Edit Purchaser</label>
            </li>
            <li>
                <input type='checkbox' id="show_files">
                <label>Show Files</label>
            </li>
            <li>
                <input type='checkbox' id="submit_to_stack">
                <label>Submit To Stack</label>
            </li>
            <li>
                <input type='checkbox' id="preview">
                <label>Preview</label>
            </li>
            <li>
                <input type='checkbox' id="upload_only">
                <label>Upload Only</label>
            </li>
            <li>
                <input type='checkbox' id="fill_only">
                <label>Fill Only</label>
            </li>
            <li>
                <input type='checkbox' id="customer_list">
                <label>Customer List</label>
            </li>
            <li>
                <input type='checkbox' id="append_barcode">
                <label>Append Barcode</label> 
            </li>
            <li>
                <input type='checkbox' id="upload_form_unavailable">
                <label>Upload If Form Unavailable</label>
            </li>
        </ul>
    </div>
    <button class="btn btn-primary" id="gencert2_button" style="margin-top: 10px;" onclick="init_api();">Load GenCert 2.0</button>
</div>
<!-- Output section -->
<div class="col-md-6">
    <h2 style="margin-top: 0">Load V3 Example Script</h2>
    <div id="script_test" class="p5">
        <label>GenCert URL</label>
        <input id="gencert_url_script" value="http://dev.certcapture.com/Gencert2/js" placeholder="https://beta.certcapture.com/Gencert2/js" type="text">
        <div id="sample_script" class="code-snippet respScroll api-console-output" style="height: 400px;">
            <div class="loading-pulse" style="display: none;"></div>
            <pre id="demo-console-output" style="height: 400px">{ }</pre>
        </div>
        <button class="btn btn-primary" id="gencert2_button" onclick="init_script();">Load Script</button>
    </div>
</div>

<!-- Form ouput -->
<div id="form_parent_container">
    <div id="form_parent" style="display:none"></div>
</div>

