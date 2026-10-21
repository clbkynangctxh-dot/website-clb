# DANH SÁCH VIỆC CẦN ĐIỀN NỘI DUNG (CLB KN CTXH 2026–2027)

> *Cập nhật ngày 21/10/2026 sau khi hoàn thiện Trang chủ và 04 Trang con JD (đã bỏ hộp bật mí Vòng 3 theo yêu cầu của chủ dự án).*

---

## 1. Đường link Google Form nộp đơn ứng tuyển
* **Tình trạng:** Đang để trống (`""`) trong file `js/config.js` (khi bấm nút ứng tuyển sẽ hiện thông báo `[CHỜ NỘI DUNG]`).
* **Cách điền:** Mở file `js/config.js`, dán đường link Google Form vào giữa hai dấu ngoặc kép ở dòng `LINK_GOOGLE_FORM: ""`.

---

## 2. Mốc thời gian tuyển sinh
* **Tình trạng:** Đang để theo kế hoạch gốc (`HAN_CHOT_VONG_1: "2026-10-17T23:59:00+07:00"`, Vòng 1: `07/10 – 17/10/2026`, Vòng 2: `11/10 & 18/10/2026`, Vòng 3: `19/10 – 23/10/2026`).
* **Cách điền (nếu gia hạn hoặc đổi lịch):** Sửa ngày giờ tại mục `HAN_CHOT_VONG_1` và `LO_TRINH_3_VONG` trong file `js/config.js`.

---

## 3. Link Google Drive hình ảnh hoạt động của 04 Ban
* **Tình trạng:** Trên 4 trang con trong thư mục `ban/` đã có sẵn nút *"Xem ảnh hoạt động trên Drive ➔"*. Khi chưa điền link sẽ hiện khung `[CHỜ ẢNH MINH HỌA HOẠT ĐỘNG]`.
* **Cách điền:** Mở file `js/config.js`, dán link thư mục Google Drive của từng ban vào mục `LINK_DRIVE_ANH` (`toChuc`, `thanhVien`, `ketNoiNguonLuc`, `truyenThong`).

---

## 4. Tùy chỉnh chân trang & dòng ghi chú bản quyền (Footer / Footnote)
* **Tình trạng:** Đã đưa toàn bộ vào mục `FOOTER` trong `js/config.js`.
* **Cách sửa / thêm / bớt:** Mở file `js/config.js` tìm mục số `9. FOOTER`:
  * `tenDonVi`: Sửa tên đơn vị hiển thị ở chân trang.
  * `cacDongThongTin`: Muốn thêm dòng địa chỉ / email / hotline chỉ cần copy thêm 1 dòng trong dấu ngoặc kép `""` có dấu phẩy ở cuối; muốn bớt dòng thì xóa đi.
  * `loiNhacCuoiTrang` & `chuNutCuoiTrang`: Sửa lời kêu gọi và chữ trên nút bấm cuối trang.
  * `dongGhiChuDayTrang`: Sửa dòng ghi chú bản quyền ở đáy cùng của website (Footnote).
