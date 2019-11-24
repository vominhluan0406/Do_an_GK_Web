str = ['Hà Nội','TP HCM'];
var cuahang = {
    'Hà Nội':'Số 136 Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy;Số 55 Giải Phóng, Đồng Tâm, Hai Bà Trưng',
    'TP HCM':'351A Lạc Long Quân, Phường 5, Quận 11;222 Lê Văn Sỹ, Phường 14, Quận 3;280 An Dương Vương, Phường 4, Quận 5'
};

var gioHang = {
    'Honda Winner X':2,
    'Honda SH':1
};

string1 = '';
let tonTien =0 ;
for(let i in gioHang){
    string1 +='<p>'+ i+' *  <strong class= "product-quantity">'+ gioHang[i]+'</strong ><p>';
    tonTien += parseFloat(product[i].split(',')[2]*gioHang[i]);
}

$(document).ready(function(){
    for(i=0;i<str.length;i++){
        $("#billing_country").append('<option value="'+i+'">'+ str[i]+'<\/option>');
        fun1();
        $("#billing_country").click(function(){
            console.log($('#billing_country option:selected').text());
            fun1($('#billing_country option:selected').text());
        })
    }
    $('#order_review .shop_table').find('tbody .product-name').replaceWith('<td class="product-name">'+ string1+'</td >');
    $('.product-total .amount').replaceWith('<span>'+ tonTien+'.000.000 VND<span>');
    $('.cart-subtotal .amount').replaceWith('<span>' + tonTien*0.1*1000000 + ' VND<span>');
    $('.order-total .amount').replaceWith('<span>' + tonTien*(1.1) * 1000000 + ' VND<span>');
    $('.payment_method_paypal').click(function(){
        $('.payment_box.payment_method_paypal').css('display','block')
    });
    $('#place_order').click(function(){
        $('.product-content-right form').replaceWith('<h1><b>Cám ơn bạn đã đặt hàng.<br>Chúng tôi sẽ sớm liên hệ với bạn!</b></h1>');
    });
});

function fun1(tmp){
    for (j in str) {
        let diachi = cuahang[str[j]].split(';');
        st ='<select class="country_to_state country_select" id="shipping_country" name="shipping_country">';
        if (tmp == str[j]) {
            for(k in diachi)
            st+='<option value="' + k + '">' + diachi[k] + '<\/option>';
            $('#shipping_country').replaceWith(st + '</select>');
            break;
        }
    }
}