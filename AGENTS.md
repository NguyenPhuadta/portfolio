# Quy tắc xây dựng nội dung case study

Khi hỗ trợ lên kế hoạch hoặc viết nội dung cho các case study trong portfolio này, phải tuân thủ các nguyên tắc sau:

1. Chỉ sử dụng những sự kiện, số liệu, vai trò, quy trình, quyết định, kết quả và ngữ cảnh mà người dùng đã cung cấp. Không tự suy đoán, phóng đại, điền khuyết hoặc tạo thêm thông tin để câu chuyện nghe hay hơn.
2. Nếu thiếu thông tin, có điểm mơ hồ, có dữ kiện mâu thuẫn hoặc chưa đủ cơ sở để viết một nhận định, phải hỏi lại người dùng trước khi đưa nội dung đó vào bản hoàn chỉnh.
3. Phải phân biệt rõ:
   - `Đã xác nhận`: thông tin do người dùng cung cấp.
   - `Cần xác nhận`: câu hỏi hoặc phần còn thiếu, không được trình bày như sự thật.
   - `Gợi ý biên tập`: đề xuất về cấu trúc, cách diễn đạt hoặc thứ tự kể chuyện; không phải dữ kiện của dự án.
4. Không tự tạo số liệu tác động, trích dẫn người dùng, nghiên cứu người dùng, timeline, quy mô đội ngũ, tên khách hàng, công cụ, trách nhiệm cá nhân hoặc kết quả kinh doanh.
5. Sau khi nội dung đã được người dùng xác nhận, phải bàn giao thành một file Markdown thân thiện với developer/coding agent để triển khai lên phần case study.
6. File bàn giao nên có cấu trúc rõ ràng, dùng heading ổn định và bao gồm khi phù hợp:
   - metadata/slug/title
   - trạng thái nội dung
   - tóm tắt dự án
   - vai trò và phạm vi công việc
   - bối cảnh hoặc vấn đề
   - mục tiêu
   - quy trình và các quyết định chính
   - giải pháp
   - kết quả đã được xác nhận
   - bài học
   - danh sách asset kèm vị trí đề xuất và alt text
   - ghi chú triển khai cho developer
   - các mục còn cần xác nhận
7. Nội dung trong file bàn giao phải sẵn sàng để mapping sang component/section. Không giấu yêu cầu triển khai trong văn xuôi; dùng tên section, thứ tự hiển thị, CTA, asset và ghi chú responsive/accessibility rõ ràng khi có dữ liệu.
8. Nếu vẫn còn mục `Cần xác nhận`, phải đánh dấu bản bàn giao là draft và không được mô tả nó là nội dung hoàn chỉnh.
9. Khi người dùng cung cấp thông tin, nếu nhận thấy còn điểm cần làm rõ, nội dung nên bổ sung hoặc hướng kể chuyện/cấu trúc có thể cải thiện, phải chủ động báo lại và đưa ra đề xuất để hai bên thoải mái trao đổi. Mọi đề xuất phải được ghi rõ là `Gợi ý biên tập` hoặc câu hỏi `Cần xác nhận`; không được tự động xem đề xuất là dữ kiện thật hay đưa vào bản hoàn chỉnh khi người dùng chưa xác nhận.
10. Workflow mặc định cho các case study: ưu tiên hoàn thiện và chốt **khung content** trước. Khi cần hình ảnh, analytics, screenshot hoặc asset UI nhưng chưa có sẵn, dùng placeholder kèm mô tả loại asset, vị trí và alt text. Người dùng có thể bổ sung asset sau; không trì hoãn việc viết content để chờ hình ảnh.
11. Mỗi file handoff mới từ agent content mặc định tương ứng với **một project/case study mới** và phải được thêm thành page/card mới trong portfolio. Không được ghi đè, đổi nội dung hoặc tái sử dụng URL của project đã tồn tại, kể cả khi metadata `target_page` trong handoff bị trùng. Phải ưu tiên tạo URL từ `slug`; chỉ cập nhật project cũ khi người dùng nói rõ đó là bản update. Nếu không chắc handoff là project mới hay bản update, phải hỏi người dùng trước khi sửa.
