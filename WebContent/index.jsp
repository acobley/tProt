<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    	               "http://www.w3.org/TR/html4/loose.dtd">

<html>
  <head>
    	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    	<title>Test Page for Proteomics</title>
    	<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.4.1/build/cssgrids/grids-min.css">
    	<link rel="stylesheet" type="text/css" href="Style.css">
         <script lang="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    	<script src="Scripts/Ajax.js"></script>
    	<script src="http://yui.yahooapis.com/3.4.1/build/yui/yui-min.js"></script>
    	<script src="Scripts/YUI.js"></script>
    	

  </head>
  <body>
    <h1>Experimental data</h1>
    

    <div id="demo">
    <ul>
        <li><a href="#foo">Step 1</a></li>
        <li><a href="#bar">Step 2</a></li>
        <li><a href="#baz">Step 3</a></li>
    </ul>
    <div>
        <div id="foo"><h2>Step 1: Identify Peaks</h2>
        <div id="mychart"></div>
        <hr>
         <div id="idschart"></div>
        </div>
        
        <div id="bar"><h2>Step 2: Calculate Centroid</h2>
        <div id="centroidchart"></div>
        </div>
        <div id="baz">baz content</div>
    </div>
</div>
    
    
    
    <div id="demo2">
</div>
  </body>
</html> 
