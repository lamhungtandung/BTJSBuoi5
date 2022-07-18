document.getElementById('btnthue').onclick = function () {
   //input
   var hovaten = document.getElementById('hovaten').value;
   var thuNhap = Number(document.getElementById('thunhap').value);
    var songuoi = Number(document.getElementById('songuoi').value); 
//output
var ketQua = 0;

//xu li
ketQua = tienThue(thuNhap, songuoi)
document.getElementById('txtResult3').innerHTML = 'Họ và tên: ' + hovaten + ',' + 'Tiền thuế phải trả là : ' + ketQua.toLocaleString() +  'VNĐ';

function tienThue(a, b) {
    var ketQua = 0;
    var i = 0;
    if (a <= 60000000) {
        i = a - (4e+6) - (b * 1.6e+6);
        ketQua = i * 0.05;
    } else if (a <= 100000000) {
        i = a - (4e+6) - (b * 1.6e+6);
        ketQua = i * 0.1;
    } else if (a <= 200000000) {
        i = a - (4e+6) - (b * 1.6e+6);
        ketQua = i *  0.15;
    } else if (a <= 300000000) {
        i = a - (4e+6) - (b * 1.6e+6);
        ketQua = i *  0.2;
    } else if (a <= 650000000) {
        i = a - (4e+6) - (b * 1.6e+6);
        ketQua = i *  0.25;
    } else if (a <= 900000000) {
        i = a - (4e+6) - (b * 1.6e+6);
        ketQua = i *  0.3;
    } else if (a > 900000000) {
        i = a - (4e+6) - (b * 1.6e+6);
        ketQua = i *  0.35;
    }
    if (a === 0) {
        return ketQua = '<div class="text-danger">Dữ liệu bạn nhập chưa đủ, xin hãy bổ sung</div>';

    } else if (ketQua < 0) {
       return ketQua = '<div class="text-danger">Error</div>';
    }
   return ketQua;
}

}