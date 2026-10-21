/**
 * =====================================================================
 * KỊCH BẢN CHÍNH CỦA WEBSITE (js/main.js)
 * Website Tuyển Thành Viên CLB Kỹ Năng Công Tác Xã Hội 2026–2027
 * =====================================================================
 * Chức năng:
 * 1. Điều khiển nút menu 3 gạch trên màn hình điện thoại.
 * 2. Tự động tạo 4 thẻ Ban chuyên môn trên Trang chủ từ js/ban-data.js.
 * 3. Tự động điền nội dung chi tiết cho 4 trang con JD (ban/*.html) từ js/ban-data.js.
 * 4. Chạy đồng hồ đếm ngược (Ngày : Giờ : Phút) đọc hạn từ config.js
 *    theo giờ Việt Nam (+07:00). Khi hết hạn hiện "Vòng 1 đã đóng đơn"
 *    và đổi nút chính sang kiểu ít nổi bật hơn.
 * 5. Đồng bộ dữ liệu Về CLB & Link Fanpage từ config.js.
 * 6. Tự động tính nhãn trạng thái 3 vòng tuyển chọn theo giờ Việt Nam.
 */

document.addEventListener("DOMContentLoaded", function () {
  // 0. Khởi tạo Màn hình chờ Logo CLB (Preloader)
  khoiTaoManHinhCho();

  // 1. Khởi tạo menu 3 gạch trên điện thoại (nếu có)
  khoiTaoMenuDiDong();

  // 2. Tạo 4 thẻ Ban chuyên môn trên Trang chủ (nếu đang ở Trang chủ)
  taoThe4BanChuyenMon();

  // 3. Điền nội dung trang chi tiết JD Ban (nếu đang ở 1 trong 4 trang con ban/*.html)
  khoiTaoTrangChiTietBan();

  // 4. Khởi chạy đồng hồ đếm ngược & kiểm tra hạn Vòng 1 cho các nút ứng tuyển
  khoiTaoDongHoDemNguoc();

  // 5. Đồng bộ thông tin Về CLB & Link Fanpage từ config.js
  dongBoThongTinChung();

  // 6. Tính và hiển thị trạng thái 3 vòng tuyển chọn (nếu đang ở Trang chủ)
  capNhatTrangThaiLoTrinh();

  // 7. Khởi tạo trọn gói 3 hiệu ứng: Chuyển trang êm ái, Xuất hiện khi cuộn trang & Thanh tiến trình cuộn
  khoiTaoChuyenTrangMuot();
  khoiTaoHieuUngCuonTrang();
  khoiTaoThanhTienTrinhCuon();
});

/**
 * Hàm bật/tắt menu 3 gạch trên điện thoại di động
 */
function khoiTaoMenuDiDong() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener("click", function () {
    const isOpen = mobileNav.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Tự động đóng menu khi người dùng bấm chọn một mục
  const links = mobileNav.querySelectorAll("a");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileNav.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

/**
 * Hàm tự động tạo 4 thẻ Ban chuyên môn trên Trang chủ từ BAN_DATA (js/ban-data.js)
 */
function taoThe4BanChuyenMon() {
  const container = document.getElementById("ban-cards-container");
  if (!container || typeof BAN_DATA === "undefined" || !Array.isArray(BAN_DATA)) return;

  container.innerHTML = "";

  BAN_DATA.forEach(function (ban) {
    const article = document.createElement("article");
    article.className = "ban-card";

    // Biểu tượng
    const iconDiv = document.createElement("div");
    iconDiv.className = "ban-card-icon";
    iconDiv.setAttribute("aria-hidden", "true");
    iconDiv.textContent = ban.icon;

    // Tên Ban
    const titleH3 = document.createElement("h3");
    titleH3.className = "ban-card-title";
    titleH3.textContent = ban.ten;

    // Câu định vị ngắn (lấy theo docs/ke-hoach.md)
    const dinhViP = document.createElement("p");
    dinhViP.className = "ban-card-dinhvi";
    dinhViP.textContent = '"' + ban.dinhVi + '"';

    // 3 Từ khóa công việc
    const keywordsUl = document.createElement("ul");
    keywordsUl.className = "ban-keywords";
    keywordsUl.setAttribute("aria-label", "Từ khóa công việc " + ban.ten);

    if (Array.isArray(ban.tuKhoa)) {
      ban.tuKhoa.forEach(function (tu) {
        const li = document.createElement("li");
        li.className = "ban-tag";
        li.textContent = tu;
        keywordsUl.appendChild(li);
      });
    }

    // Nút bấm Xem chi tiết JD & Quyền lợi dẫn sang trang con trong thư mục ban/
    const actionDiv = document.createElement("div");
    actionDiv.className = "ban-card-action";

    const linkBtn = document.createElement("a");
    linkBtn.href = ban.duongDan;
    linkBtn.className = "btn btn-secondary ban-card-btn";
    linkBtn.textContent =
      typeof CONFIG !== "undefined" &&
      CONFIG.CHU_NUT_BAM &&
      CONFIG.CHU_NUT_BAM.nutXemChiTietBan
        ? CONFIG.CHU_NUT_BAM.nutXemChiTietBan
        : "Xem chi tiết JD & Quyền lợi ➔";

    actionDiv.appendChild(linkBtn);

    article.appendChild(iconDiv);
    article.appendChild(titleH3);
    article.appendChild(dinhViP);
    article.appendChild(keywordsUl);
    article.appendChild(actionDiv);

    container.appendChild(article);
  });
}

/**
 * Hàm tự động điền nội dung cho 4 trang con JD (ban/*.html) từ BAN_DATA (js/ban-data.js)
 */
function khoiTaoTrangChiTietBan() {
  const banId = document.body.getAttribute("data-ban-id");
  if (!banId || typeof BAN_DATA === "undefined" || !Array.isArray(BAN_DATA)) return;

  const ban = BAN_DATA.find(function (item) {
    return item.id === banId;
  });

  if (!ban) return;

  // 1. Tô sáng ban đang xem trên thanh chuyển nhanh 4 ban
  const switchLinks = document.querySelectorAll(".ban-switch-link");
  switchLinks.forEach(function (link) {
    if (link.getAttribute("data-switch-id") === ban.id) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("is-active");
      link.removeAttribute("aria-current");
    }
  });

  // 2. Điền thông tin Banner đầu trang (Tên ban, Slogan từ cam-nang.md)
  const elIcon = document.getElementById("ban-icon");
  const elTitle = document.getElementById("ban-title");
  const elSlogan = document.getElementById("ban-slogan");

  if (elIcon) elIcon.textContent = ban.icon;
  if (elTitle) elTitle.textContent = ban.ten;
  if (elSlogan) elSlogan.textContent = '"' + ban.slogan + '"';

  // 3. Thiết lập nút xem hình ảnh hoạt động của Ban trên Google Drive
  const elDriveBtn = document.getElementById("ban-drive-btn");
  const elDriveTag = document.getElementById("ban-drive-status");
  if (elDriveBtn) {
    const linkDrive =
      typeof CONFIG !== "undefined" &&
      CONFIG.LINK_DRIVE_ANH &&
      ban.khoaDrive &&
      CONFIG.LINK_DRIVE_ANH[ban.khoaDrive]
        ? CONFIG.LINK_DRIVE_ANH[ban.khoaDrive].trim()
        : "";

    if (linkDrive && linkDrive !== "#") {
      if (elDriveTag) elDriveTag.textContent = "📸 Tư liệu hoạt động thực tế";
      elDriveBtn.href = linkDrive;
      elDriveBtn.target = "_blank";
      elDriveBtn.rel = "noopener noreferrer";
    } else {
      if (elDriveTag) elDriveTag.textContent = "[JD ĐANG ĐƯỢC UP LÊN]";
      elDriveBtn.href = "#";
      elDriveBtn.addEventListener("click", function (e) {
        e.preventDefault();
        alert(
          "[CHỜ NỘI DUNG] Đường link Google Drive hoạt động của " +
            ban.ten +
            " hiện đang được cập nhật!"
        );
      });
    }
  }

  // 4. Điền Khối 1: Mô tả công việc (Bạn sẽ làm gì?)
  const elNhiemVu = document.getElementById("jd-nhiem-vu");
  if (elNhiemVu && Array.isArray(ban.nhiemVu)) {
    elNhiemVu.innerHTML = "";
    ban.nhiemVu.forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item;
      elNhiemVu.appendChild(li);
    });
  }

  // 5. Điền Khối 2: Yêu cầu ứng viên (Chúng mình tìm kiếm ai?) + Điểm cộng (nếu có)
  const elYeuCau = document.getElementById("jd-yeu-cau");
  if (elYeuCau && Array.isArray(ban.yeuCau)) {
    elYeuCau.innerHTML = "";
    ban.yeuCau.forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item;
      elYeuCau.appendChild(li);
    });
  }

  const elDiemCongBox = document.getElementById("jd-diem-cong-box");
  const elDiemCongText = document.getElementById("jd-diem-cong-text");
  if (elDiemCongBox && elDiemCongText) {
    if (ban.diemCong && ban.diemCong.trim() !== "") {
      elDiemCongText.textContent = ban.diemCong;
      elDiemCongBox.style.display = "block";
    } else {
      elDiemCongBox.style.display = "none";
    }
  }

  // 6. Điền Khối 3: Quyền lợi tại Ban (Bạn sẽ nhận được gì?)
  const elQuyenLoi = document.getElementById("jd-quyen-loi");
  if (elQuyenLoi && Array.isArray(ban.quyenLoi)) {
    elQuyenLoi.innerHTML = "";
    ban.quyenLoi.forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item;
      elQuyenLoi.appendChild(li);
    });
  }

  // 7. Điền câu hỏi Khu vực chốt đơn cuối trang con
  const elCtaQuestion = document.getElementById("ban-cta-question");
  if (elCtaQuestion) {
    elCtaQuestion.textContent = "Bạn đã sẵn sàng thử sức tại " + ban.ten + "?";
  }

  // 8. Đồng bộ chữ các nút bấm trên trang con từ CONFIG.CHU_NUT_BAM
  if (typeof CONFIG !== "undefined" && CONFIG.CHU_NUT_BAM) {
    if (CONFIG.CHU_NUT_BAM.nutQuayVeTrangChu) {
      document.querySelectorAll(".back-home-btn").forEach(function (btn) {
        btn.textContent = CONFIG.CHU_NUT_BAM.nutQuayVeTrangChu;
      });
    }

    if (CONFIG.CHU_NUT_BAM.nutXemDrive && elDriveBtn) {
      elDriveBtn.textContent = CONFIG.CHU_NUT_BAM.nutXemDrive;
    }

    if (CONFIG.CHU_NUT_BAM.nutDangKyVaoBan) {
      document.querySelectorAll(".ban-cta-btn").forEach(function (btn) {
        btn.textContent = CONFIG.CHU_NUT_BAM.nutDangKyVaoBan;
      });
    }
  }
}

/**
 * Hàm chuẩn hóa chuỗi thời gian về múi giờ Việt Nam (+07:00)
 */
function layMocThoiGianVietNam(chuoiThoiGian) {
  if (!chuoiThoiGian) return NaN;
  const trimmed = chuoiThoiGian.trim();
  const coMuiGio = /[+-]\d{2}:\d{2}$|Z$/i.test(trimmed);
  const chuoiChuan = coMuiGio ? trimmed : trimmed + "+07:00";
  return new Date(chuoiChuan).getTime();
}

/**
 * Hàm đếm ngược Ngày : Giờ : Phút đến hạn Vòng 1 & Cập nhật kiểu nút chính khi hết hạn
 */
function khoiTaoDongHoDemNguoc() {
  if (typeof CONFIG === "undefined") return;

  const countdownBox = document.getElementById("countdown-box");
  const elDays = document.getElementById("cd-days");
  const elHours = document.getElementById("cd-hours");
  const elMinutes = document.getElementById("cd-minutes");

  const hanChotMs = layMocThoiGianVietNam(CONFIG.HAN_CHOT_VONG_1);

  function capNhatDemNguoc() {
    const hienTaiMs = Date.now();
    const khoangCach = hanChotMs - hienTaiMs;
    const cacNutChinh = document.querySelectorAll(".js-btn-apply");

    // Nếu đã hết hạn Vòng 1: đổi tất cả nút ứng tuyển sang kiểu ít nổi bật hơn
    if (isNaN(hanChotMs) || khoangCach <= 0) {
      if (countdownBox) countdownBox.classList.add("is-expired");
      cacNutChinh.forEach(function (nut) {
        nut.classList.add("is-expired");
      });
      return;
    }

    // Nếu vẫn còn hạn
    if (countdownBox) countdownBox.classList.remove("is-expired");
    cacNutChinh.forEach(function (nut) {
      nut.classList.remove("is-expired");
    });

    if (!elDays || !elHours || !elMinutes) return;

    const tongPhut = Math.floor(khoangCach / (1000 * 60));
    const days = Math.floor(tongPhut / (60 * 24));
    const hours = Math.floor((tongPhut % (60 * 24)) / 60);
    const minutes = tongPhut % 60;

    elDays.textContent = days < 10 ? "0" + days : String(days);
    elHours.textContent = hours < 10 ? "0" + hours : String(hours);
    elMinutes.textContent = minutes < 10 ? "0" + minutes : String(minutes);
  }

  capNhatDemNguoc();
  setInterval(capNhatDemNguoc, 1000);
}

/**
 * Đồng bộ thông tin Về CLB (chỉ tiêu tuyển, Ban Chủ nhiệm, link Fanpage) từ config.js
 */
function dongBoThongTinChung() {
  if (typeof CONFIG === "undefined") return;

  // Đồng bộ Tên CLB ở góc trái trên cùng (Thanh điều hướng)
  if (CONFIG.TEN_CLB_NAVBAR) {
    const brandEls = document.querySelectorAll(".navbar-brand-name");
    brandEls.forEach(function (el) {
      el.textContent = CONFIG.TEN_CLB_NAVBAR;
    });
  }

  if (CONFIG.CHI_TIEU_TUYEN) {
    const chiTieuEls = document.querySelectorAll(".js-chi-tieu");
    chiTieuEls.forEach(function (el) {
      el.textContent = CONFIG.CHI_TIEU_TUYEN;
    });
  }

  if (CONFIG.BAN_CHU_NHIEM) {
    const bcnEls = document.querySelectorAll(".js-bcn-info");
    bcnEls.forEach(function (el) {
      el.textContent =
        CONFIG.BAN_CHU_NHIEM.chuNhiem + " – " + CONFIG.BAN_CHU_NHIEM.phoChuNhiem;
    });
  }

  if (CONFIG.LINK_FANPAGE) {
    const fanpageEls = document.querySelectorAll(".js-link-fanpage");
    fanpageEls.forEach(function (el) {
      el.href = CONFIG.LINK_FANPAGE;
    });
  }

  // Đồng bộ thông tin Chân trang & Ghi chú đáy trang (Footer / Footnote) từ CONFIG.FOOTER
  if (CONFIG.FOOTER) {
    if (CONFIG.FOOTER.tenDonVi) {
      document.querySelectorAll(".footer-unit-name").forEach(function (el) {
        el.textContent = CONFIG.FOOTER.tenDonVi;
      });
    }

    if (Array.isArray(CONFIG.FOOTER.cacDongThongTin)) {
      document.querySelectorAll(".footer-contact-list").forEach(function (ul) {
        ul.innerHTML = "";
        CONFIG.FOOTER.cacDongThongTin.forEach(function (dong) {
          const li = document.createElement("li");

          // Tự động phát hiện URL (ví dụ https://... hoặc facebook.com/...) để tạo liên kết bấm được
          const urlMatch = dong.match(/(https?:\/\/[^\s]+|facebook\.com\/[^\s]+)/i);
          if (urlMatch) {
            const rawUrl = urlMatch[0];
            const fullUrl = rawUrl.startsWith("http") ? rawUrl : "https://" + rawUrl;
            const displayUrl = rawUrl.replace(/^https?:\/\/(www\.)?/, "");
            const parts = dong.split(rawUrl);

            li.appendChild(document.createTextNode(parts[0]));

            const a = document.createElement("a");
            a.href = fullUrl;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.className = "footer-link js-link-fanpage";
            a.textContent = displayUrl;
            li.appendChild(a);

            if (parts[1]) {
              li.appendChild(document.createTextNode(parts[1]));
            }
          } else {
            li.textContent = dong;
          }

          ul.appendChild(li);
        });
      });
    }

    if (CONFIG.FOOTER.loiNhacCuoiTrang) {
      document.querySelectorAll(".footer-cta-text").forEach(function (el) {
        el.textContent = CONFIG.FOOTER.loiNhacCuoiTrang;
      });
    }

    if (CONFIG.FOOTER.chuNutCuoiTrang) {
      document.querySelectorAll(".footer-cta-card .btn").forEach(function (el) {
        el.textContent = CONFIG.FOOTER.chuNutCuoiTrang;
      });
    }

    if (CONFIG.FOOTER.dongGhiChuDayTrang) {
      document.querySelectorAll(".footer-bottom p").forEach(function (el) {
        el.textContent = CONFIG.FOOTER.dongGhiChuDayTrang;
      });
    }
  }

  // Đồng bộ chữ trên các nút bấm từ CONFIG.CHU_NUT_BAM
  if (CONFIG.CHU_NUT_BAM) {
    const cnb = CONFIG.CHU_NUT_BAM;

    if (cnb.nutTrenMenu) {
      document
        .querySelectorAll(".navbar .js-btn-apply, .mobile-nav .js-btn-apply")
        .forEach(function (btn) {
          btn.textContent = cnb.nutTrenMenu;
        });
    }

    if (cnb.nutChinhHero) {
      const heroBtn = document.querySelector(".hero-actions .btn-cta");
      if (heroBtn) heroBtn.textContent = cnb.nutChinhHero;
    }

    if (cnb.nutPhuHero) {
      const heroSecBtn = document.querySelector(".hero-actions .btn-secondary");
      if (heroSecBtn) heroSecBtn.textContent = cnb.nutPhuHero;
    }

    if (cnb.nutDatCauHoi) {
      const faqBtn = document.querySelector(".faq-lead-box .btn");
      if (faqBtn) faqBtn.textContent = cnb.nutDatCauHoi;
    }

    if (cnb.thongBaoHetHanVong1) {
      const expMsg = document.getElementById("countdown-expired-msg");
      if (expMsg) expMsg.textContent = cnb.thongBaoHetHanVong1;
    }
  }

  // Đồng bộ tiêu đề & thông điệp ngắn đầu trang (Hero) từ CONFIG.THONG_TIN_HERO
  if (CONFIG.THONG_TIN_HERO) {
    if (CONFIG.THONG_TIN_HERO.tieuDeChinh) {
      const elHeadline = document.getElementById("hero-headline");
      if (elHeadline) elHeadline.textContent = CONFIG.THONG_TIN_HERO.tieuDeChinh;
    }

    if (CONFIG.THONG_TIN_HERO.thongDiepNgan) {
      const elSub = document.querySelector(".hero-subtitle");
      if (elSub) elSub.textContent = CONFIG.THONG_TIN_HERO.thongDiepNgan;
    }
  }

  // Đồng bộ mục Những câu hỏi thường gặp (FAQ) từ CONFIG.FAQ
  if (CONFIG.FAQ) {
    const faq = CONFIG.FAQ;
    const tagEl = document.querySelector(".faq-container .section-tag");
    if (tagEl && faq.theMuc) {
      tagEl.textContent = faq.theMuc;
    }

    const headingEl = document.getElementById("faq-heading");
    if (headingEl && faq.tieuDe) {
      headingEl.textContent = faq.tieuDe;
    }

    const leadEl = document.querySelector(".faq-lead-text");
    if (leadEl && faq.loiDan) {
      leadEl.textContent = faq.loiDan;
    }

    const listEl = document.querySelector(".faq-list");
    if (listEl && Array.isArray(faq.danhSach) && faq.danhSach.length > 0) {
      listEl.innerHTML = "";
      faq.danhSach.forEach(function (item) {
        const details = document.createElement("details");
        details.className = "faq-item scroll-reveal";

        const summary = document.createElement("summary");
        summary.className = "faq-question";

        const spanText = document.createElement("span");
        spanText.textContent = item.cauHoi || "";

        const spanPlus = document.createElement("span");
        spanPlus.className = "faq-plus-icon";
        spanPlus.setAttribute("aria-hidden", "true");
        spanPlus.textContent = "+";

        summary.appendChild(spanText);
        summary.appendChild(spanPlus);

        const answerDiv = document.createElement("div");
        answerDiv.className = "faq-answer";

        if (item.moDau) {
          const p = document.createElement("p");
          p.textContent = item.moDau;
          answerDiv.appendChild(p);
        }

        if (Array.isArray(item.cacYChinh) && item.cacYChinh.length > 0) {
          const ul = document.createElement("ul");
          ul.className = "faq-bullet-list";
          item.cacYChinh.forEach(function (y) {
            const li = document.createElement("li");
            const colonIndex = y.indexOf(":");
            if (colonIndex > 0) {
              const strong = document.createElement("strong");
              strong.textContent = y.substring(0, colonIndex + 1);
              li.appendChild(strong);
              li.appendChild(document.createTextNode(y.substring(colonIndex + 1)));
            } else {
              li.textContent = y;
            }
            ul.appendChild(li);
          });
          answerDiv.appendChild(ul);
        }

        if (item.cauTraLoi) {
          const p = document.createElement("p");
          p.textContent = item.cauTraLoi;
          answerDiv.appendChild(p);
        }

        details.appendChild(summary);
        details.appendChild(answerDiv);
        listEl.appendChild(details);
      });
    }
  }

  // Đồng bộ nội dung Giới thiệu CLB, Khung ảnh giới thiệu & Phương châm từ CONFIG.GIOI_THIEU_CLB
  if (CONFIG.GIOI_THIEU_CLB) {
    const gt = CONFIG.GIOI_THIEU_CLB;

    const elSubHeading = document.getElementById("about-sub-heading");
    if (elSubHeading && gt.tieuDePhu) {
      elSubHeading.textContent = gt.tieuDePhu;
    }

    const elQuote = document.getElementById("about-quote");
    if (elQuote && gt.doanGioiThieu) {
      elQuote.textContent = gt.doanGioiThieu;
    }

    const elMottoHeading = document.getElementById("motto-heading");
    if (elMottoHeading && gt.tieuDePhuongCham) {
      elMottoHeading.textContent = gt.tieuDePhuongCham;
    }

    const elMottoGrid = document.getElementById("motto-grid");
    if (elMottoGrid && Array.isArray(gt.phuongCham) && gt.phuongCham.length > 0) {
      elMottoGrid.innerHTML = "";
      gt.phuongCham.forEach(function (item) {
        const card = document.createElement("div");
        card.className = "motto-card";

        const span = document.createElement("span");
        span.className = "motto-text";
        span.textContent = item;

        card.appendChild(span);
        elMottoGrid.appendChild(card);
      });
    }

    // Khởi tạo khung trình chiếu ảnh hoạt động từ thư mục assets/gioi-thieu/
    khoiTaoKhungAnhGioiThieu(gt.danhSachAnh);
  }
}

/**
 * Hàm tải và trình chiếu các ảnh trong thư mục assets/gioi-thieu/ bên cạnh phần Giới thiệu CLB
 */
function khoiTaoKhungAnhGioiThieu(danhSachKhaiBao) {
  const sliderEl = document.getElementById("about-gallery-slider");
  const stageEl = document.getElementById("about-gallery-stage");
  const prevBtn = document.getElementById("about-gallery-prev");
  const nextBtn = document.getElementById("about-gallery-next");
  const dotsEl = document.getElementById("about-gallery-dots");
  const placeholderEl = document.getElementById("about-gallery-placeholder");

  if (!sliderEl || !stageEl || !placeholderEl) return;

  // Chuẩn hóa đường dẫn về thư mục assets/gioi-thieu/
  function chuanHoaDuongDan(tenFile) {
    const trimmed = String(tenFile || "").trim();
    if (!trimmed) return "";
    if (
      trimmed.startsWith("http://") ||
      trimmed.startsWith("https://") ||
      trimmed.startsWith("assets/") ||
      trimmed.startsWith("./assets/")
    ) {
      return trimmed;
    }
    return "assets/gioi-thieu/" + trimmed;
  }

  // Nếu người dùng chưa khai báo tên file trong config.js, tự động dò các tên chuẩn trong assets/gioi-thieu/
  // (Bao gồm cả trường hợp Windows ẩn đuôi file khiến người dùng đặt tên bị lặp đuôi như anh-1.png.jpg, anh-1.jpg.jpg)
  let danhSachThu = [];
  if (Array.isArray(danhSachKhaiBao) && danhSachKhaiBao.length > 0) {
    danhSachThu = danhSachKhaiBao.map(chuanHoaDuongDan).filter(Boolean);
  } else {
    const cacDuoiPhoBien = [
      ".jpg",
      ".png",
      ".jpeg",
      ".webp",
      ".png.jpg",
      ".jpg.jpg",
      ".jpg.png",
      ".png.png"
    ];
    for (let i = 1; i <= 10; i++) {
      cacDuoiPhoBien.forEach(function (duoi) {
        danhSachThu.push("assets/gioi-thieu/anh-" + i + duoi);
      });
      danhSachThu.push("assets/gioi-thieu/" + i + ".jpg");
      danhSachThu.push("assets/gioi-thieu/" + i + ".png");
    }
  }

  // Kiểm tra những ảnh thực sự tồn tại trong thư mục
  const anhHopLe = [];
  let soLuongDaKiemTra = 0;

  if (danhSachThu.length === 0) return;

  danhSachThu.forEach(function (duongDan, thuTu) {
    const imgTest = new Image();
    imgTest.onload = function () {
      anhHopLe.push({ thuTu: thuTu, src: duongDan });
      hoanTatKiemTra();
    };
    imgTest.onerror = function () {
      hoanTatKiemTra();
    };
    imgTest.src = duongDan;
  });

  function hoanTatKiemTra() {
    soLuongDaKiemTra++;
    if (soLuongDaKiemTra < danhSachThu.length) return;

    if (anhHopLe.length === 0) {
      sliderEl.style.display = "none";
      placeholderEl.style.display = "flex";
      return;
    }

    // Sắp xếp đúng thứ tự ảnh
    anhHopLe.sort(function (a, b) {
      return a.thuTu - b.thuTu;
    });

    placeholderEl.style.display = "none";
    sliderEl.style.display = "block";
    stageEl.innerHTML = "";
    if (dotsEl) dotsEl.innerHTML = "";

    let viTriHienTai = 0;
    const cacSlide = [];
    const cacDot = [];

    anhHopLe.forEach(function (item, idx) {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = "Hình ảnh hoạt động CLB Kỹ năng Công tác xã hội " + (idx + 1);
      img.className = "about-gallery-slide" + (idx === 0 ? " is-active" : "");
      stageEl.appendChild(img);
      cacSlide.push(img);

      if (dotsEl && anhHopLe.length > 1) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "about-gallery-dot" + (idx === 0 ? " is-active" : "");
        dot.setAttribute("aria-label", "Xem ảnh số " + (idx + 1));
        dot.addEventListener("click", function () {
          chuyenDenAnh(idx);
          khoiDongLaiTuDongChuyen();
        });
        dotsEl.appendChild(dot);
        cacDot.push(dot);
      }
    });

    function chuyenDenAnh(chiSoMoi) {
      cacSlide[viTriHienTai].classList.remove("is-active");
      if (cacDot[viTriHienTai]) cacDot[viTriHienTai].classList.remove("is-active");

      viTriHienTai = (chiSoMoi + cacSlide.length) % cacSlide.length;

      cacSlide[viTriHienTai].classList.add("is-active");
      if (cacDot[viTriHienTai]) cacDot[viTriHienTai].classList.add("is-active");
    }

    let boDemTuDong = null;
    function khoiDongLaiTuDongChuyen() {
      if (boDemTuDong) clearInterval(boDemTuDong);
      if (cacSlide.length > 1) {
        boDemTuDong = setInterval(function () {
          chuyenDenAnh(viTriHienTai + 1);
        }, 4000);
      }
    }

    if (anhHopLe.length > 1) {
      if (prevBtn) {
        prevBtn.style.display = "inline-flex";
        prevBtn.onclick = function () {
          chuyenDenAnh(viTriHienTai - 1);
          khoiDongLaiTuDongChuyen();
        };
      }
      if (nextBtn) {
        nextBtn.style.display = "inline-flex";
        nextBtn.onclick = function () {
          chuyenDenAnh(viTriHienTai + 1);
          khoiDongLaiTuDongChuyen();
        };
      }
      if (dotsEl) dotsEl.style.display = "flex";
      khoiDongLaiTuDongChuyen();
    } else {
      if (prevBtn) prevBtn.style.display = "none";
      if (nextBtn) nextBtn.style.display = "none";
      if (dotsEl) dotsEl.style.display = "none";
    }
  }
}

/**
 * Tự động tính và gắn nhãn trạng thái cho 3 thẻ Lộ trình theo giờ Việt Nam (+07:00)
 */
function capNhatTrangThaiLoTrinh() {
  if (typeof CONFIG === "undefined" || !Array.isArray(CONFIG.LO_TRINH_3_VONG)) return;

  function tinhTrangThai() {
    const hienTaiMs = Date.now();

    CONFIG.LO_TRINH_3_VONG.forEach(function (vong) {
      const cardEl = document.getElementById("card-" + vong.id);
      const badgeEl = document.getElementById("status-" + vong.id);
      const timeEl = document.getElementById("time-" + vong.id);

      if (!cardEl || !badgeEl) return;

      if (timeEl && vong.thoiGianHienThi) {
        timeEl.textContent = vong.thoiGianHienThi;
      }

      const batDauMs = layMocThoiGianVietNam(vong.batDau);
      const ketThucMs = layMocThoiGianVietNam(vong.ketThuc);

      cardEl.classList.remove("is-upcoming", "is-ongoing", "is-ended");
      badgeEl.classList.remove("status-upcoming", "status-ongoing", "status-ended");

      if (hienTaiMs < batDauMs) {
        cardEl.classList.add("is-upcoming");
        badgeEl.classList.add("status-upcoming");
        badgeEl.textContent = "Sắp diễn ra";
      } else if (hienTaiMs >= batDauMs && hienTaiMs <= ketThucMs) {
        cardEl.classList.add("is-ongoing");
        badgeEl.classList.add("status-ongoing");
        badgeEl.textContent = "Đang diễn ra";
      } else {
        cardEl.classList.add("is-ended");
        badgeEl.classList.add("status-ended");
        badgeEl.textContent = "Đã kết thúc";
      }
    });
  }

  tinhTrangThai();
  setInterval(tinhTrangThai, 30000);
}

/**
 * Hàm xử lý khi ảnh Poster không tải được hoặc chưa có trong thư mục assets
 */
function xuLyLoiPoster(imgElement) {
  imgElement.style.display = "none";
  const placeholder = document.getElementById("poster-placeholder");
  if (placeholder) {
    placeholder.style.display = "flex";
  }
}

/**
 * =====================================================================
 * HIỆU ỨNG 1: CHUYỂN TRANG ÊM ÁI (SMOOTH PAGE TRANSITION)
 * Khi bấm liên kết chuyển qua lại giữa Trang chủ và 4 trang con JD,
 * nội dung trang hiện tại mờ dần nhẹ nhàng trước khi mở trang mới.
 * =====================================================================
 */
function khoiTaoChuyenTrangMuot() {
  // Khôi phục hiển thị ngay nếu người dùng bấm nút Quay lại (Back) của trình duyệt
  window.addEventListener("pageshow", function () {
    document.body.classList.remove("is-page-leaving");
  });

  // Nếu thiết bị bật chế độ giảm chuyển động thì chuyển trang ngay lập tức
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  document.addEventListener("click", function (e) {
    const link = e.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href) return;

    // Bỏ qua các liên kết cuộn trong cùng trang (#...), liên kết mở tab mới, hoặc liên kết ngoài
    if (
      href.startsWith("#") ||
      href.startsWith("http:") ||
      href.startsWith("https:") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      link.target === "_blank" ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.defaultPrevented
    ) {
      return;
    }

    // Bỏ qua nếu bấm vào chính trang đang đứng
    if (link.getAttribute("aria-current") === "page") {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    document.body.classList.add("is-page-leaving");

    setTimeout(function () {
      window.location.href = link.href;
    }, 180);
  });
}

/**
 * =====================================================================
 * HIỆU ỨNG 2: XUẤT HIỆN KHI KÉO/CUỘN TRANG (SCROLL REVEAL ANIMATION)
 * Các thẻ nội dung tự động trôi nhẹ từ dưới lên và rõ dần khi lọt vào tầm mắt.
 * =====================================================================
 */
function khoiTaoHieuUngCuonTrang() {
  // Gắn độ trễ nối tiếp (stagger) cho các thẻ nằm cùng một hàng/nhóm
  const cacNhomThe = [
    ".motto-grid .motto-card",
    ".timeline-steps .timeline-card",
    ".ban-grid .ban-card",
    ".jd-grid .jd-card"
  ];

  cacNhomThe.forEach(function (boChon) {
    const danhSach = document.querySelectorAll(boChon);
    danhSach.forEach(function (phanTu, viTri) {
      const mucTre = viTri % 4;
      if (mucTre > 0) {
        phanTu.classList.add("reveal-delay-" + mucTre);
      }
    });
  });

  // Danh sách các khối nội dung áp dụng hiệu ứng xuất hiện khi cuộn
  const danhSachKhoi = document.querySelectorAll(
    [
      ".hero-content",
      ".hero-poster-col",
      ".section-header",
      ".about-card-left",
      ".about-gallery-card",
      ".motto-card",
      ".timeline-card",
      ".ban-card",
      ".faq-lead-box",
      ".faq-item",
      ".ban-hero-info",
      ".ban-media-box",
      ".jd-card",
      ".ban-cta-box",
      ".footer-info",
      ".footer-cta-card"
    ].join(", ")
  );

  if (!danhSachKhoi.length) return;

  // Nếu trình duyệt cũ không hỗ trợ IntersectionObserver hoặc bật giảm chuyển động: hiển thị luôn
  const giamChuyenDong =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || giamChuyenDong) {
    danhSachKhoi.forEach(function (khoi) {
      khoi.classList.add("is-visible");
    });
    return;
  }

  const boQuanSat = new IntersectionObserver(
    function (cacMuc, observer) {
      cacMuc.forEach(function (muc) {
        if (muc.isIntersecting) {
          const phanTu = muc.target;
          phanTu.classList.add("is-visible");

          // Gỡ bỏ độ trễ sau khi đã hiện xong để hiệu ứng rê chuột (hover) phản hồi tức thì
          setTimeout(function () {
            phanTu.classList.remove("reveal-delay-1", "reveal-delay-2", "reveal-delay-3");
          }, 750);

          observer.unobserve(phanTu);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -24px 0px"
    }
  );

  danhSachKhoi.forEach(function (khoi) {
    khoi.classList.add("scroll-reveal");
    boQuanSat.observe(khoi);
  });
}

/**
 * =====================================================================
 * HIỆU ỨNG 3: VẠCH MÀU BÁO TIẾN TRÌNH KÉO TRANG (SCROLL PROGRESS BAR)
 * Hiển thị dải màu cam đất mảnh dưới thanh điều hướng chạy theo % cuộn trang.
 * =====================================================================
 */
function khoiTaoThanhTienTrinhCuon() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  const khungTienTrinh = document.createElement("div");
  khungTienTrinh.className = "scroll-progress-container";
  khungTienTrinh.setAttribute("aria-hidden", "true");

  const thanhTienTrinh = document.createElement("div");
  thanhTienTrinh.className = "scroll-progress-bar";
  khungTienTrinh.appendChild(thanhTienTrinh);
  navbar.appendChild(khungTienTrinh);

  let dangCapNhat = false;

  function capNhatTienTrinh() {
    const viTriCuon = window.scrollY || document.documentElement.scrollTop || 0;
    const chieuCaoCuonToiDa =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (chieuCaoCuonToiDa <= 0) {
      thanhTienTrinh.style.width = "0%";
    } else {
      const phanTram = Math.min(100, Math.max(0, (viTriCuon / chieuCaoCuonToiDa) * 100));
      thanhTienTrinh.style.width = phanTram.toFixed(2) + "%";
    }
    dangCapNhat = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!dangCapNhat) {
        window.requestAnimationFrame(capNhatTienTrinh);
        dangCapNhat = true;
      }
    },
    { passive: true }
  );

  window.addEventListener("resize", capNhatTienTrinh, { passive: true });
  capNhatTienTrinh();
}

/**
 * =====================================================================
 * HIỆU ỨNG 4: MÀN HÌNH CHỜ LOGO CLB (LOADING SCREEN / PRELOADER)
 * Hiển thị Logo CLB kèm hiệu ứng sóng hào quang (Option 1) hoặc tùy chọn
 * trong CONFIG.MAN_HINH_CHO, sau đó mờ dần mượt mà khi trang sẵn sàng.
 * =====================================================================
 */
function khoiTaoManHinhCho() {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  const cfg =
    typeof CONFIG !== "undefined" && CONFIG.MAN_HINH_CHO
      ? CONFIG.MAN_HINH_CHO
      : {};

  // Kiểm tra nếu tắt màn hình chờ hoặc chỉ bật ở Trang chủ mà đang ở trang con
  const laTrangCon = document.body.hasAttribute("data-ban-id");
  if (cfg.batDau === false || (cfg.chiHienTrangChu === true && laTrangCon)) {
    preloader.style.display = "none";
    return;
  }

  // Áp dụng kiểu hiệu ứng từ config ("option-1" | "option-2" | "option-3")
  const kieu = cfg.kieuHieuUng || "option-1";
  preloader.classList.remove(
    "preloader--option-1",
    "preloader--option-2",
    "preloader--option-3"
  );
  preloader.classList.add("preloader--" + kieu);

  // Đồng bộ dòng chữ dưới Logo
  const textEl = document.getElementById("preloader-text");
  if (textEl) {
    if (typeof cfg.chuHienThi === "string") {
      if (cfg.chuHienThi.trim() === "") {
        textEl.style.display = "none";
      } else {
        textEl.textContent = cfg.chuHienThi;
      }
    }
  }

  const thoiGianToiThieu =
    typeof cfg.thoiGianToiThieu === "number" ? cfg.thoiGianToiThieu : 1000;
  const thoiDiemBatDau = Date.now();
  let daDong = false;

  function dongManHinhCho() {
    if (daDong) return;
    daDong = true;
    preloader.classList.add("is-hidden");
    setTimeout(function () {
      preloader.style.display = "none";
    }, 550);
  }

  function kiemTraVaDong() {
    const daQua = Date.now() - thoiDiemBatDau;
    const conLai = Math.max(0, thoiGianToiThieu - daQua);
    setTimeout(dongManHinhCho, conLai);
  }

  if (document.readyState === "complete") {
    kiemTraVaDong();
  } else {
    window.addEventListener("load", kiemTraVaDong, { once: true });
  }

  // Chốt chặn an toàn: tối đa 2.5 giây tự động mở trang dù mạng chậm
  setTimeout(dongManHinhCho, Math.max(thoiGianToiThieu + 500, 2500));
}
