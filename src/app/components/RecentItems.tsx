import React from "react";
import styles from "./RecentItems.module.css";
import { lectureGroups } from "../data/lectureData";
import { Assignment } from "../types";
import { FaRocket, FaRegMoon } from "react-icons/fa";
import { assignments } from "../data/assignmentData";

const getMostRecentLecture = () => {
  const allLectures = lectureGroups.flatMap((group) => group.lectures);
  // Filter lectures that have both slidesLink and recordingLink
  const lecturesWithLinks = allLectures.filter(
    (lecture) => lecture.slidesLink || lecture.recordingLink
  );
  return lecturesWithLinks.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0];
};

const getMostRecentAssignment = () => {
  return assignments.sort(
    (a: Assignment, b: Assignment) =>
      new Date(b.inDate).getTime() - new Date(a.inDate).getTime()
  )[0];
};

const RecentItems = () => {
  const recentLecture = getMostRecentLecture();
  const recentAssignment = getMostRecentAssignment();

  return (
    <section className={styles.container}>
      <div className={styles.recentItem}>
        <h3 className={styles.title}>Most Recent Lecture</h3>
        <div className={styles.itemContent}>
          <span className={styles.itemTitle}>{recentLecture.title}</span>
          <span className={styles.itemDate}>{recentLecture.date}</span>
          <div className={styles.links}>
            {recentLecture.slidesLink && (
              <a
                href={recentLecture.slidesLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <FaRegMoon className={styles.linkIcon} /> Slides
              </a>
            )}
            {recentLecture.recordingLink && (
              <a
                href={recentLecture.recordingLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <FaRocket className={styles.linkIcon} /> Recording
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={styles.recentItem}>
        <h3 className={styles.title}>Most Recent Assignment</h3>
        <div className={styles.itemContent}>
          <span className={styles.itemTitle}>{recentAssignment.name}</span>
          <span className={styles.itemDate}>
            In Date: {recentAssignment.inDate}
          </span>
          <span className={styles.itemDate}>
            Out Date: {recentAssignment.outDate}
          </span>
          <div className={styles.links}>
            {recentAssignment.conceptual && (
              <a
                href={recentAssignment.conceptual.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <FaRegMoon className={styles.linkIcon} />{" "}
                {recentAssignment.conceptual.title}
              </a>
            )}
            {recentAssignment.programming && (
              <a
                href={recentAssignment.programming.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <FaRocket className={styles.linkIcon} />{" "}
                {recentAssignment.programming.title}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentItems;
