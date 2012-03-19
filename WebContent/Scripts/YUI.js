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

    loadValues(Y);
    loadIds(Y);
	
});


                