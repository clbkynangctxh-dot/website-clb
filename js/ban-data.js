/**
 * =====================================================================
 * DỮ LIỆU NỘI DUNG 04 BAN CHUYÊN MÔN (js/ban-data.js)
 * Website Tuyển Thành Viên CLB Kỹ Năng Công Tác Xã Hội 2026–2027
 * =====================================================================
 * Nguồn dữ liệu:
 * - Tên ban, câu định vị, 3 từ khóa: Lấy từ "Khu vực 4" của docs/ke-hoach.md
 * - Tên tiếng Anh, slogan, 4 nhiệm vụ, yêu cầu ứng viên (gồm Điểm cộng),
 *   quyền lợi tại ban: Lấy nguyên văn từ "Phần 4" của docs/cam-nang.md
 */

const BAN_DATA = [
  {
    id: "to-chuc",
    icon: "🎪",
    ten: "BAN TỔ CHỨC CHƯƠNG TRÌNH",
    tenTiengAnh: "",
    duongDan: "ban/to-chuc.html",
    khoaDrive: "toChuc",

    // Lấy từ Khu vực 4 của docs/ke-hoach.md (hiển thị ở thẻ tóm tắt Trang chủ)
    dinhVi: "Kiến trúc sư đứng sau mọi chương trình học thuật và dự án cộng đồng.",
    tuKhoa: [
      "Lên ý tưởng",
      "Lập kế hoạch",
      "Điều phối sự kiện & Hậu cần"
    ],

    // Lấy nguyên văn từ Phần 4 của docs/cam-nang.md (hiển thị ở trang JD chi tiết)
    slogan: "Những kiến trúc sư đứng sau sự thành công của mọi chương trình học thuật và dự án cộng đồng.",
    nhiemVu: [
      "Khơi nguồn ý tưởng, khảo sát nhu cầu thực tế và xây dựng kế hoạch tổng thể, kế hoạch chi tiết, kịch bản chương trình cho các hoạt động học thuật và dự án cộng đồng của CLB.",
      "Điều phối nhân sự, phân công nhiệm vụ và giám sát tiến độ triển khai trước, trong và sau sự kiện.",
      "Phụ trách công tác hậu cần, chuẩn bị cơ sở vật chất, quản trị rủi ro tại hiện trường.",
      "Tổ chức họp rút kinh nghiệm, đánh giá hiệu quả và viết báo cáo tổng kết chương trình."
    ],
    yeuCau: [
      "Có tư duy hệ thống, khả năng lập kế hoạch và sắp xếp công việc khoa học.",
      "Năng động, linh hoạt, bình tĩnh trước các tình huống phát sinh.",
      "Có tinh thần trách nhiệm cao, sẵn sàng lăn xả trong các hoạt động thực địa/cộng đồng."
    ],
    diemCong: "Từng tham gia tổ chức sự kiện hoặc có kỹ năng soạn thảo văn bản hành chính Đoàn - Hội.",
    quyenLoi: [
      "Làm đẹp CV và xây dựng thương hiệu cá nhân;",
      "Được công nhận thông qua danh sách thành viên BTC/CTV khi tham gia chạy chương trình phục vụ cho việc chấm điểm rèn luyện và điểm phục vụ cộng đồng;",
      "Được học tập và trải nghiệm trong môi trường năng động, thân thiện;",
      "Được làm quen với quy trình xây dựng, chuẩn bị và thực hiện các chương trình, sự kiện trong CLB;",
      "Có cơ hội kết nối và mở rộng mối quan hệ trong môi trường đại học;",
      "Được phát triển thêm về các kỹ năng mềm;",
      "Có cơ hội hoạt động trong lĩnh vực Tổ chức chương trình."
    ]
  },

  {
    id: "thanh-vien",
    icon: "💛",
    ten: "BAN THÀNH VIÊN VÀ PHÁT TRIỂN NĂNG LỰC",
    tenTiengAnh: "",
    duongDan: "ban/thanh-vien.html",
    khoaDrive: "thanhVien",

    // Lấy từ Khu vực 4 của docs/ke-hoach.md
    dinhVi: "Trái tim giữ lửa nội bộ, kết nối con người và ươm mầm kỹ năng.",
    tuKhoa: [
      "Tuyển dụng & Nhân sự",
      "Gắn kết nội bộ",
      "Tổ chức tập huấn"
    ],

    // Lấy nguyên văn từ Phần 4 của docs/cam-nang.md
    slogan: "Trái tim giữ lửa nội bộ, kết nối con người và ươm mầm năng lực cho từng thành viên.",
    nhiemVu: [
      "Lập kế hoạch và triển khai công tác tuyển thành viên, quản lý hồ sơ dữ liệu nhân sự của CLB.",
      "Lên ý tưởng và tổ chức các buổi sinh hoạt nội bộ, gắn kết tập thể nhằm kết nối các thế hệ thành viên và xây dựng văn hóa CLB.",
      "Theo dõi, đánh giá mức độ tham gia, lắng nghe tâm tư nguyện vọng và kịp thời hỗ trợ, khích lệ tinh thần các thành viên trong quá trình hoạt động.",
      "Khảo sát nhu cầu học tập và trực tiếp tổ chức các buổi tập huấn, chia sẻ kỹ năng chuyên môn Công tác xã hội cũng như kỹ năng mềm cho nội bộ CLB."
    ],
    yeuCau: [
      "Yêu thích làm việc với con người; có sự tinh tế, thấu cảm và kỹ năng lắng nghe tốt.",
      "Hòa đồng, nhiệt huyết, có khả năng khuấy động không khí hoặc kết nối các cá nhân trong tập thể.",
      "Cẩn thận, công tâm trong việc theo dõi và đánh giá nhân sự."
    ],
    diemCong: "",
    quyenLoi: [
      "Làm đẹp CV và xây dựng thương hiệu cá nhân;",
      "Được công nhận thông qua danh sách thành viên BTC/CTV khi tham gia chạy chương trình phục vụ cho việc chấm điểm rèn luyện và điểm phục vụ cộng đồng;",
      "Được học tập và trải nghiệm trong môi trường năng động, thân thiện;",
      "Được làm quen với quy trình xây dựng, chuẩn bị và thực hiện các chương trình, sự kiện trong CLB;",
      "Có cơ hội kết nối và mở rộng mối quan hệ trong môi trường đại học;",
      "Được phát triển thêm về các kỹ năng mềm;",
      "Có cơ hội hoạt động trong lĩnh vực Nhân sự."
    ]
  },

  {
    id: "ket-noi-nguon-luc",
    icon: "🤝",
    ten: "BAN KẾT NỐI NGUỒN LỰC",
    tenTiengAnh: "",
    duongDan: "ban/ket-noi-nguon-luc.html",
    khoaDrive: "ketNoiNguonLuc",

    // Lấy từ Khu vực 4 của docs/ke-hoach.md
    dinhVi: "Cầu nối chiến lược mang nguồn lực xã hội đồng hành cùng giá trị nhân văn.",
    tuKhoa: [
      "Gây quỹ sáng tạo",
      "Hồ sơ tài trợ & Đối ngoại",
      "Quản lý dự toán thu chi"
    ],

    // Lấy nguyên văn từ Phần 4 của docs/cam-nang.md
    slogan: "Cầu nối chiến lược mang nguồn lực xã hội đồng hành cùng các giá trị nhân văn.",
    nhiemVu: [
      "Nghiên cứu, đề xuất và trực tiếp triển khai các phương án gây quỹ sáng tạo phục vụ cho hoạt động của CLB và các dự án thiện nguyện.",
      "Tìm kiếm, liên hệ và đàm phán với các nhà tài trợ, doanh nghiệp, tổ chức xã hội, mạnh thường quân và các diễn giả/chuyên gia khách mời.",
      "Biên soạn, quản lý Hồ sơ tài trợ, thư ngỏ và thực hiện công tác chăm sóc đối tác trước – trong – sau chương trình.",
      "Phối hợp chặt chẽ với Ban Chủ nhiệm và các ban khác để lập dự toán kinh phí, quản lý thu – chi và hoàn thiện hồ sơ quyết toán tài chính minh bạch, đúng quy định."
    ],
    yeuCau: [
      "Tự tin, khéo léo trong giao tiếp; có khả năng thuyết phục và đàm phán.",
      "Cẩn thận, tỉ mỉ, trung thực và rõ ràng khi làm việc với các con số, hóa đơn, chứng từ tài chính.",
      "Không ngại thử thách, chủ động mở rộng mạng lưới quan hệ xã hội."
    ],
    diemCong: "",
    quyenLoi: [
      "Làm đẹp CV và xây dựng thương hiệu cá nhân;",
      "Được công nhận thông qua danh sách thành viên BTC/CTV khi tham gia chạy chương trình phục vụ cho việc chấm điểm rèn luyện và điểm phục vụ cộng đồng;",
      "Được học tập và trải nghiệm trong môi trường năng động, thân thiện;",
      "Được làm quen với quy trình xây dựng, chuẩn bị và thực hiện các chương trình, sự kiện trong CLB;",
      "Có cơ hội kết nối và mở rộng mối quan hệ trong môi trường đại học;",
      "Được phát triển thêm về các kỹ năng mềm;",
      "Có cơ hội hoạt động trong lĩnh vực Đối ngoại."
    ]
  },

  {
    id: "truyen-thong",
    icon: "📸",
    ten: "BAN TRUYỀN THÔNG",
    tenTiengAnh: "",
    duongDan: "ban/truyen-thong.html",
    khoaDrive: "truyenThong",

    // Lấy từ Khu vực 4 của docs/ke-hoach.md
    dinhVi: "Người kể chuyện bằng ngôn từ và hình ảnh, lan tỏa thông điệp tích cực.",
    tuKhoa: [
      "Kế hoạch truyền thông",
      "Sáng tạo nội dung",
      "Thiết kế & Quay dựng"
    ],

    // Lấy nguyên văn từ Phần 4 của docs/cam-nang.md
    slogan: "Người kể chuyện bằng ngôn từ và hình ảnh, lan tỏa thông điệp nhân văn đến cộng đồng.",
    nhiemVu: [
      "Xây dựng kế hoạch truyền thông tổng thể cho các chiến dịch, sự kiện và chuỗi ấn phẩm học thuật của CLB.",
      "Quản trị và phát triển Fanpage CLB Kỹ năng Công tác xã hội; định hướng nội dung và hình thức truyền thông phù hợp với đối tượng sinh viên.",
      "Mảng Nội dung: Lên ý tưởng chuyên mục, biên tập bài đăng truyền thông, bài viết học thuật về kỹ năng CTXH, kịch bản video/minigame.",
      "Mảng Thiết kế & Đa phương tiện: Thiết kế ấn phẩm truyền thông (áp phích, băng rôn, đồ họa thông tin, bảng đứng...), chụp ảnh tư liệu sự kiện và quay dựng video ngắn."
    ],
    yeuCau: [
      "Có niềm đam mê và năng khiếu ở ít nhất một trong các mảng: Viết lách, Thiết kế (Canva/Photoshop/Illustrator...) hoặc Chụp ảnh/Quay dựng (CapCut/Premiere...).",
      "Nhạy bén với xu hướng mạng xã hội, có tư duy thẩm mỹ và tinh thần sáng tạo không ngừng.",
      "Đảm bảo đúng hạn và có tinh thần phối hợp tốt với các ban chuyên môn khác."
    ],
    diemCong: "",
    quyenLoi: [
      "Làm đẹp CV và xây dựng thương hiệu cá nhân;",
      "Được công nhận thông qua danh sách thành viên BTC/CTV khi tham gia chạy chương trình phục vụ cho việc chấm điểm rèn luyện và điểm phục vụ cộng đồng;",
      "Được học tập và trải nghiệm trong môi trường năng động, thân thiện;",
      "Được làm quen với quy trình xây dựng, chuẩn bị và thực hiện các chương trình, sự kiện trong CLB;",
      "Có cơ hội kết nối và mở rộng mối quan hệ trong môi trường đại học;",
      "Được phát triển thêm về các kỹ năng mềm;",
      "Có cơ hội hoạt động trong lĩnh vực Ban Truyền thông."
    ]
  }
];
