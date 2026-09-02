---
project: "SmartHue connection case study"
date_logged: "2026-09-02"
status: "planned — not implemented"
target_page: "projects/smarthue.html"
---

# SmartHue — backlog for next session

## Đã xác nhận

### 1. Bổ sung video ngắn của toàn bộ flow kết nối tự động

- Thêm một video ngắn thể hiện đầy đủ luồng kết nối tự động.
- Video phải giúp người xem hiểu diễn tiến của flow, không chỉ hiển thị một màn hình tĩnh.
- Chưa triển khai trong phiên hiện tại.

### 2. Giải thích rõ thay đổi của Hue BLE Light

- Phần Hue BLE Light hiện tại chưa làm rõ điều gì đã thay đổi giữa flow cũ và flow mới.
- Cần bổ sung nội dung và visual để người xem hiểu thay đổi, thay vì chỉ nhìn thấy màn hình `Connecting to Hue color lamp`.
- Không tự viết thêm nguyên nhân, hành vi hoặc kết quả chưa được người dùng xác nhận.
- Chưa triển khai trong phiên hiện tại.

### 3. Chỉnh lại UI của các khối hình — implemented

- Các container hình trong phần Before/After cần có kích thước và nhịp thị giác đồng đều hơn.
- Khối Before hai màn hình và khối After một màn hình hiện không cân bằng về chiều cao, tỷ lệ và khoảng trống.
- Giữ đúng tỷ lệ màn hình điện thoại; cân bằng bằng layout, kích thước container, padding và cách đặt ảnh, không kéo méo asset.
- Kiểm tra lại cả desktop và mobile.
- Đã cân bằng container Before/After bằng cùng chiều cao hiển thị, căn asset về đáy và giữ nguyên tỷ lệ ảnh.
- Desktop: hai khối hình cùng cao `475px`.
- Mobile: hai khối hình cùng cao `420px`; màn After thu về `180px` để không crop hoặc kéo méo asset.
- Cần QA lại nếu nội dung/asset so sánh tiếp tục thay đổi.

## Cần xác nhận

1. Video sẽ thể hiện flow Bridge, flow Hue BLE Light, hay cả hai?
2. Asset video đã có sẵn hay cần dựng từ các màn hình/prototype hiện tại?
3. Với Hue BLE Light, cần xác nhận chính xác sequence cũ và sequence mới, cùng những màn hình có thể công khai, trước khi hoàn thiện nội dung so sánh.

## Gợi ý biên tập

- Có thể đặt video sau phần Product decision để nó đóng vai trò tổng quan, rồi dùng các khối Bridge và BLE bên dưới để giải thích từng thay đổi cụ thể.
- Phần BLE nên dùng cấu trúc Before → Removed friction → After tương tự Bridge, nhưng chỉ sau khi sequence và asset đã được xác nhận.

## Reference asset

- `projects/assets/smarthue/ui-reference-comparison-sizing.png`
- Vai trò: ảnh tham chiếu cho vấn đề container Before/After không cân bằng.
- Ảnh chỉ là reference UI, không phải nguồn dữ kiện mới của dự án.

## Acceptance checklist

- [ ] Video ngắn hiển thị đầy đủ flow đã chọn và có fallback/accessibility phù hợp.
- [ ] Người xem có thể hiểu thay đổi của Hue BLE Light mà không cần giải thích miệng.
- [x] Các khối hình Before/After có khung hiển thị cân bằng trên desktop.
- [x] Asset không bị kéo méo hoặc crop mất thông tin quan trọng.
- [x] Layout được kiểm tra ở breakpoint mobile.
- [ ] Handoff và alt text được cập nhật sau khi nội dung/asset được xác nhận.
