$(document).ready(function () {
    // btn 下载
    $('.software_download').click(function () {
        var nm = $(this).attr('snm');
        window.location.href = nm;
    });
});
