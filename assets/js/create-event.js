// Material Select Initialization
$(document).ready(function () {
    $('.mdb-select').materialSelect();
});
// $('#datepicker').datepicker({
//     uiLibrary: 'bootstrap4',
//   });
var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
$('#startDate').datepicker({
    uiLibrary: 'bootstrap4',
    iconsLibrary: 'fontawesome',
    minDate: today,
    maxDate: function () {
        return $('#endDate').val();
    }
});
$(function () {
    $('#datetimepicker3').datetimepicker({
        pickDate: false
    });
});