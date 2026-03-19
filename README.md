# GigShield-AI
AI-powered parametric insurance platform that protects gig delivery workers from income loss caused by external disruptions like weather, pollution, and zone closures using a weekly premium model.

Problem Statement

India’s grocery and quick-commerce delivery workers such as Zepto, Blinkit, and Instamart partners depend on daily and weekly earnings for survival. However, external disruptions like heavy rain, floods, extreme heat, severe pollution, and zone closures directly reduce their working hours and income. These workers currently have no safety net for income loss caused by such uncontrollable conditions.

GigShield AI is an AI-powered parametric insurance platform designed to protect grocery delivery partners from loss of income only. It automatically detects external disruption events, validates worker activity, triggers claims, and processes payouts through a simple weekly subscription model.
Chosen Persona
Persona: Grocery / Q-Commerce Delivery Partner

We focus on workers from:
 - Zepto

 - Blinkit

 - Swiggy Instamart

 - BigBasket Quick Commerce

Why this persona?

Quick-commerce delivery workers are highly vulnerable because:

 - They work outdoors continuously

 - Their earnings depend on order volume and active hours

 - Heavy rain, flooding, or pollution immediately affects deliveries

 - These disruptions are frequent in urban Indian cities

Sample Persona Scenario

Ravi is a Blinkit delivery worker in Chennai. During heavy rain and waterlogging, his delivery zone is partially shut down for 4 hours. He loses around ₹350–₹500 in earnings that day. GigShield AI detects this disruption and automatically initiates compensation based on his active weekly policy.

Core Solution

 GigShield AI provides:

 ~ Fast worker onboarding

 ~ AI-based risk profiling

 ~ Weekly premium generation

 ~ Automated disruption monitoring

 ~ Parametric claim triggering

 ~ Fraud-aware claim validation

 ~ Instant payout simulation
 
 Why Parametric Insurance?

Traditional insurance requires manual claim filing, document checks, and long settlement times. That does not work for gig workers.

Parametric insurance works better because:

 ** payout is triggered automatically when predefined conditions occur

 ** no manual paperwork is needed

 ** claim settlement is faster

 ** suitable for recurring short-term disruptions
 
 Weekly Premium Model

Gig workers earn week-to-week, so our platform uses a weekly premium structure.

Sample Weekly Plans

| Plan     | Weekly Premium | Weekly Coverage | Suitable For      |
| -------- | -------------- | --------------- | ----------------- |
| Basic    | ₹29            | Up to ₹400      | Low-risk zones    |
| Standard | ₹49            | Up to ₹800      | Medium-risk zones |
| Plus     | ₹69            | Up to ₹1200     | High-risk zones   |

Premium depends on

 ~ city risk level

 ~ delivery zone history

 ~ rainfall/flood frequency

 ~ pollution exposure

 ~ average active delivery hours

 ~ disruption probability score

 Parametric Triggers

Claims are automatically triggered when disruption thresholds are crossed.

Proposed Triggers

| Trigger Type     | Condition                           | Income Impact             |
| ---------------- | ----------------------------------- | ------------------------- |
| Heavy Rain       | Rainfall above threshold            | Deliveries slow or paused |
| Flood Alert      | Severe waterlogging / flood warning | Zone inaccessible         |
| Heatwave         | Extreme temperature above threshold | Reduced outdoor work      |
| Severe Pollution | AQI beyond safe threshold           | Delivery restrictions     |
| Zone Closure     | Curfew, local closure, strike       | No pickup/drop access     |

Workflow of the Application
Step 1: Worker Onboarding

The user enters:

 - name

 - mobile number

 - city

 - delivery platform

 - delivery zone

 - average weekly working hours

 - preferred payout method

Step 2: AI Risk Profiling

The system analyzes:

 - hyperlocal weather patterns

 - environmental risk

 - historical disruption frequency

 - city-level risk score

Output:

 - risk score

 - recommended weekly plan

 - suggested coverage

Step 3: Policy Creation

 The worker chooses a weekly insurance plan and activates coverage.

Step 4: Real-Time Trigger Monitoring

The system continuously monitors:

 - weather API data

 - AQI data

 - location-based disruption conditions

 - platform activity or mock delivery halt signals

Step 5: Automatic Claim Trigger

When a disruption threshold is met:

 - the policy is checked

 - worker location and activity are validated

 - claim is initiated automatically

Step 6: Fraud Detection

The system checks for:

 - fake location mismatch

 - duplicate claims

 - repeated abnormal claim patterns

 - false disruption claims against historical records

Step 7: Instant Payout

Approved claims are processed to a mock payout channel such as:

 - UPI simulation

 - Razorpay sandbox

 - wallet payout demo

AI/ML Integration Plan
1. Dynamic Premium Calculation

We use AI to predict disruption risk and suggest a weekly premium based on:

 ~ weather frequency

 ~ risk zone

 ~ worker operating area

 ~ claim likelihood

2. Fraud Detection

We use anomaly detection to flag suspicious claims such as:

 ~ GPS spoofing

 ~ duplicate payout attempts

 ~ claims made from unaffected zones

3. Predictive Analytics

Admin dashboard can forecast:

 ~ likely claim-heavy zones next week

 ~ expected payout load

 ~ most disruption-prone areas

 ~ Platform Choice

We choose a mobile-first web platform because:

 ~ delivery workers mostly use smartphones

 ~ onboarding is easier on mobile

 ~ location and policy checking are faster

 ~ hackathon implementation is easier with web technologies

Tech Stack
Frontend
- React.js
- Tailwind CSS

Backend
 - Node.js
 - Express.js
   
Database
 - MongoDB

AI/ML
 - Python
 - Scikit-learn
   
APIs
 - OpenWeather API or mock weather API
 - AQI API or mock data
 - Google Maps / geolocation mock
 - platform activity simulation
   
Payment Simulation
 - Razorpay test mode / mock UPI flow

Development Plan for Phase 1
Week 1
 - finalize persona
 - define disruption triggers
 - design workflow
 - prepare architecture
 - create GitHub repository
 - write README
Week 2
 - create low-fidelity prototype or UI screens
 - prepare 2-minute presentation video
 - define data flow for AI premium and fraud model
 - finalize submission
   
Expected Impact

GigShield AI helps delivery workers by:
 - protecting weekly earnings
 - providing faster claim support
 - reducing paperwork
 - increasing trust and financial stability

It also benefits insurers by:
 - reducing claim processing effort
 - using automation for scale
 - improving fraud control
 - creating a new micro-insurance model for gig workers

##  Adversarial Defense & Anti-Spoofing Strategy

### 1. Differentiation: Genuine Worker vs Spoofed User

GigShield AI does not rely solely on GPS data, as it can be easily spoofed. Instead, we use a multi-layer AI-based verification system to distinguish between genuine delivery partners and fraudulent actors.

Our system analyzes:

- **Movement Patterns**  
  Genuine delivery partners exhibit natural movement (routes, stops, varying speeds), while spoofed users often show static or unrealistic location behavior.

- **Delivery Activity Correlation**  
  We verify whether the user is actively accepting or completing deliveries during the disruption period. A lack of activity combined with a claim raises a fraud signal.

- **Environmental Consistency Check**  
  If a user claims to be in a disruption zone (e.g., heavy rain), we validate whether nearby users and external data sources report similar conditions.

- **Behavioral History (AI Profiling)**  
  Each user has a behavioral profile. Sudden abnormal patterns such as repeated claims or high-value claims increase the fraud probability score.

---

### 2. Data Points Used Beyond GPS

To detect sophisticated fraud (including coordinated spoofing attacks), GigShield AI analyzes multiple signals:

- **Device Signals**
  - Device ID consistency
  - Detection of mock location settings
  - App integrity checks

- **Network Data**
  - IP address vs GPS location mismatch
  - Detection of VPN or proxy usage
  - Sudden unrealistic location jumps

- **Behavioral Data**
  - Delivery acceptance and completion rate
  - Active working hours vs claimed disruption time
  - Frequency and pattern of claims

- **Peer Comparison (Swarm Intelligence)**
  - Compare user behavior with nearby delivery partners
  - Identify clusters of suspicious claims from the same area

- **Temporal Patterns**
  - Multiple claims triggered at identical timestamps
  - Repeated claims during high-payout events

---

### 3. UX Balance: Fairness for Honest Workers

GigShield AI ensures fraud detection does not negatively impact genuine workers by implementing a three-tier claim validation system:

####  Low Risk (Auto-Approved)
- Verified movement and consistent data
- Instant payout with zero friction

####  Medium Risk (Soft Flag)
- Minor inconsistencies detected
- Claim is processed with slight delay and passive re-validation

####  High Risk (Hard Flag)
- Strong fraud indicators (e.g., GPS spoofing, abnormal patterns)
- Claim is temporarily held for deeper verification

---

###  Core Principle

> “Trust genuine workers first, verify intelligently in the background.”

Our system prioritizes fast payouts for honest delivery partners while using intelligent, multi-layer verification to detect and prevent fraud without degrading user experience.

---

###  AI Evolution

GigShield AI continuously improves by learning from:
- Past fraud attempts  
- Regional disruption patterns  
- Behavioral anomalies  

This ensures adaptability against evolving spoofing techniques and coordinated fraud attacks.

