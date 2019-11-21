$(document).ready(function(){
    let url = decodeURIComponent(window.location.search);
    url=url.substring(4);
    url=url.replace(/_/g," ");
    tmp = product[url].split(',');
    $('img','.product-main-img').attr('src','img\/'+tmp[0]);
    $('.product-name').replaceWith('<h2 class="product-name">'+url+'</h2>');
    $('.product-inner-price').replaceWith('<div class="product-inner-price"><ins>'+ tmp[2] +'.000 VND</ins></div >');
    $('.product-inner-category p').children('a:first').replaceWith('<a href="">'+(url.split(' '))[0] +'</a>');
    console.log(url);
});