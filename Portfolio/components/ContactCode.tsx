import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'heena.com',
    href: 'https://heena.com',
  },
  {
    social: 'email',
    link: 'heenapawriya229@gmail.com',
    href: 'mailto:heenapawriya229@gmail.com',
  },
  {
    social: 'github',
    link: 'heenap04',
    href: 'https://github.com/heenap04',
  },
  {
    social: 'linkedin',
    link: 'heena-pawriya',
    href: 'https://www.linkedin.com/in/heena-pawriya/',
  },

  // {
  //   social: 'telegram',
  //   link: 'iamnitinr',
  //   href: 'https://t.me/iamnitinr',
  // },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
