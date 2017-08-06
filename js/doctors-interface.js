var Doctor = require('./../js/doctors.js').doctorModule;

$(document).ready(function() {
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#medicalissue').val();
    var doctorData = new Doctor();
    doctorData.getDoctors(medicalIssue, doctorData);
  });
});
