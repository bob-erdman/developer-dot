<?php
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
    echo $response;
?>