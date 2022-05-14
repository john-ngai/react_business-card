import Portrait from '../images/portrait.jpg';
import MailIcon from '../images/mail.png';
import LinkedInIcon from '../images/linkedin.png';

export default function Info() {
  return (
    <div className="container--info">
      <img className='portrait' src={Portrait} alt='portrait' />
      
      <h1 className='name'>John Ngai</h1>
      <h2 className='title'>Full Stack Developer</h2>
      <p className='website'>JohnNgai.com</p>

      <div className='buttons'>
        <span className='button--email'>
          <img className='icon--mail' src={MailIcon} alt='mail icon' />
          <p>Email</p>
        </span>
        <span className='button--linkedin'>
          <img className='icon--linkedin' src={LinkedInIcon} alt='LinkedIn icon' />
          <p>LinkedIn</p>
        </span>
      </div>
    </div>
  );
}