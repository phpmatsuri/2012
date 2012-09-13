$(function(){
    $('.carousel').carousel({
        interval: 20000
    });

    // sponsor.html変換
    if (location.href.match(/sponsor.html/)) {
        // タイトル削除
        $('#sponsor-title').hide();

        $('.sponsor-title').show();

        $('.sponsor.span3').removeClass('span3').addClass('span12');

        $('.sponsor.span2').removeClass('span2').addClass('span4');

        // キャプション表示
        $('.sponsor.span12 .thumbnail').addClass('row').removeClass('thumbnail').css({marginBottom: '40px'});
        $('.sponsor.span12 .sponsor-logo').addClass('span3');
        $('.sponsor.span12 .sponsor-caption').addClass('span8').removeClass('sponsor-caption');

        $('.sponsor.span4 .thumbnail').removeClass('thumbnail').css({marginBottom: '40px'});
        $('.sponsor.span4 .sponsor-caption').removeClass('sponsor-caption');
    } else if (location.href.match(/.html/) && !location.href.match(/index.html/)) {
        // top,sponser以外
        $('.sponsor').css({marginLeft: '0px'});
        $('.sponsor-header').removeClass('span12');
        $('.sponsor-title').removeClass('span12');
    } else {
        // top
        $('.sponsor-header').removeClass('span12');
        $('.sponsor-title').removeClass('span12');
    }
});






