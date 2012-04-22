var chart1;
var chart11;
var chart2;
var chart3;


function load3Ds(Y) {

	$.get("/tProt/Experiment/1/3", function (rdata) {
		var Values = [], minValue = 1070, maxValue = 1085;
		data=rdata["Data"];
		var s=0;
		
		for (i in data) {
			adata=data[i];
			var series="series"+s;
			for (j in adata){
				odata=adata[j];
				var x = odata["X"];
				var y = odata["Y"];
				if (s==0){
				   var number={'category':x,'series0':y}; 
				}else{
					var number={'category':x,'series1':y}; 
				}
				Values[j]=number;
				if (j==="0"){
					minValue=x;
				}else{
					maxValue=x;
				}
			}
			var temp=adata;
			s++;
			
		}
		
		
		
		var graphAxes = {
	            category: {
	               position:"bottom",
	               type:"numeric",
	               minimum:minValue,
	               maximum:maxValue
	            }
		}
		if (!chart3){
			chart3 = new Y.Chart({
			    dataProvider: Values,
		        render: "#Stage3",
		        type: "line",
		        axes:graphAxes
		    });
		}


	}, "json");
}




function loadValues(Y) {

	$.get("/tProt/Experiment/1/1", function (data) {
		var Values = [], minValue = 1070, maxValue = 1085;
		
		var data = data["Data"];
		
		for(var i in data) {
			var x = data[i]["X"];
			var y = data[i]["Y"];
			var number={'category':x,'values':y};
			Values[i]=number;
			if (i==="0"){
				minValue=x;
			}else{
				maxValue=x;
			}
			
		}
		var graphAxes = {
	            category: {
	               position:"bottom",
	               type:"numeric",
	               minimum:minValue,
	               maximum:maxValue
	            }
		};
		if (!chart1){
		chart1 = new Y.Chart({
	        dataProvider: Values,
	        render: "#Stage1",
	        type: "line",
	        axes:graphAxes
	    });
		}
	
	}, "json");
}


function loadIds(Y) {

	$.get("/tProt/Experiment/1/1/1", function (data) {
		var Values = [];
		var minValue=1070;
		var maxValue=1085;
		
		data = data["Data"];
		
		for(var i in data){
			
			var x = data[i]["X"];
			var y = data[i]["Y"];
			var number={'category':x,'values':y};
			Values[i]=number;
			if (i==="0"){
				minValue=x;
			}else{
				maxValue=x;
			}
			
		}
		var graphAxes = {
	            category: {
	               position:"bottom",
	               type:"numeric",
	               minimum:minValue,
	               maximum:maxValue
	            }
		}
		if (!chart11){
		chart11 = new Y.Chart({
	    	
	        dataProvider: Values,
	        render: "#Stage11",
	        type: "markerseries",
	        categoryType: "numeric",
	        axes:graphAxes
	    });
		}
	
	}, "json");
}

function loadCentroids(Y) {

	$.get("/tProt/Experiment/1/2", function (data) {
		var Values = [];
		var minValue=1070;
		var maxValue=1085;
		data = data["Data"];
		
		for(var i in data) {
			var x = data[i]["X"];
			var y = data[i]["Y"];
			var number={'category':x,'values':y};
			Values[i]=number;
			if (i==="0"){
				minValue=x;
			}else{
				maxValue=x;
			}
			
		}
		var graphAxes = {
	            category: {
	               position:"bottom",
	               type:"numeric",
	               minimum:minValue,
	               maximum:maxValue
	            }
		}
		if (!chart2){
			chart2 = new Y.Chart({
			    dataProvider: Values,
		        render: "#Stage2",
		        type: "line",
		        axes:graphAxes
		    });
		}


	}, "json");
}


