document.getElementById('btnTinh').onclick = function () {
    var diemChuan = Number(document.getElementById('diemchuan').value);
    var khuVuc = Number(document.getElementById('khuvuc').value);
    var doiTuong = Number(document.getElementById('doituong').value);
    var diem1 = Number(document.getElementById('diemthu1').value);
    var diem2 = Number(document.getElementById('diemthu2').value);
    var diem3 = Number(document.getElementById('diemthu3').value);

//output
var ketQua = '';

//xu li

function tinhdiem(a, b, c, d, e) {
    var tong = a + b + c + d + e;

        if (a === 0 || b === 0 || c === 0) {
            tong = 0
        }
        return tong
    }
    tong = tinhdiem(diem1, diem2, diem3, khuVuc, doiTuong)
    if (tong === 0) {
        return document.getElementById('txtResult').innerHTML = 'Bạn có 1 hoặc nhiều môn 0 điểm bạn đã : trượt '
    } else if (tong >= diemChuan) {
        ketQua = 'Bạn đã trúng tuyển'
    } else if (tong < diemChuan) {
        ketQua = 'Bạn đã trượt'
    }

    document.getElementById('txtResult').innerHTML = ketQua;
}

