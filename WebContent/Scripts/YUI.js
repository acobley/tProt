/**
 * 
 */

YUI().use('tabview','yql', function (Y) {
	var TabYQL = function(config) {
	    this.init(config);
	}

	TabYQL.NS = 'yql'; // plugin namespace (e.g. "tab.yql.load(myQuery)");
	TabYQL.prototype = {
		    init: function(config) {
		        if (this.tab) {
		            this.tab.after('selectedChange', Y.bind(this.afterSelectedChange, this));
		        }
		    },
	
		    afterSelectedChange: function(e) {
		        // only load if not already loaded
		        if (!this.loaded) {
		            this.load(this.query, this.afterLoad);
		        }
		    },
	
		    load: function(query, afterLoad) {
		    	
		    	 loadValues(Y);
		    }
	};

/* Create a new TabView instance, with content generated from script */
var tabview = new Y.TabView(),
 feeds = {
	    Chrome: 'chrome+browser',
	    Firefox: 'firefox+browser',
	    Safari: 'safari+browser',
	    Explorer: 'explorer+browser',
	    Opera: 'opera+browser'
	};

	Y.each(feeds, function(feed, label) {
	    var tab = new Y.Tab({
	        label: label,
	        content: 'loading...',
	    });

	    tab.plug(TabYQL, {
	        query: 'select title, link from rss where ' +
	            'url="http://search.news.yahoo.com/rss?p=' +
	            feed + '"'
	    });

	    tabview.add(tab);
	});

	tabview.render('#demo2');

});


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
	tabview.after("init", function(event) {
	    // Do something just before "enabled" is about to be set
		 var prev =event.prevVal;
         var newv =event.newVal;
		YUI().use('charts', function (Y) {
		    // Charts is available and ready for use. Add implementation
		    // code here.
			// Instantiate and render the chart
           
		    loadValues(Y);
		    loadIds(Y);

			
		});
	});
    tabview.render();
    
    
});
                