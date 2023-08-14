import { useState, useEffect, useRef } from 'react';

const interests = [
    "programming",
    "soccer",
    "creating",
    "comic books",
    "learning",
    "making a difference",
    "writing",
    "traveling",
    "cinema",
    "doing things myself",
    "board games",
    "video editing",
    "sushi",
]

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
            }, 10);

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
                    }, 750);
                }
            }, 50);

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