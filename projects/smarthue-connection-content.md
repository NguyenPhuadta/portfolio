---
title: "Removing Friction from SmartHue Connection"
slug: "smarthue-automatic-connection"
product: "SmartHue"
case_type: "Product design case study"
status: "draft — requires user confirmation"
language: "en"
target_page: "projects/smarthue.html"
---

# SmartHue automatic connection — content handoff

> This is a draft for discussion. Do not implement it as final portfolio copy while items remain under **Needs confirmation**.

## Recommended public case copy — concise version

> Target length: 400 words maximum, excluding metadata and captions. This is the only long-form copy that should appear in the portfolio; the remaining sections in this file are implementation notes.

### Hero

**Eyebrow:** SmartHue · Device connection

**Title:** Removing friction from smart-light connection

**Dek:** Using GA4 to identify where users dropped after device discovery, then proposing a Bridge and Hue BLE Light journey that begins connection automatically after a user starts a scan.

### The problem

Connecting a light was a critical first step in SmartHue. For Bridge and Hue BLE Light, GA4 showed drop-off after devices were found, in the part of the flow where users reviewed a device list and tapped `Connect`. The data located the drop-off; it did not explain why users left the journey.

The existing flow also required users to recover when no light was found. Whether the additional selection step itself increased connection time or caused drop-off was not verified with user research.

### From data to a product decision

I reviewed the connection funnel in GA4 and proposed removing the manual-selection step after discovery. Users still start a scan with `Scan Now`. When SmartHue finds a supported device, the proposed journey moves directly into connection; the engineering implementation provides the underlying discovery and connection behaviour.

### Designing around the system

Engineering provided the technical states that the connection process could support. I used those states to shape the user journey.

For Bridge, the flow moves from discovery to the required physical action: pressing the button on the Bridge. For Hue BLE Light, the interface shows the model currently being connected, such as `Hue color lamp`. When more than one light is found, SmartHue connects lights one at a time in detection order, avoiding repeated manual selection while keeping progress visible.

The flow also includes clear recovery paths for no device found and connection timeout, both with a `Try Again` action.

### A/B test outcome

In the A/B test, the auto-connect variant was compared with the baseline flow. The experiment observed a connection-success-screen rate of 27% versus 17% for the baseline, a 55% relative difference. The observed in-app purchase rate was 13% versus 6.1%, a 118% relative difference.

### Post-launch funnel performance

The applied automatic-connection flow was compared across matching three-month windows before and after launch. The initial funnel events represent the same connection-flow entry point in both periods.

- **BLE:** scan-to-success increased from **18.46%** to **25.5%** (**+7.04 percentage points** / **+38% relative increase**). The device-found-to-success rate increased from **42.94%** to **46.57%**.
- **Bridge:** scan-to-success increased from **24.05%** to **28.1%** (**+4.05 percentage points** / **+17% relative increase**). The device-found-to-success rate increased from **64.57%** to **77.97%**.
- This before–after comparison is consistent with a less interrupted journey after device discovery. It is not, on its own, causal proof that removing manual selection caused the increase.

### What I’d improve next

> Editorial proposal for the portfolio. These improvements are not shipped outcomes.

- Keep the user in the connection journey until every device detected in their current setup has completed connection, then take them to light controls.
- Add a factory-reset recovery state for incompatible Hue lights, directing users to the official Philips Hue app when a reset is required.

### What I’d monitor after launch

> Measurement plan, not reported results.

- **Connection success rate:** percentage of initiated scans that result in at least one successful device connection.
- **Discovery-to-connection conversion:** percentage of discovered devices that move into a successful connection; compare it with the legacy flow's manual-selection baseline.
- **Time to first successful connection:** time from tapping `Scan Now` to the first connected device.
- **Multi-device completion rate:** percentage of connection sessions in which every detected device is connected before the user reaches controls.
- **Recovery success rate:** percentage of users who successfully connect after `No Light Found`, timeout, or factory-reset guidance.
- **Device-type breakdown:** track each metric separately for Bridge and Hue BLE Light to reveal whether one journey needs further work.

## 1. Case summary

### Eyebrow

SmartHue · Device connection

### Title

Removing Friction from SmartHue Connection

### Short description

Using GA4 to identify where users dropped after device discovery, then proposing a Bridge and Hue BLE Light journey that begins connection automatically after the user starts a scan.

### A/B test outcome summary

Compared with the baseline in an A/B test, the shipped auto-connect variant showed a higher connection-success-screen rate (27% versus 17%) and in-app purchase rate (13% versus 6.1%).

### Post-launch funnel summary

Across matching three-month windows before and after automatic connection was applied, overall scan-to-success increased for BLE from 18.46% to 25.5% and for Bridge from 24.05% to 28.1%. The device-found-to-success rate also increased in both journeys: BLE from 42.94% to 46.57%, and Bridge from 64.57% to 77.97%.

## 2. Suggested page structure

### Section 01 — Overview

#### Heading

Improving a critical setup journey

#### Body copy

GA4 showed drop-off after devices were found, in the step where users reviewed a device list and tapped to continue. The data located this point in the journey but did not explain why users left.

#### Developer notes

- Suggested component: `case-intro`
- Keep this section concise; it establishes the product problem without introducing unconfirmed metrics.
- Suggested supporting asset: overview of the original connection flow.

### Section 02 — Problem

#### Heading

Users could get stuck before connecting a light

#### Body copy

The existing journey created friction in two important moments. If SmartHue could not find a light, the next step was difficult to understand. Even when devices were found, users still had to understand where to tap and manually select a light to continue.

GA4 showed drop-off in the manual-selection part of the journey. It added a decision between discovery and connection, including for users with only one light or one Hue Bridge.

The friction was particularly relevant when two, three or more lights were involved. In the redesigned flow, discovered lights are connected one at a time in detection order.

#### Key friction points

- The experience was unclear when no light was found.
- After a device was found, the action required to continue was not obvious.
- Manually selecting a device added another step to the journey.
- GA4 located drop-off at the manual device-selection step.
- The overall connection process took longer.

#### Evidence

- Source: GA4
- Finding: GA4 located drop-off after device discovery, where users reviewed a device list and selected a light.
- Exact drop-off rate, funnel definition, time period and baseline: pending confirmation.

#### Developer notes

- Suggested component: `problem-section` followed by a two-state comparison or annotated old-flow artifact.
- If screenshots are supplied, label the states as `Device not found` and `Device found / manual selection`.
- Do not add causes, error messages, permission issues or technical limitations unless the user confirms them.

### Section 03 — From data to a product opportunity

#### Heading

Reducing the burden on users

#### Body copy

After reviewing the GA4 funnel, I proposed removing the step where users had to tap and select a discovered light. Removing that interaction led to the automatic-connection direction, which was then taken forward with Engineering.

#### Developer notes

- Suggested component: `evidence-to-opportunity`
- Show the sequence as `GA4 finding → drop-off after discovery → proposal to remove the step → automatic connection direction → Engineering collaboration`.
- It is confirmed that the designer proposed removing manual selection and moving to automatic connection. Do not claim ownership of the underlying detection or connection technology.

### Section 04 — Design direction

#### Heading

Removing the manual selection step

#### Body copy

The user still starts the journey by tapping `Scan Now`. Once a light is found, the redesigned journey begins connection automatically. Instead of asking users to choose a discovered device, the flow carries the connection forward on their behalf.

By removing this manual decision, the new flow reduces friction between device discovery and a successful connection.

For a user with one light or one Hue Bridge, the product can continue without asking them to make an unnecessary selection. This removes an unnecessary decision from the journey.

When two, three or more lights are involved, SmartHue connects them sequentially. The first light detected is connected first, and the device model name is displayed so users can identify the light currently being connected. This removes repeated manual selection while keeping the process visible to the user.

The failure experience followed the technical states provided by Engineering. The design work should therefore be presented as translating supported system states into the user journey, not defining the underlying failure logic.

#### Before and after

| Previous journey | Redesigned journey |
| --- | --- |
| The user starts a device search. | The user starts a device search. |
| A device list appears after discovery. | A discovered device automatically moves into connection. |
| The user has to identify and select the discovered device. | SmartHue detects the device automatically. |
| After tapping `Connect`, a Bridge user still has to press the physical button on the Bridge. | For Bridge, discovery moves directly to the required physical-button step; for Hue BLE Light, SmartHue connects to each detected light sequentially. |
| The user identifies which device to select. | SmartHue displays the device model name so the user can identify the light being connected. |

#### Developer notes

- Suggested component: `flow-comparison`
- Recommended visual order: old flow on the left, automatic flow on the right.
- Highlight the removed manual-selection step rather than inventing a complete screen-by-screen sequence.
- Suggested accessible summary: “The redesigned flow removes manual device selection by detecting and connecting to a device automatically.”
- For multiple lights, visualize the connection as a sequence ordered by device detection.
- Display the device model name as the confirmed device-identification information.
- Only include failure states that Engineering actually provided and the user confirms.

#### Confirmed Bridge flow from Figma

Source: [SmartHue — Bridge flow](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/SmartHue---HuyHL-PhuNH?node-id=21203-21243&t=nfHg1UUOTrsPesPB-4)

1. SmartHue requests permission to find and connect to devices on the local network.
2. The Scan For Devices screen provides a `Scan Now` action.
3. If no device is found, the flow shows `No Device Found` with a `Try Again` action.
4. When a Bridge is found, the flow asks the user to press its physical button.
5. The visual state changes while the Bridge button is being activated and the connection continues.
6. If the user does not press the Bridge button in time, the flow shows `Connection Timed Out` with a `Try Again` action.
7. A successful connection leads to the success sequence and `Bridge Connected!` screen.

This artifact confirms the Bridge-specific states. It does not show the multi-light sequence or device model label described for Hue BLE Light.

#### Confirmed Hue BLE Light flow from Figma

Source: [SmartHue — BLE flow](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/SmartHue---HuyHL-PhuNH?node-id=21203-21242&t=nfHg1UUOTrsPesPB-4)

1. The user selects the Philips Hue Bluetooth connection method.
2. SmartHue requests local-network permission and the user taps `Scan Now`.
3. Once a light is found, the UI moves to `Connecting to Hue color lamp` without showing a device-selection list.
4. The flow has explicit `No Light Found` and `Connection Timed Out` states, each with a `Try Again` action.
5. A successful connection leads to the success sequence and `Hue Light Connected!` screen.

This artifact confirms a device model name in the BLE connection state. It shows one example light; it does not by itself prove the multi-light sequence, which remains documented from the user's project context.

### Section 05 — Outcome

#### Heading

Higher observed success in the auto-connect variant

#### Body copy

In the A/B test, the auto-connect variant showed a higher connection-success-screen rate (27% versus 17%) and in-app purchase rate (13% versus 6.1%) than the baseline.

#### Confirmed qualitative outcomes

- The auto-connect variant showed a higher connection-success-screen rate than the baseline.

### Section 06 — Post-launch funnel performance

#### Heading

More users completed connection after discovery

#### Body copy

Compared matching three-month windows before and after automatic connection was applied. The initial funnel event represents the same connection-flow entry point in both periods. BLE scan-to-success increased from 18.46% to 25.5%; Bridge increased from 24.05% to 28.1%. The device-found-to-success rate also increased for BLE (42.94% to 46.57%) and Bridge (64.57% to 77.97%).

#### Developer notes

- Use two metric cards for scan-to-success: BLE **18.46% → 25.5%**, Bridge **24.05% → 28.1%**.
- Use bullets for the device-found-to-success results and the three-month measurement scope.
- State that the before–after comparison does not by itself establish causation.
- The manual device-selection step was removed from the redesigned flow.

#### Developer notes

- Suggested component: `outcome-section`
- Show qualitative statements only until the exact metrics and measurement context are confirmed.
- Do not connect this case directly to retention or revenue without additional confirmation from the user.

## 3. Asset plan

### Research assets — include

| ID | Asset | Placement | Content requirement | Developer note |
| --- | --- | --- | --- | --- |
| R1 | GA4 funnel or chart | Problem | Show the connection funnel and annotate the drop-off after device discovery. Redact anything confidential. | Use as the primary evidence asset; annotate the selection step rather than adding unsupported numbers. |
| R2 | Simplified old-flow diagram | Immediately below R1 | `Start scan → device list → tap Connect → press the physical Bridge button → connection` | Build this as an accessible HTML/CSS diagram if the GA4 image cannot be published. It is explanatory, not a substitute for R1. |

### UI assets — include

| ID | Asset | Placement | Why it earns a place | Source |
| --- | --- | --- | --- | --- |
| U1 | Old Bridge device-list screen | Before/after comparison, left | The clearest evidence of the removed step: `Device Found: 12`, available devices, and a `Connect` action per device. | [Old Bridge flow](https://www.figma.com/design/950Ol2o3VBJVcbBffiYASR/Storage?node-id=1-1823&t=SxUqqhsg2Qc57xxh-4) |
| U1b | Old Bridge physical-button screen | Before/after comparison, left, immediately after U1 | Confirms that tapping `Connect` was followed by another required step: pressing the physical button on the Bridge. | User-supplied screenshot |
| U2 | New Bridge `Press The Button` state | Before/after comparison, right | The direct counterpart to U1: after discovery, the user moves to the required physical Bridge action without a device list. | [New Bridge flow](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/SmartHue---HuyHL-PhuNH?node-id=21203-21243&t=nfHg1UUOTrsPesPB-4) |
| U3 | New BLE `Connecting to Hue color lamp` screen | Device-identification callout | Shows automatic connection in the BLE path and the visible device model name. | [New BLE flow](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/SmartHue---HuyHL-PhuNH?node-id=21203-21242&t=nfHg1UUOTrsPesPB-4) |
| U4 | New BLE `No Light Found` and `Connection Timed Out` screens | Resilience/edge-state strip | Shows the recovery paths supplied by Engineering and expressed in the UI. Use as a two-screen strip, not full-sized screens. | [New BLE flow](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/SmartHue---HuyHL-PhuNH?node-id=21203-21242&t=nfHg1UUOTrsPesPB-4) |
| U5 | New success screen — choose either Bridge or Hue Light | Outcome | Visually closes the story. Crop before the paywall if feasible, because monetization is not part of this case. | New Bridge or BLE flow |

### UI assets — do not include in the main story

- Do not show both old Bridge and old BLE device-list screens at full size. They repeat the same friction. Use U1 as the hero comparison and only add the other as a small supporting thumbnail if needed.
- Do not include every progress-animation frame. One connecting screen is enough.
- Do not include the paywall or downstream `Home` / color-control destinations; they distract from the connection problem.
- Do not include the initial connection-method chooser unless it is necessary to explain scope. It does not prove the removed-selection decision.

### Recommended image order

1. R1 — GA4 funnel with the manual-selection drop-off annotated.
2. U1 → U1b ↔ U2 — the primary before/after visual for the same Bridge journey.
3. U3 — BLE automation with visible device-model feedback.
4. U4 — error recovery in a compact strip.
5. U5 — connection success.

### Alt text

- U1: “Previous SmartHue Bridge flow showing a list of twelve found devices, each requiring the user to tap Connect.”
- U1b: “Previous SmartHue Bridge flow instructing the user to press the physical button after tapping Connect.”
- U2: “Redesigned SmartHue Bridge flow instructing the user to press the physical button on the Bridge after it is found.”
- U3: “Redesigned SmartHue BLE flow showing automatic connection to a device named Hue color lamp.”
- U4: “SmartHue recovery screens for no light found and connection timeout, each with a Try Again action.”
- U5: “SmartHue confirmation screen showing a successful device connection.”

## 4. Implementation mapping

```text
case-intro
  eyebrow
  title
  short-description
  outcome-summary

problem-section
  heading
  body-copy
  friction-points[]
  old-flow-assets[]

evidence-to-opportunity
  source: GA4 review and Engineering collaboration
  heading
  body-copy

flow-comparison
  heading
  body-copy
  previous-journey[]
  redesigned-journey[]
  supporting-assets[]

outcome-section
  heading
  body-copy
  qualitative-outcomes[]
  quantitative-outcomes[]: pending confirmation
```

## 5. Confirmed information

- The case is about improving SmartHue's device-connection journey.
- The two frequently used device types in scope are Bridge and Hue BLE Light.
- The automatic-connection flow shipped for both Bridge and Hue BLE Light.
- Sequential multi-light connection shipped; the factory-reset state for incompatible lights did not ship.
- Personal contribution covered GA4 analysis, old/new-flow mapping, UI, prototype, handoff, build validation and post-launch analysis.
- PM, Engineering, Marketing and a design mentor supported the work; the mentor acted as a peer providing direction rather than micromanaging the work.
- The user reviewed GA4 data and identified drop-off after device discovery.
- GA4 located drop-off at the step where users selected a discovered light.
- In the legacy Bridge funnel, 64.57% of users who reached `FoundDeviceScr_Show` then reached the success screen; the scan-to-success rate was 24.05%. In the legacy BLE funnel, the corresponding rates were 42.94% and 18.46%.
- The initial legacy and new funnel events both represent the same connection-flow entry point; their event names changed between periods.
- The user proposed removing that manual-selection step and moving to automatic connection.
- The journey was unclear when a light could not be found.
- After a device was found, users could be unsure where to tap next.
- The journey contained friction between device discovery and connection success.
- The GA4 finding led to a discussion with Engineering about changing the connection journey.
- The user starts the scan with `Scan Now`; after discovery, the resulting direction begins connection automatically.
- The redesigned flow removes the point where users manually select a device.
- In the previous Bridge flow, tapping `Connect` was followed by another required step: pressing the physical button on the Bridge.
- When multiple lights are found, SmartHue connects them one at a time in detection order.
- The device model name is shown so the user knows which light is being connected.
- The supplied Figma artifact confirms the Bridge flow: local-network permission, scan initiation, no-device recovery, physical Bridge-button instruction, timeout recovery and success.
- The supplied Figma artifact confirms the BLE flow: method selection, scan initiation, automatic connection to `Hue color lamp`, no-light recovery, timeout recovery and success.
- The failure cases followed technical states supplied by Engineering.
- In the automatic-connection A/B test, the variant showed a 55% higher connection-success-screen rate and a 118% higher in-app purchase rate relative to the baseline.
- The post-launch funnels compare matching three-month windows before and after automatic connection was applied. BLE scan-to-success increased from 18.46% to 25.5%, and device-found-to-success increased from 42.94% to 46.57%. Bridge scan-to-success increased from 24.05% to 28.1%, and device-found-to-success increased from 64.57% to 77.97%.

## 6. Needs confirmation

1. Does `Bridge` specifically mean **Philips Hue Bridge**? Is `Hue BLE Light` the exact public-facing device name to use?
2. What are the exact event/funnel definitions, time range and experiment type behind the connection-success and in-app-purchase results?
3. Are the supplied experiment screenshots approved for public use in redacted or unredacted form?
4. What exact technical failure states did Engineering provide, and what UI or interaction decisions did you make for each state?
5. Did GA4 also identify the specific unclear screens, or did those friction points come from your flow review, testing, user feedback or another source?
6. Which platforms received the shipped redesign?
7. Did Engineering propose the technical detection/connection method after you proposed removing manual selection? Please confirm the wording that most accurately separates your product/design proposal from Engineering's technical contribution.

## 7. Editorial suggestions

> These are storytelling suggestions, not project facts.

- Make the removal of manual device selection the central before/after moment. It is the clearest change supported by the current information.
- Show Bridge and Hue BLE Light side by side only if their original or redesigned journeys materially differ.
- Add exact metrics near the top only after their scope and measurement are confirmed.
- A failure/recovery path would make the case more complete, but it should only be included after the actual behavior is provided.
- Keep broader SmartHue retention and revenue outcomes outside this case unless their relationship to the connection redesign can be supported.
- Position the case around identifying an activation problem with GA4 and collaborating with Engineering to improve it. This is better supported than presenting the work as independent invention of the connection technology.
