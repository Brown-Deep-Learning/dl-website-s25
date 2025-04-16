import styles from './FinalProject.module.css';

export default function FinalProject() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Final Project</h2>
      <div className={styles.content}>
        <p className={styles.intro}>
          The final research project is aimed to give you an idea of what a deep learning research project entails, and hopefully, get you excited about doing research in this field. It requires critical thinking that you will develop by learning the material and doing assignments during the semester.
        </p>
        
        <div className={styles.warning}>
          <p>
            <strong>Please read the <a href="final-project.pdf" className={styles.link}>final project handout</a> in its entirety.</strong> It contains all the information, forms, and deadlines you'll need to know about!
          </p>
        </div>

        <h3 className={styles.subtitle}>Overview</h3>
        <p>
          You will complete final projects in groups of 3-4 people. These projects are an opportunity for you to apply the knowledge you've gained in class to a topic or area of interest. Your group may implement research papers, existing projects, or create entirely new projects.
        </p>

        <h3 className={styles.subtitle}>Key Deadlines</h3>
        <div className={styles.deadlines}>
          <div className={styles.deadlineCard}>
            <div className={styles.deadlineTitle}>Team Formation</div>
            <div className={styles.deadlineDate}>March 12, 2025 (Wed) 10PM EST</div>
          </div>
          <div className={styles.deadlineCard}>
            <div className={styles.deadlineTitle}>Project Proposal</div>
            <div className={styles.deadlineDate}>April 2, 2025 (Wed) 10PM EST</div>
          </div>
          <div className={styles.deadlineCard}>
            <div className={styles.deadlineTitle}>Check-in #1</div>
            <div className={styles.deadlineDate}>Week of March 17-21, 2025</div>
          </div>
          <div className={styles.deadlineCard}>
            <div className={styles.deadlineTitle}>Check-in #2</div>
            <div className={styles.deadlineDate}>Week of April 14-18, 2025</div>
          </div>
          <div className={styles.deadlineCard}>
            <div className={styles.deadlineTitle}>Final Check-in #3</div>
            <div className={styles.deadlineDate}>Week of April 21, 2025</div>
          </div>
          <div className={styles.deadlineCard}>
            <div className={styles.deadlineTitle}>Deep Learning Day</div>
            <div className={styles.deadlineDate}>April 30, 2025 (Wed)</div>
          </div>
          <div className={styles.deadlineCard}>
            <div className={styles.deadlineTitle}>Final Submission</div>
            <div className={styles.deadlineDate}>May 2, 2025 (Fri) 10PM EST</div>
          </div>
        </div>

      </div>
    </div>
  );
} 