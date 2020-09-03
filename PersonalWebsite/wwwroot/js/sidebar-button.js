$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebarCollapse').toggleClass('active');
        $('.hamburger').toggleClass('active');
    });
});