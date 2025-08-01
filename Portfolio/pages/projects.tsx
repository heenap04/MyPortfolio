import { useState, useMemo } from 'react';
import { VscFilter } from 'react-icons/vsc';

import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

import styles from '@/styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: '💻' },
    { id: 'web', name: 'Web Development', icon: '🌐' },
    { id: 'data', name: 'Data Analysis', icon: '📊' },
    { id: 'ai', name: 'AI & ML', icon: '🤖' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'mobile', name: 'Mobile', icon: '📱' },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') {
      return projects;
    }
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>My Projects</h1>
        <p className={styles.pageSubtitle}>
          A collection of my work showcasing skills in web development, data analysis, 
          AI/ML, and security. Each project represents a unique challenge and learning experience.
        </p>
      </div>

      {/* Category Filter */}
      <div className={styles.filterSection}>
        <div className={styles.filterHeader}>
          <VscFilter />
          <span>Filter by Category</span>
        </div>
        <div className={styles.categoryFilters}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.categoryFilter} ${
                selectedCategory === category.id ? styles.active : ''
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className={styles.projectsSection}>
        {selectedCategory !== 'all' && (
          <div className={styles.sectionHeader}>
            <h2>{categories.find(c => c.id === selectedCategory)?.name}</h2>
            <span className={styles.projectCount}>
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </span>
          </div>
        )}
        
        <div className={styles.container}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🔍</div>
            <h3>No projects found</h3>
            <p>Try selecting a different category or check back later for new projects.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Projects' },
  };
}

export default ProjectsPage;
