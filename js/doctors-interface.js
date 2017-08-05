var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(medicalIssue, doctorData) {
  $('#showDoctors').text("Doctors for  " + medicalIssue + " are: " + doctorData);
}



$(document).ready(function() {
  var doctorObject = new Weather();

$('#medicalissue').click(function() {
    var medicalIssue = $('#medicalissue').val();
    $('medicalissue').val("");
    doctorObject.getDoctor(medicalIssue, displayDoctor);
  });
});











//
// var displayDoctorsArray = function(medicalIssue, doctorsData) {
//   $('#showDoctors').text("List of Doctors in Portland: "  + " " + convertToArray(doctorsData));
// };
//
// var convertToArray = function(doctors) {
//   var doctorsArray = doctors.split();
//   return doctorsArray;
// };
//
// $(document).ready(function() {
//   $('#issues').click(function() {
//       var currentDoctorObject = new Doctor();
//       var medicalIssue = $('#medicalissue').val();
//       $('#medicalissue').val("");
//       currentDoctorObject.convertToArray(medicalIssue, displayDoctorsArray);
//     });
// });
