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
  // 0. Tên CLB hiển thị ở góc trái trên cùng (Thanh điều hướng Navbar)
  TEN_CLB_NAVBAR: "CLB KĨ NĂNG CÔNG TÁC XÃ HỘI",

  // 1. Đường link Google Form nộp đơn Vòng 1
  // Nếu để trống (""), khi bấm nút "Ứng tuyển ngay" trang web sẽ hiện thông báo "[CHỜ NỘI DUNG]"
  LINK_GOOGLE_FORM: "",

  // 2. Hạn chót đóng đơn Vòng 1 (dùng cho đồng hồ đếm ngược, múi giờ Việt Nam +07:00)
  HAN_CHOT_VONG_1: "2026-10-25T23:59:00+07:00",

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
      batDau: "2026-10-25T00:00:00+07:00",
      ketThuc: "2026-10-27T23:59:00+07:00"
    },
    {
      id: "vong-2",
      tenVong: "VÒNG 2: PHỎNG VẤN",
      thoiGianHienThi: "11/10 (Đợt 1) & 18/10/2026 (Đợt 2)",
      hinhThuc: "Trực tiếp kết hợp Trực tuyến",
      tomTat: "Trò chuyện trực tiếp cùng Ban Giám khảo để làm rõ cá tính và mức độ phù hợp.",
      batDau: "2026-10-28T00:00:00+07:00",
      ketThuc: "2026-10-29T23:59:59+07:00"
    },
    {
      id: "vong-3",
      tenVong: "VÒNG 3: LÀM VIỆC NHÓM",
      thoiGianHienThi: "19/10 – 23/10/2026",
      hinhThuc: "Trực tuyến kết hợp Trực tiếp",
      tomTat: "Phối hợp giữa 4 ban để lập kế hoạch thực tế cho chương trình giả định \"Trung thu yêu thương\".",
      batDau: "2026-11-30T00:00:00+07:00",
      ketThuc: "2026-10-31T23:59:59+07:00"
    }
  ],

  // 4. Đối tượng & Chỉ tiêu tuyển thành viên mới
  DOI_TUONG_TUYEN: "Sinh viên Trường ĐH KHXH&NV, ĐHQG-HCM.",
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
      "🌐 Email: clbkynang.ctxh@hcmussh.edu.vn",
      "📍 Trần Thái Thành - 0862373407 - Chủ nhiệm CLB"
    ],

    // Lời nhắn nhủ trên khung kêu gọi cuối trang
    loiNhacCuoiTrang: '"Đừng bỏ lỡ cơ hội trở thành một phần của SWS nhé!!"',

    // Chữ trên nút bấm cuối trang
    chuNutCuoiTrang: "ĐIỀN ĐƠN NGAY",

    // Dòng ghi chú bản quyền ở đáy cùng của trang (Footnote)
    // Sau này muốn thêm/bớt thông tin bản quyền hoặc ghi chú gì chỉ cần sửa dòng này:
    dongGhiChuDayTrang: "© 2026 – 2027 CLB Kỹ năng Công tác xã hội – Trường ĐH KHXH&NV, ĐHQG-HCM."
  },

  // 10. GIỚI THIỆU CLB, ẢNH HOẠT ĐỘNG & PHƯƠNG CHÂM (TRANG CHỦ)
  // Bạn có thể tự do chỉnh sửa nội dung giới thiệu, danh sách ảnh và phương châm tại đây:
  GIOI_THIEU_CLB: {
    // Tiêu đề nhỏ và đoạn văn giới thiệu CLB ở cột bên trái
    tieuDePhu: "Về chúng mình",
    doanGioiThieu:
      'Trực thuộc Đoàn khoa Công tác xã hội - Nhân học - Xã hội học (Trường ĐH KHXH&NV, ĐHQG-HCM), CLB Kỹ năng Công tác xã hội (SWS) được thành lập giúp sinh viên gắn kết lý thuyết giảng đường với kỹ năng làm việc cùng con người và cộng đồng. Bước sang năm học 2026 – 2027, SWS mở rộng cánh cửa chào đón toàn thể sinh viên Nhân văn có chung đam mê phụng sự xã hội.',

    // Danh sách tên các file ảnh đặt trong thư mục "assets/gioi-thieu/" (hiển thị bên cạnh phần giới thiệu)
    // - Cách 1 (Tự động): Bạn chỉ cần bỏ ảnh vào thư mục "assets/gioi-thieu/" và đặt tên là anh-1.jpg, anh-2.jpg, anh-3.jpg... (hoặc đuôi .png, .webp) thì web sẽ tự tìm và chiếu lên mà không cần điền vào đây.
    // - Cách 2 (Tên bất kỳ): Nếu ảnh có tên riêng, bạn ghi tên file vào trong ngoặc vuông bên dưới, ví dụ: ["sinh-hoat.jpg", "trung-thu.png"]
    danhSachAnh: [],

    // Tiêu đề và 4 phương châm hoạt động ở khu vực riêng bên dưới (không dùng biểu tượng icon)
    tieuDePhuongCham: "Phương châm hoạt động",
    phuongCham: [
      "Trách nhiệm",
      "Đoàn kết",
      "Sáng tạo",
      "Chia sẻ"
    ]
  },

  // 11. TÙY CHỈNH CHỮ TRÊN TẤT CẢ NÚT BẤM (BUTTONS) TRÊN WEBSITE
  // Bạn có thể tự do sửa chữ trên các nút bấm ở đây:
  CHU_NUT_BAM: {
    // Nút "Ứng tuyển ngay" trên thanh menu đầu trang (cả máy tính và điện thoại)
    nutTrenMenu: "Ứng tuyển ngay",

    // Cụm 2 nút bấm ở phần đầu trang chủ (Hero Section)
    nutChinhHero: "Điền đơn ứng tuyển ngay",
    nutPhuHero: "Khám phá 04 ban chuyên môn ↓",

    // Nút trên 4 thẻ Ban ở Trang chủ
    nutXemChiTietBan: "Xem chi tiết JD & Quyền lợi ➔",

    // Nút ở phần Những câu hỏi thường gặp (FAQ)
    nutDatCauHoi: "Đặt câu hỏi",

    // Nút quay lại trang chủ (trên các trang con của từng Ban)
    nutQuayVeTrangChu: "← Quay về Trang chủ",

    // Nút xem ảnh Drive (trên các trang con của từng Ban)
    nutXemDrive: "📂 Xem ảnh hoạt động trên Drive ➔",

    // Nút lớn chốt đơn ở cuối mỗi trang con của từng Ban
    nutDangKyVaoBan: "ĐĂNG KÝ NGUYỆN VỌNG VÀO BAN NÀY NGAY",

    // Dòng chữ thông báo khi Vòng 1 hết hạn (ở ô đếm ngược)
    thongBaoHetHanVong1: "Vòng 1 đã đóng đơn"
  },

  // 12. TIÊU ĐỀ & THÔNG ĐIỆP ĐẦU TRANG CHỦ (HERO SECTION)
  THONG_TIN_HERO: {
    // Tiêu đề lớn nhất ở đầu trang
    tieuDeChinh: "TUYỂN THÀNH VIÊN CLB KỸ NĂNG CÔNG TÁC XÃ HỘI 2026 – 2027",

    // Đoạn thông điệp ngắn nằm dưới tiêu đề lớn
    thongDiepNgan:
      '"Thấu cảm để sẻ chia – Rèn kỹ năng để trưởng thành. Hãy trở thành một trong những mảnh ghép thế hệ mới của đại gia đình SWS chúng mình!"'
  },

  // 13. TÙY CHỈNH MỤC NHỮNG CÂU HỎI THƯỜNG GẶP (FAQ)
  // Bạn có thể tự do sửa câu hỏi, câu trả lời, hoặc thêm/bớt câu hỏi tại đây:
  FAQ: {
    // Thẻ nhỏ và tiêu đề mục FAQ
    theMuc: "Hỏi đáp",
    tieuDe: "NHỮNG CÂU HỎI THƯỜNG GẶP",

    // Lời nhắn nhủ bên cạnh nút "Đặt câu hỏi"
    loiDan:
      '"Nếu bạn có bất kỳ thắc mắc nào liên quan đến chương trình, đừng ngại ngần mà hãy liên hệ với Fanpage CLB nhé!"',

    // Danh sách câu hỏi và câu trả lời:
    // - Muốn THÊM câu hỏi: copy thêm 1 khối { cauHoi: "...", cauTraLoi: "..." } kèm dấu phẩy ở cuối
    // - Muốn BỚT câu hỏi: xóa khối câu hỏi bạn không cần đi
    // - Muốn SỬA chữ: chỉ cần sửa nội dung trong dấu ngoặc kép ""
    danhSach: [
      {
        cauHoi: "1. Nếu chưa từng tham gia các hoạt động ngoại khoá nào trước đó thì mình có cơ hội cạnh tranh và được đánh giá cao không?",
        cauTraLoi:
          "Hoàn toàn có nhé! CLB Kỹ năng Công tác xã hội không đặt nặng việc bạn phải có thật nhiều kinh nghiệm hay một chiếc hồ sơ hoạt động dày đặc từ trước. Ở các vòng tuyển chọn, Ban Giám khảo đánh giá cao nhất là thái độ cầu thị, sự nhiệt huyết, tinh thần trách nhiệm và sự chân thành của bạn. CLB chính là môi trường để bạn rèn luyện và phát triển; chỉ cần bạn sẵn sàng bước ra khỏi vùng an toàn, các anh chị đi trước và Ban Thành viên & Phát triển năng lực sẽ luôn đồng hành, tập huấn cho bạn từ những bước cơ bản nhất."
      },
      {
        cauHoi: "2. Trong quá trình tham gia CLB, mình có cơ hội tìm hiểu hoặc học hỏi thêm các kiến thức bên ngoài ban chuyên môn mà mình ứng tuyển không?",
        cauTraLoi:
          "Chắc chắn là có! Dù mỗi thành viên đều thuộc một ban chuyên môn cố định, nhưng mọi chương trình học thuật và dự án cộng đồng của CLB đều cần sự phối hợp chặt chẽ giữa cả 04 ban (Tổ chức chương trình, Thành viên & Phát triển năng lực, Kết nối nguồn lực, Truyền thông). Bên cạnh đó, CLB thường xuyên tổ chức các buổi tập huấn kỹ năng chung cho toàn thể thành viên, và bạn hoàn toàn có thể đăng ký tham gia hỗ trợ chéo các mảng công việc khác trong từng chiến dịch để thử sức và khám phá đa dạng năng lực của bản thân."
      },
      {
        cauHoi: "3. Ngoài tổ chức các chương trình, CLB Kỹ năng Công tác xã hội còn mang đến cho mình những trải nghiệm gì khác?",
        moDau:
          "Không chỉ dừng lại ở việc chạy sự kiện hay thực hiện các dự án cộng đồng, CLB KN CTXH còn là một \"gia đình nhỏ\" mang đến cho bạn những trải nghiệm thanh xuân đáng nhớ:",
        cacYChinh: [
          "Sinh hoạt nội bộ & Gắn kết: Những buổi gặp gỡ ấm cúng, cùng nhau vui chơi, giải tỏa áp lực học tập và sẻ chia mọi câu chuyện vui buồn trong cuộc sống đại học.",
          "Không gian học thuật & Tập huấn chuyên sâu: Cơ hội được trau dồi kiến thức, lắng nghe chia sẻ thực tế từ các giảng viên, chuyên gia Công tác xã hội và các anh chị cựu thành viên giàu kinh nghiệm.",
          "Mạng lưới mối quan hệ chất lượng: Tìm thấy những người bạn đồng điệu, những đàn anh, đàn chị luôn sẵn sàng nâng đỡ và hỗ trợ bạn trong cả việc học trên trường lẫn định hướng phát triển bản thân."
        ]
      },
      {
        cauHoi: "4. Mình có thể phát triển những kỹ năng nào khi tham gia CLB?",
        moDau:
          "Khi trở thành mảnh ghép của CLB KN CTXH, bạn sẽ được rèn luyện song song cả kỹ năng thực hành Công tác xã hội lẫn bộ kỹ năng mềm thiết yếu:",
        cacYChinh: [
          "Kỹ năng làm việc với con người & cộng đồng: Kỹ năng lắng nghe tích cực, thấu cảm, giao tiếp ứng xử, điều phối nhóm và xử lý tình huống thực tế khi làm việc cùng các nhóm đối tượng yếu thế (trẻ em, người cao tuổi...).",
          "Kỹ năng làm việc chuyên nghiệp: Tư duy lập kế hoạch, quản lý thời gian, làm việc nhóm, thuyết trình và giải quyết vấn đề.",
          "Kỹ năng chuyên môn theo từng ban: Soạn thảo văn bản hành chính Đoàn – Hội, viết Hồ sơ tài trợ và đàm phán đối ngoại, quản trị nhân sự, hoặc sáng tạo nội dung, thiết kế ấn phẩm và quay dựng truyền thông."
        ]
      }
    ]
  },

  // 13. MÀN HÌNH CHỜ LOGO CLB (LOADING SCREEN / PRELOADER)
  // Bạn có thể bật/tắt, đổi kiểu hiệu ứng hoặc chỉnh thời gian hiển thị tại đây:
  MAN_HINH_CHO: {
    // Bật/tắt màn hình chờ: true = BẬT, false = TẮT
    batDau: true,

    // Chọn 1 trong 3 hiệu ứng: "option-1" (Nhịp thở & Sóng hào quang), "option-2" (Quỹ đạo xoay), hoặc "option-3" (Nhịp tim & Kéo rèm)
    kieuHieuUng: "option-1",

    // Thời gian hiển thị tối thiểu (tính bằng mili-giây, 1000 = 1 giây) để người xem kịp nhìn ngắm logo
    thoiGianToiThieu: 1000,

    // Nơi hiển thị: false = hiện ở cả Trang chủ và 4 trang con; true = chỉ hiện ở Trang chủ
    chiHienTrangChu: false,

    // Dòng chữ hiển thị dưới Logo (bạn có thể đổi chữ hoặc để trống "" nếu không muốn hiện chữ)
    chuHienThi: "CLB KĨ NĂNG CÔNG TÁC XÃ HỘI"
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
