/**
 * Đầu vào:
 * + Chọn khu vực ưu tiên
 * + Chọn đối tượng ưu tiên
 * + Nhập điểm chuẩn 
 * + Nhập điểm thi 3 môn
 * Xử lý:
 * + Hàm tính điểm xét tuyển
 * + Tạo các hàm lấy điểm ưu tiên cho khu vực và đối tượng
 * + So sánh điểm xét tuyển và điểm chuẩn để đưa ra hiển thị tương ứng
 * Đầu ra: 
 * + Hiển thị ra họ và tên, điểm thi và đậu/rớt
 */
function diemKhuVuc(khuVuc){
    var diemKhuVuc;
    switch(khuVuc){
        case "A":
            diemKhuVuc=2;
            break;
        case "B":
            diemKhuVuc=1;
            break;
        case "C":
            diemKhuVuc=0.5;
            break;
        default:
            diemKhuVuc=0;
    }
    return diemKhuVuc;
}
function diemDoiTuong(doiTuong){
    var diemDoiTuong;
    switch(doiTuong){
        case "1":
            diemDoiTuong=2.5;
            break;
        case "2":
            diemDoiTuong=1.5;
            break;
        case "3":
            diemDoiTuong=1;
            break;
        default:
            diemDoiTuong=0; 
    }
    return diemDoiTuong;
}
function getEle(id){
    return document.getElementById(id);
}
function hienThi(diemXetTuyen){
    var displayXetTuyen;
    if (diemXetTuyen < diemChuan){
        displayXetTuyen = "<p>Bạn đã rớt. Tổng điểm: " + diemXetTuyen + "</p>";
        document.getElementById("footerXetTuyen").innerHTML = displayXetTuyen;
    }
    else {
        displayXetTuyen = "<p>Bạn đã đậu. Tổng điểm: " + diemXetTuyen + "</p>";
        document.getElementById("footerXetTuyen").innerHTML = displayXetTuyen;
    }
}
document.getElementById("btnCalculate").onclick = function () {
    var khuVuc = getEle("khuVuc").value;
    var doiTuong = getEle("doiTuong").value;
    var diem_DoiTuong = diemDoiTuong(doiTuong);
    var diem_Khuvuc = diemKhuVuc(khuVuc);
    var mon1 = getEle("mon1").value*1;
    var mon2 = getEle("mon2").value*1;
    var mon3 = getEle("mon3").value*1;
    var diemChuan = getEle("diemChuan").value*1;
    var diemXetTuyen = mon1 + mon2 + mon3 + diem_DoiTuong +diem_Khuvuc;
    hienThi(diemXetTuyen);
}
/**
 *Đầu vào: 
  Nhập họ và tên
  Nhập số kwh đã sử dụng
  Xử lý:
  Hàm tính hóa đơn tiền điện 
  Đầu ra:
  Hiển thị hóa đơn
 */
function xuatHoaDon(ten, kwh){
    var tienDien;
    if(kwh <= 50){
        tienDien = kwh * 500;
    } else if(kwh <= 100 && kwh > 50) {
        tienDien = 50 * 500 + (kwh-50) * 650;
    } else if(kwh <= 200 && kwh > 100) {
        tienDien = 50 * 500 + 50 * 650 + (kwh - 100) * 850;
    } else if(kwh <= 350 && kwh > 200){
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (kwh - 200) * 1100;
    } else {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kwh - 350) * 1300;
    }
    var displayHoaDon = "<p>Họ tên: "+ ten +"; "+"Tiền điện: "+Intl.NumberFormat('vn-VN').format(tienDien)+"</p>";
    return displayHoaDon;
}
document.getElementById("btnTienDien").onclick = function () {
    var ten1 = getEle("ten1").value;
    var kwh = getEle("kwh").value*1;
    var displayHoaDon=xuatHoaDon(ten1,kwh);
   getEle("footerHoaDon").innerHTML=displayHoaDon;
}   
/**
 * Đầu vào: 
 * Nhập vào thu nhập cá nhân 
 * Nhập vào số người phụ thuộc
 * Nhập vào tên
 * Xử lý:
 * Hàm tính thuế cá nhân: Ứng với từng phần tiền sẽ chịu 1 mức thuế khác nhau
 * Sau đó sẽ được trừ đi số người phụ thuộc, 1,6 triệu/1ng;
 * Đầu ra:
 * Hiển thị tên và thuế cần đóng
 */
function thueCaNhan(incomeTaxes){
    var tax;
    if(incomeTaxes/10**6 <= 60){
        tax = 0.05;
    } else if (incomeTaxes/10**6 > 60 && incomeTaxes/10**6 <= 120) {
        tax = 0.1;
    } else if (incomeTaxes/10**6 > 120 && incomeTaxes/10**6 <= 210) {
        tax = 0.15;
    } else if (incomeTaxes/10**6 > 210 && incomeTaxes/10**6 <= 384) {
        tax = 0.2;
    } else if (incomeTaxes/10**6 > 384 && incomeTaxes/10**6 <= 624) {
        tax = 0.25;
    } else if (incomeTaxes/10**6 > 624 && incomeTaxes/10**6 <= 960) {
        tax = 0.3;
    } else {
        tax = 0.35;
    }
    var taxMoney = incomeTaxes * tax;
    return taxMoney;
}
function hienThiTax(incomeTaxes,ten2){
    var taxMoney=thueCaNhan(incomeTaxes);
    var displayNoti = "<p>Họ tên: "+ ten2 +"; "+"Tiền thuế thu nhập cá nhân: "+Intl.NumberFormat('vn-VN').format(taxMoney)+" VND</p>";
    getEle("footerTax").innerHTML=displayNoti;
}
document.getElementById("btnTax").onclick = function () {
    var ten2 = getEle("ten2").value;
    var dependentPeople = getEle("dependentPeople").value*1;
    var income = getEle("income").value*1;
    if(income<10**6){
        alert("Số tiền nhập không hợp lệ")
    }else {
    var incomeTaxes = income - 4*10**6 - dependentPeople * 1.6 * 10**6;
    hienThiTax(incomeTaxes,ten2);
    }
}
/**
 * Đầu vào: 
 * Chọn loại khách hàng
 * Nhập Mã khách hàng
 * Số kênh cao cấp
 * Số kết nối (chỉ xuất hiện đối với doanh nghiệp)
 * Xử lý: 
 * Hàm xử lý thêm input cho doanh nghiệp để điền số kết nối;
 * Hàm xử lý hóa đơn tiền cáp đối với doanh nghiệp:
 * TIền cáp sẽ cố định 10 kết nối, sẽ tính phí thêm đối với từng kết nối quá 10;
 * Hàm xử lý hóa đơn tiền cáp đối với nhà dân; 
 * Đầu ra:
 * Hiển thị mã khách hàng và tiền cáp phải trả;
 */
var xuLyHoaDon;
var tienCap;
function capDoanhNghiep(kenhCaoCap,ketNoi){
    xuLyHoaDon = 15;
    if (0<ketNoi && ketNoi<=10){
        tienCap = 75;
    } else {
        tienCap = 75 + (ketNoi-10)*5;
    }
    tienCap += xuLyHoaDon + kenhCaoCap*50;
    return tienCap;
}
function capNhaDan(kenhCaoCap){
    xuLyHoaDon = 4.5;
    tienCap = xuLyHoaDon + 20.5 + kenhCaoCap*7.5;
    return tienCap;  
}
document.getElementById("customer").onchange = function (){
    var customer = document.getElementById("customer").value*1;
    customer == 2? document.getElementById("ketnoi").removeAttribute("hidden"):document.getElementById("ketnoi").setAttribute("hidden");
}
document.getElementById("btnCap").onclick = function (){
    var customer = getEle("customer").value*1;
    var kenhCaoCap = getEle("kenhCaoCap").value*1;
    var ketNoi;
    var customerCode = getEle("customerCode").value;
    switch(customer){
    case 1:
        tienCap = capNhaDan(kenhCaoCap);
        break;
    case 2:
        ketNoi = getEle("ketNoi").value*1;
        tienCap = capDoanhNghiep(kenhCaoCap,ketNoi);
        break;
    default:
        alert("Hãy chọn loại khách hàng");
    }
    var displayCap = "<p>Mã khách hàng: "+customerCode+"; Tiền cáp: $"+tienCap+"</p>";
    getEle("footerCap").innerHTML=displayCap; 
}

