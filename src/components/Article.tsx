import { useParams } from 'react-router-dom';

import FeedIcon from '@mui/icons-material/Feed';

import Footer from './Footer.tsx';
import ReactMarkdown from 'react-markdown';
import ArticleHeader from './ArticleHeader.tsx';
import ArticlePreviewer from './ArticlePreviewer.tsx';

type ArticleType = { metadata: any; content: string; imgBlob: any; id: string };

const Article = ({ articles }: { articles: { [id: string]: ArticleType } }) => {

    const {id} = useParams<{ id: string }>();

    if (!id || articles[id] === undefined) {
        return (
            <div className='article-not-found'>
                <a href={'/blog'} title="Blog" className='icons'>
                    <FeedIcon className="icon"/>
                </a>
                Loading...
            </div>
        );
    }

    return (   
        <div className='article'>
                
            <a href={'/blog'} title="Blog" className='icons'>
                <FeedIcon className="icon"/>
            </a>
            <ArticleHeader image={articles[id].imgBlob} title={articles[id].metadata.title} date={articles[id].metadata.date} tags={articles[id].metadata.tags}/>
            <div className='body'>
                <div className='content'>
                    <ReactMarkdown>{articles[id].content}</ReactMarkdown>
                </div>
                <ArticlePreviewer articles={articles} id={id || ""}/>
            </div>
            <Footer/>
                
        </div>
    );
};

export default Article;