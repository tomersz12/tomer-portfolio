import EmailIcon from '@mui/icons-material/Email';
// import DescriptionIcon from '@mui/icons-material/Description';
// import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

// import Resume from '../files/TomerSzulszteinResume_Sep19-2023.pdf';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-links">
                        <a href={'mailto:tomerszulsztein@gmail.com'} title="Email Me" target="_blank">
                            <EmailIcon className="icon"/>
                        </a>
                        {/* <a href={Resume} target="_blank">
                            <DescriptionIcon className="icon"/>
                        </a> */}
                        {/* <a href="https://github.com/tomersz12" target="_blank">
                            <GitHubIcon className="icon"/>
                        </a> */}
                        <a href="https://www.linkedin.com/in/tomersz12/" target="_blank">
                            <LinkedInIcon className="icon"/>
                        </a>
                        <a href="https://www.youtube.com/@dexil12" target="_blank">
                            <YouTubeIcon className="icon"/>
                        </a>
                    </div>
                    <p>&copy; 2024 Tomer Szulsztein 
                    - <a href="/legal">Legal</a> </p>
                </div>
            </div>
        </>
    );
};

export default Footer;