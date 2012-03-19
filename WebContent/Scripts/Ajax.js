$(function(){
	
	
});



function loadValues(Y)
{

	$.get("/tProt/Experiment/1/1", function(data)
	{
		var Values = [];
		var Value=[];
		data = data["Data"];
		
		for(var i in data)
		{
			var x = data[i]["X"]
			var y = data[i]["Y"]
			var number={'category':x,'values':y}
			Values[i]=number
			//Values[i][0]=x;
			//Values[i][1]=y;
			
		}
		var mychart = new Y.Chart({
	    	
	        dataProvider: Values,
	        render: "#mychart",
	        type: "line"
	    });
	}, "json");
}


function loadIds(Y)
{

	$.get("/tProt/Experiment/1/1/1", function(data)
	{
		var Values = [];
		var Value=[];
		data = data["Data"];
		
		for(var i in data)
		{
			var x = data[i]["X"]
			var y = data[i]["Y"]
			var number={'category':x,'values':y}
			Values[i]=number

			
		}
		var mychart = new Y.Chart({
	    	
	        dataProvider: Values,
	        render: "#idschart",
	        type: "line"
	    });
	}, "json");
}