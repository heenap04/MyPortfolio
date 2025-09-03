export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
  category: 'web development' | 'data analysis' | 'ai' | 'security' | 'ui design';
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: 'My Portfolio',
    description:
      'A personal portfolio website showcasing projects, skills, and experience. Built with Nextjs and Tailwind CSS for a modern, responsive design.',
    logo: '/logos/react_icon.svg',
    link: 'https://github.com/heenap04/MyPortfolio',
    slug: 'Portfolio',
    category: 'web development',
    technologies: ['Nextjs', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    title: 'Jobseee',
    description:
      'A comprehensive job portal platform connecting employers and job seekers. Features include real-time job listings, advanced search filters, secure authentication, dynamic dashboards, and seamless application tracking.',
    logo: '/logos/react_icon.svg',
    link: 'https://github.com/heenap04/Jobseee_jobportal_final',
    slug: 'Jobseee',
    category: 'web development',
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    title: 'LockIt',
    description:
      'A secure password manager with two-factor authentication, encrypted storage, and OTP verification. Built with modern security practices and end-to-end encryption for maximum protection.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/heenap04/LockIT',
    slug: 'LockIt',
    category: 'security',
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'JWT', '2FA'],
  },
  {
    title: 'Attendify',
    description:
      'An intelligent camera-based facial recognition attendance system that automates attendance marking using real-time video processing and deep learning algorithms.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/heenap04/Attendify',
    slug: 'Attendify',
    category: 'ai',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Firebase', 'Deep Learning'],
  },
  {
    title: 'CLV Prediction',
    description:
      'Customer Lifetime Value prediction model using machine learning techniques. Analyzes customer behavior patterns to predict future value and optimize marketing strategies.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/heenap04/CLV-prediction',
    slug: 'CLV-prediction',
    category: 'data analysis',
    technologies: ['Python', 'Jupyter', 'Machine Learning', 'Pandas', 'Scikit-learn'],
  },
  {
    title: 'Uber Rides Analysis',
    description:
      'Comprehensive data analysis of Uber rides data including trip patterns, revenue analysis, and driver performance metrics using advanced analytics and visualization.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/heenap04/UberRides_DataAnalysis',
    slug: 'UberRides_DataAnalysis',
    category: 'data analysis',
    technologies: ['Python', 'Jupyter', 'Pandas', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Marketing A/B Testing',
    description:
      'Statistical analysis of marketing campaigns using A/B testing methodologies. Evaluates campaign effectiveness and provides data-driven insights for optimization.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/heenap04/Marketing_A-B_testing',
    slug: 'Marketing_A-B_testing',
    category: 'data analysis',
    technologies: ['Python', 'Jupyter', 'Statistics', 'Hypothesis Testing', 'Pandas'],
  },
  {
    title: 'TestItOut',
    description:
      'Test Case Generator is an AI-powered web application that automates the creation of comprehensive test cases for your codebase. It seamlessly integrates with GitHub repositories, allowing developers to select code files and generate intelligent, production-ready test cases using OpenAIs GPT-3.5 model.',
    logo: '/logos/react_icon.svg',
    link: 'https://github.com/heenap04/TestItOut',
    slug: 'TestIOut',
    category: 'web development',
    technologies: ['JavaScript', 'React', 'CSS', 'Expressjs', 'Node.js', 'OpenAI API'],
  },
  {
    title: 'Forever E-commerce',
    description:
      'A modern e-commerce platform with clean interface, product browsing, cart functionality, and seamless order flow. Designed for optimal user experience.',
    logo: '/logos/react_icon.svg',
    link: 'https://github.com/heenap04/E-commerce',
    slug: 'Forever',
    category: 'web development',
    technologies: ['JavaScript', 'React', 'CSS', 'HTML', 'E-commerce', 'Expressjs' , 'Node.js' , 'MongoDB'],
  },
  {
    title: 'Uinsights Analytics',
    description:
      'A comprehensive web analytics dashboard providing insights into user activity, session data, and traffic patterns with modern data visualization.',
    logo: '/logos/react_icon.svg',
    link: 'https://github.com/heenap04/Uinsights-website',
    slug: 'Uinsights',
    category: 'ui design',
    technologies: ['figma'],
  },
  
];
