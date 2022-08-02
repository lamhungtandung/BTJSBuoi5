
function tinhTienCap ()
 {
    //input
    var loaiKH = document.getElementById('khachhang');
    var maKhachhang = Number(document.getElementById('makh').value);
    var sokenh = Number(document.getElementById('sokenh').value);
    var kenhKetNoi = Number(document.getElementById('ketnoi').value);
    var hienThi = document.getElementById('txtResult4');

//xu li
var ketQua = tienCap (maKhachhang, sokenh, kenhKetNoi)

if(loaiKH == 0){
    return alert('error');
}

hienThi.innerHTML = 'Mã khách hàng: ' + maKhachhang + '<br>' + 'Tổng tiền cáp: ' + '$' + ketQua;
}

function tienCap(loaiKH, sokenh, kenhKetNoi) {
    var tienCap = 0;
    if (loaiKH == 'ND') {
        tienCap = 4.5 + 20.5 + (7.5 * sokenh);
    } else {
        if (kenhKetNoi > 0 && kenhKetNoi <= 10) {
            tienCap = 15 + 75 + (50 * sokenh);
        } else {
            tienCap = 15 + 75 + ((kenhKetNoi - 10) * 5) + (50 * sokenh);
        }
    }

    return tienCap;
}
//kiem tra loai khach hang
function kiemTra (){
    var loaiKH = document.getElementById('khachhang').value;
var xuatKH = loaiKH.options[loaiKH.selectedIndex].value;
var kenhKetNoi = document.getElementById('ketnoi').value;

if (xuatKH == '1') {
kenhKetNoi.disabled = true;
} else {
    kenhKetNoi.disabled = false;
}

if (xuatKH == '2') {
    kenhKetNoi.disabled = true;
}else {
    kenhKetNoi.disabled = false;
}
}