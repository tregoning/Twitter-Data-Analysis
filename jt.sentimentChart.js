var jt = jt || {};

jt.sentimentChart = (function($){
	
	var chart;
	
	var init = function(){
		
		chart = new Highcharts.Chart({
	        chart: {
	            renderTo: 'sentimentChart',
	            defaultSeriesType: 'spline',
	            
	        },
	        title: {
	            text: 'Happinest Chart'
	        },
	        xAxis: {
	            type: 'datetime',
	            tickPixelInterval: 150,
	            maxZoom: 20 * 1000
	        },
	        yAxis: {
	            minPadding: 0.2,
	            maxPadding: 0.2,
	            title: {
	                text: 'Value',
	                margin: 80
	            }
	        },
	        series: [{
	            name: 'Positive',
	            data: []
	        }]
	    });
	
	};
	
	var addNewTweetEntry = function(tweet){

		if(typeof tweet.sentiment.score !== "undefined"){
			var series = chart.series[0],
		        shift = series.data.length > 20,
				point = tweet.sentiment.score * 1;
				
		    chart.series[0].addPoint(point);
		}
	
	}
	
	$(init);
	
	return{
		addNewTweetEntry: addNewTweetEntry
	}
	
}(jQuery));