var jt = jt || {};

jt.twitter = (function($){
	
	tweets = [];
	tweetsByCountry = [];
	
	var init = function(){
		fetchPublicTimeline();
	};
	
	var fetchPublicTimeline = function(){
		
		//$.getJSON("http://api.twitter.com/1/statuses/public_timeline.json?callback=?",function(data){
			
			$.each(data, function(){
				
				var location = extractLocation(this);
				
				if(location){
					
					var tweet = {
						location: location,
						message: this.text,
						time: this.created_at,
						id: this.id,
						retweeted: this.retweeted,
						user: {
							image: this.user.profile_image_url,
							username: this.user.screen_name,
							name: this.user.name,
							url: this.user.url,
							lang: this.user.lang,
							id: this.user.id
						}
					};
					
					processTweet(tweet);
				}	
			});
		//});
	};
	
	var processTweet = function(tweet){
		tweets.push(tweet);
		processForCountryTweetCounter(tweet);
	};
	
	var processForCountryTweetCounter = function(tweet){
		
		var country = tweet.location.country;
			countryIndex = false,
			lengthOfTweetsByCountry = tweetsByCountry.length;
		
		if (lengthOfTweetsByCountry){
			for(var i=0; i<lengthOfTweetsByCountry; i++){
				if (country === tweetsByCountry[i][0]){
					countryIndex = i;
					break;
				}
			}
		}
		
		if(countryIndex !== false){
			tweetsByCountry[countryIndex][1]++; 
		}else{
			tweetsByCountry.push([country,1]);
		}
	};
	
	var extractLocation = function(data){
	
		var location;
		
		if (data.geo){
			location = {
				type: data.geo.type,
				coordinates: data.geo.coordinates,
				precision: 'geo',
				country: data.place.country
			}
		}else if(data.place){
			location = {
				country: data.place.country,
				country_code: data.place.country_code,
				full_name: data.place.full_name,
				id: data.place.id,
				name: data.place.name,
				place_type: data.place.place_type,
				url: data.place.url,
				precision: 'place'
			}
		}else if(data.user.location){
			
			//validating that location freetext field is actually a location
			var parsedLocation = jt.location.extractLocationFromText(data.user.location)
			
			if (parsedLocation){
				location = {
					precision: 'location',
					country: parsedLocation
				}
			}else{
				location = false;
			}
			
		}else{
			location =  false;
		}
		
		return location;
	};
	
	$(init);
		
}(jQuery));
