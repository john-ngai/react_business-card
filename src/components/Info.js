import Portrait from '../images/portrait.jpg';
import MailIcon from '../images/mail.png';
import LinkedInIcon from '../images/linkedin.png';

export default function Info() {
  return (
    <div className="container--info">
      <img className='portrait' src={Portrait} alt='portrait' />

      <h1 className='name'>John Ngai</h1>
      <h2 className='title'>Full Stack Developer</h2>

      <a href='http://johnngai.com/'
        target='_blank' rel='noreferrer'
      >
        <p className='website'>JohnNgai.com</p>
      </a>

      <div className='buttons'>
        <a href='mailto:john.ngai@hotmail.com'
          target='_blank' rel='noreferrer'
        >
          <span className='button--email'>
            <img className='icon--mail' src={MailIcon} alt='mail icon' />
            <p>Email</p>
          </span>
        </a>

        <a href='https://www.linkedin.com/in/john-ngai/'
          target='_blank' rel='noreferrer'
        >
          <span className='button--linkedin'>
            <img className='icon--linkedin' src={LinkedInIcon} alt='LinkedIn icon' />
            <p>LinkedIn</p>
          </span>
        </a>
      </div>
    </div>
  );
}