const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://weatherapi-com.p.rapidapi.com/current.json?q=Budapest",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "30a8e4610emsh4bf0c84e0c9e870p18f515jsnd82e03c227d1",
		"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});