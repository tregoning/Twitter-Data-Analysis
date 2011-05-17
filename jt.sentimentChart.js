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
	            text: 'Sentiment Analysis'
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
	        }],
	
		 	legend: {
		         enabled: false
		    },
		
			tooltip: {
			     formatter: function() {
			           return '<b>'+ this.y +'</b> ' + '<span>' + this.point.name  + '</span>';
			     }
			}
	    });
	
	};
	
	var addNewTweetEntry = function(tweet){

		if(typeof tweet.sentiment.score !== "undefined"){
			var series = chart.series[0],
				point = tweet.sentiment.score * 1;
				epocTime = new Date().getTime();

		    chart.series[0].addPoint({ y:point, x:epocTime, name:tweet.message  });
		}
	
	}
	
	$(init);
	
	return{
		addNewTweetEntry: addNewTweetEntry
	}
	
}(jQuery));