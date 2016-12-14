<?php

$site = "www.ral.ucar.edu";
$port = 80;
$uri = "/projects/rdwx_mdss/AK_mdss/proxy.php";
$timeout = 10;

if ($fp = fsockopen($site, $port, $errno, $errstr, $timeout) ) {
    #
    # Server is up, read the result.
    #
    $query_string = $_SERVER['QUERY_STRING'];
    fputs($fp, "GET $uri?$query_string HTTP/1.0\r\nHost: $site\r\n\r\n");

    #
    # Skip the HTML header of the reply.
    #
    while(!feof($fp) ) {
        # Possibly buffer overflow problems here with a fixed buffer size...
        $line = fgets($fp, 4096);

        #
        # Check for Content-type and save it
        # (stripping off trailing whitespace)
        #
        if (strncasecmp($line,"Content-type",12)==0)
        {
            $contentType = rtrim($line);
        }

        #
        # Testing for white space catches "^\r\n$", for example.
        #
        if (preg_match("/^\s*$/", $line) ) {
            break;
        }
    }

    # Read the body.  Binary safe.
    $buffer;
    while(!feof($fp) ) {
        $buffer .= fread($fp, 1024);
    }
    fclose($fp);

    Header("$contentType");
    print($buffer);

}
else {
    echo "$errstr ($errno)<br>\n";
}

?>

