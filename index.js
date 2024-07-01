function inKetQua(){
    var num = document.getElementById("num").value * 1; 
    
var count = 0;
 while (num > 1){
    count++;
num = Math.floor(num / 2);
console.log("🚀 num:", num)

} 
}
// bài 2
document.getElementById("tinhGiaiThua").onclick = function() {
    var nhapSo = Number(document.getElementById('nhapSo').value);
    var giaiThua = 1;
    //xác định yếu tố khởi tạo
    var giaTri = 1;
    // kiểm tra điều kiện loop
    while(giaTri <= nhapSo){
    // giaiThua = giaiThua * giaTri
        giaiThua *= giaTri; 
        // giaTri = giaTri + 1;
        giaTri++;
}
document.getElementById("result").innerHTML = giaiThua;
}
// bài 3
function tinhTong(){
    var num = document.getElementById('nhapSoVao').value * 1;
    console.log(num);
    var tong = 0;
    // xử lý
    var hangSo = 1;
    // điều kiện lặp 
    while(hangSo <= num){
        // tong = tong + hangSo
        tong += hangSo;
        // bước nhảy tăng lên 1 
        hangSo++;
    }
    document.getElementById('ketQua').innerHTML = tong;
}
// bài 4
function tinhSoChan(){
    var number = document.getElementById('nhapSoChan').value * 1;
    var tong = 0;
    var soHang = 1;
    while(soHang <= number){
        tong += soHang;
        soHang += 2;
    }
    document.getElementById('result4').innerHTML = tong;
}

// bài 5
function tinhSoNguyenTo() {
    var number = document.getElementById("soNguyenTo").value * 1; 
    var ketQua = "";
    var dem = 0;
    var soHang = 1;
    while(soHang <= number){
        if (number % soHang)
    }
}