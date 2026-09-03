---
title: "When a low-frequency feature serves high-value users"
slug: "smarthue-home-room-prioritisation"
product: "SmartHue"
status: "narrative confirmed — selected supporting assets and Home pay-rate value pending"
target_page: "projects/smarthue-home-room.html"
---

# SmartHue Home / Room case — working content

## Đã xác nhận

- Đây là case ở phase **Engagement** của HEART framework.
- Trên bản Home original, đổi màu là action điều khiển đèn được dùng nhiều nhất, cao hơn bật/tắt và chỉnh độ sáng.
- Feedback App Store nêu nhu cầu đổi màu cho nhiều đèn cùng lúc.
- **Quick Mode** được thêm để đổi màu cho toàn bộ đèn cùng lúc.
- Trong thời gian test Home mới, Quick Mode chiếm **64%** các action được ghi nhận trên Home.
- Room được hiển thị trực tiếp trên Home ở phiên bản cũ.
- Dữ liệu cho thấy Room ít được bấm và ít được tạo.
- Ở thiết kế mới, Room vẫn ở Home nhưng được chuyển vào **More options**, theo hướng tương tự Apple Home.
- Sau khi bản test được đưa lên, user retention giảm và pay rate ở Home giảm.
- Overall retention giảm từ **12%** xuống **9.6%** (**−19%** so với baseline).
- New users tạo Room trong 24 giờ đầu có W1 retention **19.4%**, so với **9.4%** ở nhóm không tạo Room.
- Việc đưa Room vào vị trí khó tìm đã ảnh hưởng đến nhóm user trung thành/value user.
- Sau khi phát hiện insight này, Room được đưa trở lại vị trí cũ và hiển thị trực tiếp trên Home.
- Quick Mode được giữ lại sau test.
- Test là A/B test, được đo trong khoảng một tháng.
- Home có kịch bản kiếm tiền: sau khi người dùng điều khiển đèn đến một limit nhất định, Home hiển thị paywall.
- Sau khi Room được đưa lại lên Home, retention tăng ổn định trở lại mức cũ.
- Vai trò cá nhân: đọc data để đưa ra product decision, thiết kế UI flow, và handoff cho Engineering/Developer.
- Screenshot analytics có thể chia sẻ công khai.

## Gợi ý biên tập: luận điểm chính

Đây là case về việc **frequency và user value có thể cùng tồn tại**. Dữ liệu 64% xác nhận Quick Mode giải quyết một nhu cầu thật, trong khi retention segmentation cho thấy không thể giảm prominence của Room đối với một nhóm ít đông hơn nhưng có giá trị cao.

Không nên nói Room bị xoá: Room vẫn tồn tại, nhưng việc chuyển nó vào More options khiến người dùng giá trị khó tìm thấy hơn.

## Bản nháp copy ngắn cho portfolio

### Hero

**Eyebrow**  
SmartHue · Engagement

**H1**  
When a low-frequency feature serves high-value users

**Dek**  
Using GA4 to prioritise frequent controls, then combining test and cohort data to retain Quick Mode while restoring Room for high-retention users.

### The first signal

**H2**  
Home was not prioritising everyday behaviour

**Body**  
GA4 data from the original Home showed that changing colour was the most-used light-control action—ahead of turning lights on or off and adjusting brightness. App Store feedback also pointed to a need to change the colour of several lights at once.

Room, meanwhile, was visible directly on Home but was created and opened less often.

### The initial decision

**H2**  
Bring multi-light colour control forward

**Body**  
Quick Mode was added so users could change the colour of all lights at once. Room was moved into More options on Home, keeping it available without giving it equal priority to frequent controls.

### What the test revealed

**H2**  
The test validated Quick Mode—but exposed the cost of hiding Room

**Body**  
During the new Home test, Quick Mode accounted for 64% of recorded Home actions—strong evidence that multi-light colour control addressed a real need. But overall retention fell from 12% to 9.6%, and Home pay rate also declined.

Further cohort analysis showed 19.4% W1 retention among new users who created a Room within their first 24 hours, compared with 9.4% among those who did not. Moving Room into a harder-to-find location had affected a smaller but more valuable user group.

### The correction

**H2**  
Keep Quick Mode. Restore Room.

**Body**  
Quick Mode was retained because its 64% share of Home actions showed that it addressed a real need. Room was restored to its visible position on Home after cohort analysis showed its value to high-retention users.

After this correction, retention stabilised back at its previous level.

`[Final Home asset supplied in Figma node 1152:3653]`

### Closing

**H2**  
High frequency and high value can coexist

**Body**  
The lesson was not to choose between Quick Mode and Room. Frequent behaviour revealed an opportunity, while retention segmentation showed which existing experience could not be deprioritised. Using both signals led to a Home that served frequent actions without hiding a feature valuable to returning users.

## Role and scope

- Reviewed product data and informed the product decision.
- Designed the UI flows for Quick Mode and Room placement.
- Prepared the handoff for Engineering/Developer implementation.

## Asset plan

### R1 — Behaviour evidence

```text
[IMAGE PLACEHOLDER — REQUIRED]
Type: redacted analytics chart or ranked-action view.
Show: colour change as the most-used light-control action, compared with on/off and brightness on the original Home.
Do not show a numeric claim until it is confirmed for public use.
Placement: “The first signal”.
Alt text: “Original Home analytics comparing colour, on and off, and brightness controls.”
```

### R2 — User feedback evidence

```text
[IMAGE PLACEHOLDER — OPTIONAL]
Type: redacted App Store feedback excerpt mentioning the need to change several lights’ colour together.
Use only when it may be shared publicly.
Placement: adjacent to R1 or in “The initial decision”.
Alt text: “App Store feedback requesting a way to change the colour of multiple lights at once.”
```

### U1 — Home prioritisation decision

```text
[IMAGE SUPPLIED]
Type: same-scale, cropped Home screen comparison.
Before: Room visible as a primary section on Home.
After: frequent controls surfaced; Room contained in More options.
Placement: immediately after “The initial decision”.
Alt text: “Before-and-after SmartHue Home screens showing Room moved from the main view into More options.”
```

### R3 — Test outcome and follow-up insight

```text
[IMAGE PLACEHOLDER — REQUIRED]
Type: redacted test-result chart followed by a segmented retention view.
Show: A/B-test results over one month—Quick Mode usage 64%, overall retention 12% to 9.6%, and W1 retention 19.4% for Room creators versus 9.4% without Room. Home pay rate declined but its exact value remains pending.
Placement: “What the test revealed”.
Alt text: “Test results showing declining retention and Home pay rate, alongside analysis showing high retention among Room users.”
```

### U4 — Final Home state

```text
[IMAGE SUPPLIED]
Type: final Home UI screen.
Source: Figma node `1152:3653`.
Show: Quick Mode retained and Room restored to its visible position on Home.
Placement: “Keep Quick Mode. Restore Room.”
Alt text: “Final SmartHue Home screen with Quick Mode retained and Room restored to the primary navigation.”
```

### R4 — Recovery result

```text
[IMAGE PLACEHOLDER — OPTIONAL]
Type: redacted retention trend.
Show: retention stabilising back at its previous level after Room was restored to Home.
Do not show exact numbers until confirmed for public use.
Placement: “Keep Quick Mode. Restore Room.”
Alt text: “Retention trend returning to its previous level after Room was restored to the SmartHue Home screen.”
```

## Cần xác nhận trước khi chốt / bàn giao dev

1. Exact Home pay-rate value, nếu muốn hiển thị thành metric thay vì chỉ nêu xu hướng giảm.
2. Exact recovery-retention value hoặc analytics screenshot, nếu muốn thay placeholder recovery trend.
3. Analytics screenshot cho original action breakdown và App Store feedback excerpt.

## Ghi chú triển khai cho developer

- Giữ public copy dưới khoảng 300–350 từ, không tính caption.
- Không mô tả Room là bị xoá; diễn đạt đúng là Room vẫn tồn tại trong **More options** trên Home.
- Không nói Quick Mode là multi-room control. Dữ kiện hiện có chỉ xác nhận đổi màu toàn bộ đèn cùng lúc.
- Không trình bày việc đưa Room vào More options là giải pháp cuối cùng/thành công; đây là thay đổi được test và cho kết quả retention cùng Home pay rate giảm.
- Các metric đã được xác nhận để hiển thị: Quick Mode 64%; retention 12% → 9.6% (−19%); W1 Room creators 19.4% so với 9.4% without Room.
