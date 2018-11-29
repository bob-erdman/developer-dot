---
layout: default
product: certCapture
nav: apis
doctype: overview
---
<script language="php" src="">

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://beta-api.certcapture.com/v2/states");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($ch, CURLOPT_HEADER, FALSE);
        curl_setopt ($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt ($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        "x-client-id: 444",
        "Authorization: Basic " . base64_encode('api-test:api-test'),
        ));
        $response = curl_exec($ch);
        $response = json_decode($response);
        $exposure_zones = $response->data;
        curl_close($ch);
        
</script>
<h1>CertCapture Demo</h1>
<p>Hi! I will be filled with instructions soon, so you can understand what this page does.</p>
<div id="gencert_test" class="">
    <hr style="margin: 20px 0px 20px 0px" id="divider">
    <!-- V3 section -->
    <div class="row">
        <div class="col-md-5">
            <h3>Step 1: Setup</h3>
            <p>INSTRUCTIONS</p>
            <div class="">
                <label style="display: block;">
                    GenCert URL *
                    <input id="gencert_url" value="https://app.certcapture.com/Gencert2/js" placeholder="https://app.certcapture.com/Gencert2/js" type="text">
                </label>
                <label>Exposure Zone *
                    <select id="set_zone">
                        <option value="Washington">Washington</option>
                        <option value="RhodeIsland">Rhode Island</option>
                    </select>
                </label>
            </div> 
            <h3>Step 2: Get your token</h3>
            <p>INSTRUCTIONS</p>
            <table>
                <tr>
                    <label>API URL
                    <input id="api_url" class=" " placeholder="API URL" placeholder="https://api.certcapture.com" value="https://api.certcapture.com" type="text"></label>
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
            <button class="btn btn-primary" style="margin-top: 10px;" onclick="get_token()">Get Token</button>
            <!-- option -->
            <!-- TODO: make data file, do for loop for this -->
            <h3>Step 3: Select your options</h3>
            <p>INSTRUCTIONS</p>
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
        <!-- TODO: automagically updated token-->
        <!-- TODO: allow user to input token; see createTransaction pg -->
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
<div id="form_parent_container">
    <div id="form_parent" style="display:none"></div>
</div>

<script>
    var sampleScript = "GenCert.init( document.getElementById( 'form_container' ), { \n  ship_zone: 'California', \n  token: '', \n  edit_purchaser: true \n}); \nGenCert.show();";
    document.getElementById( 'sample_script' ).value = sampleScript;
    
    document.getElementById( 'client_id' ).value = "";
    document.getElementById( 'customer_number' ).value = "";
    
    var clist = document.getElementsByClassName( "checkbox" );
    for (var j = 0; j < clist.length; j++) { 
      clist[j].checked = false; 
    }
    
    document.getElementById( "default_panel" ).click();
</script>
