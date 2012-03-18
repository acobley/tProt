$(function(){
	
	
});

var Values =[[],[]];

function loadValues()
{

	$.get("/tProt/Experiment/json", function(data)
	{

		data = data["Data"];
		
		for(var i in data)
		{
			var x = data[i]["X"]
			var y = data[i]["Y"]
			
			
		}
	}, "json");
}