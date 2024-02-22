import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import '../scss/home.scss';

const Home = () => {

    return (
        <>
            <Hero/>
            <a href={'./blog'} title="Blog" className='home-link'>
                <p>View my articles</p>
            </a>
            <About/>
            <Footer/>
        </>
    );
};

export default Home;