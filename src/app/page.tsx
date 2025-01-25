// src/app/page.tsx

"use client";

import LandingPage from "./components/LandingPage";
import CourseDescription from "./components/CourseDescription";
import styles from "./page.module.css";
import Lectures from "./components/Lectures";
import Assignments from "./components/Assignments";
import Stars from "./components/Stars";
import CourseCalendar from "./components/CourseCalendar";
import Resources from "./components/Resources";
import Staff from "./components/Staff";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <div className={styles.scrollContainer}>
        <Stars />
        <section id="landing-page" className={styles.section}>
          <LandingPage />
        </section>

        <section id="course-description" className={styles.section}>
          <CourseDescription />
        </section>
        {/* <section className={styles.section}>
          <RecentItems />
        </section> */}
        <section id="lectures" className={styles.section}>
          <Lectures />
        </section>
        <section id="assignments" className={styles.section}>
          <Assignments />
        </section>
        <section id="calendar" className={styles.section}>
          <CourseCalendar />
        </section>
        <section id="resources" className={styles.section}>
          <Resources />
        </section>
        <section id="staff" className={styles.section}>
          <Staff />
        </section>

        {/* Add more sections here */}
      </div>
    </main>
  );
}
