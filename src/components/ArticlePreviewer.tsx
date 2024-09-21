import { useEffect, useState } from "react";

type ArticleType = { metadata: any; content: string; imgBlob: any; id: string };

interface ArticlePreviwerProps {
    articles: { [id: string]: ArticleType };
    id: string | null;
}

const ArticlePreviewer: React.FC<ArticlePreviwerProps> = ({ articles, id }) => {
    const [recentArticle, setRecentArticle] = useState<ArticleType | null>(null);
    const [secondRecentArticle, setSecondRecentArticle] = useState<ArticleType | null>(null);
    const [thirdRecentArticle, setThirdRecentArticle] = useState<ArticleType | null>(null);

    if (articles === undefined || !id) {
        return null;
    }

    const fetchArticles = () => {
        let currentArticle = id ? articles[id] : null;

        const articleKeys = Object.keys(articles);

        const fetchedRecentArticles = articleKeys
            .filter(key => articles[key].id !== currentArticle?.id)
            .map(key => articles[key])
            .slice(0, 3);

        setRecentArticle(fetchedRecentArticles[0] || null);
        setSecondRecentArticle(fetchedRecentArticles[1] || null);
        setThirdRecentArticle(fetchedRecentArticles[2] || null);

    };

    useEffect(() => {
        fetchArticles();
    }, []);

    if (!recentArticle || !secondRecentArticle || !thirdRecentArticle) {
        return null;
    }

    return (
        <div className="article-previewer">
            <div className="preview-article" onClick={() => window.location.href = '/blog/'+recentArticle.id}>
                <img src={URL.createObjectURL(recentArticle.imgBlob)} alt={recentArticle.metadata.title} />
                <h3>{recentArticle.metadata.title}</h3>
            </div>

            <div className="preview-article" onClick={() => window.location.href = '/blog/'+secondRecentArticle.id}>
                <img src={URL.createObjectURL(secondRecentArticle.imgBlob)} alt={secondRecentArticle.metadata.title} />
                <h3>{secondRecentArticle.metadata.title}</h3>
            </div>

            <div className="preview-article" onClick={() => window.location.href = '/blog/'+thirdRecentArticle.id}>
                <img src={URL.createObjectURL(thirdRecentArticle.imgBlob)} alt={thirdRecentArticle.metadata.title} />
                <h3>{thirdRecentArticle.metadata.title}</h3>
            </div>
        </div>
    );
};

export default ArticlePreviewer;