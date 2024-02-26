import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FeedIcon from '@mui/icons-material/Feed';

import Footer from './Footer.tsx';
import ReactMarkdown from 'react-markdown';
import ArticleHeader from './ArticleHeader.tsx';
import { handleArticle } from '../hooks/ArticleHandler.ts';
// import ArticlePreviewer from './ArticlePreviewer.tsx';

const Article = () => {
    const { id } = useParams<{ id: string }>();
    const [articleData, setArticleData] = useState<{ metadata: any, content: string, imgBlob: any, id: string } | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setArticleData(await handleArticle(id || ""));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!articleData || articleData.metadata === null) {
        return (
            <div className='article-not-found'>
                Article not found.
                <br/>
                <a href="/blog">Return to Blog</a>
            </div>
        )
    }

    return (   
        <div className='article'>
            {articleData === null && <p className='loading'>Loading...</p>}
            {articleData ? (
                <>
                    <a href={'/blog'} title="Blog" className='icons'>
                        <FeedIcon className="icon"/>
                    </a>
                    <ArticleHeader image={articleData.imgBlob} title={articleData.metadata.title} date={articleData.metadata.date} tags={articleData.metadata.tags}/>
                    <div className='body'>
                        <div className='content'>
                            <ReactMarkdown>{articleData.content}</ReactMarkdown>
                        </div>
                        {/* <ArticlePreviewer id={id || ""}/> */}
                    </div>
                    <Footer/>
                </>
            ) : <></>
        }
        </div>
    );
};

export default Article;