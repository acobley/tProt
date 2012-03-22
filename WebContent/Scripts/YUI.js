/**
 * 
 */

YUI().use('tabview','yql','charts', function (Y) {
	var TabYQL = function(config) {
	    this.init(config);
	    loadValues(Y);
		loadIds(Y);
		loadCentroids(Y);
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
		    		 var add=document.getElementById('Stage1'); 
		    		 add.className='show';
		    		 add=document.getElementById('Stage11'); 
		    		 add.className='show';
		    		 add=document.getElementById('Stage2'); 
		    		 add.className='hide';
		    	   
		         }
		    	 if (query==="2"){
		    		 var add=document.getElementById('Stage1'); 
		    		 add.className='hide';
		    		 add=document.getElementById('Stage11'); 
		    		 add.className='hide';
		    		 add=document.getElementById('Stage2'); 
		    		 add.className='show';
			    	
					 
			    	  
			     }
		    }
	};

/* Create a new TabView instance, with content generated from script */
var tabview = new Y.TabView(),
 Steps = {
	    1: 'Step 1',
	    2: 'Step 2'
	   
	};

	Y.each(Steps, function(label, step) {
	    var tab = new Y.Tab({
	        label: ''+label,
	        content: ' <h2>Step 1: Identify Peaks</h2>'
	    });

	    tab.plug(TabYQL, {
	        query: '' +step
	    });

	    tabview.add(tab);
	});

	tabview.render('#demo2');

});


                