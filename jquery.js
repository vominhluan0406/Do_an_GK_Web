$(document).ready(function(){ 
    $('.btn').click(function() {
        $(".btn").removeClass('active');
        $(this).addClass('active');
    });   
    $('#btnXega').click(function () {
        i=1;
        $('.single-product-area img').each(function(){
            $(this).attr('src','img/product-'+i+'.jpg');
            console.log(i);
            i++;
        });
    });
    $('#btnXeso').click(function () {
        i = 12;
        $('.single-product-area img').each(function () {
            $(this).attr('src', 'img/product-' + i + '.jpg');
            console.log(i);
            i--;
        });
    });
    $('.product-pagination text-center li a').click(function(){
        if(this.value=='2'){
            $('.single-product-area img').each(function () {
                $(this).attr('src', 'img/product-' + 9 + '.jpg');
                console.log(i);
                i--;
            });
        }
    });
});