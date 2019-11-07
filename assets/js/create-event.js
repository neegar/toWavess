// Material Select Initialization
// $(document).ready(function () {
//     $('.mdb-select').materialSelect();
// });
// $('#datepicker').datepicker({
//     uiLibrary: 'bootstrap4',
//   });
// var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
// $('#startDate').datepicker({
//     uiLibrary: 'bootstrap4',
//     iconsLibrary: 'fontawesome',
//     minDate: today,
//     maxDate: function () {
//         return $('#endDate').val();
//     }
// });
// $(function () {
//     $('#datetimepicker3').datetimepicker({
//         pickDate: false
//     });
// });

var defaults = {
    calendarWeeks: true,
    showClear: true,
    showClose: true,
    allowInputToggle: true,
    useCurrent: false,
    ignoreReadonly: true,
    toolbarPlacement: 'top',
    locale: 'nl',
    icons: {
        time: 'fa fa-clock-o',
        date: 'fa fa-calendar',
        up: 'fa fa-angle-up',
        down: 'fa fa-angle-down',
        previous: 'fa fa-angle-left',
        next: 'fa fa-angle-right',
        today: 'fa fa-dot-circle-o',
        clear: 'fa fa-trash',
        close: 'fa fa-times'
    }
};

$(function () {
    var optionsDatetime = $.extend({}, defaults, { format: 'DD-MM-YYYY HH:mm' });
    var optionsDate = $.extend({}, defaults, { format: 'DD-MM-YYYY' });
    var optionsTime = $.extend({}, defaults, { format: 'HH:mm' });

    $('.datepicker').datetimepicker(optionsDate);
    $('.timepicker').datetimepicker(optionsTime);
    $('.datetimepicker').datetimepicker(optionsDatetime);
});


// Add active class to the current button (highlight it)
var main = document.getElementById("all-buttons");
var buttons = main.getElementsByClassName("myButton");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        console.log('salam')
    });
}