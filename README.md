To fulfill the project requirements and integrate your documentation into the existing structure, follow this combined guide. This merges the standard Next.js boilerplate with the specific documentation for **Project Nexus**.

# Project Nexus: The Campus Super-App

This is a [Next.js](https://nextjs.org) project bootstrapped with `create-next-app`, serving as a unified digital ecosystem for campus life.

## 🚀 Getting Started

1. **Install Dependencies**:
```bash
npm install

```


2. **Setup Database**: Ensure your `.env` has a valid `DATABASE_URL` and run:
```bash
npx prisma generate
npx prisma db push

```


3. **Run Development Server**:
```bash
npm run dev

```


Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to see the result.

---

## 🏗️ Core Pillars (The Must-Haves)

To qualify for evaluation, this prototype integrates four foundational modules:

### 1. The Daily Pulse

Real-time campus information at your fingertips.

* 
**Live Mess Menu**: Dynamic display of daily meals.


* 
**AI Mail Summarizer**: Uses NLP to convert lengthy college emails into one-sentence action items.



### 2. The Student Exchange

A collaboration hub for the campus community.

* 
**Lost & Found**: Report and match missing items.


* 
**Marketplace**: Unified platform for buying/selling textbooks, electronics, and furniture.


* 
**Travel Sharing**: Cab-pool coordinator for common student destinations.



### 3. The Explorer’s Guide

Discover and navigate the local ecosystem.

* 
**Nearby Hub**: Curated directory of attractions and student-rated "vibes".


* 
**Navigate Smarter**: Smart building/room finders and accessibility routing.



### 4. The Academic Cockpit

Your command center for academic success.

* 
**Live Timetable**: Customizable schedules with real-time updates for class changes.


* 
**LMS Lite**: Portal for instructors to post assignments and students to track grades.



---

## 🛠️ Technical Implementation

### Stack

* **Frontend**: Next.js (App Router) with Geist font optimization.
* **Backend**: Next.js API Routes (e.g., `/api/academic/enroll`).
* **Database**: PostgreSQL with Prisma ORM.
* **AI**: OpenAI Adapter for intelligent summarization tasks.

### Database Schema

The schema defines a connected ecosystem of **Students**, **Professors**, and **Courses**.

* **Enrollment Logic**: Tracks statuses (`ENROLLED`, `DROPPED`, `PENDING`) using a many-to-many relationship.
* **Uniqueness**: Enforces unique constraints on student emails and course codes to ensure data integrity.

---

## ⚖️ Evaluation Requirements

* 
**Minimum 2 AI/ML Components**: Includes the mandatory Mail Summarizer and at least one other intelligent feature (e.g., AI study schedules).


* 
**Real-time Functionality**: Demonstrated through live timetable or mess menu updates.


* 
**Secure Auth**: Implements role-based access management.


* 
**Responsive Design**: Fully functional on both mobile and desktop.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
