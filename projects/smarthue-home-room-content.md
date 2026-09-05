---
title: "When a low-frequency feature serves high-retention users"
slug: "smarthue-home-room-prioritisation"
product: "SmartHue"
status: "draft — analytics assets and metric definitions pending"
target_page: "projects/smarthue-home-room.html"
---

# SmartHue Home / Room — content handoff

> This is a draft. The public narrative uses only confirmed project facts. Items under **Cần xác nhận** must not be presented as established evidence.

## Đã xác nhận

- This case belongs to the Engagement phase of the HEART framework.
- In the original Home, changing colour was the most-used light-control action, ahead of on/off and brightness. App Store feedback requested changing the colour of several lights at once.
- The one-month A/B test combined two changes: Quick Mode was added to change the colour of all lights at once, and Room moved from Home into More options.
- Quick Mode accounted for 64% of recorded Home actions during the test.
- D1 retention was 12% in the 235-user baseline and 9.6% in the 228-user Variant A.
- The Home-banner in-app purchase rate decreased by 1.4 percentage points during the test.
- New users who created a Room within 24 hours had W1 retention of 19.4%, compared with 9.4% among users who did not.
- Before the test, Room creators returned to use every measured core Home control at higher rates than non-creators.
- User reports that overall use of the main core controls declined in the test; detailed event-level values are pending.
- The immediate recovery version restored Room directly on Home, deferred Quick Mode, and retention returned to slightly above the 12% baseline.
- Personal role: reviewed product data to inform the product decision, designed UI flows, and prepared handoff for Engineering/Developer.

## Gợi ý biên tập: luận điểm chính

Room frequency alone was not enough evidence to lower its prominence. The Room-creator cohort was associated with both higher W1 retention and higher return use of core Home controls. The A/B variant changed both Quick Mode and Room placement, so it cannot isolate causality. The immediate decision was to restore Room and defer Quick Mode.

Do not describe this cohort as `high-value users` until a public, confirmed business-value definition exists. `High-retention, high-core-control-engagement users` is supported by the available data.

## Recommended public case copy

### Hero

**Eyebrow:** SmartHue · Engagement

**Title:** When a low-frequency feature serves high-retention users

**Dek:** An A/B test combined Quick Mode with a less visible Room entry. The results showed why frequency alone was not enough to deprioritise Room.

### 01 · The first signal

**Heading:** Home was not prioritising everyday behaviour

GA4 data from the original Home showed that changing colour was the most-used light-control action—ahead of turning lights on or off and adjusting brightness. App Store feedback also pointed to a need to change the colour of several lights at once.

Room, meanwhile, was visible directly on Home but was created and opened less often.

### 02 · The initial decision

**Heading:** Make room for multi-light colour control

The test variant added Quick Mode so users could change the colour of all lights at once. To make Home cleaner and create space for this new control, Room was moved into More options. Room remained available; it was not removed.

**Tested change:** Quick Mode was added while Room moved into More options. These changes were tested together.

### 03 · What the test revealed

**Heading:** The combined variant showed a trade-off

During the one-month test, Quick Mode accounted for 64% of recorded Home actions. In the same variant, D1 retention was 9.6%, compared with 12% in the baseline. The Home-banner in-app purchase rate decreased by 1.4 percentage points during the test.

Before the test, new users who created a Room returned to use core Home controls at higher rates than users who did not: individual-light control (8.3% vs 1.6%), all-lights on/off (7.85% vs 1.66%), individual-light brightness (5.42% vs 0.98%), all-lights brightness (5.28% vs 1.08%), and colour change (6.99% vs 1.28%). The same Room-creator cohort also showed higher W1 retention (19.4% vs 9.4%). These are associations, not causal proof.

The observed key-event rate was lower for all four tracked core controls in the variant.

| Core control | Baseline key-event rate | Variant A key-event rate | Relative change vs baseline |
|---|---:|---:|---:|
| All-lights on/off | **14%** | **12%** | **−18%** |
| All-lights brightness | **12%** | **11%** | **−8%** |
| Single-light brightness | **8.9%** | **8.3%** | **−6.7%** |
| Single-light on/off | **13%** | **13%** | **−3.6%** |

Rates are rounded for display. The observed pattern was directionally lower across all four tracked controls, but was not statistically conclusive.

The variant combined adding Quick Mode with moving Room into More options. It did not isolate the effect of either change. Low Room frequency alone was therefore not enough evidence to hide it in order to make Home cleaner or free space for Quick Mode.

### 04 · The correction

**Heading:** Restore Room before introducing Quick Mode

The immediate recovery version restored Room to a visible position on Home. Quick Mode was not included in this version and was deferred to a later release.

Retention returned to slightly above the 12% baseline after Room was restored. The available result supports the decision to keep Room visible, but does not prove that Room placement alone caused the recovery.

### 05 · Closing

**Heading:** Frequency alone is not a prioritisation rule

Quick Mode showed strong use within the test. Before the test, Room creators also returned to use every measured core Home control at higher rates and showed higher W1 retention. Because the experiment changed both Quick Mode and Room placement, these signals could not isolate a cause. The immediate decision was to restore Room on Home and defer Quick Mode, rather than use low Room frequency as the basis for hiding it.

## Role and scope

- Reviewed product data and informed the product decision.
- Designed the UI flows for Quick Mode and Room placement.
- Prepared the handoff for Engineering/Developer implementation.

## Asset plan

| ID | Status | Placement | Required asset and alt text |
| --- | --- | --- | --- |
| R1 | Placeholder | 01 · The first signal | Redacted GA4 breakdown of colour, on/off and brightness actions on original Home. Alt: `Original Home analytics comparing colour, on and off, and brightness controls.` |
| R2 | Placeholder | 01 or 02 | Redacted App Store feedback requesting colour changes for several lights together. Alt: `App Store feedback requesting a way to change the colour of multiple lights at once.` |
| U1 | Supplied | 02 · The initial decision | Before/test Home comparison showing Room moved into More options and Quick Mode added. Alt: `Before-and-test SmartHue Home screens showing Room moved from the main view into More options while Quick Mode was added.` |
| R3 | Placeholder | 03 · What the test revealed | Redacted A/B D1 retention and Home-banner in-app purchase-rate result with metric definitions. Alt: `One-month Home test results showing baseline and variant D1 retention and Home-banner in-app purchase rate.` |
| R4 | Placeholder | 03 · What the test revealed | Redacted pre-test cohort table/chart for return use of all five core controls and W1 retention. Alt: `Pre-test comparison of Room creators and non-creators returning to use core Home controls.` |
| U2 | Placeholder | 04 · The correction | Recovery Home screen with Room visible directly on Home and no Quick Mode. Alt: `Recovery SmartHue Home screen with Room restored to the primary navigation and without Quick Mode.` |
| R5 | Placeholder | 04 · The correction | Redacted retention trend after recovery. Alt: `Retention trend after Room was restored in the recovery version while Quick Mode was deferred.` |

## Ghi chú triển khai cho developer

- Section order: Hero → first signal → initial decision → test result → correction → closing.
- Keep Room described as moved into More options, never removed.
- Do not show the current `home-final.png` as recovery evidence if it contains Quick Mode; use the U2 placeholder until the corrected visual is supplied.
- Use a text/table presentation for R4 rather than calculating uplift, significance, or causality.
- Do not display the core-control decline as a quantified result until event definitions, baseline/variant values, and measurement window are confirmed.

## Cần xác nhận

1. Definition, event list, population, and measurement window for `recorded Home actions` and the reported decline of core-control use in the variant.
2. Randomisation method and significance/confidence method for the A/B test.
4. Sample size, period, event definitions, and statistical interpretation for the Room-creator cohort.
5. Recovery measurement period and the exact retention value/analytics asset permitted for public use.
6. Whether App Store feedback may be included in redacted form.
7. A business-value definition and evidence, if `high-value` is to be used publicly.
