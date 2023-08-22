import { useState } from 'react';

import Headshot from '../images/headshot.jpg';

const About = () => {
    const [isGlitching, setIsGlitching] = useState(false);
    const [glitched, setGlitched] = useState(false);
    const [sportText, setSportText] = useState('soccer');

    const handleMouseOver = () => {
        if (!glitched) {
            setIsGlitching(true);
            setTimeout(() => {
                setSportText('football');
                setTimeout(() => {
                    setIsGlitching(false);
                    setGlitched(true);
                }, 250);
            }, 250);
        }
    };

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

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
                            In all aspects of life, I am a <span className="color">complex</span> thinker 
                            and <span className="color">creative</span> problem solver.
                            I analyze problems to their completion and 
                            always try to find <span className="color">out of the box</span> solutions.
                            I'm a fast learner, especially when it comes to
                            approaching new technologies.
                            My strongest traits for this are 
                            my <span className="color">proactivity</span> and <span className="color">adaptability</span>,
                            I always try to be one step ahead and I'm always ready to change my approach 
                            if it's not working. 
                            <br/><br/>
                            I am 
                            a <span className="color">team player</span> and a <span className="color">leader</span>. 
                            I always strive towards the collective good of my teams, and communities. 
                            I love to volunteer my time to help others, 
                            having always volunteered within my local communities. 
                            I persistently seek positions of leadership 
                            and <span className="color">responsibility</span>, because I believe I 
                            am <span className="color">capable</span> of 
                            wielding it and making a difference.
                            <br/><br/>
                            I frequently engage in a multitude of interests and hobbies which keep 
                            my <span className="color">imagination</span> active. I love seeing ideas 
                            come to life, regardless if they're someone else's or my own. 
                            The <span className="color">creative</span> process fascinates me 
                            and I always try to find new ways to create.
                            I also have less imaginative interests such 
                            as <span className="color">finance</span> and <span className="color">philosophy</span>. 
                            I also 
                            love <span className={`${isGlitching ? 'glitch' : ''}`} onMouseOver={handleMouseOver}>{sportText}</span>, 
                            having played it and supported FC Barcelona most of my life.
                            <br/><br/>
                            I have an <span className="color">optimistic</span> worldview and believe 
                            that the right way to live is with <span className="color">confidence</span> that 
                            doing the right things will yield the right results. I'm always learning new 
                            things and trying to be a positive influence on the people around me.
                            <br/><br/>
                            I'm currently pursuing an undergraduate degree in Computer Science at the 
                            University of Ottawa and working as a front-end developer.
                        </p>
                    </div>
                </div>
                <div className="about-button" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                    <button>Why Computer Science?</button>
                </div>
                <div className={`button-popup ${isHovered? 'active' : ''}`}>
                    <p>
                    I grew up in a technology-focused household, creating with technology from a very young 
                    age, not to mention my father who is a computer scientist himself. Seeing the potential 
                    to use technology to create and enhance people’s lives, I’m motivated to make a positive 
                    impact with technology. Pursuing a career in computer science allows me to continue 
                    creating and innovating to reach this end.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;