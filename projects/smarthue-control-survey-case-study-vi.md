# SmartHue — Survey trải nghiệm điều khiển đèn

> Bản tiếng Việt để review content. Đây là draft; hình ảnh và kết quả sau launch sẽ bổ sung sau.

## Hero

**SmartHue · Product research**

# Giữ feedback sát với trải nghiệm điều khiển thực tế

Thiết kế survey cho người dùng đã subscribe SmartHue, với trigger được đơn giản hoá để trả lời đúng câu hỏi cốt lõi: sau khi kết nối đèn, họ có thể điều khiển đèn dễ dàng, ổn định và đúng như mong đợi không?

## Bối cảnh nghiên cứu

SmartHue hỗ trợ điều khiển đèn thuộc Philips Hue, LIFX, Tuya và Matter. Research này chỉ tập trung vào trải nghiệm điều khiển **sau khi user đã kết nối đèn thành công**; không đo onboarding hay luồng kết nối.

Mục tiêu là tìm các yếu tố UX/UI và technical ảnh hưởng lớn nhất đến trải nghiệm để team ưu tiên cải thiện light control.

## Xác nhận user đã chạm vào core experience

Trước khi chốt đối tượng và trigger survey, mình dùng GA4 để kiểm tra liệu user đã kết nối đèn có thực sự dùng tính năng điều khiển hay chưa.

- 82.17% user kết nối đèn thành công thực hiện ít nhất một thao tác điều khiển ngay trong cùng session.
- Trung bình, mỗi user thực hiện khoảng 9.4 thao tác điều khiển trong session đầu tiên.

Các số này là evidence hỗ trợ: user có thể tích luỹ trải nghiệm điều khiển đủ nhanh. Chúng không được dùng làm trigger cứng.

`[Content image placeholder — GA4: tỷ lệ control adoption và số control actions trung bình]`

## Quay lại ultimate goal

Ban đầu, mình bị cuốn vào việc tìm một thời điểm “hoàn hảo” để hiện survey: thử phân tích số action, session, anti-spam timing, safe action và các fallback rule. Research dần đi sâu vào tối ưu trigger, thay vì trả lời câu hỏi cốt lõi.

Ultimate goal không phải là tìm trigger phức tạp nhất. Mục tiêu là thu được feedback đáng tin cậy về trải nghiệm điều khiển đèn. Vì vậy, cần xác định lại đối tượng phù hợp trước khi tối ưu thời điểm hiển thị.

## Chọn đúng người để hỏi

Survey chỉ nhắm đến user Premium. Nhóm này có mức commitment cao hơn, có thể sử dụng control nhiều lần và không bị free limit hoặc paywall làm gián đoạn.

Nhờ đó feedback tập trung vào trải nghiệm control, thay vì bị nhiễu bởi monetization friction.

`[Content image placeholder — sơ đồ: Successfully connected → Premium/subscribed → survey]`

## Đơn giản hoá trigger

Ban đầu, trigger có nhiều rule: số action control, session tiếp theo, anti-spam timing, safe action, fallback logic và free usage limit. Nhưng logic dần phức tạp hơn research goal.

Final rule được rút gọn thành: **hiển thị survey ở Session 2 kể từ khi user mua subscription.**

```text
User mua subscription
↓
Session 1 sau purchase
↓
Sử dụng SmartHue bình thường
↓
Session 2 sau purchase
↓
Hiển thị survey trải nghiệm control
```

Tại thời điểm này, user đã có trải nghiệm control đủ nhiều, không bị free limit cắt mạch, và vẫn nhớ rõ early premium experience.

`[Content image placeholder — flow trigger survey / screenshot logic triển khai]`

## Một survey, hai nhánh chẩn đoán

Câu hỏi đầu tiên đo mức độ dễ dàng khi điều khiển đèn, theo thang 1–5:

> How easy has it been to control your lights so far?

- Rating 4–5 → Happy flow
- Rating 1–3 → Not Happy flow

Với Happy flow, survey hỏi phần nào hoạt động tốt và feature user muốn có tiếp theo.

Với Not Happy flow, survey hỏi khó khăn chính, user đã làm gì tiếp theo, rồi mới hỏi feature demand. Cả hai nhánh đều có lựa chọn `Other` để nhận feedback tự do.

| | Happy | Not Happy |
| --- | --- | --- |
| Q1 | Mức độ dễ điều khiển đèn | Mức độ dễ điều khiển đèn |
| Q2 | Điều gì hoạt động tốt? | Điều gì gây khó khăn nhất? |
| Q3 | Muốn có feature nào tiếp theo? | Bạn đã làm gì tiếp theo? |
| Q4 | — | Muốn có feature nào tiếp theo? |

`[Content image placeholder — flow survey Happy / Not Happy và các màn hình chính]`

## Đo các điểm ra quyết định

Thay vì track từng lần user chọn chip, tracking chỉ tập trung vào các progression point chính: view survey, tiếp tục, submit và đóng survey.

Sau launch, team có thể theo dõi:

- Survey health: completion rate, dismiss rate, drop-off theo step.
- Control experience: average ease score, Happy rate và Not Happy rate.
- Root cause: positive drivers, pain points và recovery behaviours.
- Feature demand, có thể so sánh giữa Happy và Not Happy users.

Các kết quả cũng có thể breakdown theo Philips Hue, LIFX, Tuya và Matter.

## Bài học

Khi tối ưu behavioral trigger bắt đầu lệch khỏi research goal, cần quay lại câu hỏi cốt lõi. Trigger đơn giản ở Session 2 sau subscription tạo một sample sạch hơn, dễ triển khai và vẫn giữ feedback sát với trải nghiệm early premium control.

## Cần xác nhận

- Naming hiển thị trong app: dùng “Premium” hay “subscribed”.
- Asset GA4, trigger logic và survey UI được phép dùng công khai.
- Kết quả post-launch, nếu có và được phép công khai.
