$(function(){
	
	
});

var mychart;

function loadValues(Y)
{

	$.get("/tProt/Experiment/1/1", function(data)
	{
		var Values = [];
		var minValue=1070;
		var maxValue=1085;
		data = data["Data"];
		
		for(var i in data)
		{
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
		var mychart = new Y.Chart({
	    	
	        dataProvider: Values,
	        render: "#Stage1",
	        type: "line",
	        axes:graphAxes
	    });
	}, "json");
}


function loadIds(Y)
{

	$.get("/tProt/Experiment/1/1/1", function(data)
	{
		var Values = [];
		var minValue=1070;
		var maxValue=1085;
		
		data = data["Data"];
		
		for(var i in data)
		{
			
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
		var mychart = new Y.Chart({
	    	
	        dataProvider: Values,
	        render: "#Stage11",
	        type: "markerseries",
	        categoryType: "numeric",
	        axes:graphAxes
	    });
	}, "json");
}

function loadCentroids(Y)
{

	$.get("/tProt/Experiment/1/2", function(data)
	{
		var Values = [];
		var minValue=1070;
		var maxValue=1085;
		data = data["Data"];
		
		for(var i in data)
		{
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
		mychart = new Y.Chart({
		    dataProvider: Values,
	        render: "#Stage2",
	        type: "markerseries",
	        axes:graphAxes
	    });
	}, "json");
}
