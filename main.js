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


			// data.forEach (function(day){
			// 	var iconurl = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`;
			// 	var date = new Date(day.dt*1000);
   //        		var dateDayofWeek = date.getDay();
   //        		dateDayofWeek = digitToDay(dateDayofWeek);
			// })

			data.forEach(function(day){
				var iconurl = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`;
				var date = new Date(day.dt*1000);
          		var dateDayofWeek = date.getDay();
          		dateDayofWeek = digitToDay(dateDayofWeek);
          		
				$('#weatherHere').append(`
					<div class="col-md-2 weatherDay">
						<h2>${dateDayofWeek}</h2>
						<h3>Max: ${day.temp.max} °F</h3>
						<h3>Min: ${day.temp.min} °F</h3>
						<h4>${day.weather[0].description}</h4>
						<img src="${iconurl}">
					</div>
				`)
			})
		}
	})
}

function digitToDay(number){
	var weekday=new Array(7);
  		weekday[0]="Sunday";
		weekday[1]="Monday";
  		weekday[2]="Tuesday";
  		weekday[3]="Wednesday";
  		weekday[4]="Thursday";
  		weekday[5]="Friday";
  		weekday[6]="Saturday";
  
  return weekday[number];
}