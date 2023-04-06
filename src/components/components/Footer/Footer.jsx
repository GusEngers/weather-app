import style from './Footer.module.css';
import linkedin from '../../../static/images/linkedin.png';
import github from '../../../static/images/github.png';
import email from '../../../static/images/email.png';

export default function Footer() {
  return (
    <footer className={style.container}>
      <p>Developed By Gustavo Engers</p>
      <div className={style.links}>
        <a
          href="http://www.linkedin.com/in/gustavo-elias-engers-965788223/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn Logo" /> LinkedIn
        </a>
        <a
          href="http://github.com/GusEngers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub Logo" /> GitHub
        </a>
        <a href="mailto:gustavoengers6441@gmail.com">
          <img src={email} alt="Email Logo" /> E-mail
        </a>
      </div>
    </footer>
  );
}
