function NhanVien(
  _taiKhoanNV,
  _hoTenNV,
  _email,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLam
) {
  this.taiKhoanNV = _taiKhoanNV;
  this.hoTenNV = _hoTenNV;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = 0;
  this.xepLoai = "";
  //phương thức
  this.tinhTongLuong = function () {
    if (this.chucVu === "Sếp") {
      this.tongLuong = this.luongCoBan * 3;
    } else if (this.chucVu === "Trưởng phòng") {
      this.tongLuong = this.luongCoBan * 2;
    } else if (this.chucVu === "Nhân viên") {
      this.tongLuong = this.luongCoBan * 1;
    }
  };

  this.xepLoaiNV = function () {
    if (this.gioLam >= 192) {
      this.xepLoai = "Nhân Viên Xuất Sắc";
    } else if (this.gioLam >= 176) {
      this.xepLoai = "Nhân Viên Giỏi";
    } else if (this.gioLam >= 160) {
      this.xepLoai = "Nhân viên khá ";
    } else {
      this.xepLoai = "Nhân Viên Trung Bình";
    }
  };
}
