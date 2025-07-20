export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Jobseee',
    description:
      'A full-featured job portal that allows employers to post listings and candidates to search, filter, and apply for jobs in real-time. Includes secure authentication, dynamic dashboards, and CRUD operations.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/heenap04/Jobseee_jobportal_final',
    slug: 'Jobseee',
  },
  {
    title: 'Forever',
    description:
      'An e-commerce web application with a clean interface, product browsing, cart functionality, and order flow. Designed for seamless user experience and responsive layouts.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/heenap04/E-commerce',
    slug: 'Forever',
  },
  {
    title: 'LockIt',
    description:
      'A secure password manager featuring two-factor authentication, encrypted storage, and OTP verification. Built with React, Node.js, MongoDB, and JWT for end-to-end security.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/heenap04/Password_Manager_2FA',
    slug: 'LockIt',
  },
  {
    title: 'Attendify',
    description:
      'A camera-based facial recognition attendance system that automates marking attendance using real-time video and deep learning. Built with OpenCV, TensorFlow, and Firebase integration.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/heenap04/Attendify',
    slug: 'Attendify',
  },
  
  {
    title: 'Uinsights',
    description:
      'A web analytics dashboard project offering insights into user activity, session data, and traffic patterns. Built with clean UI components and modern data visualization tools.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/heenap04/Uinsights-website',
    slug: 'Uinsights',
  },
  {
    title: 'Beach Resort',
    description:
      'A hotel booking website where users can browse, filter, and reserve rooms. Features include search filters, responsive UI, and real-time availability updates.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/heenap04/HotelBookingwebsite',
    slug: 'Beach Resort',
  },
];
