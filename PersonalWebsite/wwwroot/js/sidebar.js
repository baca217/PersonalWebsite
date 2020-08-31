$(document).ready(function () {
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $('#dimmer').toggleClass('active');
        $('#sidebarCollapse').toggleClass('active');
    });
});