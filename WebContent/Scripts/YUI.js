/**
 * 
 */

YUI().use('tabview','yql','charts', function (Y) {
	var TabGraph = function(config) {
	    this.init(config);

	}

	TabGraph.NS = 'yql'; // plugin namespace (e.g. "tab.yql.load(myQuery)");
	TabGraph.prototype = {
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
		    loaded: false,
	        query: '',
	        errorMsg: 'There was a problem loading the content',
	        tab: null,
	        
		    afterSelectedChange: function(e) {
		        // only load if not already loaded
		    	
		        if (!this.loaded) {
		        	
		            this.load(this.query, this.afterLoad);
		        }
		    },
	
		    load: function(query, afterLoad) {
		    	
		    	this.loaded=true;
		    	if (query==='1'){
		    	   content='<h2>Find Peaks</h2>'
		    	   content=content+'<h3>Raw Mass Spec</h3><div id="Stage1"></div><h3>Peaks</h3><div id="Stage11"></div>';
		    	   this.tab.set('content',content);
		    	   loadValues(Y);
		    	   loadIds(Y);
		    	}
		    	if (query==='2'){
		    		content='<h2>Find Centroids</h2>'
			    	   content=content+'<div id="Stage2"></div>';
			    	   this.tab.set('content',content);
			    	   loadCentroids(Y);
			    	}
		    	if (query==='3'){
		    		content='<h2>3D graphs</h2>'
			    	content=content+'<div id="Stage3"></div>';
			    	this.tab.set('content',content);
			    	load3Ds(Y);
			    }
		    	
		    }
	};

/* Create a new TabView instance, with content generated from script */
var tabview = new Y.TabView(),
 Steps = {
	    1: 'Step 1',
	    2: 'Step 2',
	    3: 'Step 3'
	   
	};

	Y.each(Steps, function(label, step) {
	    var tab = new Y.Tab({
	        label: ''+label,
	        content: ' <h2>Step 1: Identify Peaks</h2><p>'+step+' : '+label
	    });

	    tab.plug(TabGraph, {
	        query: '' +step
	    });

	    tabview.add(tab);
	});

	tabview.render('#demo2');

});


                