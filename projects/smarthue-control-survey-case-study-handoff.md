---
title: "Keeping feedback close to the control experience"
slug: "smarthue-control-experience-survey"
product: "SmartHue"
status: "shipped to production — data collection in progress"
target_page: "projects/smarthue-control-experience-survey.html"
---

# SmartHue control-experience survey — developer handoff

## Implementation rules

- This handoff updates the existing Survey case study and portfolio card at `target_page`.
- Implement sections in the order below. Keep the public copy concise.
- Use only the supplied copy, facts and metrics. Do not add findings, user quotes, product outcomes or technical claims.
- Use the supplied production UI assets at the placements below. Do not create replacement mockups or illustrations.

## Project summary

SmartHue supports smart-light control across Philips Hue, LIFX, Tuya and Matter. This research focused only on the experience **after a user has successfully connected their lights**—not onboarding or connection setup.

**Research goal**  
Understand whether connected users can control lights easily, reliably and as intended; identify the factors with the greatest impact so the team can prioritise improvements to light controls.

**Scope**  
UX/UI and technical factors affecting light control.

## Role and scope

- **Role:** Product Designer.
- **Owned:** GA4 analysis, survey audience and trigger logic, survey UX/UI, Happy / Not Happy branches and tracking strategy.
- **Delivery:** Prototype, handoff and build validation.
- **Collaboration:** Worked with PM and Engineering, with directional review from a peer designer.

## 1. Hero

**Eyebrow**  
SmartHue · Product research

**H1**  
Keeping feedback close to the control experience

**Dek**  
I designed a control-experience survey for Premium SmartHue users, simplifying its trigger so feedback stayed close to the question the team needed answered: can people control their lights easily, reliably and as intended?

**Status**
Shipped to production · Data collection in progress.

**Case brief**
- Role: Product Designer
- Owned: GA4 analysis, survey UX/UI, trigger and tracking
- Delivery: Prototype, handoff and build validation
- Collaboration: PM, Engineering and peer design review

## 2. Establish the product context

**H2**  
After six months of shipping, it was time to listen

**Key points**
- **Product cycle:** After six months of continuously shipping features and optimising both product and monetisation flows, the team entered the final stage of its HEART-based product cycle: understanding user Happiness.
- **Year-end opportunity:** Before prioritising the rest of the year, we needed to pause and listen—especially ahead of the festival period, when the light-control product had greater opportunity to grow.
- **Research question:** Can people control their lights easily, reliably and as intended?

**Supporting evidence · GA4**
- **82.17%** of successfully connected users performed at least one light-control action in the same session.
- The first session averaged approximately **9.4 control actions per user**.
- These figures confirmed exposure to the core experience; they were not used as trigger rules.

**Source note**  
The figures in this section come from GA4. Do not use an analytics screenshot or visual on the public page.

## 3. Reframe around the ultimate goal

**H2**  
Stop searching for a perfect moment

**Body**  
The early work became focused on finding a “perfect” survey moment through control counts, sessions, anti-spam timing, safe actions and fallback rules. The trigger research was becoming deeper than the ultimate goal.

The goal was not to build the most complex trigger. It was to collect reliable feedback about light control. That meant first identifying the right audience, then choosing a simple moment to ask them.

## 4. Narrow the audience to reduce noise

**H2**  
Ask users who can experience control without a paywall interruption

**Body**  
The survey targeted Premium users. They had shown greater commitment, could control lights repeatedly, and were not interrupted by the free-usage limit or paywall. This kept the feedback focused on the light-control experience rather than monetisation friction.

## 5. Simplify the trigger around the research goal

**H2**  
Session 2, after the second control action

**Body**  
- **Eligible audience:** Premium users in their second session after purchase.
- **Automatic trigger:** Show the survey after the second qualifying light-control action in that session.
- **Qualifying actions:** On/Off, Brightness or Color.
- **No automatic fallback:** If the condition is not met before the user leaves, do not trigger the survey in Session 3.
- **Voluntary access:** Keep the survey available in Settings so users can share feedback at any time.

**Trigger sequence**

```text
User purchases subscription
↓
Session 2 after purchase
↓
First qualifying control action
↓
Second qualifying control action
↓
Show the survey
```

**Boundary note**
No automatic Session 3 fallback · Survey remains available in Settings.

**Visual**
- Asset: `projects/assets/smarthue/survey-settings-entry.png`
- Placement: after the trigger sequence and boundary note.
- Caption: `Voluntary path` / `Feedback remains available in Settings`.
- Alt text: “SmartHue Settings entry inviting a Premium user to take a short control-experience survey.”

## 6. Capture satisfaction, causes and next steps

**H2**  
One survey, two diagnostic paths

**Body**  
Users slide from Very Hard to Very Easy to rate their control experience. Ratings 4–5 enter the Happy path; ratings 1–3 enter the Not Happy path.

Both diagnostic questions include `Other`, which opens a free-text field.

**Survey content**

| Step | Happy path | Not Happy path |
| --- | --- | --- |
| Entry | Slide to rate your control experience. Ratings 4–5. | Same entry. Ratings 1–3. |
| Diagnose | Which controls worked well for you? | What was the biggest difficulty you had? |
| Final question | What feature would you like us to add next? | Were you eventually able to control your lights as intended? |

**Positive drivers**  
Understand light status; Turn On/Off; Visual design; Change brightness; Change light color; Other.

**Main difficulties**  
Understand light status; Turn On/Off; Visual design; Change brightness; Change light color; Other.

**Control-outcome options**
Not at all; Only partly; Yes.

**Feature-demand options**  
Control from anywhere; Alexa voice control; Siri AI / Apple Intelligence; Other.

**Visuals**
- Shared entry: `projects/assets/smarthue/survey-rating.png`
- Happy path: `projects/assets/smarthue/survey-happy-controls.png` → `projects/assets/smarthue/survey-happy-feature.png`
- Not Happy path: `projects/assets/smarthue/survey-not-happy-difficulty.png` → `projects/assets/smarthue/survey-not-happy-outcome.png`
- Placement: shared entry first, then the two branch cards.

## 7. Track decision points, not every interaction

**H2**  
Keep measurement focused

**Body**  
Tracking captures progression points rather than each individual chip tap: `survey_view`, `click_continue_button`, `click_submit_button` and `click_close_button`.

Key parameters include rating, path, selected factor, control outcome, feature request, step, connection type and trigger context. Free-text `Other` is stored as a string parameter for review in a backend, BigQuery or feedback system—not as a standard GA4 custom dimension because its cardinality is high.

## 8. What the survey makes measurable

**H2**  
Turn feedback into product signals

**Body**  
With the survey live, the team is collecting data on completion, dismissal and step drop-off; average ease score, Happy rate and Not Happy rate; positive drivers, pain points, control outcomes and feature demand.

Responses can be broken down by Philips Hue, LIFX, Tuya and Matter. Feature demand comes from Happy respondents; the Not Happy path measures whether users eventually achieved the intended control outcome.

**Metric list**

```text
Survey health
- Completion rate = survey_submit / survey_view
- Dismiss rate = survey_close / survey_view
- Step drop-off = users reaching each survey step

Control experience
- Average ease score = AVG(rating_value)
- Happy rate = ratings 4–5 / total responses
- Not Happy rate = ratings 1–3 / total responses

Diagnostic signals
- Positive-driver distribution
- Pain-point distribution
- Control-outcome distribution
- Feature-demand distribution
```

## 9. Learning

**H2**  
The trigger now serves the research goal

**Body**  
The production release uses a measurable trigger tied to actual light-control use, while keeping voluntary feedback available in Settings. Data collection is still in progress, so this case does not yet claim an impact on response quality or control behaviour.

## Asset list

| ID | Asset | Placement | Alt text |
| --- | --- | --- | --- |
| R1 | No public visual — cite GA4 in copy only | Section 2 | N/A |
| U1 | `survey-settings-entry.png` | Section 5 | Voluntary survey entry in Settings. |
| U2 | `survey-rating.png` | Section 6 | Shared rating entry. |
| U3 | `survey-happy-controls.png`, `survey-happy-feature.png` | Section 6 | Happy survey path. |
| U4 | `survey-not-happy-difficulty.png`, `survey-not-happy-outcome.png` | Section 6 | Not Happy survey path. |

## Developer notes

- Build the trigger sequence as accessible HTML text/steps; it is content, not an asset replacement.
- Present the shared entry first, then the Happy and Not Happy paths as separate responsive cards.
- Visual refinement: each branch occupies a full-width row with a short introduction and two readable screenshots; stack screens below 480px. Put the exact questions in each screen caption and omit the duplicate branch-summary cards.
- Load the Survey stylesheet after the shared case stylesheet. Use neutral token backgrounds for screenshot panels, readable supporting labels, and a horizontal numbered trigger sequence that stacks on mobile.
- Display code-like event names and formulas in a readable monospace style, without turning the metric list into a code-heavy section.
- Do not include unsupported metric outcomes; this case defines the research and measurement design, not findings after launch.
- GA4 is the data source for the figures in Section 2, but analytics screenshots must not be used publicly.
- The survey has shipped to production and data collection is in progress. Do not imply that conclusive results have been collected yet.
