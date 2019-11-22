var product = {
    'Honda Winner X': 'product_14.jpg,Côn Tay,49.000',
    'Honda Air Blade': 'product-15.jpg,Tay Ga,34.500',
    'Honda Future': 'product-16.jpg,Số,34.500',
    'Honda Lead': 'product-17.jpg,Tay Ga,40.000',
    'Honda SH Mode':'product-3.jpg,Tay Ga,51.690',
    'Honda CBR300R': 'product-12.jpg,PKL,140.000',
    'Yamaha Jupiter': 'product-6.jpg,Số,29.900',
    'Yamaha Janus': 'product-4.jpg,Tay Ga,34.090',
    'Yamaha NVX': 'product-19.jpg,Tay Ga,44.090',
    'Yamaha Latte': 'product-20.jpg,Tay Ga,40.690',
    'Yamaha Freego': 'product-21.jpg,Tay Ga,51.690',
    'Yamaha YZF': 'product-7.jpg,PKL,139.000',
    'Yamaha MT-03': 'product-8.jpg,PKL,138.000',
    'Suzuki GSX150': 'product-29.jpg,Côn Tay,68.900',
    'Suzuki GD110HU': 'product-22.jpg,Côn Tay,28.400',
    'Suzuki Impulse': 'product-23.jpg,Tay Ga,31.190',
    'Suzuki Address': 'product-24.jpg,Tay Ga,28.790',
    'Piaggio Liberty One': 'product-26.jpg,Tay Ga,48.690',
    'Piaggio Liberty S': 'product-27.jpg,Tay Ga,51.690',
    'Piaggio Italia': 'product-25.jpg,Tay Ga,51.690',
    'SYM Star SR 170': 'product-28.jpg,Côn Tay,55.590',
    'Honda PCX Hibrid': 'product-1.jpg,Tay Ga,60.000',
    'Honda SH': 'product-2.jpg,Tay Ga,75.000',
    'Suzuki Raider R150': 'product-5.jpg,Côn tay,56.000',
    'Honda Vision': 'product-18.jpg,Tay Ga,32.000',
    'Yamaha Exciter': 'product-9.jpg,Côn Tay,45.500',
    'Yamaha Sirius': 'product-11.jpg,Số,21.000',
};

const keys = Object.keys(product);

var productName = ['Honda Winner X', 'Honda Air Blade',
    'Honda Future', 'Honda Lead', 'Honda SH Mode', 'Honda CBR300R',
    'Yamaha Jupiter', 'Yamaha Janus', 'Yamaha NVX', 'Yamaha Latte', 'Yamaha Freego', 'Yamaha YZF',
    'Yamaha MT-03', 'Suzuki GSX150', 'Suzuki GD110HU', 'Suzuki Impulse',
    'Suzuki Address', 'Piaggio Liberty One', 'Piaggio Liberty S', 'Piaggio Italia',
    'SYM Star SR 170', 'Honda PCX Hibrid', 'Honda SH',
    'Suzuki Raider R150', 'Honda Vision', 'Yamaha Exciter', 'Yamaha Sirius'
];

var BanChay=[
    'Suzuki Raider R150',
    'Honda SH',
    'Yamaha Exciter'
];

var XemGanDay=[
    'Yamaha Exciter',
    'Honda PCX Hibrid',
    'Honda Vision',
];

var Moi=[
    'Yamaha Sirius',
    'Yamaha Exciter',
    'Honda Vision'
];

var slideImg = {
    'Honda PCX Hibrid':'h4-slide.png',
    'Yamaha Latte': 'h4-slide1.png',
    'Honda Winner X': 'h4-slide2.png',
    'Honda Air Blade': 'h4-slide3.png',
    'Honda SH Mode':'h4-slide4.png',
    'Suzuki Raider R150':'h4-slide6.png',
    'Suzuki GD110HU': 'h4-slide8.png',
};

var xeConTay=[];
var xeSo = [];
var xeTayGa =[];
var xePKL = [];
for(let i in keys){
    tmp = product[keys[i]].split(',')[1];
    
    if (tmp =='Côn Tay'){
        xeConTay.push(keys[i]);
    }
    if (tmp =='Số'){
        xeSo.push(keys[i]);
    }
    if(tmp=='PKL'){
        xePKL.push(keys[i]);
    }
    if (tmp =='Tay Ga'){
        xeTayGa.push(keys[i]);
    }
}

function thongSoXe(khoiluong,dairongcao,loaidongco,dungtichxilanh,congsuat){
    let tmp = '<br><br><b>Khối lượng bản thân: </b> ';
    tmp = tmp + khoiluong+ '<br><b>Dài x Rộng x Cao: </b>';
    tmp = tmp + dairongcao + '<br><b>Loại động cơ: </b>';
    tmp = tmp + loaidongco + '<br><b>Dung tích xy-lanh: </b>';
    tmp = tmp + dungtichxilanh + '<br><b>Công suất tối đa: </b>';
    tmp = tmp + congsuat;
    return tmp;
}

var thongSo = {
    'Honda Winner X': 'WINNER X - tâm điểm thu hút mọi ánh nhìn. Mang diện mạo của một siêu xe thể thao cao cấp, WINNER X hoàn toàn mới sở hữu thiết kế ấn tượng, mạnh mẽ, cùng với các chi tiết được tinh chỉnh công phu, tất cả hội tụ để tạo ra siêu phẩm mang đầy tính đột phá của Honda'+
        thongSoXe('123kg', '2.019 x 727 x 1.088 mm', 'PGM-FI, 4 kỳ, DOHC, xy-lanh đơn, côn 6 số, làm mát bằng dung dịch', '149,1 cm3','11,5kW/9.000 vòng/phút'),
    'Honda Air Blade': 'Tiếp nối sự thành công của AIR BLADE tại thị trường Việt Nam, AIR BLADE mới được ra mắt cùng những đường nét mạnh mẽ, mang đậm vẻ nam tính, giúp người dùng thêm tự tin và hãnh diện khi sở hữu'
        + thongSoXe('110 kg', '1.881 mm x 687 mm x 1.111 mm', 'PGM-FI, Xăng, 4 kỳ, 1 xy lanh,Làm mát bằng dung dịch', '124,9 cm3','8,4kW/8.500 vòng/phút'),
    'Honda Future': 'Future - xe số đẳng cấp hàng đầu tại thị trường Viêt Nam - nay được thổi một luồng gió mới với việc bổ sung màu trắng tinh tế cho phiên bản vành đúc và bộ tem mới đậm phong cách cho phiên bản vành nan hoa'
        + thongSoXe('Phiên bản vành nan hoa: 105 kg, Phiên bản vành đúc: 106 kg'),
    'Honda Lead': 'Kế thừa phong cách hiện đại cùng tiện ích vượt trội vốn có, xe LEAD mới được nâng tầm với hệ thống đèn LED cao cấp, an toàn hơn cùng khóa thông minh SMART Key tích hợp chức năng báo động (*) giúp nâng cao tối đa trải nghiệm lái xe cho người sở hữu.'
        + thongSoXe('113 kg', '1.842mm x 680mm x 1.130mm', 'PGM-FI, Xăng, 4 kỳ, 1 xi-lanh,làm mát bằng dung dịch', '124,8 cm3','7,90 kW/7500 vòng/phút'),
    'Honda SH Mode': 'Chuẩn mực đỉnh cao cho phong cách tinh tế sang trọng với những đường nét thiết kế mềm mại đậm chất châu Âu.'
        + thongSoXe('117kg', '1.930mm x 669mm x 1.105mm', 'PGM-FI, Xăng, 4 kỳ, 1 xi-lanh,làm mát bằng dung dịch', '124,9 cm3','8,18 kW tại 8500 vòng/phút'),
    'Honda CBR300R': 'Honda CBR300R thiết kế mang phong cách thể thao, hứa hẹn đem lại những trải nghiệm phấn khích cho các tay lái mới.'
        + thongSoXe('145 kg', '2.020 x 805 x 1.050 (mm)', 'PGM - FI, DOHC, 4 kỳ, 1 xy lanh, làm mát bằng dung dịch', '286 cm3','22,8kW / 8.500 vòng/phút'),
    'Yamaha Jupiter': 'Các dòng xe Jupiter của Yamaha gồm có hai phiên bản là Fi RC và Fi GP. Cả 2 đều sở hữu bộ tem với thiết kế mắt mắt, cá tính và thể thao.'
        + thongSoXe('104kg', '1.935mm x 680mm x 1.065mm', '4 thì, 2 van, SOHC', '114cm3','7,4 Kw / 7.000 vòng/phút'),
    'Yamaha Janus': 'Yamaha Janus 2019 là sản phẩm hứng trọng tâm tới nhóm khách hàng nữ giới trẻ tuổi với những đường nét mềm mại và dịu dàng.'
        + thongSoXe('97 kg', '1.850 mm x 705 mm', 'Blue Core, 4 thì, SOHC', '125cm3','7,0 kW (9,5 ps) / 8.000 vòng /phút'),
    'Yamaha NVX': 'Yamaha NVX 155 2019 là chiếc tay ga được đông đảo khách hàng Việt Nam quan tâm và biết đến. Xe là sự lựa chọn tối ưu cho nhóm người dùng yêu thích dòng xe thể thao nhưng lại không có thiện cảm với những mẫu côn tay hoặc phân khối lớn.'
        + thongSoXe('118 kg', '1.990 mm x 700 mm x 1.125mm', '4 thì, làm mát dung dịch, SOHC, xy lanh đơn', '155cm3','11,0 kW (15,0 ps) / 8.000 vòng /phút'),
    'Yamaha Latte': 'Yamaha Latte có sự kết hợp hài hòa giữa sự mềm mại cộng với các chi tiết sang trọng kế thừa từ Nozza.'
        + thongSoXe('100kg', '1820 mm x 680 mm x 1160 mm', 'Blue Core 4 kỳ, SOHC, làm mát bằng không khí', '124.9 cm3','8,1 mã lực tại 6.500 vòng/phút'),
    'Yamaha Freego': 'Yamaha FreeGo hướng đến phân khúc khách hàng là nam giới làm việc văn phòng'
        + thongSoXe('102 kg', '1.905 mm × 690 mm × 1.110 mm', '4 thì, 2 van, SOHC, làm mát bằng không khí', '125 cm3','7,0 kW (9,5 PS) / 8.000 vòng/phút'),
    'Yamaha YZF': 'Thừa hưởng DNA từ đàn anh R1, Yamaha YZF-R3 2019 được cải tiến cả về thiết kế và động cơ, giúp chiếc sportbike này có vận tốc tối đa tăng hơn 8 km/h so với đời trước.'
        + thongSoXe('169kg', '2.090mm x 720mm x 1.135mm', '4 thì, 4 van, 2 xy lanh, làm mát bằng dung dịch, DOHC','321 cm3','30.9 kW/ 10.750 vòng/ phút'),
    'Yamaha MT-03': 'Yamaha MT-03 là mẫu xe máy một xi-lanh đơn MT, sau này được sản xuất bởi Công ty Yamaha Motor kể từ năm 20062014, và 2016 2016 hiện tại.'
        + thongSoXe('168 kg', '2.090 x 745 x 1.035 (mm)', '4 thì, 4 van, 2 xy lanh, làm mát bằng dung dịch, DOHC', '321','30,9 kW (42,0PS)/ 10.750 vòng/phút'),
    'Suzuki GSX150': 'GSX150 BANDIT là mẫu xe côn tay thể thao hoàn toàn mới, với kiểu dáng thể thao mạnh mẽ, cảm giác và tư thế ngồi thoải mái khi điều khiển, cùng khả năng vận hành mạnh mẽ, đáp ứng nhu cầu đa dạng của khách hàng trẻ yêu thích thể thao, nhưng vẫn mong muốn chiếc xe có tư thế lái thoải mái cho cả người lái và người ngồi sau.'
        + thongSoXe('135 kg', '2,000 mm x 745 mm x 1,035mm', 'DOHC, 4 van, 1 xy-lanh, làm mát bằng dung dịch', '147,3 cm3','14,1 kw/10.500 rpm'),
    'Suzuki GD110HU': '<b>GD110HU - RẠNG NGỜI KHÍ CHẤT<b> <br>Với kiểu dáng backbone cổ điển, GD110HU chính là người bạn đồng hành rạng ngời khí chất dành cho bạn.'
        + thongSoXe('110 kg', '1,905 mm x 745mm x 1,065mm', 'SOHC,4-thì, làm mát bằng không khí', '112,8 cm3','6,2 kW / 8,000 vòng / phút'),
    'Suzuki Impulse': 'product-23.jpg,Tay Ga,31.190',
    'Suzuki Address': 'product-24.jpg,Tay Ga,28.790',
    'Piaggio Liberty One': 'product-26.jpg,Tay Ga,48.690',
    'Piaggio Liberty S': 'product-27.jpg,Tay Ga,51.690',
    'Piaggio Italia': 'product-25.jpg,Tay Ga,51.690',
    'SYM Star SR 170': 'product-28.jpg,Côn Tay,55.590',
    'Honda PCX Hibrid': 'Vẫn giữ ý tưởng thiết kế kéo dài và mượt mà từ phiên bản trước, PCX mới nay tăng thêm nét hiện đại và cao cấp với phương châm đẹp và năng động. Thiết kế liền khối của thân xe tạo sự ấn tượng và linh hoạt nhưng không kém phần mạnh mẽ.'
        + thongSoXe('130 kg', '1.923 x 745 x 1.107 mm', 'PGM-FI, Xăng, 4 kỳ, 1 xy lanh,làm mát bằng dung dịch', '124,9cm3 *149,32cm3', '8,99kW/8.500 vòng/phút *10,8kW/8.500 vòng/phút'),
    'Honda SH': '<b>SH125/150i - Biểu trưng cho sự sang trọng</b><br> Kế thừa tinh hoa của dòng xe SH với những nét thanh lịch, sang trọng mang hơi thở Châu Âu kết hợp cùng sự mạnh mẽ từ động cơ cải tiến đột phá và công nghệ thông minh tiên tiến, SH 125i / 150i phiên bản 2020 hoàn toàn mới đã thiết lập một đẳng cấp chuẩn mực cho phong cách sang trọng, hiện đại.'
        + thongSoXe('SH125i/150i CBS: 133kg, SH125i / 150i ABS: 134kg', '2.090mm x 739mm x 1.129mm', 'PGM-FI, xăng, 4 kỳ, 1 xy-lanh, làm mát bằng dung dịch', '124,8cm³ (SH 125i),156,9cm³ (SH 150i)','9,6kW/8.250 vòng/phút (SH 125i),12,4kW/8.500 vòng/phút (SH 150i)'),
    'Suzuki Raider R150': 'product-5.jpg,Côn tay,56.000',
    'Honda Vision': 'Sở hữu kiểu dáng nhỏ gọn, thanh lịch, cùng tiện ích khóa thông minh SMART KEY hiện đại, VISION nay còn được bổ sung thêm màu sắc mới sang trọng và nổi bật.'
        + thongSoXe('96 kg', '1.863 mm x 686 mm x 1.088 mm', 'Cháy cưỡng bức, làm mát bằng không khí, 4 kỳ, 1 xy lanh', '108,2 cm3', '6,59 kW/7.500 vòng/phút'),
    'Yamaha Exciter': 'amaha Exciter là dòng xe côn tay thể thao được sản xuất và phân phối bởi Yamaha Motor. '
        + thongSoXe('117 kg', '1,985 mm × 670 mm × 1,100 mm', '4 thì, 4 van, SOHC, làm mát bằng dung dịch', '150cm3','11,3 kW (15,4 PS) / 8.500 vòng/phút'),
    'Yamaha Sirius': 'Sirius được biết đến như là một trong những mẫu xe số làm nên tên tuổi của Yamaha tại thị trường Việt Nam, Sirius mang đến cho người dùng những trải nghiệm mới mẻ.'
        + thongSoXe('96kg', '1.940 mm×715 mm×1.075 mm', '4 thì, 2 van SOHC, làm mát bằng không khí', '110.3cm3','6.4 kW (8.7PS)/7,000 vòng/phút'),
};