/**
 * 
 */

// Create a new YUI instance and populate it with the required modules.
YUI().use('tabview', function (Y) {
    // TabView is available and ready for use. Add implementation
    // code here.
	var tabview = new Y.TabView({
        srcNode: '#demo'
    });

    tabview.render();
});






//Create a new YUI instance and populate it with the required modules.
YUI().use('charts', function (Y) {
    // Charts is available and ready for use. Add implementation
    // code here.
	// Instantiate and render the chart
	var myDataValues = [
	                    {category:"5/1/2010", values:2000},
	                    {category:"5/2/2010", values:50},
	                    {category:"5/3/2010", values:400},
	                    {category:"5/4/2010", values:200},
	                    {category:"5/5/2010", values:5000}
	                ];
    loadValues(Y);
	
});


                