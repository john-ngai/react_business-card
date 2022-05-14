import TwitterIcon from '../images/twitter.png'
import FacebookIcon from '../images/facebook.png'
import InstagramIcon from '../images/instagram.png'
import GitHubIcon from '../images/github.png'

export default function Footer() {
  return (
    <div className="container--footer">
      <img src={TwitterIcon} alt='twitter icon' />
      <img src={FacebookIcon} alt='facebook icon' />
      <img src={InstagramIcon} alt='instagram icon' />
      <a href='https://github.com/john-ngai'
        target='_blank' rel='noreferrer'
      >
        <img className='icon--github' src={GitHubIcon} alt='github icon' />
      </a>
    </div>
  );
}