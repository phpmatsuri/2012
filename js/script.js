$(function(){
    $('.carousel').carousel({
        interval: 20000
    });

    // sponsor.html変換
    if (location.href.match(/sponsor.html/)) {
        // sponser
        // タイトル削除
        $('#sponsor-title').hide();

        $('.sponsor-title').show();

        // platinum, gold
        $('#platinum').addClass('row-fluid');
        $('#gold').addClass('row-fluid');
        $('.sponsor.span3').removeClass('span3').addClass('span12');

        // silver
        $('.silver-row').addClass('row-fluid');
        $('.sponsor.silver').removeClass('span2').addClass('span4');

        // personal
        $('#personal').addClass('row-fluid');
        $('.sponsor.span1').removeClass('span1').addClass('span2');


        // キャプション表示
        // platinum, gold
        $('.sponsor.span12 .thumbnail').addClass('row').removeClass('thumbnail').css({marginBottom: '40px'});
        $('.sponsor.span12 .sponsor-logo').addClass('span3');
        $('.sponsor.span12 .sponsor-caption').addClass('span8').removeClass('sponsor-caption');

        // silver
        $('.sponsor.silver .thumbnail').css({marginBottom: '40px'}).removeClass('thumbnail');
        $('.sponsor.silver .sponsor-caption').removeClass('sponsor-caption');

        // personal
        $('.sponsor.span2 .sponsor-caption').removeClass('sponsor-caption');
    } else if (location.href.match(/.html/) && !location.href.match(/index.html/)) {
        // top, sponser以外
        $('.sponsor').css({marginLeft: '0px'});
        $('.sponsor-header').removeClass('span12');
        $('.sponsor-title').removeClass('span12');
    } else {
        // top
        $('.sponsor-header').removeClass('span12');
        $('.sponsor-title').removeClass('span12');

        $('#silver').css({clear:'both'});
    }
});






