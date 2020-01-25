$( document ).ready(function() {
    $('.btn-primary').click(function(e){
        var clicked = e.target.innerText;
        $('.selected').removeClass('selected');
        $(e.target).addClass('selected');
        $('.plan').removeClass('d-block');
        $('.plan').addClass('d-none');
        if(clicked == '3GB'){
            $('.3gb').addClass('d-block');
        } else if(clicked == '5GB'){
            $('.5gb').addClass('d-block');
        } else if(clicked == '8GB'){
            $('.8gb').addClass('d-block');
        } else if(clicked == '12GB'){
            $('.12gb').addClass('d-block');
        } else if(clicked == '20GB'){
            $('.20gb').addClass('d-block');
        }
    });
    $('form').submit(function(){
        console.log('enviado!!');
    });
});