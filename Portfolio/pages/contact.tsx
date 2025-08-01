import { useState } from 'react';
import { VscMail, VscGithub, VscGlobe, VscPerson } from 'react-icons/vsc';

import ContactCode from '@/components/ContactCode';

import styles from '@/styles/ContactPage.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <VscMail />,
      title: 'Email',
      value: 'heenapawriya229@gmail.com',
      link: 'mailto:heenapawriya229@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: <VscGithub />,
      title: 'GitHub',
      value: 'github.com/heenap04',
      link: 'https://github.com/heenap04',
      description: 'Check out my projects'
    },
    {
      icon: <VscPerson />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/heena-pawriya',
      link: 'https://www.linkedin.com/in/heena-pawriya/',
      description: 'Connect with me professionally'
    },
    {
      icon: <VscGlobe />,
      title: 'Portfolio',
      value: 'heena.com',
      link: 'https://heena.com',
      description: 'View my work and projects'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data
    console.log('Form submitted:', formData);
    // For now, just show an alert
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Get In Touch</h1>
        <p className={styles.pageSubtitle}>
          I'm always open to discussing new opportunities, interesting projects, 
          or just having a chat about technology and development.
        </p>
      </div>

      <div className={styles.container}>
        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <h2 className={styles.sectionTitle}>📞 Contact Information</h2>
          <div className={styles.infoGrid}>
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoCard}
              >
                <div className={styles.infoIcon}>{info.icon}</div>
                <div className={styles.infoContent}>
                  <h3 className={styles.infoTitle}>{info.title}</h3>
                  <p className={styles.infoValue}>{info.value}</p>
                  <p className={styles.infoDescription}>{info.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.contactForm}>
          <h2 className={styles.sectionTitle}>💬 Send Me a Message</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="Your name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="What's this about?"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={styles.textarea}
                placeholder="Tell me about your project or just say hello!"
                rows={5}
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>

        {/* Code Section */}
        {/* <div className={styles.codeSection}>
          <h2 className={styles.sectionTitle}>💻 Connect Programmatically</h2>
          <div className={styles.codeContainer}>
            <ContactCode />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
