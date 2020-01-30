$( document ).ready(function() {
    $('.btn-lg.net').click(function(e){
        var clicked = e.target.innerText;
        $('.selected').removeClass('selected');
        console.log(clicked);
        $(e.target.offsetParent).addClass('selected');
        $('.plan.net').removeClass('d-flex');
        $('.plan.net').addClass('d-none');
        if(clicked == '50MB'){
            $('.50mb').addClass('d-flex');
        } else if(clicked == '100MB'){
            $('.100mb').addClass('d-flex');
        } else if(clicked == '300MB'){
            $('.300mb').addClass('d-flex');
        }
    });
    $('.btn-lg.tv').click(function(e){
        var clicked = e.target.innerText;
        $('.selectedtv').removeClass('selectedtv');
        console.log(clicked);
        $(e.target.offsetParent).addClass('selectedtv');
        $('.plan.tv').removeClass('d-flex');
        $('.plan.tv').addClass('d-none');
        if(clicked == '50MB'){
            $('.50mbtv').addClass('d-flex');
        } else if(clicked == '100MB'){
            $('.100mbtv').addClass('d-flex');
        } else if(clicked == '300MB'){
            $('.300mbtv').addClass('d-flex');
        }
    });
    $('form').submit(function(){
        console.log('enviado!!');
    });
});