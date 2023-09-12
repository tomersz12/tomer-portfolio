import EnvelopeSVG from '../images/envelope.svg';
import PaperclipSVG from '../images/paperclip.svg';
import GitHubSVG from '../images/github.svg';
import LinkedInSVG from '../images/linkedin.svg';
import YoutueSVG from '../images/youtube.svg';

import Resume from '../files/TomerSzulszteinResume_Sep07-2023.pdf';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-links">
                        <a href={'mailto:tomeruchisz@gmail.com'} target="_blank">
                            <img src={EnvelopeSVG} className="icon" alt="Email Me"/>
                        </a>
                        <a href={Resume} target="_blank">
                            <img src={PaperclipSVG} className="icon" alt="Resume"/>
                        </a>
                        <a href="https://github.com/tomersz12" target="_blank">
                            <img src={GitHubSVG} className="icon" alt="GitHub"/>
                        </a>
                        <a href="https://www.linkedin.com/in/tomersz12/" target="_blank">
                            <img src={LinkedInSVG} className="icon" alt="LinkedIn"/>
                        </a>
                        <a href="https://www.youtube.com/@dexil12" target="_blank">
                            <img src={YoutueSVG} className="icon" alt="YouTube"/>
                        </a>
                    </div>
                    <p>&copy; 2023 Tomer Szulsztein</p>
                </div>
            </div>
        </>
    );
};

export default Footer;