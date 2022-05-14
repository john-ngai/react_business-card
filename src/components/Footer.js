import TwitterIcon from '../images/twitter.png'
import FacebookIcon from '../images/facebook.png'
import InstagramIcon from '../images/instagram.png'
import GitHubIcon from '../images/github.png'

export default function Footer() {
  return (
    <div className="container--footer">
      <a><img src={TwitterIcon} alt='twitter icon' /></a>
      
      <a><img src={FacebookIcon} alt='facebook icon' /></a>
      
      <a><img src={InstagramIcon} alt='instagram icon' /></a>
      
      <a href='https://github.com/john-ngai'
        target='_blank' rel='noreferrer'
      >
        <img className='icon--github' src={GitHubIcon} alt='github icon' />
      </a>
    </div>
  );
}