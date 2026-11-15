# DANH SÁCH VIỆC CẦN ĐIỀN NỘI DUNG (CLB KN CTXH 2026–2027)

> *Cập nhật ngày 21/10/2026 sau khi hoàn thiện Trang chủ và 04 Trang con JD (đã bỏ hộp bật mí Vòng 3 theo yêu cầu của chủ dự án).*

---

## 1. Đường link Google Form nộp đơn ứng tuyển
* **Tình trạng:** Đang để trống (`""`) trong file `js/config.js` (khi bấm nút ứng tuyển sẽ hiện thông báo `[CHỜ NỘI DUNG]`).
* **Cách điền:** Mở file `js/config.js`, dán đường link Google Form vào giữa hai dấu ngoặc kép ở dòng `LINK_GOOGLE_FORM: ""`.

---

## 2. Mốc thời gian tuyển sinh
* **Tình trạng:** Đã cập nhật theo kế hoạch mới (`HAN_CHOT_VONG_1: "2026-11-22T23:59:00+07:00"`, Vòng 1: `16/11 – 22/11/2026`, Vòng 2: `25/11 – 27/11/2026`, Vòng 3: `30/11 – 10/12/2026`).
* **Cách điền (nếu gia hạn hoặc đổi lịch):** Sửa ngày giờ tại mục `HAN_CHOT_VONG_1` và `LO_TRINH_3_VONG` trong file `js/config.js`.

---

## 3. Link Google Drive & Chữ khung JD của 04 Ban
* **Tình trạng:** Trên 4 trang con trong thư mục `ban/` đã có sẵn khung link Google Drive bên ngoài (`[JD ĐANG ĐƯỢC UP LÊN]` + nút *"📂 Xem ảnh hoạt động trên Drive ➔"*).
* **Cách điền link 4 Ban:** Mở file `js/config.js`, dán link Google Drive của từng ban vào mục `LINK_DRIVE_ANH` (`toChuc`, `thanhVien`, `ketNoiNguonLuc`, `truyenThong`).
* **Cách sửa chữ nút & nhãn chỗ JD Ban:**
  * Sửa chữ trên nút bấm tại mục `CHU_NUT_BAM.nutXemDrive` trong `js/config.js`.
  * Sửa nhãn trạng thái (`nhanKhiChuaCoLink`, `nhanKhiDaCoLink`), dòng mô tả (`moTa`) và thông báo khi chưa có link tại mục `KHUNG_JD_BAN` trong `js/config.js`.

---

## 3B. Ảnh bìa chương trình ở đầu Trang chủ
* **Vị trí thư mục:** `assets/bia-chuong-trinh/`
* **Cách bỏ ảnh:** Bỏ ảnh bìa vào thư mục `assets/bia-chuong-trinh/` và đặt tên `bia.jpg` / `bia.png` (hoặc điền tên file vào `BIA_CHUONG_TRINH.tenFileAnh` trong `js/config.js`). Có thể chỉnh hoặc tắt khung chờ tại mục `BIA_CHUONG_TRINH` trong `js/config.js`.

---

## 4. Tùy chỉnh chân trang & dòng ghi chú bản quyền (Footer / Footnote)
* **Tình trạng:** Đã đưa toàn bộ vào mục `FOOTER` trong `js/config.js`.
* **Cách sửa / thêm / bớt:** Mở file `js/config.js` tìm mục số `9. FOOTER`:
  * `tenDonVi`: Sửa tên đơn vị hiển thị ở chân trang.
  * `cacDongThongTin`: Muốn thêm dòng địa chỉ / email / hotline chỉ cần copy thêm 1 dòng trong dấu ngoặc kép `""` có dấu phẩy ở cuối; muốn bớt dòng thì xóa đi.
  * `loiNhacCuoiTrang` & `chuNutCuoiTrang`: Sửa lời kêu gọi và chữ trên nút bấm cuối trang.
  * `dongGhiChuDayTrang`: Sửa dòng ghi chú bản quyền ở đáy cùng của website (Footnote).

---

## 5. Tùy chỉnh Giới thiệu CLB, Ảnh hoạt động & Phương châm
* **Vị trí sửa:** Mở file `js/config.js` tìm mục số `10. GIOI_THIEU_CLB`:
  * `tieuDePhu`: Sửa tiêu đề nhỏ (mặc định: "Về chúng mình").
  * `doanGioiThieu`: Sửa toàn bộ đoạn văn giới thiệu CLB.
  * `danhSachAnh`: Điền tên file ảnh bỏ trong `assets/gioi-thieu/` (hoặc chỉ cần đặt tên `anh-1.jpg`, `anh-2.jpg`... là web tự nhận).
  * `tieuDePhuongCham`: Sửa tiêu đề khu vực phương châm (mặc định: "Phương châm hoạt động").
  * `phuongCham`: Sửa hoặc thêm/bớt các phương châm (mặc định: Trách nhiệm, Đoàn kết, Sáng tạo, Chia sẻ).

---

## 6. Tùy chỉnh chữ trên TẤT CẢ các nút bấm & Tiêu đề đầu trang
* **Vị trí sửa:** Mở file `js/config.js` tìm mục số `11. CHU_NUT_BAM` và `12. THONG_TIN_HERO`:
  * `nutTrenMenu`: Sửa chữ nút trên thanh menu (mặc định: "Ứng tuyển ngay").
  * `nutChinhHero`: Sửa chữ nút cam lớn đầu trang (mặc định: "Điền đơn ứng tuyển ngay").
  * `nutPhuHero`: Sửa chữ nút phụ đầu trang (mặc định: "Khám phá 04 ban chuyên môn ↓").
  * `nutXemChiTietBan`: Sửa chữ nút trên 4 thẻ Ban (mặc định: "Xem chi tiết JD & Quyền lợi ➔").
  * `nutDatCauHoi`: Sửa chữ nút ở mục FAQ (mặc định: "Đặt câu hỏi").
  * `nutQuayVeTrangChu`: Sửa chữ nút quay lại ở các trang con (mặc định: "← Quay về Trang chủ").
  * `nutXemDrive`: Sửa chữ nút xem Drive ở các trang con (mặc định: "📂 Xem ảnh hoạt động trên Drive ➔").
  * `nutDangKyVaoBan`: Sửa chữ nút lớn cuối mỗi trang Ban (mặc định: "ĐĂNG KÝ NGUYỆN VỌNG VÀO BAN NÀY NGAY").
  * `thongBaoHetHanVong1`: Sửa dòng chữ khi hết hạn (mặc định: "Vòng 1 đã đóng đơn").
  * `tieuDeChinh` & `thongDiepNgan`: Sửa tiêu đề to nhất và câu châm ngôn ngắn ở đầu trang chủ.

---

## 7. Tùy chỉnh mục Những câu hỏi thường gặp (FAQ)
* **Vị trí sửa:** Mở file `js/config.js` tìm mục số `13. FAQ`:
  * `theMuc`: Sửa thẻ tag nhỏ (mặc định: "Hỏi đáp").
  * `tieuDe`: Sửa tiêu đề mục FAQ (mặc định: "NHỮNG CÂU HỎI THƯỜNG GẶP").
  * `loiDan`: Sửa lời nhắn nhủ cạnh nút "Đặt câu hỏi".
  * `danhSach`: Danh sách từng câu hỏi và câu trả lời.
    * Sửa chữ: chỉ cần sửa nội dung trong dấu ngoặc kép `""`.
    * Thêm câu hỏi: copy thêm 1 khối `{ cauHoi: "...", cauTraLoi: "..." }` kèm dấu phẩy ở cuối.
    * Bớt câu hỏi: xóa khối câu hỏi bạn không cần đi.
