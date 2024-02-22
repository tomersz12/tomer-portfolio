import ArticlePreviewer from "../components/ArticlePreviewer";
import articles from '../records/articles.ts';
import Footer from "../components/Footer";
import '../scss/blog.scss';
import HomeIcon from '@mui/icons-material/Home';

const Blog = () => {

    return (
        <>
        <div className="blog-home">
            <a href={'/'} title="Home" className='icons'>
                <HomeIcon className="icon"/>
            </a>
            <ArticlePreviewer id={articles[articles.length-1]}/>
        </div>
        <Footer/>
        </>
    );
};

export default Blog;