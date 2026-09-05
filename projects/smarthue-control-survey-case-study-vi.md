# SmartHue — Survey trải nghiệm điều khiển đèn

> Bản tiếng Việt để review content. Survey đã ship production, đang thu thập data và production UI đã được bổ sung.

## Hero

**SmartHue · Product research**

# Giữ feedback sát với trải nghiệm điều khiển thực tế

Thiết kế survey cho người dùng đã subscribe SmartHue, với trigger được đơn giản hoá để trả lời đúng câu hỏi cốt lõi: sau khi kết nối đèn, họ có thể điều khiển đèn dễ dàng, ổn định và đúng như mong đợi không?

**Trạng thái:** Đã ship production · Đang thu thập data.

**Vai trò và ownership**

- **Role:** Product Designer.
- **Owned:** Phân tích GA4, xác định audience và trigger logic, thiết kế survey UX/UI, Happy / Not Happy branch và tracking strategy.
- **Delivery:** Prototype, handoff và build validation.
- **Collaboration:** Phối hợp với PM và Engineering; một peer designer hỗ trợ directional review.

## Bối cảnh nghiên cứu

SmartHue hỗ trợ điều khiển đèn thuộc Philips Hue, LIFX, Tuya và Matter. Research này chỉ tập trung vào trải nghiệm điều khiển **sau khi user đã kết nối đèn thành công**; không đo onboarding hay luồng kết nối.

Mục tiêu là tìm các yếu tố UX/UI và technical ảnh hưởng lớn nhất đến trải nghiệm để team ưu tiên cải thiện light control.

## Sau sáu tháng liên tục ship, đã đến lúc dừng lại để lắng nghe

- **Product cycle:** Sau sáu tháng liên tục ship tính năng và tối ưu cả product lẫn monetisation flow, team bước vào chặng cuối trong chu kỳ sản phẩm áp dụng HEART: tìm hiểu Happiness của user.
- **Cơ hội cuối năm:** Trước khi ưu tiên các cải tiến cho phần còn lại của năm, team cần dừng lại và lắng nghe—đặc biệt trước mùa lễ hội, khi sản phẩm điều khiển đèn có nhiều cơ hội tăng trưởng hơn.
- **Research question:** User có thể điều khiển đèn dễ dàng, ổn định và đúng như mong đợi không?

**Supporting evidence · GA4**

- **82.17%** user kết nối đèn thành công thực hiện ít nhất một thao tác điều khiển ngay trong cùng session.
- Trung bình, mỗi user thực hiện khoảng **9.4 thao tác điều khiển trong session đầu tiên**.

Các số này xác nhận user đã chạm vào core experience; chúng không được dùng làm trigger cứng.

## Quay lại ultimate goal

Ban đầu, mình bị cuốn vào việc tìm một thời điểm “hoàn hảo” để hiện survey: thử phân tích số action, session, anti-spam timing, safe action và các fallback rule. Research dần đi sâu vào tối ưu trigger, thay vì trả lời câu hỏi cốt lõi.

Ultimate goal không phải là tìm trigger phức tạp nhất. Mục tiêu là thu được feedback đáng tin cậy về trải nghiệm điều khiển đèn. Vì vậy, cần xác định lại đối tượng phù hợp trước khi tối ưu thời điểm hiển thị.

## Chọn đúng người để hỏi

Survey chỉ nhắm đến user Premium. Nhóm này có mức commitment cao hơn, có thể sử dụng control nhiều lần và không bị free limit hoặc paywall làm gián đoạn.

Nhờ đó feedback tập trung vào trải nghiệm control, thay vì bị nhiễu bởi monetization friction.

## Session 2, sau control action thứ hai

- **Đối tượng:** Premium user ở Session 2 sau khi mua subscription.
- **Automatic trigger:** Hiển thị survey sau control action hợp lệ thứ hai trong session này.
- **Action hợp lệ:** On/Off, Brightness hoặc Color.
- **Không tự động fallback:** Nếu user rời đi trước khi đủ điều kiện, survey không tự bật trong Session 3.
- **Luôn có thể truy cập:** Survey vẫn nằm trong Settings để user chủ động gửi feedback bất kỳ lúc nào.

```text
User mua subscription
↓
Session 2 sau purchase
↓
Control action hợp lệ thứ nhất
↓
Control action hợp lệ thứ hai
↓
Hiển thị survey
```

**Boundary:** Không tự động fallback sang Session 3 · Survey vẫn có trong Settings.

**Visual:** `survey-settings-entry.png` — survey vẫn có thể được mở chủ động từ Settings.

## Một survey, hai nhánh chẩn đoán

Câu hỏi đầu tiên yêu cầu user kéo slider từ Very Hard đến Very Easy để đánh giá trải nghiệm control:

> Slide to rate your control experience

- Rating 4–5 → Happy flow
- Rating 1–3 → Not Happy flow

Với Happy flow, survey hỏi control nào hoạt động tốt và feature user muốn có tiếp theo.

Với Not Happy flow, survey hỏi khó khăn lớn nhất, sau đó kiểm tra liệu user cuối cùng có điều khiển được đèn như mong muốn hay không. Cả hai câu hỏi diagnosis đều có lựa chọn `Other` để nhận feedback tự do.

| | Happy | Not Happy |
| --- | --- | --- |
| Entry | Rating 4–5 | Rating 1–3 |
| Diagnose | Which controls worked well for you? | What was the biggest difficulty you had? |
| Câu cuối | What feature would you like us to add next? | Were you eventually able to control your lights as intended? |

**Options đúng theo production UI**

- Controls/difficulties: Understand light status; Turn On/Off; Visual design; Change brightness; Change light color; Other.
- Control outcome: Not at all; Only partly; Yes.
- Feature demand: Control from anywhere; Alexa voice control; Siri AI / Apple Intelligence; Other.

**Visuals:** Shared rating entry; Happy path gồm controls → feature demand; Not Happy path gồm difficulty → control outcome.

## Đo các điểm ra quyết định

Thay vì track từng lần user chọn chip, tracking chỉ tập trung vào các progression point chính: view survey, tiếp tục, submit và đóng survey.

Sau khi survey được đưa lên production, team đang thu thập data để theo dõi:

- Survey health: completion rate, dismiss rate, drop-off theo step.
- Control experience: average ease score, Happy rate và Not Happy rate.
- Root cause: positive drivers, pain points và control outcome.
- Feature demand từ Happy respondents.

Các kết quả cũng có thể breakdown theo Philips Hue, LIFX, Tuya và Matter.

## Bài học

Production release sử dụng trigger có thể đo lường, gắn với hành vi điều khiển đèn thực tế, đồng thời vẫn giữ lựa chọn feedback chủ động trong Settings. Data vẫn đang được thu thập, vì vậy case chưa đưa ra kết luận về chất lượng response hoặc ảnh hưởng tới hành vi điều khiển.
