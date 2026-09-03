---
title: "Keeping feedback close to the control experience"
slug: "smarthue-control-experience-survey"
product: "SmartHue"
status: "draft — content structure confirmed; UI assets pending"
target_page: "projects/smarthue-control-survey.html"
---

# SmartHue control-experience survey — developer handoff

## Implementation rules

- This is a **new case study**. Create a new page and portfolio card from `slug`; do not reuse or overwrite an existing SmartHue project page.
- Implement sections in the order below. Keep the public copy concise.
- Use only the supplied copy, facts and metrics. Do not add findings, user quotes, product outcomes or technical claims.
- Missing visual assets must render as a grey block containing the exact label `Content image placeholder` and a short asset description. Do not create replacement mockups or illustrations.
- All screenshots/data may be added later. Preserve the placement and alt-text notes below.

## Project summary

SmartHue supports smart-light control across Philips Hue, LIFX, Tuya and Matter. This research focused only on the experience **after a user has successfully connected their lights**—not onboarding or connection setup.

**Research goal**  
Understand whether connected users can control lights easily, reliably and as intended; identify the factors with the greatest impact so the team can prioritise improvements to light controls.

**Scope**  
UX/UI and technical factors affecting light control.

## Role and scope

- Reviewed GA4 evidence to confirm exposure to the core control experience.
- Defined the final survey audience and trigger logic.
- Designed the survey structure, Happy / Not Happy branches and tracking strategy.

## 1. Hero

**Eyebrow**  
SmartHue · Product research

**H1**  
Keeping feedback close to the control experience

**Dek**  
I designed a control-experience survey for Premium SmartHue users, simplifying its trigger so feedback stayed close to the question the team needed answered: can people control their lights easily, reliably and as intended?

## 2. Confirm the core experience is reached

**H2**  
Most connected users reached light control quickly

**Body**  
Before defining the survey audience, GA4 was used to check whether successfully connected users reached the core control experience. In the same session, 82.17% performed at least one light-control action. The first session averaged around 9.4 control actions per user.

These metrics were supporting evidence—not trigger rules. They indicated users could build meaningful control experience quickly.

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

**Visual**

```text
[Content image placeholder]
Optional asset: simple final-audience diagram.
Content: Successfully connected users → Premium users → control-experience survey.
Placement: after this section.
Alt text: “Audience selection diagram for the SmartHue control-experience survey.”
```

## 5. Simplify the trigger around the research goal

**H2**  
Session 2 after subscription

**Body**  
Early trigger ideas relied on multiple rules, such as numbers of control actions, repeat sessions, anti-spam timing, safe actions and fallback logic. That logic became more complex than the research goal.

The final rule was deliberately simple: show the survey in the user’s second session after subscription. By then, the user had enough control experience, was past the free limit, and could still recall the early premium experience.

**Trigger sequence**

```text
User purchases subscription
↓
Session 1 after purchase
↓
Uses SmartHue normally
↓
Session 2 after purchase
↓
Show control-experience survey
```

**Visual**

```text
[Content image placeholder]
Required asset: survey-trigger flow or final trigger-logic screenshot.
Placement: alongside the trigger sequence.
Alt text: “Survey trigger shown in the user’s second session after purchase.”
```

## 6. Capture satisfaction, causes and next steps

**H2**  
One survey, two diagnostic paths

**Body**  
The first question asks how easy light control has been, on a five-point scale. Ratings 4–5 enter the Happy flow; ratings 1–3 enter the Not Happy flow.

The Happy flow identifies what worked well and which feature users want next. The Not Happy flow identifies the main difficulty, what users did next, and their feature request. Both flows accept free-text feedback through `Other`.

**Survey content**

| Step | Happy flow | Not Happy flow |
| --- | --- | --- |
| Q1 | How easy has it been to control your lights so far? (1 = Very difficult, 5 = Very easy) | Same entry question |
| Q2 | What worked well? | What caused the most difficulty? |
| Q3 | What feature would you like us to add next? | What did you do next? |
| Q4 | — | What feature would you like us to add next? |

**Positive drivers**  
Understand light status; Turn On/Off; Change brightness; Change light color; Visual design; Fast response; Stable connection; Reliable control; Other.

**Main difficulties**  
Finding the right light; Turning lights on and off; Adjusting brightness or color; Visual design; Slow response; Connection problems; Controls not working as expected; Other.

**Recovery behaviours**  
Tried again; Waited for a response; Reopened the app; Reconnected the light; Used another control method; Couldn’t complete the task.

**Feature-demand options**  
Control from anywhere; Alexa; Siri / Apple Intelligence; Automations; Scenes & effects; Widgets; Other.

**Visual**

```text
[Content image placeholder]
Required asset: Happy / Not Happy survey branching flow, including key question screens.
Placement: after the survey-content table.
Alt text: “SmartHue control-experience survey branching from an ease rating into Happy and Not Happy paths.”
```

## 7. Track decision points, not every interaction

**H2**  
Keep measurement focused

**Body**  
Tracking captures progression points rather than each individual chip tap: `survey_view`, `click_continue_button`, `click_submit_button` and `click_close_button`.

Key parameters include rating, path, selected factor, recovery action, feature request, step, connection type and trigger context. Free-text `Other` is stored as a string parameter for review in a backend, BigQuery or feedback system—not as a standard GA4 custom dimension because its cardinality is high.

## 8. What the survey makes measurable

**H2**  
Turn feedback into product signals

**Body**  
Post-launch, the team can monitor survey completion, dismissal and step drop-off; average ease score, Happy rate and Not Happy rate; positive drivers, pain points and recovery behaviours; and feature demand.

Responses can be broken down by Philips Hue, LIFX, Tuya and Matter. Feature demand can also be compared between Happy and Not Happy respondents, separating requests for expanded capability from possible workarounds for a poor experience.

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
- Recovery-behaviour distribution
- Feature-demand distribution
```

## 9. Learning

**H2**  
The trigger should serve the research goal

**Body**  
The key learning was to stop optimising behavioural-trigger logic when it began to drift away from the research goal. A simpler trigger—Session 2 after subscription—created a cleaner sample and a simpler implementation while keeping the feedback relevant to early premium light control.

## Asset list

| ID | Asset | Placement | Alt text |
| --- | --- | --- | --- |
| R1 | No public visual — cite GA4 in copy only | Section 2 | N/A |
| R2 | Audience-selection diagram | Section 4 | Premium survey audience. |
| R3 | Trigger flow or implementation screen | Section 5 | Survey shown in Session 2 after subscription. |
| U1 | Happy / Not Happy survey branch | Section 6 | Survey flow based on ease rating. |

## Developer notes

- Render each missing asset as the specified grey `Content image placeholder` block. Do not generate alternative visuals.
- Build the trigger sequence as accessible HTML text/steps; it is content, not an asset replacement.
- The survey table must scroll horizontally or stack accessibly on small screens.
- Display code-like event names and formulas in a readable monospace style, without turning the metric list into a code-heavy section.
- Do not include unsupported metric outcomes; this case defines the research and measurement design, not findings after launch.
- GA4 is the data source for the figures in Section 2, but analytics screenshots must not be used publicly.
- There are no post-launch results yet. Keep Section 8 as a measurement plan; do not imply that results have been collected.

## Cần xác nhận

1. UI asset/screenshot cho trigger logic và survey flow sẽ được bổ sung sau. Giữ các placeholder cho đến lúc đó.
