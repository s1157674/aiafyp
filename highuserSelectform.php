<html>
<head>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
<script src="js/M.formCache.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="js/highuserSelectform.js"></script>
<link href="css/highuserSelectform.css" rel="stylesheet" type="text/css" /> 
</head>
    
<body style='background: #e9e9e9; '>
    
<div data-role="header" id='header' data-theme="a"><h1 id="headertext">AIA</h1>
    <a onclick="GoHome();"; class="ui-btn ui-corner-all ui-btn-inline ui-mini footer-button-left ui-btn-icon-left ui-icon-power">Back</a>
</div>
    
<div data-role="main" class="ui-content">
    <div id="searchDIV" class='ui-block-a' style='width: 80%;margin-left: 10%;margin-top: 10px;'>
        <input type="search" id="search" value="">
    </div>
    <div id="content">
        <div onclick="saveCanvas()" id="A">
            <canvas style="border:solid"></canvas>
            <input type="button" value="clear" onclick="clearCanvas()"></input>
        </div>
    </div>
    <form id="fillForm">
    </form>
</div>        <script src="js/signature_pad.js"></script>
    
</body>
</html>