document.getElementById('btndien').onclick = function () {
    //input

    var sokw = Number(document.getElementById('sokw').value);
    var hoTen = document.getElementById('hoten').value;
    
    //output
    var ketQua = 0;

    //xu li
    function tinhTienDien(a) {
        var ketQua = 0;
        if (a <= 50) {
            ketQua = a * 500
        } else if (a <= 100) {
            ketQua = a * 650
        } else if (a <= 200) {
            ketQua = a * 850
        } else if (a <= 350) {
            ketQua = a * 1100
        } else if (a > 350) {
            ketQua = a * 1300
        }
        return ketQua;
    }
    ketQua = tinhTienDien(sokw)
    document.getElementById('txtResult2').innerHTML = 'Họ và tên: ' + hoTen + ',' + ' Tiền điện phải trả : ' + ketQua.toLocaleString() + ' VNĐ';
}
