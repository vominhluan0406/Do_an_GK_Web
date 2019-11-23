function Shop(loaixe){
    let str1 = '';
for(i in loaixe){
    valueXe = product[loaixe[i]].split(',');
    str1 = str1 +'<div class="col-md-3 col-sm-6">'+
                '<div class="single-shop-product">'+
                    '<div class="product-upper">'+
                        '<img src="img\/'+ valueXe[0]+'" alt=""></div>'+        
                '<h2><a href="single-product.html?xe='+ loaixe[i].replace(/ /g,'_')+'">'+ loaixe[i]+'</a></h2>'+
                '<div class="product-carousel-price"><ins>' + valueXe[2]+'.000 VND</ins></div>'+
                '<div class="product-option-shop">'+
        '<a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="#">Thêm vào giỏ hàng</a></div ></div></div>'///canvas/shop/?add-to-cart=70
    }
    
    $('.single-product-area  .container .row').replaceWith('<div class="row">'+str1+'</div>');
}

$(document).ready(function(){ 
    $('body').on('load',Shop(productName));
    $('.btn').click(function() {
        $(".btn").removeClass('active');
        $(this).addClass('active');
    });   
    $('#btnXega').click(function () {
        Shop(xeTayGa);
        Shopping();
    });
    $('#btnXeso').click(function () {
        Shop(xeSo);
        Shopping();
    });
    $('#btnXecon').click(function () {
        Shop(xeConTay);
        Shopping();
    });
    $('#btnXemoto').click(function () {
        Shop(xePKL);
        Shopping();
    });
    $('#btnAll').click(function(){
        Shop(productName);
        Shopping();
    });
});