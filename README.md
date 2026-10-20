# 🌸 Gửi Một Chút Thương

> *“Có những điều dễ thương, nên được nói ra.”*

Website tạo và gửi thiệp chúc mừng điện tử phong bì tương tác 3D giàu cảm xúc dành tặng Mẹ, Người yêu, Bạn bè, Chị em gái, Cô giáo, Đồng nghiệp nhân dịp 8/3, 20/10, Ngày của Mẹ, Sinh nhật và các dịp kỷ niệm ý nghĩa.

---

## ✨ Tính Năng Nổi Bật

- **Phong Bì Tương Tác 3D Cho Người Nhận:** Người nhận mở đường link sẽ nhìn thấy phong bì đóng với con dấu sáp nổi bật, tự tay bấm "Mở món quà ♡" để kích hoạt chuỗi hoạt ảnh mở nắp phong bì, trượt lá thư và bung mở tấm thiệp kèm pháo hoa giấy pastel.
- **Giới Hạn Ký Tự Nâng Cao Đến 5.000 Ký Tự:** Thoải mái viết những bức tâm thư, lời chúc dài chan chứa tình cảm mà không lo bị cắt bớt.
- **Trình Tạo Thiệp 6 Bước:** Lựa chọn dịp lễ, đối tượng người nhận, tên cá nhân hóa, gợi ý câu chúc hoặc tự viết, chọn mẫu thiết kế và xem trước trực tiếp.
- **Bộ Sưu Tập 18 Mẫu Thiệp Nghệ Thuật Khác Biệt:** 
  1. *Sweet Pink:* Tông hồng pastel, hoa nhí và font chữ viết tay `Dancing Script`.
  2. *Flowers for Mom:* Hoa cẩm chướng tinh khôi, viền chỉ vàng và nền kem ấm áp.
  3. *Romantic Blush:* Hoa hồng nhung, ánh hào quang dịu nhẹ và sắc hồng đào lãng mạn.
  4. *Cute Doodles:* Nét vẽ tay ngộ nghĩnh, ngôi sao lấp lánh và font doodle `Caveat`.
  5. *Minimal Elegance:* Bố cục phong cách tạp chí editorial tối giản, sang trọng.
  6. *Vintage Letter:* Lá thư cổ điển với chất giấy ngả vàng, tem bưu chính Việt Nam và dấu sáp đỏ.
  7. *Sakura Dream:* Cành hoa anh đào rủ xuống góc thiệp, cánh hoa rơi thanh khiết.
  8. *Warm Sunshine:* Hoa cúc họa mi vàng, tia nắng ban mai chan hòa năng lượng tích cực.
  9. *Starry Night:* Bầu trời đêm huyền bí, vầng trăng khuyết và ngàn ánh sao vàng lấp lánh.
  10. *Lavender Garden:* Sắc tím oải hương Provence nước Pháp, nhành hoa thảo mộc êm đềm và thanh lịch.
  11. *Ocean Breeze:* Làn sóng biển xanh ngọc dịu mát, vỏ sò ngọc trai và sự êm đềm của đại dương.
  12. *Autumn Maple:* Cánh lá phong đỏ rơi nhẹ trong chiều thu se lạnh, chất màu cam đất nung ấm áp.
  13. *Matcha Cozy:* Tông xanh matcha mộc mạc phong cách quán trà Nhật Bản, nhẹ nhàng tĩnh lặng.
  14. *Princess Tiara:* Vương miện công chúa đính ngọc trai, ren hoa hồng pastel quý phái.
  15. *Retro Polaroid:* Khung ảnh Polaroid với băng dính washi tape đáng yêu, lưu giữ thước phim thanh xuân.
  16. *Lotus Pure:* Đóa sen hồng ngát hương, nét đẹp truyền thống Việt Nam thanh cao, trang nhã.
  17. *Midnight Rose Gold:* Nền than chì sang trọng kết hợp viền vàng hồng lấp lánh như dạ tiệc thượng lưu.
  18. *Cloud Dream:* Tầng mây bồng bềnh giữa bầu trời xanh trong vắt, cầu vồng pastel nhẹ tênh hạnh phúc.
- **Thư Viện Gợi Ý Lời Chúc Phong Phú:** Hệ thống gợi ý câu chúc tiếng Việt tự nhiên theo đối tượng, phong cách, độ dài và cảm xúc; hỗ trợ chèn tên tự động mà không để lộ placeholder.
- **Serverless & Hoàn Toàn Miễn Phí:** Lưu trữ toàn bộ dữ liệu thiệp trực tiếp trong URL hash (`#card=...`) bằng thuật toán nén LZ-string, không cần cơ sở dữ liệu, không cần đăng ký tài khoản.
- **Xuất Thiệp Ảnh PNG:** Tải thiệp về máy với độ phân giải cao để chia sẻ trên mạng xã hội.
- **Âm Thanh Chuông Gió & Hiệu Ứng Nền:** Tự tổng hợp âm thanh bằng Web Audio API, cánh hoa bay nhẹ nhàng, hỗ trợ tắt âm và chế độ giảm chuyển động (`prefers-reduced-motion`).
- **Responsive 100%:** Hoạt động mượt mà trên mọi kích thước màn hình từ điện thoại (320px, 375px) đến máy tính bảng và desktop.

---

## 🛠 Công Nghệ Sử Dụng

- **Frontend:** React 19, TypeScript, Vite 8
- **Styling:** Vanilla CSS kết hợp CSS Custom Properties (Design Tokens), CSS 3D Transforms, Keyframe Animations
- **Typography:** Google Fonts (`Be Vietnam Pro`, `Playfair Display`, `Dancing Script`, `Caveat`)
- **Icons:** `lucide-react`
- **Utilities:** `html-to-image` (xuất PNG), `canvas-confetti` (pháo hoa giấy), `lz-string` (nén URL)

---

## 🚀 Cài Đặt & Chạy Trên Máy Cục Bộ

1. **Clone repository:**
   ```bash
   git clone https://github.com/danieldo2012/huy.git
   cd huy
   ```

2. **Cài đặt thư viện:**
   ```bash
   npm install
   ```

3. **Chạy máy chủ phát triển:**
   ```bash
   npm run dev
   ```
   Mở trình duyệt tại [http://localhost:5173/](http://localhost:5173/).

4. **Kiểm tra mã nguồn & Đóng gói:**
   ```bash
   npm run lint
   npm run build
   ```

---

## 💖 Giấy Phép & Thông Điệp

Dự án được xây dựng với tình yêu thương nhằm giúp mọi người trao gửi những lời chúc ngọt ngào nhất đến những người phụ nữ tuyệt vời trong cuộc sống!
