import Headshot from '../../images/headshot.jpg';

import './About.scss';

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
                            I'm a <span className="color">creative</span> problem solver.
                            I analyze solutions to their completion and 
                            am adept when seeking <span className="color">out of the box</span> solutions as well.
                            I'm a <span className="color">fast learner</span>, especially when it comes to
                            approaching new technologies.
                            My strongest traits for this are 
                            my <span className="color">proactivity</span> and <span className="color">adaptability</span>.
                            I always try to be one step ahead and am always ready to change my approach 
                            if it's not working. 
                            <br/><br/>
                            I'm 
                            a <span className="color">team player</span> and a <span className="color">leader</span>. 
                            I always strive towards the <span className="color">collective good</span> of my teams and communities. 
                            I love to volunteer my time to help others, 
                            I'm an active volunteer within my local communities. 
                            I persistently seek positions of leadership 
                            and <span className="color">responsibility</span>, because I believe I 
                            am <span className="color">capable</span> of 
                            wielding it to make a positive difference in the lives of others.
                            <br/><br/>
                            I frequently engage in a multitude of interests and hobbies which keep 
                            my <span className="color">imagination</span> active. I love seeing ideas 
                            come to life, regardless if they're someone else's or my own. 
                            The <span className="color">creative</span> process fascinates me, 
                            and I always try to find new ways to create.
                            <br/><br/>
                            I have an <span className="color">optimistic</span> worldview and believe 
                            that the right way to live is with <span className="color">confidence</span> that 
                            doing the right things will yield the right results. I'm always learning new 
                            things and trying to be a positive influence on the people around me.
                            <br/><br/>
                            I'm currently pursuing an undergraduate degree in Computer Science at the 
                            University of Ottawa and am working as a full-stack developer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;