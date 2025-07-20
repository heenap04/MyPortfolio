import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Heena Pawriya</h1>
        <div className={styles.subtitle}>Full Stack Developer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hi, I am Heena — a Full Stack Web Developer based in Chandigarh, India. I specialize in building responsive and scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
            </p>
            <p className={styles.paragraph}>
              I focus on frontend development with React.js to create intuitive user interfaces, while also designing robust and secure backend systems using Express and Node.js. I am passionate about clean code, great user experiences, and learning new technologies that push the web forward.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What I have Built</h2>
            <p className={styles.paragraph}>
              I have developed multiple full-stack projects, including a job portal with real-time listings, a facial recognition attendance system using deep learning, and a secure password manager with two-factor authentication.
            </p>
            <p className={styles.paragraph}>
              My work reflects a strong focus on usability, performance, and functionality — whether it is authentication systems, responsive design, or backend API integration.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Outside development, I enjoy reading novels, exploring new tech, and listening to calming music. I value attention to detail, time management, and collaboration — all of which help me contribute effectively to any project or team.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
