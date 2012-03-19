$(function(){
	
	
});



function loadValues(Y)
{

	$.get("/tProt/Experiment/1/1", function(data)
	{
		var Values = [];

		data = data["Data"];
		
		for(var i in data)
		{
			var x = data[i]["X"];
			var y = data[i]["Y"];
			var number={'category':x,'values':y};
			Values[i]=number;

			
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
		
		data = data["Data"];
		
		for(var i in data)
		{
			var x = data[i]["X"];
			var y = data[i]["Y"];
			var number={'category':x,'values':y};
			Values[i]=number;

			
		}
		var mychart = new Y.Chart({
	    	
	        dataProvider: Values,
	        render: "#idschart",
	        type: "markerseries"
	    });
	}, "json");
}