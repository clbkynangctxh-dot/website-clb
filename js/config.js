/**
 * =====================================================================
 * CẤU HÌNH TRUNG TÂM DỰ ÁN (js/config.js)
 * Website Tuyển Thành Viên CLB Kỹ Năng Công Tác Xã Hội 2026–2027
 * =====================================================================
 * Hướng dẫn dành cho Chủ dự án (không cần biết lập trình):
 * - Mọi thông tin hay thay đổi chỉ cần sửa tại file này.
 * - Chỉ sửa phần nội dung nằm trong dấu ngoặc kép "" ở vế phải dấu hai chấm.
 * - KHÔNG sửa tên các biến viết hoa ở vế trái (ví dụ: LINK_GOOGLE_FORM, HAN_CHOT_VONG_1,...).
 */

const CONFIG = {
  // 1. Đường link Google Form nộp đơn Vòng 1
  // Nếu để trống (""), khi bấm nút "Ứng tuyển ngay" trang web sẽ hiện thông báo "[CHỜ NỘI DUNG]"
  LINK_GOOGLE_FORM: "",

  // 2. Hạn chót đóng đơn Vòng 1 (dùng cho đồng hồ đếm ngược, múi giờ Việt Nam +07:00)
  HAN_CHOT_VONG_1: "2026-10-17T23:59:00+07:00",

  // 3. Mốc thời gian 03 Vòng tuyển chọn (theo múi giờ Việt Nam +07:00)
  // Dùng để hiển thị trên thẻ lộ trình và tự động tính trạng thái:
  // "Sắp diễn ra" | "Đang diễn ra" | "Đã kết thúc"
  LO_TRINH_3_VONG: [
    {
      id: "vong-1",
      tenVong: "VÒNG 1: ĐIỀN BIỂU MẪU",
      thoiGianHienThi: "07/10 – 17/10/2026",
      hinhThuc: "Trực tuyến (Google Form)",
      tomTat: "Chia sẻ thông tin cá nhân, mục tiêu và nguyện vọng bằng sự chân thành, mạch lạc.",
      batDau: "2026-10-07T00:00:00+07:00",
      ketThuc: "2026-10-17T23:59:00+07:00"
    },
    {
      id: "vong-2",
      tenVong: "VÒNG 2: PHỎNG VẤN",
      thoiGianHienThi: "11/10 (Đợt 1) & 18/10/2026 (Đợt 2)",
      hinhThuc: "Trực tiếp kết hợp Trực tuyến",
      tomTat: "Trò chuyện trực tiếp cùng Ban Giám khảo để làm rõ cá tính và mức độ phù hợp.",
      batDau: "2026-10-11T00:00:00+07:00",
      ketThuc: "2026-10-18T23:59:59+07:00"
    },
    {
      id: "vong-3",
      tenVong: "VÒNG 3: LÀM VIỆC NHÓM",
      thoiGianHienThi: "19/10 – 23/10/2026",
      hinhThuc: "Trực tuyến kết hợp Trực tiếp",
      tomTat: "Phối hợp giữa 4 ban để lập kế hoạch thực tế cho chương trình giả định \"Trung thu yêu thương\".",
      batDau: "2026-10-19T00:00:00+07:00",
      ketThuc: "2026-10-23T23:59:59+07:00"
    }
  ],

  // 4. Đối tượng & Chỉ tiêu tuyển thành viên mới
  DOI_TUONG_TUYEN: "Toàn thể sinh viên Trường ĐH KHXH&NV, ĐHQG-HCM.",
  CHI_TIEU_TUYEN: "35",

  // 5. Thông tin Ban Chủ nhiệm CLB nhiệm kỳ 2026–2027
  BAN_CHU_NHIEM: {
    chuNhiem: "Đ/c Trần Thái Thành (Chủ nhiệm)",
    phoChuNhiem: "Đ/c Nguyễn Thị Ngọc Trân (Phó Chủ nhiệm)"
  },

  // 6. Đường link Fanpage Facebook chính thức của CLB
  LINK_FANPAGE: "https://www.facebook.com/kynangctxh",

  // 7. Đường link hộp thư Messenger Fanpage (dùng cho nút "Đặt câu hỏi")
  LINK_MESSENGER: "https://m.me/kynangctxh",

  // 8. Đường link Google Drive xem hình ảnh hoạt động của 4 Ban
  LINK_DRIVE_ANH: {
    toChuc: "",         // Link Drive ảnh hoạt động Ban Tổ chức chương trình
    thanhVien: "",      // Link Drive ảnh hoạt động Ban Thành viên & PTNL
    ketNoiNguonLuc: "", // Link Drive ảnh hoạt động Ban Kết nối nguồn lực
    truyenThong: ""     // Link Drive ảnh hoạt động Ban Truyền thông
  },

  // 9. THÔNG TIN CHÂN TRANG & GHI CHÚ ĐÁY TRANG (FOOTER / FOOTNOTE)
  // Bạn có thể thoải mái thêm, bớt hoặc sửa các thông tin bên dưới:
  FOOTER: {
    // Tên đơn vị / CLB hiển thị cạnh Logo ở chân trang
    tenDonVi: "CLB Kỹ năng Công tác xã hội – Đoàn khoa Công tác xã hội - Nhân học - Xã hội học, Trường ĐH KHXH&NV, ĐHQG-HCM.",

    // Danh sách các dòng thông tin liên hệ / địa chỉ / ghi chú ở chân trang
    // - Muốn THÊM dòng: copy thêm một dòng mới để trong dấu ngoặc kép "" và có dấu phẩy ở cuối
    // - Muốn BỚT dòng: xóa dòng bạn không muốn hiển thị đi
    // (Nếu dòng có đường link như https://facebook.com/... thì web sẽ tự biến thành link bấm được)
    cacDongThongTin: [
      "🌐 Fanpage: https://www.facebook.com/kynangctxh",
      "📍 Địa điểm hoạt động: Cơ sở Linh Trung (TP. Thủ Đức)"
    ],

    // Lời nhắn nhủ trên khung kêu gọi cuối trang
    loiNhacCuoiTrang: '"Đừng bỏ lỡ cơ hội trở thành một phần của CLB KN CTXH"',

    // Chữ trên nút bấm cuối trang
    chuNutCuoiTrang: "ĐIỀN ĐƠN NGAY",

    // Dòng ghi chú bản quyền ở đáy cùng của trang (Footnote)
    // Sau này muốn thêm/bớt thông tin bản quyền hoặc ghi chú gì chỉ cần sửa dòng này:
    dongGhiChuDayTrang: "© 2026 – 2027 CLB Kỹ năng Công tác xã hội – Trường ĐH KHXH&NV, ĐHQG-HCM."
  }
};

/**
 * Hàm hỗ trợ xử lý khi người dùng bấm vào nút "Ứng tuyển ngay":
 * Nếu link Google Form còn để trống, sẽ thông báo nhẹ nhàng cho người dùng biết "[CHỜ NỘI DUNG]".
 * Nếu đã có link, sẽ tự động mở link trong tab mới.
 */
function moDonUngTuyen(event) {
  if (event) event.preventDefault();
  if (!CONFIG.LINK_GOOGLE_FORM || CONFIG.LINK_GOOGLE_FORM.trim() === "" || CONFIG.LINK_GOOGLE_FORM === "#") {
    alert("[CHỜ NỘI DUNG] Đường link Google Form nộp đơn hiện đang được cập nhật. Vui lòng quay lại sau hoặc theo dõi Fanpage CLB!");
    return false;
  }
  window.open(CONFIG.LINK_GOOGLE_FORM, "_blank", "noopener,noreferrer");
  return false;
}
