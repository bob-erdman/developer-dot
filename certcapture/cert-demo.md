---
layout: default
product: certCapture
nav: apis
doctype: overview
---
<script language="php" src="">
    // TODO: translate to JS
    // TODO: move to diff file
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

    // TODO: translate to JS
    // TODO: move to diff file
    function callapi() {
        $headers = apache_request_headers();
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $headers['api-url']);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($ch, CURLOPT_HEADER, FALSE);
        curl_setopt($ch, CURLOPT_POST, TRUE);
        curl_setopt($ch, CURLOPT_VERBOSE, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            "x-client-id: " . $headers['x-client-id'],
            "x-customer-number: " . $headers['x-customer-number'],        
            "Authorization: Basic " . base64_encode( $headers['api-user'] . ":" . $headers['api-password'] ),
            "Content-Length: 0"
        ));
    
        $response = curl_exec($ch);
        curl_close($ch);
        echo $response
    } 
</script>
<script language="javascript">
    function init_api()
{

    if ( document.getElementById( 'gencert_url' ).value == "" ) {
        alert( 'Enter a GenCert URL.' );
        return;
    }

    var sel  = document.getElementById( "set_zone" );
    var zone = sel.options[ sel.selectedIndex ].text;
    var form_element = document.getElementById( 'form_container' );
    form_element.className = "";
    var randomString = Math.random().toString(36).substring(7);

    if ( document.getElementById( 'client_id' ).value != "" ) {

        if ( document.getElementById( 'key' ).value == "" ) {
            alert( 'Enter a gencert key.' );
            return;
        }

        if ( document.getElementById( 'customer_number' ).value == "" ) {
            alert( 'Enter a customer number.' );
            return;
        }

        var script = document.createElement( 'script' );
        script.onload = function () {

            GenCert.init(form_element,
                {
                    customer_number: document.getElementById( 'customer_number' ).value,
                    ship_zone: zone
                });
            set_options();

        };
        script.src = document.getElementById( 'gencert_url' ).value + "/Gencert2/js?cid=" + document.getElementById( 'client_id' ).value + "&key=" + document.getElementById( 'key' ).value+'&'+randomString;
        document.head.appendChild( script );
    }
    else if ( document.getElementById( 'token' ).value != "" ) {
        var script = document.createElement( 'script' );
        script.onload = function () {

            GenCert.init(form_element,
                {
                    token: document.getElementById( 'token' ).value,
                    ship_zone: zone
                });
            set_options();

        };
        script.src = document.getElementById( 'gencert_url' ).value + "/Gencert2/js"+'&'+randomString;
        document.head.appendChild( script );
    }
    else {
        alert( 'Please provide some information to get started.' );
    }

    function set_options() {
        GenCert.__setOption( 'edit_purchaser', document.getElementById( 'edit_purchaser' ).checked );
        GenCert.__setOption( 'show_files', document.getElementById( 'show_files' ).checked );
        GenCert.__setOption( 'submit_to_stack', document.getElementById( 'submit_to_stack' ).checked );
        GenCert.__setOption( 'preview', document.getElementById( 'preview' ).checked );
        GenCert.__setOption( 'upload_only', document.getElementById( 'upload_only' ).checked );
        GenCert.__setOption( 'fill_only', document.getElementById( 'fill_only' ).checked );
        GenCert.__setOption( 'customer_list', document.getElementById( 'customer_list' ).checked );
        GenCert.__setOption( 'append_barcode', document.getElementById( 'append_barcode' ).checked );
        GenCert.__setOption( 'upload_form_unavailable', document.getElementById( 'upload_form_unavailable' ).checked );

        GenCert.show();
        document.getElementById( 'gencert_test' ).style.display = 'none';
        document.getElementById( 'divider' ).style.display = 'none';
        document.getElementById( 'script_test' ).style.display = 'none';
    }
}

function init_script() {

    if ( document.getElementById( 'gencert_url_script' ).value == "" ) {
        alert( 'Enter a GenCert URL.' );
        return;
    }

    if ( document.getElementById( 'sample_script' ).value == "" ) {
        alert( 'Enter some valid javascript.' );
        return;
    }

    var script = document.createElement( 'script') ;
    script.onload = function () {
      
        try {
            eval( document.getElementById( 'sample_script' ).value );
        } 
        catch ( e ) {
            if ( e instanceof SyntaxError ) {
                alert( e.message );
            }
        }
        document.getElementById( 'gencert_test' ).style.display = 'none';
        document.getElementById( 'divider' ).style.display      = 'none';
        document.getElementById( 'script_test' ).style.display  = 'none';
        
    };
    
    // TODO: add random string to end
    script.src = document.getElementById( 'gencert_url_script' ).value + "/Gencert2/js";
    document.head.appendChild( script );
}

    function get_token() {

    if ( document.getElementById( 'api_url' ).value == "" ||  
         document.getElementById( 'api_user' ).value == "" || 
         document.getElementById( 'api_password' ).value == "" || 
         document.getElementById( 'token_client_id' ).value == "" || 
         document.getElementById( 'token_customer_number' ).value == "" ) {
             alert( 'You must provide all values to retrieve a token.' );
             return;
    }
  
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if ( xmlhttp.readyState == XMLHttpRequest.DONE ) {
            if ( xmlhttp.status == 200 && xmlhttp.responseText !== "" ) {


                var response = JSON.parse( xmlhttp.responseText );
                if ( response.success == false ) {
                    alert( response.error );
                }
                else {
                    alert( 'Token successfully generated.' );
                    document.getElementById( "token" ).value = response.response.token;
                }
            }
            else  {
                alert( 'Failed to generate a token.' );
            }
        }
    };

    xmlhttp.open( "POST", callapi(), true );
    xmlhttp.setRequestHeader( 'api-url', document.getElementById('api_url').value + '/v2/auth/get-token' );
    xmlhttp.setRequestHeader( 'x-customer-number', document.getElementById('token_customer_number').value );
    xmlhttp.setRequestHeader( 'x-client-id', document.getElementById('token_client_id').value );
    xmlhttp.setRequestHeader( 'api-user', document.getElementById('api_user').value );
    xmlhttp.setRequestHeader( 'api-password', document.getElementById('api_password').value );
    xmlhttp.send();
}
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
                    <input id="gencert_url_script" value="https://app.certcapture.com/Gencert2/js" placeholder="https://app.certcapture.com/Gencert2/js" type="text">
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
