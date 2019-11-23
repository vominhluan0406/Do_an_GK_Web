var muaSP = {
    'Honda Winner X':4,
    'Honda SH':3,
    'Yamaha Exciter':1,
};
var mgg = [
    'VNVODICH','20T11'
];

var tongTien = 0;
var giamGia = 0;
var phiGiay = 0;

let stringSP ='';

for (i in muaSP) {
    let tmp = product[i].split(',');
    stringSP = stringSP + '<tr class="cart_item">'+
        '<td class="product-remove"><a title="Remove this item" class="remove" href="#">×</a></td>'+
        '<td class="product-thumbnail">'+
            '<a href="single-product.html?xe='+ i.replace(/ /g,'_')+'"><img width="145" height="145" alt="poster_1_up" class="shop_thumbnail" src="img\/'+ i[0]+'"></a></td>'+
        '<td class="product-name"><a href="single-product.html?xe=' + i.replace(/ /g, '_')+'">'+ i+'</a></td>'  +
        '<td class="product-price"><span class="amount"></span></td>'+
        '<td class="product-quantity">'+
                '<div class="quantity buttons_added">'+
                    '<button type="button" class="minus" name="button">-</button>'+
                    '<input type="number" size="4" class="input-text qty text" title="Qty" value="'+ muaSP[i]+'" min="0" step="1">'+
                    '<button type="button" class="plus" name="button">+</button> </div></td>'+
        '<td class="product-subtotal"><span class="amount"></span></td></tr>';
}

stringSP = stringSP + '<tr>'+
    '<td class="actions" colspan = "6">'+
        '<div class="coupon">'+
            '<input type="text" placeholder="Mã giảm giá" value=""'+
                'id="coupon_code" class="input-text" name="coupon_code">'+
        '<input type="button" value="Áp dụng" name="apply_coupon"></div><form action="checkout.html" method="get">'+                                 
        '<input type="submit" value="Thanh toán" name="proceed" class="checkout-button button alt wc-forward"></form></td></tr>';
$(document).ready(function(){
    let code = '';
    $('.shop_table.cart tbody').append(stringSP);
    let foussnd = ($('tbody').find('tr.cart_item').length);
    if (foussnd == 0) {
        $('.product-content-right').replaceWith('<h2 style="color:red;text-align:center;">Không có sản phẩm nào trong giỏ hàng của bạn<br><a href="index.html" title="Trang chủ">ĐẾN TRANG CHỦ</a></h2>')
    }
    $('.actions .coupon input:last').click(function () {
        code = $('#coupon_code').val();
        code = code.toLocaleUpperCase();
        for(i in mgg)
            if(code==mgg[i])
                code = 0.05;
        tongTien -= tongTien*code;
        capNhatGia();
        $('.cart-subtotal').find('span').text(tongTien+"(-"+code*tongTien+")");
    });
    $('.cart_item').each(function(){
        let tensp = $('.product-name a',this).text();
        let soluongsp = parseInt($('.product-quantity .quantity.buttons_added input',this).val());
        let giatien = parseFloat(product[tensp].split(',')[2]);
        $('.product-price span', this).replaceWith('<span class="amount">'+ giatien*1000000+' VND</span>')
        $('.product-subtotal span', this).text(giatien * 1000000*soluongsp);
        $('.product-thumbnail a img', this).attr('src', 'img\/' + product[tensp].split(',')[0]);
        tongTien = tongTien + giatien * 1000000 * soluongsp;
    });
    capNhatGia();
    $('#calcalute-shipping-wrap p:last').click(function(){
        let temp = $('#calc_shipping_country option:selected').val();
        phiGiay = 0.1*tongTien;
        if(temp==61||temp==62)
        phiGiay = 0.2*tongTien;
        capNhatGia();
    })
    $('.minus').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value > 1) {
            value = value - 1;
        } else {
            value = 0;
        }

        $input.val(value);
        $this.closest('tr.cart_item').find('span:last').text(value * parseFloat($this.closest('tr.cart_item').find('span:first').text()));
        tongTien = tongTien - parseFloat($this.closest('tr.cart_item').find('span:first').text());
        capNhatGia();
    });

    $('.plus').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value < 100) {
            value = value + 1;
        } else {
            value = 100;
        }

        $input.val(value);
        $this.closest('tr.cart_item').find('span:last').text(value * parseFloat($this.closest('tr.cart_item').find('span:first').text()));
        tongTien = tongTien + parseFloat($this.closest('tr.cart_item').find('span:first').text());
        capNhatGia();
    });

    $('.remove').click(function(){
        var $this =$(this);
        var $remove = $this.closest('tr.cart_item');
        $remove.replaceWith("<span></span>");
        let found = ($('tbody').find('tr.cart_item').length);
        soluong = parseFloat($this.closest('tr.cart_item').find('span:last').text());
        tongTien = tongTien - soluong;
        $('.cart-subtotal td span').text(tongTien);
        if(found==0){
            $('.product-content-right').replaceWith('<h2 style="color:red;text-align:center;">Không có sản phẩm nào trong giỏ hàng của bạn<br><a href="index.html" title="Trang chủ">ĐẾN TRANG CHỦ</a></h2>')
        }
    });

    for (i = 0; i < tenTinh.length; i++) {
        $("#calc_shipping_country").append('<option value="' + i + '">' + tenTinh[i] + '<\/option>');
        $('#shipping_country').append('<option value="' + i + '">' + tenTinh[i] + '<\/option>');
    }
});

function capNhatGia(){
    $('.cart-subtotal td span').text(tongTien);
    let temp = $('#calc_shipping_country option:selected').val();
    phiGiay = 0.1 * tongTien;
    if (temp == 61 || temp == 62)
        phiGiay = 0.2 * tongTien;
    $('.shipping td').text(phiGiay);
    $('.order-total td').text(phiGiay + tongTien);  
}