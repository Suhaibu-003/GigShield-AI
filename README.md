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

