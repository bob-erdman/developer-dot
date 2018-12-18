// TODO: jquery
function initScript() {
    console.warn('INIT SCRIPT')
    console.warn('value: ', document.getElementById( 'cert-request' ).value);
    
    if ( $('#gencert-url').val() === "" ) {
        alert( 'Enter a GenCert URL.' );
        return;
    }

    if ( $('#cert-request').val() === "" ) {
        alert( 'Enter valid javascript in the script box.' );
        return;
    }

    // TODO: token validation

    var script = document.createElement( 'script') ;
    script.onload = function () {
    
        try {
            eval( document.getElementById( 'cert-request' ).value );
        } 
        catch ( e ) {
            if ( e instanceof SyntaxError ) {
                alert( e.message );
            }
        }
        document.getElementById( 'gencert_test' ).style.display = 'none';
        document.getElementById( 'cert-demo-back' ).style.display = 'block';
    };
    
    script.src = document.getElementById( 'gencert-url' ).value + "/Gencert2/js";
    document.head.appendChild( script );
}

function getToken() {
    if ($('#api-url' ).val() === "" ||  $('#api-user' ).val() === "" || 
        $('#api-password' ).val() === "" || $('#client-id' ).val() === "" || 
        $('#customer-number' ).val() === "" ) {
            alert( 'You must provide all values to retrieve a token.' );
            return;
    }

    // FIXME: CORS errors
    // const apiURL = $('#api-url').val() + '/v2/auth/get-token';
    const authorization = "Basic " + window.btoa($('#api-user').val() + ":" + $('#api-password').val());
    // var request = new Request(apiURL, {
    //     headers: new Headers({ 
    //         'Content-Type': 'application/json', 
    //         'Authorization': authorization,
    //         'Access-Control-Allow-Headers': 'OPTIONS, POST'
    //     })
    // })
    
    // return fetch(request, { 
    //     method: 'POST',
    //     // headers: {
    //     //     'x-customer-number': $('#customer-number').val(),
    //     //     'x-client-id': $('#client-id').val(),
    //     // },
    //     'x-customer-number': $('#customer-number').val(),
    //     'x-client-id': $('#client-id').val()
    // })
    // .then((data) => {
    //     console.warn("DATA: ", data.json());
    //     return data.json();
    // })

    return $.ajax({
        url: $('#api-url').val() + '/v2/auth/get-token',
        type: 'POST',
        headers: {
            'Content-Type': 'text/plain',
            // 'Access-Control-Allow-Headers' : "*"
            // "x-customer-number": $('#customer-number').val(),
            // "x-client-id": $('#client-id').val(),
            'Authorization': authorization, 
            // 'Access-Control-Request-Headers': 'x-client-id, x-customer-number'
        },
        // crossDomain: true,
        // xhrFields: {
        //     withCredentials: true
        // },
        beforeSend: function (xhr) {
            // xhr.setRequestHeader("Access-Control-Request-Headers", "x-customer-number, x-client-id")
            xhr.setRequestHeader("x-client-id", $('#client-id').val());
            // xhr.setRequestHeader("x-customer-primary-key", $('#customer-number').val());
            xhr.setRequestHeader("x-customer-number", $('#customer-number').val());
            // xhr.withCredentials = true;
            // xhr.setRequestHeader("Authorization", "Basic " + window.btoa($('#api-user').val() + ":" + $('#api-password').val()));
        },
        success: function(result, status, xhr) {            
            if (xhr.responseText !== "") {
                alert( 'Token successfully generated.' );
                updateCertScript(result.response.token);
            } else {
                alert( 'Failed to generate a token. Please check your credentials and try again.' );
            }

            return status;
        },
        error: function(xhr, status, error) {
            if (error === 'Unauthorized') {
                alert( "Invalid Credentials. Please try again." );
            } else if (xhr.responseJson.error){
                alert( `Error: ${xhr.responseJson.error}` );
            }
            return status;
        }
    }).then((response) =>{
        console.warn('RESPONSE: ', response);
    });
}

// TODO: updates when script box is cleared out
// TODO: doesn't clear token when updating exposure zone
function updateCertScript(tokenKey) {
    const exposureZone = $('#set-zone').val();    
    const token = tokenKey ? tokenKey : '';   
    const selectedOptions = $('.cert-demo-option:checked');
    let options = ``;
    
    if (selectedOptions.length > 0) {
        selectedOptions.each(function() {            
            options += `  ${this.id} : true, \n`;
        })
    } else {
        options = `  edit_purchaser: false, \n`;
    }
    
    const sampleScript = `GenCert.init(document.getElementById( 'form-container' ), { \n${options}  ship_zone: '${exposureZone}', \n  token: '${token}', \n}); \nGenCert.show();`;

    $('#cert-request').empty().text(sampleScript);
};

function backToDemo() {
    $('#gencert_test').css("display","block");
    $('#cert-demo-back').css("display","none");
    $('#form-container').css("display","none");
}