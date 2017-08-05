var apiKey = require('./../.env').apiKey;

Doctor = function(){
};

Doctor.prototype.getDoctors = function(medicalIssue,) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
      console.log(results.data[0]);
      console.log(results.data.length);
      console.log(results.meta);
    })
   .fail(function(error){
      console.log("fail");
    });
};


exports.doctorModule = Doctor;


// Weather.prototype.getHumidity = function(city, displayHumidity) {
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
//     displayHumidity(city, response.main.humidity);
//   }).fail(function(error) {
//     $('#showHumidity').text(error.responseJSON.message);
//   });
// };
