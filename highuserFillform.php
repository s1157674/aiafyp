<html>
<head>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
<script src="js/M.formCache.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="js/highuserFillform.js"></script>
<link href="css/highuserFillform.css" rel="stylesheet" type="text/css" /> 
</head>
    
<body style='background: #e9e9e9; '>
<div data-role="main" class="ui-content">
    <div id="content">
        <div onclick="saveCanvas()" id="A">
            <canvas style="border:solid"></canvas>
            <input type="button" value="clear" onclick="clearCanvas()"></input>
        </div>
    </div>
    <form id="fillForm">
    </form>
</div>        
    <script src="js/signature_pad.js"></script>
</body>
</html>