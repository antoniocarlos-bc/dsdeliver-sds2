import  './styles.css';
import { ReactComponent as Logo} from './logo.svg';
import { ReactComponent as YouTubeIcon} from './youtube.svg';
import { ReactComponent as LinkedinIcon} from './linkedin.svg';
import { ReactComponent as InstagramIcon} from './instagram.svg';

function Footer(){
return (
  <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
          <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="_new"> 
             <YouTubeIcon />    
           
          </a>
              <a href="https://www.linkedin.com/posts/antonio-rocha-9b4454b1_terminei-a-primeira-etapa-backend-do-projeto-activity-6753882072978345984-0nvO" target= "_new">
              
                <LinkedinIcon />
                
              </a>
              <a href="https://www.instagram.com/devsuperior.ig/?hl=pt-br" target="-new">
                 <InstagramIcon />
              </a>

      </div>
  </footer>
)
}
export default Footer;