import articles from '../records/articles.ts';

const handleArticle = async (id: string): Promise<{ metadata: any; content: string; imgBlob: any; id: string }> => {
        const isArticle = articles.includes(String(id));
        if (!isArticle) {
            console.log('Article not found.');
            return { metadata: null, content: '', imgBlob: null, id: id };
        }
        const articleFolderPath = `/articles/${id}`;
        const indexJsonPath = `${articleFolderPath}/index.json`;
        const indexMdPath = `${articleFolderPath}/index.md`;
        const indexImagePath = `${articleFolderPath}/index.jpg`;
        try {
            const jsonResponse = await fetch(indexJsonPath);
            const metadata = await jsonResponse.json();

            const mdResponse = await fetch(indexMdPath);
            const content = await mdResponse.text();

            const imgResponse = await fetch(indexImagePath);
            const imgBlob = await imgResponse.blob();

            return { metadata, content, imgBlob, id };
        } catch (error) {
            console.error('Error fetching data:', error);
            return { metadata: null, content: '', imgBlob: null, id: id };
        }
}

const fetchRelatedArticle = async (id: string): Promise<{ metadata: any; content: string; imgBlob: any; id: string }> => {
    let currentArticle = await handleArticle(id);
    let counter = 0;
    
    while (counter < articles.length) {
        let relatedArticle = await handleArticle(articles[counter]);
        if (currentArticle.id !== relatedArticle.id) {
            for (let i = 0; i < currentArticle.metadata.tags.length; i++) {
                for (let j = 0; j < relatedArticle.metadata.tags.length; j++) {
                    if (currentArticle.metadata.tags[i] === relatedArticle.metadata.tags[j]) {
                        return relatedArticle;
                    }
                }
            }
        }
        counter++;
    }
    return { metadata: null, content: '', imgBlob: null, id: id };
}

const fetchRecentArticle = (blocked: string[]): Promise<{ metadata: any; content: string; imgBlob: any; id: string }> => {
    let counter = 0;
    let recentArticle = articles[counter];
    while (blocked.includes(recentArticle) && counter < articles.length) {
        counter++;
        recentArticle = articles[counter];
    }
    return handleArticle(recentArticle);
}

const fetchRandomArticle = (blocked: string[]): Promise<{ metadata: any; content: string; imgBlob: any; id: string }> => {
    let randomIndex = Math.floor(Math.random() * articles.length);
    let randomArticle = articles[randomIndex];
    while (blocked.includes(randomArticle)) {
        randomIndex = Math.floor(Math.random() * articles.length);
        randomArticle = articles[randomIndex];
    }
    return handleArticle(randomArticle);
}

export { handleArticle, fetchRelatedArticle, fetchRecentArticle, fetchRandomArticle };