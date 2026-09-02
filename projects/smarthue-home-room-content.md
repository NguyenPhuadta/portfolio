---
title: "When a low-frequency feature serves high-value users"
slug: "smarthue-home-room-prioritisation"
product: "SmartHue"
status: "draft — narrative and implementation structure confirmed; exact metrics and visual assets pending"
target_page: "projects/smarthue-home-room.html"
---

# SmartHue Home / Room case — working content

## Đã xác nhận

- Đây là case ở phase **Engagement** của HEART framework.
- Đổi màu là action được dùng nhiều nhất.
- Feedback App Store nêu nhu cầu đổi màu cho nhiều đèn cùng lúc.
- **Quick Mode** được thêm để đổi màu cho toàn bộ đèn cùng lúc.
- Các state lỗi của đèn được làm rõ dựa trên state/yêu cầu từ Engineering, nhằm hỗ trợ logic triển khai và giúp người dùng bớt bối rối.
- Room được hiển thị trực tiếp trên Home ở phiên bản cũ.
- Dữ liệu cho thấy Room ít được bấm và ít được tạo.
- Ở thiết kế mới, Room vẫn ở Home nhưng được chuyển vào **More options**, theo hướng tương tự Apple Home.
- Sau khi bản test được đưa lên, user retention giảm và pay rate ở Home giảm.
- Phân tích tiếp cho thấy người dùng Room có retention cao; Room là value đối với nhóm user này.
- Việc đưa Room vào vị trí khó tìm đã ảnh hưởng đến nhóm user trung thành/value user.
- Sau khi phát hiện insight này, Room được đưa trở lại vị trí cũ và hiển thị trực tiếp trên Home.
- Test là A/B test, được đo trong khoảng một tháng.
- Home có kịch bản kiếm tiền: sau khi người dùng điều khiển đèn đến một limit nhất định, Home hiển thị paywall.
- Sau khi Room được đưa lại lên Home, retention tăng ổn định trở lại mức cũ.
- Vai trò cá nhân: đọc data để đưa ra product decision, thiết kế UI flow, và handoff cho Engineering/Developer.
- Screenshot analytics có thể chia sẻ công khai.

## Gợi ý biên tập: luận điểm chính

Đây là case về **giới hạn của việc tối ưu theo hành vi phổ biến nhất**. Việc ưu tiên Quick Mode có cơ sở, nhưng giảm prominence của Room đã làm tổn hại một nhóm ít đông hơn nhưng có giá trị và retention cao.

Không nên nói Room bị xoá: Room vẫn tồn tại, nhưng việc chuyển nó vào More options khiến người dùng giá trị khó tìm thấy hơn.

## Bản nháp copy ngắn cho portfolio

### Hero

**Eyebrow**  
SmartHue · Engagement

**H1**  
When a low-frequency feature serves high-value users

**Dek**  
Using product data to bring everyday lighting controls forward—then learning that a low-frequency feature, Room, mattered deeply to high-retention users.

### The first signal

**H2**  
Home was not prioritising everyday behaviour

**Body**  
Within the Engagement phase of HEART, changing colour was the most-used action. App Store feedback also pointed to a need to change the colour of several lights at once.

Room, meanwhile, was visible directly on Home but was created and opened less often.

### The initial decision

**H2**  
Bring multi-light colour control forward

**Body**  
Quick Mode was added so users could change the colour of all lights at once. Room was moved into More options on Home, keeping it available without giving it equal priority to frequent controls.

### Clear system feedback

**H2**  
Make light states easier to understand

**Body**  
The interface makes light error states explicit, based on the states and requirements defined with Engineering. This gives the product a clearer implementation model while helping users understand what is happening with a light.

### What the test revealed

**H2**  
Frequency did not equal value

**Body**  
After the test went live, user retention and pay rate on Home both declined. Further analysis showed that Room users had high retention: a feature used less often was still valuable to a loyal group of users.

Moving Room into a harder-to-find location had made Home less effective for those users.

### The correction

**H2**  
Restore Room to Home

**Body**  
Room was moved back to its original, visible position on Home so that high-retention users could access it directly again.

After this correction, retention stabilised back at its previous level.

`[Placeholder: final Home screen with Room restored in its original position]`

### Closing

**H2**  
Look beyond the most-used action

**Body**  
The team learned not to make a product decision from a narrow view of a single metric. Home needs to be evaluated from multiple, deeper perspectives—including the value a feature creates for returning users.

## Role and scope

- Reviewed product data and informed the product decision.
- Designed the UI flows, including Quick Mode, Room placement and light error states.
- Prepared the handoff for Engineering/Developer implementation.

## Asset plan

### R1 — Behaviour evidence

```text
[IMAGE PLACEHOLDER — REQUIRED]
Type: redacted analytics chart or ranked-action view.
Show: colour change as the most-used action; Room created/opened less often.
Do not show a numeric claim until it is confirmed for public use.
Placement: “The first signal”.
Alt text: “Product analytics comparing engagement with colour change and Room actions.”
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
[IMAGE PLACEHOLDER — REQUIRED]
Type: same-scale, cropped Home screen comparison.
Before: Room visible as a primary section on Home.
After: frequent controls surfaced; Room contained in More options.
Placement: immediately after “The initial decision”.
Alt text: “Before-and-after SmartHue Home screens showing Room moved from the main view into More options.”
```

### U2 — Quick Mode

```text
[IMAGE PLACEHOLDER — REQUIRED]
Type: one clear UI flow or paired screens.
Show: entry to Quick Mode and changing colour for all lights together.
Placement: “Bring multi-light colour control forward”.
Alt text: “SmartHue Quick Mode for changing the colour of all lights at once.”
```

### U3 — Light error state

```text
[IMAGE PLACEHOLDER — REQUIRED]
Type: one representative final UI state.
Show: a clear light error status and its available action, if applicable.
Placement: “Make light states easier to understand”.
Alt text: “SmartHue interface communicating a light error state.”
```

### R3 — Test outcome and follow-up insight

```text
[IMAGE PLACEHOLDER — REQUIRED]
Type: redacted test-result chart followed by a segmented retention view.
Show: A/B-test results over one month—retention and Home pay rate declined after the tested change; Room users showed high retention.
Do not show exact numbers until confirmed for public use.
Placement: “What the test revealed”.
Alt text: “Test results showing declining retention and Home pay rate, alongside analysis showing high retention among Room users.”
```

### U4 — Final Home state

```text
[IMAGE PLACEHOLDER — REQUIRED]
Type: final Home UI screen.
Show: Room restored to its original visible position on Home.
Placement: “Restore Room to Home”.
Alt text: “Final SmartHue Home screen with Room displayed directly on the main Home view.”
```

### R4 — Recovery result

```text
[IMAGE PLACEHOLDER — OPTIONAL]
Type: redacted retention trend.
Show: retention stabilising back at its previous level after Room was restored to Home.
Do not show exact numbers until confirmed for public use.
Placement: “Restore Room to Home”.
Alt text: “Retention trend returning to its previous level after Room was restored to the SmartHue Home screen.”
```

## Cần xác nhận trước khi chốt / bàn giao dev

1. Số liệu cụ thể được phép công khai: action đổi màu, Room được mở/tạo, retention, Home pay rate, retention của Room users, và retention sau khi Room trở lại Home.
2. “Quick Mode” có đúng là tên hiển thị trong sản phẩm không? Nếu có, vui lòng gửi flow hoặc Figma link/screenshot.
3. Light error states cụ thể gồm những state nào, và user có thể thực hiện action gì ở từng state?
4. Limit nào kích hoạt paywall ở Home? Chỉ cần xác nhận nếu muốn đưa cơ chế này vào public copy; nếu không, portfolio sẽ chỉ nói “Home pay rate”.

## Ghi chú triển khai cho developer

- Chưa implement như một case study hoàn chỉnh cho đến khi các mục “Cần xác nhận” được chốt.
- Giữ public copy dưới khoảng 300–350 từ, không tính caption.
- Không mô tả Room là bị xoá; diễn đạt đúng là Room vẫn tồn tại trong **More options** trên Home.
- Không nói Quick Mode là multi-room control. Dữ kiện hiện có chỉ xác nhận đổi màu toàn bộ đèn cùng lúc.
- Không tự diễn giải nguyên nhân kỹ thuật của error states hoặc thêm các loại lỗi không do người dùng cung cấp.
- Không trình bày việc đưa Room vào More options là giải pháp cuối cùng/thành công; đây là thay đổi được test và cho kết quả retention cùng Home pay rate giảm.
- Keep all metrics as visible placeholders until the user supplies approved numbers. Analytics screenshots may be used once supplied and redacted as needed.
