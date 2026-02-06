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

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.This expansion builds out the technical documentation for **Project Nexus**, moving from a high-level overview to the specific implementation details required for a production-ready campus super-app.

---

# Project Nexus: Technical Documentation & Implementation Guide

## 📁 Directory Structure

To maintain scalability, Project Nexus follows the **Next.js App Router** architecture with a modular domain-driven design.

```text
src/
├── app/                  # Route handlers and UI components
│   ├── (auth)/           # Authentication routes (Login, Signup)
│   ├── api/              # Backend API routes (Prisma logic)
│   ├── dashboard/        # Main student/faculty cockpit
│   ├── exchange/         # Marketplace & Lost & Found
│   └── explore/          # Local hub and navigation
├── components/           # Reusable UI (Radix UI / Tailwind)
├── lib/                  # Shared utilities (AI adapters, Prisma client)
│   ├── ai-summarizer.ts  # OpenAI integration logic
│   └── prisma.ts         # Singleton Database client
└── styles/               # Global CSS and Geist font config

```

---

## 🛠️ Module Deep-Dive

### 1. The Daily Pulse (AI Integration)

The **AI Mail Summarizer** is the primary ML component. It fetches incoming college correspondence and processes it via the OpenAI `gpt-4o-mini` model.

* **Logic**: The system extracts the body text of an email, identifies the `Actionable Item`, `Deadline`, and `Sender`, returning a JSON object for the frontend.
* **Prompt Engineering**: "Summarize the following campus email into one sentence under 20 words. Focus on what the student needs to do."

### 2. The Student Exchange (Marketplace Logic)

To prevent clutter, the marketplace implements a **7-day expiration policy** on listings.

* **Database Trigger**: A cron job (or Vercel Hook) flags listings as `EXPIRED` if not renewed.
* **Travel Sharing**: Uses a simple matching algorithm to pair students traveling to the same destination (e.g., Airport/Station) within a 30-minute window.

### 3. The Academic Cockpit (Database Architecture)

The core of the app relies on the `Student` ↔ `Enrollment` ↔ `Course` relationship.

**Prisma Schema Snippet:**

```prisma
model Course {
  id          String       @id @default(cuid())
  code        String       @unique
  name        String
  credits     Int
  enrollments Enrollment[]
}

model Enrollment {
  id        String   @id @default(cuid())
  studentId String
  courseId  String
  status    Status   @default(PENDING)
  student   Student  @relation(fields: [studentId], references: [id])
  course    Course   @relation(fields: [courseId], references: [id])
}

enum Status {
  ENROLLED
  DROPPED
  PENDING
}

```

---

## 🔐 Security & Roles

Project Nexus uses **Role-Based Access Control (RBAC)**:

1. **Students**: Can view menus, list items in the marketplace, and track their own grades.
2. **Professors**: Access to the `LMS Lite` portal to upload assignments and modify course rosters.
3. **Admins**: Manage the `Live Mess Menu` and moderate the `Lost & Found` reports.

---

## 📈 Evaluation Checklist & Compliance

| Requirement | Implementation Status | Technical Note |
| --- | --- | --- |
| **2 AI/ML Components** | ✅ Mail Summarizer + AI Study Planner | Uses OpenAI API for summarization and scheduling logic. |
| **Real-time Functionality** | ✅ Live Timetable | Implemented via SWR (Stale-While-Revalidate) for instant UI updates. |
| **Secure Auth** | ✅ NextAuth.js | Supports JWT-based sessions and role-based middleware. |
| **Responsive Design** | ✅ Tailwind CSS | Mobile-first approach using flexible grid layouts. |

---

## 🚀 Deployment

### Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/nexus"
OPENAI_API_KEY="sk-..."
NEXTAUTH_SECRET="your-secret-key"

```

### Production Build

```bash
npm run build
npm start

```

For detailed API documentation, navigate to `/api/docs` (if Swagger is enabled) or refer to the `src/app/api` directory for route specifications.
