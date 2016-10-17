$('#search').on("submit", function(i){
	i.preventDefault();
	var city = $('#city').val();
	console.log(city);
	writeData(city);
});

function writeData(city){
	$.ajax({
		url: `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=imperial&cnt=7&APPID=dbc862a26923d7a0cf3549db4b6f31f2`,
		success: function(result){
			var data = result.list;
			$('#weatherHere').html(" ");
			$('#cityHere').html(result.city.name);

			data.forEach(function(day){
				$('#weatherHere').append(`
					<div class="col-md-2 weatherDay">
						<h3>Max: ${day.temp.max} °F</h3>
						<h3>Min: ${day.temp.min} °F</h3>
						<h4>${day.weather[0].description}</h4>
					</div>
				`)
			})
		}
	})
}