var slsanpham = Object.keys(product).length;

var sanpham = BanChay +","+ XemGanDay+","+ Moi;
sanpham = sanpham.split(',');

var sildeImgName = Object.keys(slideImg);

i = 1;
k=0;
$(document).ready(
    function () {
        $('.latest-product .single-product').each(function () {
            tmp = product[productName[slsanpham - i]].split(',');
            tmpp = tmp[0];
            let kk = (productName[slsanpham - i]).replace(/ /g, "_");
            $('img', this).attr('src', 'img/' + tmpp);
            $(this).children('h2').replaceWith('<h2><a href = "single-product.html?xe=' + kk + '">' + productName[slsanpham - i] + '</a ></h2>');
            $(this).children('.product-f-image').children('.product-hover').children('a:last').replaceWith('<a href="single-product.html?xe=' + kk + '" class="view-details-link"><i class="fa fa-link"></i>Chi tiết</a>');
            $(this).children('.product-carousel-price').children('ins').replaceWith('<ins>' + tmp[2] + '.000 VND</ins>');
            i++;
            if (i == 7) i = 1;
        });
        $('.product-widget-area .container .row .col-md-4 .single-product-widget').each(function(){
            $(this).children('.single-wid-product').each(function(){
                tmp = product[sanpham[k]].split(',');
                let kk = (sanpham[k]).replace(/ /g, "_");
                $('a img',this).attr('src','img\/'+tmp[0]);
                $('a', this).attr('href','single-product.html?xe='+ kk);
                $('h2 a',this).replaceWith('<a href="single-product.html?xe='+ kk+'">'+ sanpham[k] +'</a>');
                $(this).children('.product-wid-price').replaceWith('<div class="product-wid-price"><ins> '+ tmp[2]+'.000 VND</ins ></div >');
                k++;
            }); 
        });
        k=0;
        $('.slider-area .block-slider.block-slider4 #bxslider-home4 li').each(function(){
            tmp = sildeImgName[k];
            $(this).children('a').replaceWith('<a href="single-product.html?xe='+tmp.replace(/ /g,'_')+'"><img src="img\/'+ slideImg[tmp]+'" alt="Slide"></a>');
            k++;
            if(k==6) k=0;
        });
    });

