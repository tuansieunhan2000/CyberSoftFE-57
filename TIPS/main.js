var e = document.getElementById("slPhanTramTip");
var strUser = e.options[e.selectedIndex].text;

console.log(strUser)

document.getElementById("btnTinhTienTip").addEventListener("click",function(){
    var e = document.getElementById("slPhanTramTip");
    var strUser = e.options[e.selectedIndex].value;
    var soNguoi =document.getElementById("txtSoNguoi").value;
    var tongTien =document.getElementById("txtTongTien").value;
    var thongbaoTienTip = (tongTien*(strUser/100))/soNguoi; 
    console.log(thongbaoTienTip);
    if(Number.isNaN(thongbaoTienTip)){
        document.getElementById("thongBao").style.display="block";
        document.getElementById("thongBao").innerHTML="Vui lòng điền vào ô trống!!!";
    }
    else
    {
        document.getElementById("thongBao").style.display="block";
        document.getElementById("thongBao").innerHTML="<h1>Tiền TIPS</h1><br>"+thongbaoTienTip ;
    }
});