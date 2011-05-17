var jt = jt || {};

jt.translate = (function($){
	
	var translatedTweets;
	
	var init = function(){
		translatedTweets = $("#translatedTweets");
	};
	
	var translateTweet = function(tweet, callback){
		
		var encodedText = encodeURIComponent(tweet.message),
			endpoint = "http://www.google.com/uds/Gtranslate?key=notsupplied&q=" + encodedText + "&callback=?&langpair=|en&v=1.0"
		
		$.getJSON(endpoint, function(data){
			if(data.responseStatus === 200){
				displayTweet(tweet, data.responseData.translatedText);
				tweet.message = data.responseData.translatedText;
				callback(tweet);
			}
			
		});
	};
	
	var displayTweet = function(tweet, translatedMessage){
		if (translatedMessage !== tweet.message){
			translatedTweets.prepend('<div class="translatedTweet clearfix"><img src="' + tweet.user.image + '" width="48 height="48"/><div><span>' + tweet.message + '</span><span class="english">' + translatedMessage + '</span></div></div>');
		}
	};
	
	$(init);
	
	return{
		translateTweet: translateTweet
	}
	
}(jQuery));