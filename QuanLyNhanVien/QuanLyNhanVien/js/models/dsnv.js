function DanhSachNV() {
  this.arr = [];
  this.themNV = function (nhanVien) {
    this.arr.push(nhanVien);
  };
  this._xoaNV = function (taiKhoanNV) {
    /**
     * 0.tạo biến index = -1
     * 1.duyệt mảng
     * 2. => nhanVien = arr[i]
     * 3 => nếu  nhanVien.hoTenNV = hoTenNV
     * 4.=> index = i ; break
     *
     * 5 thoát khỏi vòng lặp và arr.spilce(index,1)
     */

    var index = -1;
    for (var i = 0; i < this.arr.length; i++) {
      var nhanVien = this.arr[i];
      if (nhanVien.taiKhoanNV === taiKhoanNV) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };
  this.capNhatNV = function () {};
  this.timKiemNV = function () {};
}
