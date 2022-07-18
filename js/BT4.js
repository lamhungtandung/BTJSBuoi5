var loaiKH = document.getElementById('khachhang');
loaiKH.onchange = function () {
    var loaiKH2 = Number(document.getElementById('khachhang').value);
    var kenhKetNoi = document.getElementById('ketnoi');
    if (loaiKH2 === 1) {
        kenhKetNoi.classList.remove('show')
    } else if (clientss === 2) {
        kenhKetNoi.classList.add('show')

    }
}


document.getElementById('btncap').onclick = function ()
 {
    //input
    var loaiKH = document.getElementById('khachhang').value;
    var maKhachhang = Number(document.getElementById('makh').value);
    var sokenh = Number(document.getElementById('sokenh').value);
    var kenhKetNoi = Number(document.getElementById('ketnoi').value);
//output
var ketQua = 0;
//xu li
ketQua = tienCap (maKhachhang, sokenh, kenhKetNoi)

if(loaiKH == 0){
    return alert("Please select type of clients");
}

document.getElementById('txtResult4').innerHTML = `Mã Khách hàng : ${maKhachhang}, Tiền cáp là : $${ketQua}`
}

function tienCap(a, b, c) {
    var coban = 0;
    var phiDichvu = 0;
    var caocap = 0;
    var ketQua = 0;
    if (a === 1) {
        coban = 4.5;
        phiDichvu = 20.5;
        caocap = 7.5;
        ketQua = coban + phiDichvu + caocap * b
    } else if (a === 2) {
        coban = 15;
        phiDichvu = 75;
        caocap = 50;
        if (c > 10) {
            phiDichvu = phiDichvu + (c - 10) * 5;
        }
        ketQua = coban + phiDichvu + caocap * b
    }
    return ketQua;
}