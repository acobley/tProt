/**
 * 
 */

YUI().use('tabview','yql','charts', function (Y) {
	var TabYQL = function(config) {
	    this.init(config);
	}

	TabYQL.NS = 'yql'; // plugin namespace (e.g. "tab.yql.load(myQuery)");
	TabYQL.prototype = {
		    init: function(config) {
		    	if (config) {
	                this.tab = config.host;
	                this.query = config.query || this.query;
	                this.errorMsg = config.errorMsg || this.errorMsg;
	            }

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
		    	 if (query==="1"){
		    	    loadValues(Y);
		    	    loadIds(Y);
		         }
		    	 if (query==="2"){
			    	    loadCentroids(Y);
			    	  
			         }
		    }
	};

/* Create a new TabView instance, with content generated from script */
var tabview = new Y.TabView(),
 Steps = {
	    Step1: '1',
	    Step2: '2'
	   
	};

	Y.each(Steps, function(step, label) {
	    var tab = new Y.Tab({
	        label: label,
	        content: ' <div id="mychart"></div>'
	    });

	    tab.plug(TabYQL, {
	        query: '' +step
	    });

	    tabview.add(tab);
	});

	tabview.render('#demo');

});


                