import ArticlePreviewer from "../components/ArticlePreviewer";
import Footer from "../components/Footer";
import '../scss/blog.scss';
import HomeIcon from '@mui/icons-material/Home';

type ArticleType = { metadata: any; content: string; imgBlob: any; id: string };

const Blog = ({ articles } : { articles: { [id: string]: ArticleType } }) => {

    if (Object.keys(articles).length === 0) {
        return (
            <div className='article-not-found'>
                Loading...
            </div>
        );
    }

    return (
        <>
        <div className="blog-home">
            <a href={'/'} title="Home" className='icons'>
                <HomeIcon className="icon"/>
            </a>
            <ArticlePreviewer articles={articles} id={'placeholder-article2'}/>
        </div>
        <Footer/>
        </>
    );
};

export default Blog;