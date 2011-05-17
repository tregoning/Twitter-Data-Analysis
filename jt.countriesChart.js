var jt = jt || {};

jt.countriesChart = (function($) {
	
	var countriesChart;
	
	var init = function(){

	     countriesChart = new Highcharts.Chart({
	        	chart: {
		           renderTo: 'countriesChart',
		           defaultSeriesType: 'column'
		        },

		        title: {
		           text: 'Number of Tweets by Country'
		        },
		
				animation: true,

		        xAxis: {
					
		        },

		        yAxis: {
		           title: {
		              text: 'Number of Tweets'
		           }
		        },

		        series: []
	
	     });
	};
		
	var getSeriesIndexByCountry = function(country){
		
		var series = countriesChart.series,
			country = country.toUpperCase(),
			entry = false;
		
		for(var i in series){
			if (country === series[i].name){
				entry = series[i].index;
				break;
			}
		}
		
		return entry;
	};
	
	var setCountryTweetTotal = function(country, total){
		
		var index = getSeriesIndexByCountry(country);
		
		if(index !== false){
			countriesChart.series[index].setData([total]);
		}else{
			countriesChart.addSeries({
			            data: total,
			            name: country.toUpperCase()
			});
		}
	};

    $(init);

	return{
		setCountryTweetTotal: setCountryTweetTotal
	}

}(jQuery));