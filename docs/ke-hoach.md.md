# KẾ HOẠCH CẤU TRÚC & CHỨC NĂNG WEBSITE TUYỂN THÀNH VIÊN (NĂM HỌC 2026 – 2027)
**Đơn vị:** Câu lạc bộ Kỹ năng Công tác xã hội (CLB KN CTXH)  
**Mục tiêu trang web:** Cung cấp thông tin trực quan, cô đọng về đợt tuyển thành viên; điều hướng ứng viên tìm hiểu kỹ JD từng ban ở các trang riêng và thúc đẩy hành động điền đơn (Google Form).

---

## PHẦN 1: SƠ ĐỒ CẤU TRÚC TRANG WEB (SITEMAP)

Để đảm bảo Trang chủ ngắn gọn, súc tích và không bị quá tải chữ, website sẽ được chia thành **01 Trang chủ (Homepage)** và **04 Trang con (Sub-pages) dành riêng cho JD từng ban**:

```text
[TRANG CHỦ: TUYỂN THÀNH VIÊN CLB KN CTXH]
 ├── 1. Thanh điều hướng (Header Navbar)
 ├── 2. Khu vực Poster & Kêu gọi hành động (Hero Section)
 ├── 3. Giới thiệu nhanh & Lịch sử CLB (About Us - Rút gọn)
 ├── 4. Lộ trình 03 vòng tuyển chọn (Recruitment Timeline)
 ├── 5. Tóm tắt 04 Ban chuyên môn (Teaser Cards)
 │       ├── [Link] ➔ Trang con 1: JD Ban Tổ chức chương trình
 │       ├── [Link] ➔ Trang con 2: JD Ban Thành viên & Phát triển năng lực
 │       ├── [Link] ➔ Trang con 3: JD Ban Kết nối nguồn lực
 │       └── [Link] ➔ Trang con 4: JD Ban Truyền thông
 ├── 6. Những câu hỏi thường gặp (FAQ Accordion + Nút Đặt câu hỏi)
 └── 7. Chân trang & Thông tin liên hệ (Footer)
```

---

## PHẦN 2: CÁC CHỨC NĂNG CẦN CÓ TRÊN WEBSITE (FUNCTIONALITIES)

1. **Thanh điều hướng cố định (Sticky Navigation Bar):**
   * Luôn hiển thị ở đầu trang khi người dùng cuộn chuột.
   * Gồm Logo CLB/Đoàn khoa, các mục chuyển nhanh (*Về CLB, Lộ trình, Các Ban, FAQ*) và nổi bật nhất là nút **"Ứng tuyển ngay"** (dẫn thẳng tới link Google Form Vòng 1).
2. **Đồng hồ đếm ngược (Countdown Timer):**
   * Đặt ngay dưới Poster chính ở Trang chủ, đếm ngược thời gian đến **23h59 ngày 17/10/2026** (hạn đóng đơn Vòng 1) nhằm tạo sự hào hứng và thúc đẩy sinh viên nộp đơn đúng hạn.
3. **Liên kết chuyển trang mượt mà (Sub-page Routing / Modal View):**
   * Khi ứng viên bấm vào nút *"Xem chi tiết JD"* ở bất kỳ ban nào trên Trang chủ, hệ thống sẽ chuyển sang trang riêng của ban đó (hoặc mở cửa sổ trang chi tiết độc lập).
   * Trên mỗi trang JD riêng luôn có nút *"← Quay lại Trang chủ"*, thanh chuyển nhanh qua lại giữa 4 ban và nút *"Ứng tuyển vào Ban này"*.
4. **Danh sách câu hỏi thu gọn (Accordion FAQ) & Nút Đặt câu hỏi:**
   * Hiển thị lời nhắn hỗ trợ kèm nút **"Đặt câu hỏi"** dẫn trực tiếp sang Messenger/Fanpage CLB.
   * Bên dưới là 05 thẻ câu hỏi dạng đóng/mở với biểu tượng dấu `+` ở góc phải. Khi ứng viên bấm vào câu hỏi nào, phần câu trả lời chi tiết sẽ mượt mà xổ xuống.
5. **Tối ưu hóa giao diện Điện thoại (Mobile-First Responsive):**
   * Hơn 85% sinh viên sẽ bấm vào link website từ Fanpage Facebook trên điện thoại. Do đó, chữ, nút bấm và Poster sẽ tự động co giãn vừa vặn với màn hình dọc của smartphone.

---

## PHẦN 3: SƯỜN NỘI DUNG CHI TIẾT TRÊN TRANG CHỦ (ĐÃ RÚT GỌN)

*Dưới đây là phần nội dung đã được cô đọng tối đa để đưa trực tiếp lên Trang chủ:*

### 📍 Khu vực 1: Hero Section (Đầu trang – Nơi đặt Poster)
* **Hình ảnh chính:** Hiển thị **Poster chính thức** của Chương trình Tuyển thành viên năm học 2026 – 2027 (kích thước lớn, sắc nét, đặt ở vị trí trung tâm hoặc bên phải).
* **Tiêu đề chính (Headline):** TUYỂN THÀNH VIÊN CLB KỸ NĂNG CÔNG TÁC XÃ HỘI 2026 – 2027
* **Thông điệp ngắn (Sub-headline):** *"Thấu cảm để sẻ chia – Rèn kỹ năng để trưởng thành. Hãy trở thành một trong 35 mảnh ghép thế hệ mới của đại gia đình CLB Kỹ năng Công tác xã hội!"*
* **Đồng hồ đếm ngược:** `[ Còn XX Ngày : XX Giờ : XX Phút ] để hoàn thành Vòng 1`
* **Cụm nút bấm (CTA Buttons):**
  * 🔘 **[ ĐIỀN ĐƠN ỨNG TUYỂN NGAY ]** *(Màu nổi bật nhất - Mở link Google Form)*
  * ⚪ **[ KHÁM PHÁ 04 BAN CHUYÊN MÔN ↓ ]** *(Cuộn xuống mục chọn Ban)*

---

### 📍 Khu vực 2: Giới thiệu & Dấu ấn CLB (About Us)
*Thiết kế dạng 2 cột: Cột trái là đoạn giới thiệu ngắn, Cột phải là 4 ô biểu tượng Giá trị cốt lõi & Con số nổi bật.*

* **Về chúng mình (Ngắn gọn 4 dòng):**
  > Trực thuộc **Đoàn khoa Công tác xã hội - Nhân học - Xã hội học** (Trường ĐH KHXH&NV, ĐHQG-HCM), **CLB Kỹ năng Công tác xã hội (CLB KN CTXH)** ra đời như một "phòng thí nghiệm thực tiễn" giúp sinh viên gắn kết lý thuyết giảng đường với kỹ năng làm việc cùng con người và cộng đồng. Bước sang năm học 2026 – 2027 với sức mạnh giao thoa liên ngành, CLB mở rộng cánh cửa chào đón toàn thể sinh viên Nhân văn có chung đam mê phụng sự xã hội.
* **4 Giá trị cốt lõi (Hiển thị dạng Icon):**
  * 🤝 **Thấu cảm** | 🎯 **Chuyên nghiệp** | 🔗 **Kết nối** | 🌱 **Phát triển**
* **Thông tin nhanh (Highlight Box):**
  * **Đối tượng:** Toàn thể sinh viên Trường ĐH KHXH&NV, ĐHQG-HCM.
  * **Chỉ tiêu tuyển:** **35** thành viên mới.
  * **Ban Chủ nhiệm:** Đ/c Trần Thái Thành (Chủ nhiệm) – Đ/c Nguyễn Thị Ngọc Trân (Phó Chủ nhiệm).

---

### 📍 Khu vực 3: Lộ trình 03 Vòng Tuyển Chọn (Timeline)
*Thiết kế dạng thanh tiến trình 3 bước (3-Step Cards) ngắn gọn, dễ nhìn:*

| Vòng tuyển | Thời gian | Hình thức | Tóm tắt nội dung (1 câu) |
| :--- | :--- | :--- | :--- |
| **VÒNG 1: ĐIỀN BIỂU MẪU** | `07/10 – 17/10/2026` | Trực tuyến (Google Form) | Chia sẻ thông tin cá nhân, mục tiêu và nguyện vọng bằng sự chân thành, mạch lạc. |
| **VÒNG 2: PHỎNG VẤN** | `11/10` (Đợt 1) & `18/10/2026` (Đợt 2) | Trực tiếp kết hợp Trực tuyến | Trò chuyện trực tiếp cùng Ban Giám khảo để làm rõ cá tính và mức độ phù hợp. |
| **VÒNG 3: LÀM VIỆC NHÓM** | `19/10 – 23/10/2026` | Trực tuyến kết hợp Trực tiếp | Phối hợp giữa 4 ban để lập kế hoạch thực tế cho chương trình giả định *"Trung thu yêu thương"*. |

---

### 📍 Khu vực 4: Khám phá 04 Ban Chuyên Môn (Cổng dẫn sang Trang JD riêng)
*Tại Trang chủ chỉ hiển thị 4 thẻ (Card) tóm tắt gồm: Tên Ban + 1 câu định vị + 3 từ khóa công việc + Nút bấm chuyển sang trang JD chi tiết.*

1. **🎪 BAN TỔ CHỨC CHƯƠNG TRÌNH**
   * *Định vị:* "Kiến trúc sư đứng sau mọi chương trình học thuật và dự án cộng đồng."
   * *Từ khóa:* Lên ý tưởng • Lập kế hoạch • Điều phối sự kiện & Hậu cần.
   * 🔗 **Nút bấm:** `[ Xem chi tiết JD & Quyền lợi ➔ ]` *(Dẫn đến trang `/jd-ban-to-chuc`)*

2. **💛 BAN THÀNH VIÊN VÀ PHÁT TRIỂN NĂNG LỰC**
   * *Định vị:* "Trái tim giữ lửa nội bộ, kết nối con người và ươm mầm kỹ năng."
   * *Từ khóa:* Tuyển dụng & Nhân sự • Gắn kết nội bộ • Tổ chức tập huấn (Training).
   * 🔗 **Nút bấm:** `[ Xem chi tiết JD & Quyền lợi ➔ ]` *(Dẫn đến trang `/jd-ban-thanh-vien`)*

3. **🤝 BAN KẾT NỐI NGUỒN LỰC**
   * *Định vị:* "Cầu nối chiến lược mang nguồn lực xã hội đồng hành cùng giá trị nhân văn."
   * *Từ khóa:* Gây quỹ sáng tạo • Hồ sơ tài trợ & Đối ngoại • Quản lý dự toán thu chi.
   * 🔗 **Nút bấm:** `[ Xem chi tiết JD & Quyền lợi ➔ ]` *(Dẫn đến trang `/jd-ban-ket-noi-nguon-luc`)*

4. **📸 BAN TRUYỀN THÔNG**
   * *Định vị:* "Người kể chuyện bằng ngôn từ và hình ảnh, lan tỏa thông điệp tích cực."
   * *Từ khóa:* Kế hoạch truyền thông • Sáng tạo Content • Thiết kế & Quay dựng.
   * 🔗 **Nút bấm:** `[ Xem chi tiết JD & Quyền lợi ➔ ]` *(Dẫn đến trang `/jd-ban-truyen-thong`)*

---

### 📍 Khu vực 5: Những câu hỏi thường gặp (FAQs - Thiết kế theo mẫu giao diện)
* **Tiêu đề mục:** **NHỮNG CÂU HỎI THƯỜNG GẶP**
* **Lời dẫn phụ:** *"Nếu bạn có bất kỳ thắc mắc nào liên quan đến chương trình Tuyển thành viên lần này, đừng ngại ngần mà hãy liên hệ với Fanpage CLB nhé!"*
* **Nút hành động:** 🔘 **[ Đặt câu hỏi ]** *(Gắn link dẫn tới Fanpage `https://www.facebook.com/kynangctxh`)*
* **Danh sách 05 thẻ câu hỏi đóng/mở (kèm nội dung trả lời khi bấm vào dấu `+`):**
  1. `[+] Nếu chưa từng tham gia các hoạt động ngoại khoá nào trước đó thì mình có cơ hội cạnh tranh và được đánh giá cao không?`
     * *Nội dung xổ ra:* Hoàn toàn có nhé! CLB Kỹ năng Công tác xã hội không đặt nặng việc bạn phải có nhiều kinh nghiệm từ trước. Ban Giám khảo đánh giá cao nhất là thái độ cầu thị, sự nhiệt huyết, tinh thần trách nhiệm và sự chân thành của bạn. Khi vào CLB, bạn sẽ được các anh chị và Ban Thành viên & Phát triển năng lực tập huấn từ những bước cơ bản nhất.
  2. `[+] Trong quá trình tham gia CLB, liệu mình có cơ hội tìm hiểu hoặc học hỏi thêm các kiến thức bên ngoài ban chuyên môn mà mình ứng tuyển không?`
     * *Nội dung xổ ra:* Chắc chắn là có! Mọi dự án của CLB đều có sự phối hợp chặt chẽ giữa 04 ban. Ngoài ra, CLB thường xuyên tổ chức các buổi training kỹ năng chung cho toàn thể thành viên và tạo điều kiện để bạn hỗ trợ chéo các mảng công việc khác nhằm khám phá đa dạng thế mạnh của bản thân.
  3. `[+] Ngoài tổ chức các chương trình, CLB Kỹ năng Công tác xã hội còn mang đến cho mình những trải nghiệm gì khác?`
     * *Nội dung xổ ra:* Bên cạnh việc chạy sự kiện và dự án cộng đồng, bạn sẽ được trải nghiệm các buổi sinh hoạt định kỳ, bonding/teambuilding gắn kết như một gia đình nhỏ; tham gia không gian học thuật cùng giảng viên, chuyên gia; và xây dựng mạng lưới mối quan hệ thân thiết với các anh chị, bạn bè đồng điệu.
  4. `[+] Mình có thể phát triển những kỹ năng nào khi tham gia CLB?`
     * *Nội dung xổ ra:* Bạn sẽ được phát triển toàn diện từ kỹ năng thực hành Công tác xã hội (lắng nghe, thấu cảm, giao tiếp, điều phối nhóm, làm việc với đối tượng yếu thế) đến kỹ năng làm việc chuyên nghiệp (lập kế hoạch, quản lý thời gian, teamwork) và kỹ năng chuyên môn sâu theo từng ban (viết Proposal, nhân sự, tổ chức sự kiện, Content/Design).
  5. `[+] Ứng viên tiềm năng của CLB Kỹ năng Công tác xã hội cần có những tố chất gì?`
     * *Nội dung xổ ra:* Một mảnh ghép tiềm năng của CLB KN CTXH cần có: (1) Sự thấu cảm và mong muốn tạo giá trị tích cực cho cộng đồng; (2) Tinh thần trách nhiệm, cam kết với tập thể, biết cân bằng giữa việc học và hoạt động; (3) Thái độ cầu tiến, ham học hỏi và không ngại thử sức với điều mới.

---

### 📍 Khu vực 6: Chân trang (Footer)
* **Logo & Tên đơn vị:** CLB Kỹ năng Công tác xã hội – Đoàn khoa Công tác xã hội - Nhân học - Xã hội học, Trường ĐH KHXH&NV, ĐHQG-HCM.
* **Kênh liên hệ:** 
  * 🌐 Fanpage: [facebook.com/kynangctxh](https://www.facebook.com/kynangctxh)
  * 📍 Địa điểm hoạt động: Cơ sở Linh Trung (TP. Thủ Đức) & Cơ sở Đinh Tiên Hoàng (Quận 1).
* **Nút nhắc cuối trang:** *"Đừng bỏ lỡ cơ hội trở thành một phần của CLB KN CTXH – [ĐIỀN ĐƠN NGAY]"*

---

## PHẦN 4: CẤU TRÚC TRANG CON DÀNH RIÊNG CHO JD TỪNG BAN

Khi ứng viên bấm vào `[ Xem chi tiết JD & Quyền lợi ➔ ]` của bất kỳ ban nào ở Khu vực 4, trang web sẽ chuyển sang **Trang chi tiết JD** với bố cục thống nhất như sau:

1. **Thanh điều hướng đầu trang con:**
   * Nút `[ ← Quay về Trang chủ ]` ở góc trái.
   * Thanh chuyển nhanh giữa 4 ban ở góc phải: `Ban Tổ chức` | `Ban Thành viên` | `Ban Nguồn lực` | `Ban Truyền thông` (giúp ứng viên đọc JD ban này xong có thể bấm xem tiếp ban khác ngay lập tức mà không cần quay ra trang chủ).
2. **Banner đầu trang của Ban:**
   * Tên Ban + Câu Slogan đặc trưng + Hình ảnh minh họa hoạt động của Ban.
3. **Nội dung chi tiết 3 cột (Lấy nguyên vẹn từ Bộ Cẩm nang Tuyển thành viên):**
   * 📋 **Khối 1: Mô tả công việc (Bạn sẽ làm gì?)** – Liệt kê 4 gạch đầu dòng nhiệm vụ chính.
   * 🌟 **Khối 2: Yêu cầu ứng viên (Chúng mình tìm kiếm ai?)** – Các tố chất, thái độ và điểm cộng.
   * 🎁 **Khối 3: Quyền lợi tại Ban (Bạn sẽ nhận được gì?)** – Kỹ năng thực chiến và giá trị phát triển cá nhân.
4. **Góc bật mí Vòng 3 (Teamwork Challenge Preview):**
   * Một hộp thông tin nhỏ bật mí vai trò của Ban này trong đề bài giả định *"Trung thu yêu thương"* ở Vòng 3 để ứng viên hình dung rõ nhất công việc thực tế.
5. **Khu vực Chốt đơn cuối trang con:**
   * Câu hỏi: *"Bạn đã sẵn sàng thử sức tại [Tên Ban]?"*
   * Nút bấm lớn: **[ ĐĂNG KÝ NGUYỆN VỌNG VÀO BAN NÀY NGAY ]** *(Mở Google Form ứng tuyển)*.