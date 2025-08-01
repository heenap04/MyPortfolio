import { useState, useEffect } from 'react';
import Link from 'next/link';
import { VscArrowRight, VscGithub, VscMail } from 'react-icons/vsc';

import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const codeLines = [
    { code: 'const Heena = {', type: 'function' },
    { code: "  name: 'Heena Pawriya',", type: 'array-item' },
    { code: "  role: 'Full Stack Developer',", type: 'array-item' },
    { code: "  location: 'India',", type: 'array-item' },
    { code: "  skills: [", type: 'array-item' },
    { code: "    'React', 'Node.js', 'Python',", type: 'array-item' },
    { code: "    'Machine Learning', 'Data Analysis'", type: 'array-item' },
    { code: "  ],", type: 'array-item' },
    { code: "  passion: 'Building innovative solutions'", type: 'array-item' },
    { code: '};', type: 'array-end' },
    { code: '', type: 'blank' },
    { code: '// Let\'s build something amazing together!', type: 'comment' },
    { code: 'Heena.contact();', type: 'function-call' },
  ];

  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'Data Analysis', icon: '📊' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'AWS', icon: '☁️' },
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveLineIndex((prev) => (prev + 1) % codeLines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [codeLines.length]);

  return (
    <div className={styles.heroLayout}>
      <div className={styles.container}>
        <div className={styles.codeSection}>
          <div className={styles.codeContainer}>
            <div className={styles.editorHeader}>
              <div className={styles.editorButtons}>
                <div className={styles.button}></div>
                <div className={styles.button}></div>
                <div className={styles.button}></div>
              </div>
              <div className={styles.fileName}>heena.js</div>
            </div>
            <div className={styles.editorContent}>
              <div className={styles.lineNumbers}>
                {codeLines.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.lineNumber} ${
                      index === activeLineIndex ? styles.activeLine : ''
                    }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>

              <div className={styles.codeEditor}>
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className={`${styles.codeLine} ${styles[line.type]} ${
                      index === activeLineIndex ? styles.highlightedLine : ''
                    }`}
                  >
                    {line.code}
                  </div>
                ))}
              </div>

              <div className={styles.overlayGlow}></div>
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.greeting}>
            <span className={styles.wave}>👋</span>
            <span>Hello, I'm</span>
          </div>
          
          <h1 className={styles.developerName}>
            Heena <span className={styles.accentText}>Pawriya</span>
          </h1>

          <div className={styles.developerRole}>Full Stack Developer & Data Analyst</div>

          <p className={styles.bio}>
            I build elegant, responsive web applications and intelligent data solutions. 
            Passionate about creating innovative experiences that make a difference.
          </p>

          <div className={styles.skillTags}>
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={styles.skillTag}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className={styles.skillIcon}>{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>

          <div className={styles.actionLinks}>
            <Link href="/projects" className={styles.primaryLink}>
              View Projects <VscArrowRight />
            </Link>
            <a
              href="https://github.com/heenap04"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryLink}
            >
              <VscGithub />
              GitHub
            </a>
            <Link href="/contact" className={styles.secondaryLink}>
              <VscMail />
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.decorElements}>
        <div className={styles.codeFlare}></div>
        <div className={styles.gridLines}></div>
        <div className={styles.codeBlock1}>{'{'}</div>
        <div className={styles.codeBlock2}>{'}'}</div>
        <div className={styles.codeBlock3}>{'<>'}</div>
        <div className={styles.codeBlock4}>{'/>'}</div>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
        <div className={styles.codeSymbol1}>{'()'}</div>
        <div className={styles.codeSymbol2}>{'[]'}</div>
        <div className={styles.codeSymbol3}>{'=>'}</div>
        <div className={styles.dotPattern}></div>
        <div className={styles.mobileAccent}></div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
