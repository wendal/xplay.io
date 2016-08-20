$(document).ready(function () {

    // preview 图片切换

    var $imgs = $(".preview-container img");
    var $imglabel = $(".preview-container h1");
    var ilength = $imgs.length;
    var iindex = 0;
    var $lastImg = null;
    var $curImg = null;

    function nextPreview() {
        $lastImg = $curImg;
        $curImg = $($imgs[iindex]);
        $curImg.fadeIn({duration: 1000}).css("display", "block");
        $imglabel.text($curImg.attr('alt'));
        if ($lastImg != null) {
            $lastImg.hide();
        }
        iindex++;
        if (iindex >= ilength) {
            iindex = 0;
        }
    }

    nextPreview();

    // setInterval(function () {
    //     nextPreview();
    // }, 3000);

});
