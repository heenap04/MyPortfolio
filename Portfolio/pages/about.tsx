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
              Hey! I&apos;m a Full Stack Developer from Chandigarh, India. I primarily
              work with the MERN stack to build scalable and responsive web applications.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on frontend development with React.js, and also experienced in building robust backends using Node.js, Express.js, and MongoDB. I love developing user-friendly digital products and enjoy working in collaborative environments.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              I&apos;m currently working as a <span className={styles.highlight}>freelancer</span>, where I&apos;ve built and delivered a variety of interactive full-stack projects for clients. My experience includes developing job portals, facial recognition systems, and secure authentication platforms — all focused on clean design and functionality.
            </p>
            <p className={styles.paragraph}>
              As a developer, I&apos;ve worked on multiple full-stack projects involving real-time functionality, authentication, and clean UI/UX design. I&apos;m always eager to learn, improve, and contribute to meaningful products.
            </p>
          </section>

          {/* <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Writing</h2>
            <p className={styles.paragraph}>
              I’ve created multiple projects like a facial-recognition attendance system, a secure password manager with 2FA, and a job portal with real-time updates. You can check out my work on{' '}
              <span className={styles.highlight}>
                <a href="https://github.com/heenap04" target="_blank" rel="noopener noreferrer">GitHub</a>
              </span>.
            </p>
          </section> */}

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming, I enjoy reading novels, listening to relaxing music, and spending time learning new technologies. I value time management, attention to detail, and teamwork.
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
