(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "e24653d1d0658cc2fc909c144fbc9043";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Doctor(){
}
Doctor.prototype.displayDoctorList = function(dataLength, resultsData) {
  var output = [];
  for (var i = 0; i < dataLength; i++) {
    output.push(resultsData[i]);
    console.log("results data:" + output[i]);
  }
  return output;
};

Doctor.prototype.getDoctors = function(medicalIssue, doctorData) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=47.6062%2C-122.3321%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(results) {
      console.log(results);
      console.log(results.data[0]);
      console.log(results.data.length);
      console.log(results.meta);
      var doctorNames = doctorData.displayDoctorList(results.data.length, results.data);
      doctorNames.forEach(function(name) {
        $('#showDoctors').append('<li>' + name.profile.first_name + ' ' + name.profile.last_name + '</li>');
        console.log(name.profile.first_name + ' ' + name.profile.last_name);
      });
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;

},{"./../.env":1}],3:[function(require,module,exports){
var Doctor = require('./../js/doctors.js').doctorModule;

$(document).ready(function() {
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#medicalissue').val();
    var doctorData = new Doctor();
    doctorData.getDoctors(medicalIssue, doctorData);
  });
});

},{"./../js/doctors.js":2}]},{},[3]);
