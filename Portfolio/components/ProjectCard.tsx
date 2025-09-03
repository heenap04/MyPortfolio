import Image from 'next/image';
import { VscGithub } from 'react-icons/vsc';

import { Project } from '@/types';

import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'web':
        return '#61dafb';
      case 'data':
        return '#ff6b6b';
      case 'ai':
        return '#a855f7';
      case 'security':
        return '#f59e0b';
      case 'ui':
        return '#10b981';
      default:
        return '#61dafb';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web':
        return '🌐';
      case 'data':
        return '📊';
      case 'ai':
        return '🤖';
      case 'security':
        return '🔒';
      case 'ui':
        return '📱';
      default:
        return '💻';
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.logoWrapper}>
            <Image
              src={project.logo}
              alt={`${project.title} logo`}
              width={24}
              height={24}
              className={styles.logo}
            />
          </div>
          
          <div className={styles.categoryBadge} style={{ backgroundColor: getCategoryColor(project.category) + '20', borderColor: getCategoryColor(project.category) }}>
            <span className={styles.categoryIcon}>{getCategoryIcon(project.category)}</span>
            <span className={styles.categoryText}>{project.category.toUpperCase()}</span>
          </div>
        </div>

        <div className={styles.projectInfo}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
        </div>

        <div className={styles.technologies}>
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span key={index} className={styles.techTag}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className={styles.techTag}>
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className={styles.actions}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <VscGithub />
            <span>View project</span>
          </a>
        </div>
      </div>

      <div className={styles.cardGlow} style={{ '--glow-color': getCategoryColor(project.category) } as React.CSSProperties}></div>
    </div>
  );
};

export default ProjectCard;
