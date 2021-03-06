var jt = jt || {};

jt.sentiment = (function($){
	
	var apiKey = "62f52f171c0de8d4a155b7954f86da31198a5723",
		tweetsWithSentiment = [],
		processedTweetIDs = [];
	
	var init = function(){
		sentimentTweetsManager();
	};
	
	var performSentimentAnalysis = function(tweet){
		
		var url = "http://twitter.com/" + tweet.user.username + "/status/" + tweet.id,
			endpoint = "http://access.alchemyapi.com/calls/url/URLGetTextSentiment?apikey=" + apiKey + "&outputMode=json&url=" + encodeURIComponent(url) + "&jsonp=?";
					
			$.getJSON(endpoint, function(data){
				
				 if(data.status === "OK"){
					 var response = {
					 	type: data.docSentiment.type,
					 	score: data.docSentiment.score
					 }

					 sentimentAnalysisCallback(tweet, response);
					
				 }
			});
			
	};
	
	var sentimentAnalysisCallback = function(tweet, response){
		tweet.sentiment = response;
		processTweet(tweet);
	};
	
	var processTweet = function(tweet){
		if ($.inArray(tweet.id, processedTweetIDs) === -1){
			
			processedTweetIDs.push(tweet.id);
			
			tweetsWithSentiment.push(tweet);
			jt.sentimentChart.addNewTweetEntry(tweet);
		}
	};
	
	var sentimentTweetsManager = function(){
		if (tweetsWithSentiment.length){
			var tweet = tweetsWithSentiment.pop();
			processTweet(tweet);
		}
		setTimeout(sentimentTweetsManager, 1000 * 2);
	};
	
	$(init);

	return{
		performSentimentAnalysis: performSentimentAnalysis
	};
	
}(jQuery));