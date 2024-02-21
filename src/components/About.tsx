import Headshot from '../images/headshot.jpg';

const About = () => {

    return (
        <div className="about">
            <div className="about-content">
                <h1>About Me</h1>
                <div className="about-body">
                    <div className="about-image">
                        <img src={Headshot} alt="Headshot" />
                    </div>
                    <div className="about-text">
                        <p>
                        Welcome to my website! 
                        I'm a creative problem solver with a passion for exploring out-of-the-box solutions. 
                        I engage in diverse interests and hobbies, and I derive joy from witnessing ideas come to life, be they mine or someone else's.
                        <br/><br/>
                        This space will serve as a platform to share my thoughts and experiences, reflecting my enthusiasm for my various interests and a celebration of the art of creation. 
                        Whether it's discussing the latest movies, expressing my thoughts through writing, or sharing my travel experiences, I'm excited to have a place to do so.
                        <br/><br/>
                        Currently, I work as a software developer and am pursuing a degree in Computer Science. 
                        I'm passionate about learning new technologies and staying abreast of the ever-changing world of computing.                       
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;