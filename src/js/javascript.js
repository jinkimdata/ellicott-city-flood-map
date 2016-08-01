var ellicottCityFloodMap = {
	init: function(){
		ellicottCityFloodMap.mapFunctions();
		ellicottCityFloodMap.share();
	},
	share: function(){
		$(".icon-twitter").on("click", function(){
			var tweet = "See how Ellicott City's once-in-a-millenium flood unfolded in this interactive map."; //Tweet text
			var url = "http://data.baltimoresun.com/news/ellicott-city-flood-map/"; //Interactive URL
			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
		$(".icon-facebook").on("click", function(){
			var picture = "http://data.baltimoresun.com/news/ellicott-city-flood-map/images/thumb.png"; //Picture URL
			var title = "Ellicott City Flood Timeline"; //Post title
			var description = "See how Ellicott City's once-in-a-millenium flood unfolded in this interactive map."; //Post description
			var url = "http://data.baltimoresun.com/news/ellicott-city-flood-map/"; //Interactive URL
			var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";				
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
	},
	mapFunctions: function() {
		// From http://codepen.io/joe-rayment/pen/JGPmdo
		mapboxgl.accessToken = 'pk.eyJ1IjoibmF0aW9uYWxwb3N0IiwiYSI6IjBkZWVjZjhjZjg0NzAwNmEwYzk5ZWViYmFlNDA5NjkzIn0.y73QXFnGF8_91sSDBWvgHg';
		
		var map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/nationalpost/cihpxfqzl002195lyrokri8u4',
			center: [-76.797988, 39.267544],
			zoom: 7,
			bearing: 0,
			pitch: 45,
			interactive: false

		});
		var chapters = {
			'slide0': {
				bearing: 0,
				center: [-76.797988, 39.267544],
				zoom: 15,
				pitch: 15,
				duration: 4000
			},
			'slide1': {
				duration: 3500,
				center: [-76.797988, 39.267544],
				bearing: 0,
				zoom: 10,
				pitch: 8
			},
			'slide2': {
				bearing: 90,
				center: [-76.797988, 39.267544],
				zoom: 17,
				speed: 0.6,
				pitch: 5
			},
			'slide3': {
				bearing: 20,
				center: [-76.786928, 39.279917],
				zoom: 15,
				speed: 0.6,
				duration: 3500
			},
			'slide4': {
				bearing: -45,
				pitch: 15,
				center: [-76.797170, 39.268149],
				zoom: 16,
			},
			'slide5': {
				bearing: 40,
				center: [-76.794229, 39.267767],
				zoom: 17.5,
				duration: 2000,
				pitch: 60.00
			},
			'slide6': {
				bearing: 0,
				center: [-76.797319, 39.267396],
				zoom: 18,
				pitch: 15,
				duration: 4000
			},
			'slide7': {
				bearing: 40,
				center: [-76.794229, 39.267767],
				zoom: 17.5,
				duration: 2000,
				pitch: 60.00
			},
			'slide8': {
				bearing: -45,
				pitch: 15,
				center: [-76.797170, 39.268149],
				zoom: 16,
			},
			'slide9': {
				bearing: 0,
				center: [-76.761404, 39.247031],
				zoom: 16.5,
				speed: 0.6,
				duration: 4000,
				pitch: 60.00
			},
			'slide10': {
				bearing: 0,
				center: [-76.761404, 39.247031],
				zoom: 16.5,
				duration: 4000,
				pitch: 60.00
			},
			'slide11': {
				bearing: 40,
				center: [-76.868505, 39.252859],
				speed: 0.6,
				zoom: 16.5,
				duration: 2000,
				pitch: 60.00
			},
			'slide12': {
				bearing: 20,
				center: [-76.794229, 39.267767],
				zoom: 15.5,
				speed: 0.6,
				duration: 2000,
				pitch: 60.00
			},
			'slide13': { 
				bearing: 0,
				center: [-76.797988, 39.267544],
				zoom: 15,
				pitch: 15,
				speed: 0.6,
				duration: 4000
			}
		};
		// On every scroll event, check which element is on screen
		window.onscroll = function() {
			var chapterNames = Object.keys(chapters);
			for (var i = 0; i < chapterNames.length; i++) {
				var chapterName = chapterNames[i];
				if (isElementOnScreen(chapterName)) {
					setActiveChapter(chapterName);
					break;
				}
			}
		};
		var activeChapterName = 'cover';
		function setActiveChapter(chapterName) {
			if (chapterName === activeChapterName) return;

			map.flyTo(chapters[chapterName]);

			document.getElementById(chapterName).setAttribute('class', 'active');
			document.getElementById(activeChapterName).setAttribute('class', '');

			activeChapterName = chapterName;
		};
		function isElementOnScreen(id) {
			var element = document.getElementById(id);
			var bounds = element.getBoundingClientRect();
			return bounds.top < window.innerHeight && bounds.bottom > 0;
		};
	}
}
$(document).ready(function(){
	ellicottCityFloodMap.init();
	console.log("connected");
});

