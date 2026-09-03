# Portfolio case-study asset checklist

> Mục tiêu: chuẩn bị asset theo đúng vị trí đang có trên portfolio. Những mục `Required` nên ưu tiên trước; `Optional` chỉ bổ sung khi còn thời gian.

## 1. SmartHue — Automatic connection

### Đã có trong project

- Old Bridge: device list và physical button flow.
- New Bridge: `Press The Button` flow.
- BLE: `Connecting to Hue color lamp` flow.
- BLE recovery screens: `No Light Found` và `Connection Timed Out`.

### Còn cần bổ sung

| Priority | Asset | Vị trí | Ghi chú |
| --- | --- | --- | --- |
| Required | GA4 connection funnel/chart | The problem | Redact dữ liệu nhạy cảm; highlight drop-off ở manual device selection. Không thêm % nếu chưa chốt public. |
| Recommended | Compact BLE recovery strip | Recovery states | Có source file sẵn; cần quyết định có render vào case hay không. |
| Optional | Connection success screen | Outcome | Crop bỏ paywall/monetization nếu có. |
| Optional | Hero visual | Hero | Có thể bỏ hoàn toàn nếu không có artwork phù hợp. |

## 2. SmartHue — Home / Room

| Priority | Asset | Vị trí | Ghi chú |
| --- | --- | --- | --- |
| Required | Redacted analytics: colour-change vs Room engagement | The first signal | Cho thấy colour change được dùng nhiều, Room mở/tạo ít hơn. |
| Optional | Redacted App Store feedback | The first signal | Feedback về đổi màu nhiều đèn cùng lúc. |
| Required | Before/After Home screens | The initial decision | Cùng scale/crop: Room trên Home → Room trong More options. |
| Required | Quick Mode flow | The initial decision | Entry point và đổi màu toàn bộ đèn. |
| Required | Representative light error state | Clear system feedback | Một final state cùng action mà user có thể thực hiện. |
| Required | Redacted one-month A/B result + Room-user segment | What the test revealed | Retention, Home pay rate và retention segment Room user. Giữ % pending nếu chưa chốt public. |
| Required | Final Home screen | The correction | Room đã trở lại vị trí hiển thị trực tiếp trên Home. |
| Optional | Retention recovery trend | Sau The correction | Retention ổn định về mức cũ. |

## 3. SmartHue — Control-experience survey

### Lưu ý

- Số 82.17% và ~9.4 actions/user được dẫn nguồn GA4 trong copy, nhưng **không dùng screenshot analytics công khai**.

| Priority | Asset | Vị trí | Ghi chú |
| --- | --- | --- | --- |
| Optional | Audience selection diagram | Audience | Successfully connected users → Premium users → survey. |
| Required | Trigger flow/screenshot | Trigger | Session 2 sau khi purchase. |
| Required | Survey branch flow/screens | Survey structure | Ease rating → Happy / Not Happy và các màn hình chính. |

## 4. Zalo — Online teaching concept

### Asset source

- Wireframe trong original UXFoundation case được phép dùng.

| Priority | Asset | Vị trí | Ghi chú |
| --- | --- | --- | --- |
| Optional | Compact research synthesis | The challenge | Tương tác online, feedback trực tiếp và preparation effort. |
| Required | Lesson-template flow | Lesson preparation | Lesson inputs → template options → edit/save. |
| Required | In-class activity dashboard | Participation | Student interaction counts, ranking và request action. |
| Required | Class-goal/progress flow | Shared goal | Set target → progress bar → reward. |

## 5. Katalon Academy — Learning experience concept

### Asset source

- Wireframe trong original Product Management Challenge case được phép dùng.

| Priority | Asset | Vị trí | Ghi chú |
| --- | --- | --- | --- |
| Optional | Research synthesis | The learning gap | Hands-on practice, timely support, community connection. |
| Required | Practice Space flow | Practice Space | Case list/filter → case detail/submission → result + next cases. |
| Required | Solution Hub flow | Solution Hub | Ask beside a chapter → AI/community answers → escalate to Community. |

## 6. V9Snap Android

| Priority | Asset | Vị trí | Ghi chú |
| --- | --- | --- | --- |
| Required | Original edit → save → monetization funnel | Following the funnel | Current page is a placeholder. |
| Required | Before/After flow and final UI | Design direction | Cần thể hiện screen-level change đã được approved. |
| Recommended | Evidence supporting outcome metrics | Team outcome | Chỉ dùng nếu +20% photo-save rate và +4% revenue contribution được phép public. |

## 7. Feature Decision mini-case

| Priority | Asset | Vị trí | Ghi chú |
| --- | --- | --- | --- |
| Required | Approved feature context | Hero / context | Tên/loại feature và phạm vi được phép public. |
| Required | Analytics/evidence artifact | Analysis framework | Exposure → discovery → adoption → repeat usage, dựa trên dimension thực tế đã dùng. |
| Required | Final team decision/outcome | Closing | Chỉ bổ sung khi đã có dữ kiện được phép public. |

## Chuẩn bị nhanh nhất trước

1. SmartHue Home: Before/After Home, Quick Mode, final Room-on-Home screen.
2. Katalon: Practice Space và Solution Hub wireframes.
3. Zalo: ba wireframe flow.
4. SmartHue Connection: GA4 funnel và success/recovery screens.
5. SmartHue Survey: trigger + survey branch screens.

## Quy cách gửi asset

- Ưu tiên PNG/JPG crop sẵn, không có toolbar Figma/Notion.
- Gửi từng flow theo thứ tự đọc trái → phải hoặc trên → dưới.
- Với analytics, redact tên user/ID/dữ liệu nhạy cảm trước.
- Nếu chưa crop được, chỉ cần gửi source/Figma link; mình sẽ ghi rõ crop cần dùng cho agent code.
