---
layout: default
title: CertCapture Demo
product: certCapture
nav: apis
doctype: overview
---
<div id="gencert_test">
    <div class="p5">
        <div>
            <label><strong>GenCert URL *</strong></label>
        </div>
        <input id="gencert_url" value="http://dev.certcapture.com/Gencert2/js" placeholder="https://beta.certcapture.com/Gencert2/js" type="text">
    </div> 
    <div class="p5">
        <div>
            <label><strong>Exposure Zone *</strong></label>
        </div>
        <select id="set_zone">
        </select>
</div>
<!-- Accordian section -->
<div>
    <button class="accordion" id="default_panel">VERSION 3</button>
    <div class="panel" style="display:block;">
        <div >
        <input id="token" placeholder="Token *" type="text">
        </div>
        <div>
            <input id="api_url" class="tm10" placeholder="API URL" placeholder="https://beta-api.certcapture.com/v2/auth/get-token" value="http://dev.api.certcapture.com/v2/auth/get-token" type="text">
            <input id="api_user" class="tm10" placeholder="API User Name" type="text">
            <input id="api_password" class="tm10" placeholder="API Password" type="password">
        </div>
        <div>
            <input id="token_client_id" class="tm10" placeholder="Client ID" type="text">
            <input id="token_customer_number" class="tm10" placeholder="Customer Number" type="text">
        </div>
        <button class="tm10 mb20 inverted_button" onclick="get_token()">Get Token</button>
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
        <table id="test_options">
            <tr>
                <td><label>Edit Purchaser</label></td><td><input type='checkbox' id="edit_purchaser"></td>
            </tr>
            <tr>
                <td><label>Show Files</label></td><td><input type='checkbox' id="show_files"></td>
            </tr>
            <tr>
                <td><label>Submit To Stack</label></td><td><input type='checkbox' id="submit_to_stack"></td>
            </tr>
            <tr>
                <td><label>Preview</label></td><td><input type='checkbox' id="preview"></td>
            </tr>
            <tr>
                <td><label>Upload Only</label></td><td><input type='checkbox' id="upload_only"></td>
            </tr>
            <tr>
                <td><label>Fill Only</label></td><td><input type='checkbox' id="fill_only"></td>
            </tr>
            <tr>
                <td><label>Customer List</label></td><td><input type='checkbox' id="customer_list"></td>
            </tr>
            <tr>
                <td><label>Append Barcode</label></td><td><input type='checkbox' id="append_barcode"></td>
            </tr>
            <tr>
                <td><label>Upload If Form Unavailable</label></td><td><input type='checkbox' id="upload_form_unavailable"></td>
            </tr>
        </table>
    </div>
    <div>
        <button class='mb20 tm10' class="btn btn-default" id="gencert2_button" onclick="init_api();">Load GenCert 2.0</button>
    </div>
</div>
<hr style="margin: 20px 0px 20px 0px" id="divider">
<div id="script_test" class="p5">
    <div class="mb20">
        <label><strong>Load Example Script (V3 Only)</strong></label>
    </div>
    <div class="mb20">
    <div>
        <label><strong>GenCert URL</strong></label>
    </div>
    <input id="gencert_url_script" value="http://dev.certcapture.com/Gencert2/js" placeholder="https://beta.certcapture.com/Gencert2/js" type="text">
    </div>
    <textarea id="sample_script" style="width: 100%; max-width: 800px; height: 400px"></textarea>
    <div>
        <button class='mb20 tm10' class="btn btn-default" id="gencert2_button" onclick="init_script();">Load Script</button>
    </div>
</div>
<div id="form_parent_container">
    <div id="form_parent" style="display:none"></div>
</div>

