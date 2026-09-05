# Quy tắc xây dựng nội dung case study

## Quy tắc làm việc với codebase

Khi thực hiện các nhiệm vụ liên quan đến lập kế hoạch, sửa lỗi hoặc phát triển code trong repository này, phải tuân thủ các nguyên tắc sau:

1. Trước khi đề xuất giải pháp, phải khảo sát kỹ codebase và phạm vi liên quan: cấu trúc dự án, luồng hiện tại, dependency, convention, test, các thay đổi đang có và vùng có nguy cơ bị ảnh hưởng. Không kết luận hoặc lên kế hoạch chỉ dựa trên phỏng đoán.
2. Mặc định phải trình bày plan cụ thể để người dùng xem xét và duyệt trước khi chỉnh sửa code. Chỉ được bỏ qua bước duyệt plan với thay đổi cực nhỏ, rõ ràng và an toàn, thường giới hạn trong 1–2 dòng.
3. Plan phải nêu rõ vấn đề đã xác minh, nguyên nhân hoặc giả thuyết còn cần kiểm chứng, file/vùng dự kiến thay đổi, cách triển khai và cách kiểm tra kết quả.
4. Không bắt đầu code khi plan chưa được người dùng duyệt, trừ ngoại lệ 1–2 dòng nêu trên. Nếu trong quá trình triển khai phát hiện phạm vi hoặc hướng giải quyết thay đổi đáng kể so với plan đã duyệt, phải dừng và xin duyệt lại.
5. Nếu thiếu thông tin, gặp dữ kiện mâu thuẫn, không xác định chắc yêu cầu, phát hiện rủi ro có thể làm sai phạm vi, hoặc cần quyết định sản phẩm/thiết kế, phải dừng lại ngay và hỏi người dùng. Không tự suy đoán để tiếp tục.
6. Nếu nhiệm vụ cần UI mới hoặc chưa có đủ đặc tả hình ảnh, phải dừng và đề nghị người dùng cung cấp hoặc vẽ/chốt UI trước khi code; ngoại lệ là asset hình ảnh còn thiếu trong phần detail của case study, khi đó dùng placeholder theo quy tắc 12.
7. Sau khi code, phải kiểm tra thay đổi tương xứng với mức độ rủi ro (ví dụ: test, lint, type-check, build hoặc kiểm tra thủ công phù hợp) và báo rõ những gì đã kiểm tra, phần nào chưa thể kiểm tra và rủi ro còn lại.
8. Mọi section so sánh `Before / After` phải dùng form đã được duyệt trong Figma node `1123:27`: hai card visual bo góc, mũi tên chuyển đổi ở giữa, nhãn và mô tả căn giữa bên dưới, cùng outcome pill đặt dưới phía `After` khi có. Không đưa nền trắng tổng của frame Figma vào UI; đó chỉ là canvas hỗ trợ thiết kế.
9. Mọi màu UI mới phải dùng primitive hoặc semantic token trong `tokens.css`, dựa trên color system Figma node `1124:332`. Chỉ được hardcode màu khi đó là artwork, gradient minh họa hoặc màu đặc thù của project và không đóng vai trò token giao diện.
10. Workflow mặc định là `Portfolio Fast`: chỉ khảo sát target page, stylesheet liên quan và dependency dùng chung trực tiếp; plan ngắn 3–5 ý; triển khai tập trung vào nội dung và visual cần thiết để hoàn thiện portfolio. Không audit toàn repository hoặc xử lý tech debt ngoài phạm vi, trừ lỗi critical, lỗi chặn triển khai hoặc thay đổi tác động tới shared layer.
11. Không thực hiện QA UI/visual sau khi code; người dùng sẽ tự kiểm tra giao diện. Chỉ chạy kiểm tra kỹ thuật tối thiểu khi phù hợp, như syntax, link/asset tồn tại hoặc lỗi build rõ ràng. Chỉ QA toàn bộ route khi người dùng yêu cầu rõ.
12. Từ case study tiếp theo, ở phần detail không được tự tạo, tự vẽ hoặc tự dựng mockup/minh họa để thay thế asset chưa có. Phải dùng một block placeholder màu xám, bên trong ghi rõ `Content image placeholder` và mô tả ngắn loại hình ảnh cần bổ sung. Không áp dụng hồi tố cho các case đã triển khai, trừ khi người dùng yêu cầu.
13. Message cạnh avatar ở homepage phải chạy loop theo nhịp: `Type câu 1 → nghỉ 1.5s → xoá → type câu 2 → nghỉ 1.5s → xoá → lặp lại`. Miệng avatar chỉ chuyển động trong pha typing, dừng trong pha nghỉ và xoá. Hai câu hiện tại là `Hello, Glad to see u here!` và `Have a good day bro!`; chỉ thay đổi khi người dùng yêu cầu rõ.

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
