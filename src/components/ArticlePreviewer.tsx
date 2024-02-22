import { useEffect, useState } from "react";
import { fetchRelatedArticle, fetchRecentArticle, fetchRandomArticle } from "../hooks/ArticleHandler";

interface ArticlePreviwerProps {
    id: string;
}

const ArticlePreviewer: React.FC<ArticlePreviwerProps> = ({ id }) => {
    const [relatedArticle, setRelatedArticle] = useState<{ metadata: any; content: string; imgBlob: any; id: string } | null>(null);
    const [recentArticle, setRecentArticle] = useState<{ metadata: any; content: string; imgBlob: any; id: string } | null>(null);
    const [randomArticle, setRandomArticle] = useState<{ metadata: any; content: string; imgBlob: any; id: string } | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedRelatedArticle = await fetchRelatedArticle(id);
                const fetchedRecentArticle = await fetchRecentArticle([id, fetchedRelatedArticle.id]);
                const fetchedRandomArticle = await fetchRandomArticle([id, fetchedRelatedArticle.id, fetchedRecentArticle.id]);

                setRelatedArticle(fetchedRelatedArticle);
                setRecentArticle(fetchedRecentArticle);
                setRandomArticle(fetchedRandomArticle);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!relatedArticle || !recentArticle || !randomArticle) {
        return null;
    }

    return (
        <div className="article-previewer">
            <div className="preview-article" onClick={() => window.location.href = '/blog/'+relatedArticle.id}>
                <img src={URL.createObjectURL(relatedArticle.imgBlob)} alt={relatedArticle.metadata.title} />
                <h3>{relatedArticle.metadata.title}</h3>
            </div>

            <div className="preview-article" onClick={() => window.location.href = '/blog/'+recentArticle.id}>
                <img src={URL.createObjectURL(recentArticle.imgBlob)} alt={recentArticle.metadata.title} />
                <h3>{recentArticle.metadata.title}</h3>
            </div>

            <div className="preview-article" onClick={() => window.location.href = '/blog/'+randomArticle.id}>
                <img src={URL.createObjectURL(randomArticle.imgBlob)} alt={randomArticle.metadata.title} />
                <h3>{randomArticle.metadata.title}</h3>
            </div>
        </div>
    );
};

export default ArticlePreviewer;