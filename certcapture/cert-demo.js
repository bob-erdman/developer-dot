let currentToken;

function submitEcom(){
    var txt = $('#cert-request'); 
    if (txt.val() == null || !txt.val().replace(/\s/g, '').length) {  
        alert("Please fill out the request by hitting the 'Fill Script' button.");
        return;
    } 

    if (!currentToken || currentToken.length < 1) {
        alert("Please generate or input a valid token.");
        return;
    }

    if ( $('#gencert-url').val() === "" ) {
        alert( 'Enter a GenCert URL.' );
        return;
    }

    initScript();

    $('#gencert_test').css('display', 'none');
    $('#cert-demo-back-btn').css('display', 'block');
}

function initScript() {
    
    var script = document.createElement( 'script') ;
    script.onload = function () {
        try {
            eval( $('#cert-request').val() );
        } 
        catch ( e ) {
            if ( e instanceof SyntaxError ) {
                alert( e.message );
            }
            alert( e.message );
        }
    }
    script.src = $('#gencert-url').val() + "/Gencert2/js";
    document.head.appendChild(script);
}

function getToken() {
    if ($('#api-url' ).val() === "" ||  $('#api-user' ).val() === "" || 
        $('#api-password' ).val() === "" || $('#client-id' ).val() === "" || 
        $('#customer-number' ).val() === "" ) {
            alert( 'You must provide all values to retrieve a token.' );
            return;
    }

    if(currentToken && currentToken.length > 0){
        if (!confirm( 'Are you sure you want to regenerate your token?')) {
            return;
        }
    }

    const authorization = "Basic " + window.btoa($('#api-user').val() + ":" + $('#api-password').val());

    return $.ajax({
        url: $('#api-url').val() + '/v2/auth/get-token',
        type: 'POST',
        headers: {
            'Content-Type': 'text/plain',
            "x-customer-number": $('#customer-number').val(),
            "x-client-id": $('#client-id').val(),
            'Authorization': authorization, 
        },
        success: function(result, status, xhr) {            
            if (xhr.responseText !== "" && result.response.token) {
                currentToken = result.response.token;
                alert( 'Token successfully generated.' );
                updateCertScript();
            } else {
                alert( 'Failed to generate a token. Please check your credentials and try again.' );
            }

            return status;
        },
        error: function(xhr, status, error) {
            if (xhr && xhr.responseJSON && xhr.responseJSON.error) {
                alert( `Error: ${xhr.responseJSON.error}` );
            } else {
                alert( `Error: ${error}` );
            }
            return status;
        }
    });
}

function updateCertScript() {
    const exposureZone = $('#set-zone').val();    
    const token = currentToken ? currentToken : '';   
    const selectedOptions = $('.cert-demo-option:checked');
    let options = ``;
    
    if (selectedOptions.length > 0) {
        selectedOptions.each(function() {            
            options += `  ${this.id} : true, \n`;
        })
    } else {
        options = `  edit_purchaser: false, \n`;
    }

    const sampleScript = `GenCert.init(document.getElementById( 'form-container' ), { \n${options}  ship_zone: '${exposureZone}', \n  token: '${token}' \n}); \nGenCert.show();`;

    $('#cert-request').empty().val(sampleScript);
};

function backToDemo() {
    $('#gencert_test').css("display","block");
    $('#cert-demo-back-btn').css("display","none");
    $('#form-container').css("display","none");
}