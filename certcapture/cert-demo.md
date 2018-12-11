---
layout: default
product: certCapture
nav: apis
doctype: overview
---
<!-- TODO: consistent naming -->
<!-- TODO: move inline CSS to cert-demo.scss -->
<h1>CertCapture Demo</h1>
<!-- TODO: instructions -->
<p>Hi! I will be filled with instructions soon, so you can understand what this page does.</p>
<!-- TODO: is outer div needed? -->
<div id="gencert_test" class="">
    <hr style="margin: 20px 0px 20px 0px" id="divider">
    <div class="row">
        <div class="col-md-5">
            <h3>Step 1: Setup</h3>
            <p>INSTRUCTIONS</p>
            <div class="">
                <label style="display: block;">
                    GenCert URL *
                    <input id="gencert_url_script" value="https://app.certcapture.com/Gencert2/js" placeholder="https://app.certcapture.com/Gencert2/js" type="text">
                </label>
                <!-- TODO: update script when clicked -->
                <!-- populated with exposureZoneReq() -->
                <label>Exposure Zone *
                    <select id="set_zone"></select>
                </label>
            </div> 
            <h3>Step 2: Get your token</h3>
            <p>INSTRUCTIONS</p>
            <table>
                <tr>
                    <label>API URL
                    <input id="api_url" placeholder="https://api.certcapture.com" value="https://api.certcapture.com" type="text"></label>
                </tr>
                <tr>
                    <td><input id="api_user" class="" placeholder="API User Name" type="text"></td>
                    <td><input id="api_password" class="" placeholder="API Password" type="password"></td> 
                </tr>
                <tr>
                    <td><input id="token_client_id" class="" placeholder="Client ID" type="text"></td>
                    <td><input id="token_customer_number" class="" placeholder="Customer Number" type="text"></td>
                </tr>
            </table>
            <!-- TODO: works -->
            <!-- TODO: populate submit script -->
            <button class="btn btn-primary" style="margin-top: 10px;" onclick="get_token()">Get Token</button>
            <!-- options -->
            <!-- TODO: populates script when clicked -->
            <!-- TODO: instructions -->
            <!-- TODO: checkbox spacing -->
            <h3>Step 3: Select your options</h3>
            <p>INSTRUCTIONS</p>
            <div class="" style="">
                <ul id="test_options">
                    {% for option in site.data.demo_page.cert-options %}
                        <li>
                            <label>
                                <input type='checkbox' id="{{ option.id }}">{{ option.label }}
                            </label>
                        </li>
                    {% endfor %}
                </ul>
            </div>
        </div>
        <!-- response output -->
        <!-- TODO: automagically updated token-->
        <!-- TODO: allow user to input token; see createTransaction pg -->
        <!-- TODO: pretty script -->
        <div class="col-md-7">
            <h3 style="">Step 4: Submit your script</h3>
            <div id="script_test" class="  ">
                <div id="sample_script" class="code-snippet respScroll api-console-output" style="height: 400px;max-width: 800px;">
                    <div class="loading-pulse" style="display: none;"></div>
                    <pre id="demo-console-output" style="">{ }</pre>
                </div>
                <button class="btn btn-primary" id="gencert2_button" onclick="init_script();">Submit</button>
            </div>
        </div>
    </div>
    <!-- end row -->
</div>
<!-- end container -->

<!-- Form ouput -->
<!-- TODO: formatting/styling -->
<div id="form_parent_container">
    <div id="form_parent" style="display:none"></div>
</div>
