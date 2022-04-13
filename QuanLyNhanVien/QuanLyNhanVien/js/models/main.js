function getELE(id) {
  return document.getElementById(id);
}

//tạo đối tượng DanhSachNV
var DSNV = new DanhSachNV();
getLoCal();
function layThongTinNV() {
  var _taiKhoanNV = getELE("tknv").value;
  var _hoTenNV = getELE("name").value;
  var _email = getELE("email").value;
  var _matKhau = getELE("password").value;
  var _ngayLam = getELE("datepicker").value;
  var _luongCoBan = getELE("luongCB").value * 1;
  var _chucVu = getELE("chucvu").value;
  var _gioLam = getELE("gioLam").value * 1;

  //tạo đối tượng nhân viên
  var nhanVien = new NhanVien(
    _taiKhoanNV,
    _hoTenNV,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam
  );

  // tinhTongLuong
  nhanVien.tinhTongLuong();
  //   xepLoaiNV
  nhanVien.xepLoaiNV();
  return nhanVien;
}
// themnhanvien
getELE("btnThemNV").addEventListener("click", function () {
  var nhanVien = layThongTinNV();
  DSNV.themNV(nhanVien);
  setLoCal();
  taoBang(DSNV.arr);
});
function taoBang(arr) {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var NV = arr[i];
    content += `
        <tr>
        <td>${NV.taiKhoanNV}</td>
        <td>${NV.hoTenNV}</td>
        <td>${NV.email}</td>
        <td>${NV.ngayLam}</td>
        <td>${NV.chucVu}</td>
        <td>${NV.tongLuong}</td>
        <td>${NV.xepLoai}</td>
        <td>    
         <button class="btn btn-danger" onclick="xoaNV('${NV.taiKhoanNV}')">Xoá</button>
        </td>
        </tr>
        `;
  }
  getELE("tableDanhSach").innerHTML = content;
}
function setLoCal() {
  // chuyen từ JSON sang String
  var dataStrings = JSON.stringify(DSNV.arr);
  localStorage.setItem("DSNV", dataStrings);
}

function getLoCal() {
  var dataString = localStorage.getItem("DSNV");
  if (dataString) {
    // chuyen từ JSON sang String
    var dataJSON = JSON.parse(dataString);
    // nap data vao arr
    DSNV.arr = dataJSON;
    // render
    taoBang(DSNV.arr);
  }
}

/**
 * xóa nhân viên
 */

function xoaNV(taiKhoanNV) {
  DSNV._xoaNV(taiKhoanNV);
  console.log(DSNV.arr);
  taoBang(DSNV.arr);
}
