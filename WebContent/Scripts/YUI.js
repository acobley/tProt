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
	tabview.after("selectionChange", function(event) {
	    // Do something just before "enabled" is about to be set
		 var prev =event.prevVal;
         var newv =event.newVal;
		YUI().use('charts', function (Y) {
		    // Charts is available and ready for use. Add implementation
		    // code here.
			// Instantiate and render the chart
           
		    loadValues(Y);
		    loadIds(Y);
		    loadCentroids(Y);
			
		});
	});
    tabview.render();
});





                