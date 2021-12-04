function displayCalendar(){
    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar').value;
        var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
        });
        calendar.render();
    });
}

function getDate(){
    var date = document.getElementById("fmeventdate").value;
    var datetime = document.getElementById("fmeventdateandtime").value;
    var time = document.getElementById("fmeventtime").value;
    console.log(date);
    console.log(datetime);
    console.log(time);
}