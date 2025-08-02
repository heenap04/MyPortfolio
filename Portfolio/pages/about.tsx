import { VscCode, VscDatabase, VscGraph, VscShield } from 'react-icons/vsc';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  const skills = [
    {
      category: 'Programming Languages',
      icon: <VscCode />,
      skills: ['Java', 'Python', 'C++']
    },
    {
      category: 'Frontend Development',
      icon: <VscCode />,
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material-UI']
    },
    {
      category: 'Backend Development',
      icon: <VscDatabase />,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs', 'JWT Authentication']
    },
    {
      category: 'Data Analysis',
      icon: <VscGraph />,
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebooks', 'Statistical Analysis']
    },
    {
      category: 'Tools & Technologies',
      icon: <VscShield />,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman']
    },

  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.subtitle}>Full Stack Developer & Data Analyst</p>
        </div>

        <div className={styles.mainContent}>
          {/* Introduction Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>👋 Hello, I'm Heena</h2>
            <div className={styles.introContent}>
              <p className={styles.paragraph}>
                I'm a passionate Full Stack Developer and Data Analyst based in India, with a love for creating
                innovative solutions that make a difference. My journey in technology started with curiosity
                and has evolved into a passion for building robust web applications and extracting meaningful
                insights from data.
              </p>
              <p className={styles.paragraph}>
                I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) for web development
                and Python for data analysis. My approach combines technical expertise with creative problem-solving,
                ensuring that every project I work on is not just functional, but also user-friendly and scalable.
              </p>
            </div>
          </section>

          {/* Education Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>🎓 Education</h2>
            <div className={styles.educationContent}>

              <div className={styles.educationItem}>
                <h3 className={styles.educationDegree}>Bachelor of Engineering in Computer Science Engineering</h3>
                <p className={styles.educationInstitute}>Chitkara University, Patiala, Punjab — 2022 - 2026</p>
                <p className={styles.educationCoursework}>
                  <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Operating Systems,
                  Computer Networks, Database Management Systems, Web Development, Software Engineering,
                  AI/ML, Cloud Computing, Object-Oriented Programming
                </p>
              </div>

              <div className={styles.educationItem}>
                <h3 className={styles.educationDegree}>Advanced Diploma in Computer Software</h3>
                <p className={styles.educationInstitute}>Royal Computer Education Institute — 2021 - 2022</p>
                <p className={styles.educationCoursework}><strong>Percentage:</strong> 88.4%</p>
              </div>

            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>🛠️ Skills & Technologies</h2>
            <div className={styles.skillsGrid}>
              {skills.map((skillGroup, index) => (
                <div key={index} className={styles.skillGroup}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillIcon}>{skillGroup.icon}</span>
                    <h3 className={styles.skillCategory}>{skillGroup.category}</h3>
                  </div>
                  <div className={styles.skillList}>
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What I Build Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>🚀 What I Build</h2>
            <div className={styles.buildContent}>
              <div className={styles.buildItem}>
                <h3>Web Applications</h3>
                <p>
                  Full-stack web applications with modern UI/UX, secure authentication,
                  real-time features, and responsive design that works across all devices.
                </p>
              </div>
              <div className={styles.buildItem}>
                <h3>Data Solutions</h3>
                <p>
                  Data analysis projects, predictive models, and business intelligence
                  solutions that help organizations make data-driven decisions.
                </p>
              </div>
              <div className={styles.buildItem}>
                <h3>AI & Machine Learning</h3>
                <p>
                  Intelligent systems including facial recognition, recommendation engines,
                  and automated processes that enhance user experiences.
                </p>
              </div>
            </div>
          </section>

          {/* Personal Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>🌟 Beyond Code</h2>
            <div className={styles.personalContent}>
              <p className={styles.paragraph}>
                When I'm not coding or analyzing data, you'll find me exploring new technologies,
                reading about the latest trends in web development and data science, or enjoying
                some calming music while brainstorming new project ideas.
              </p>
              <p className={styles.paragraph}>
                I believe in continuous learning and staying updated with the latest technologies.
                My approach combines technical skills with creativity, attention to detail, and
                a strong focus on delivering value to users and stakeholders.
              </p>
            </div>
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
