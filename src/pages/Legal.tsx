import Footer from "../components/Footer";

import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';

const Legal = () => {
    return (
        <>
            <div className="legal">
                <div className="icons">
                    <a href={'./blog'} title="Blog">
                        <FeedIcon className="icon"/>
                    </a>
                    <a href={'./'} title="Home">
                        <HomeIcon className="icon"/>
                    </a>
                </div>
                <h1>Legal</h1>
                <h2>Interpretation</h2>
                <p>
                    The words of which the initial letter is capitalized have meanings defined under the following conditions. 
                    The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>
                <h2>Definitions</h2>
                <p>
                    <ul>
                        <li>
                            <span className="heading">Website ("Service"):</span> refers to the website, accessible from https://tomerszulsztein.com/
                        </li>
                        <li>
                            <span className="heading">Author ("We", "Our"):</span> refers to an entity that has direct or indirect editorial rights over the Website.
                        </li>
                        <li>
                            <span className="heading">Device:</span> refers to any device that can access the Service such as a computer or cellphone.
                        </li>
                        <li>
                            <span className="heading">Terms and Conditions ("Terms"):</span> refers to these Terms and Conditions that form the entire agreement between You and the Authors regarding the use of the Service.
                        </li>
                        <li>
                            <span className="heading">You:</span> refers to the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                        </li>
                        <li>
                            <span className="heading">Cookies:</span> refer to small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.
                        </li>
                    </ul>
                </p>
                <h2>Acknowledgement</h2>
                <p>
                    These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Authors. 
                    These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                    <br/><br/>
                    Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. 
                    These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                    <br/><br/>
                    By accessing or using the Service You agree to be bound by these Terms and Conditions. 
                    If You disagree with any part of these Terms and Conditions then You may not access the Service.
                    <br/><br/>
                    You represent that you are over the age of 13. 
                    The Authors do not permit those under 13 to use the Service.
                    <br/><br/>
                    Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Website. 
                    Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. 
                    Please read Our Privacy Policy carefully before using Our Service.
                </p>
                <h2>Copyright Notices</h2>
                <p>
                    Website design, content and logo subject to copyright &copy; 2023 Tomer Szulsztein.
                </p>
                <h2>"AS IS" Disclaimer</h2>
                <p>
                    The Authors provide no warranty or undertaking, and make no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
                </p>
                <h2>Links to Other Websites</h2>
                <p>
                    Our Service may contain links to third-party web sites or services that are not owned or controlled by the Authors.
                    <br/><br/>
                    The Authors have no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Authors shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
                    <br/><br/>
                    We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
                </p>
                <h2>Privacy Policy</h2>
                <p>
                    Anonymous information such as Your IP address, device and software characteristics, page views, referral URLs and other unique identifiers is collected and sent to Analytics Tools. 
                    Analytics Tools are primarily used for the purpose of enhancing the user experience of the Service.
                    <br/><br/>
                    We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use. 
                    If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. 
                    You may use this option for preventing the use of Cookies at any time. 
                    If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.
                </p>
            </div>
            <Footer/>
        </>
    );
};

export default Legal;