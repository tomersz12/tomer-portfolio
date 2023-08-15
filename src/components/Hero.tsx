import { useState, useEffect, useRef } from 'react';

const interests = [
    "Creating",
    "Learning",
    "Making a difference",
    "Writing",
    "Traveling",
    "Cinema",
	"Volunteering",
    "Programming",
    "Soccer",
    "Comic books",
	"Event Planning",
    "Doing things my way",
	"Accounting",
    "Board games",
    "Video editing",
    "Sushi",
    "Philosophy",
].sort(() => Math.random() - 0.5);

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentInterest, setCurrentInterest] = useState(interests[0]);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [isReversing, setIsReversing] = useState(false);
    const leftSideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isReversing) {
            const interval = setInterval(() => {
                if (currentLetterIndex > 0) {
                    setCurrentLetterIndex(currentLetterIndex - 1);
                } else {
                    setIsReversing(false);
                    setCurrentLetterIndex(0);
                    setCurrentIndex((currentIndex + 1) % interests.length);
                }
            }, Math.floor(Math.random() * 10)+5);

            return () => clearInterval(interval);
        } else {
            const interval = setInterval(() => {
                if (currentLetterIndex < interests[currentIndex].length) {
                    setCurrentLetterIndex(currentLetterIndex + 1);
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsReversing(true);
                        clearInterval(interval);
                    }, Math.floor(Math.random() * 100) + 700);
                }
            }, Math.floor(Math.random() * 75) + 25);

            return () => clearInterval(interval);
        }

    }, [currentLetterIndex, currentIndex, isReversing]);

    useEffect(() => {
        setCurrentInterest(interests[currentIndex]);
    }, [currentIndex]);

    const handleOnMove = (e: MouseEvent | TouchEvent) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const p = clientX / window.innerWidth * 100;
        
        leftSideRef.current!.style.width = `${p}%`;
    }
    
    useEffect(() => {
        window.addEventListener('mousemove', handleOnMove);
        window.addEventListener('touchmove', handleOnMove);
        leftSideRef.current!.style.width = `${27}%`;
    
        return () => {
            window.removeEventListener('mousemove', handleOnMove);
            window.removeEventListener('touchmove', handleOnMove);
        };
    }, []);

    return (
        <>
            <div className="hero">
                <div id="right-side" className="side">
                    <div className="side-text">
                        <h1>
                            Hello, my name is
                            <br/>
                            <span className="fancy">Tomer Szulsztein</span>.
                        </h1>
                    </div>
                </div>
                <div id="left-side" className="side" ref={leftSideRef}>
                    <div className="side-text">
                        <h1>
                            I like 
                            <br/>
                            <span className="fancy">{currentInterest.slice(0, currentLetterIndex)}</span>.
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;