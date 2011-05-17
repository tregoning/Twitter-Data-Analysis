var jt = jt || {};

jt.translate = (function($){
	
	var translateTweet = function(tweet, callback){
		
		var encodedText = encodeURIComponent(tweet.message),
			endpoint = "http://www.google.com/uds/Gtranslate?key=notsupplied&q=" + encodedText + "&callback=?&langpair=|en&v=1.0"
		
		$.getJSON(endpoint, function(data){
			if(data.responseStatus === 200){
			    console.log("TRANSLATED!", tweet.message, data.responseData.translatedText);
				tweet.message = data.responseData.translatedText;
				callback(tweet);
			}
			
		});
	};
	
	return{
		translateTweet: translateTweet
	}
	
}(jQuery));