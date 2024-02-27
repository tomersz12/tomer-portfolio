import articles from '../records/articles.ts';

type ArticleType = { metadata: any; content: string; imgBlob: any; id: string };

const createArticleList = async (): Promise<{ [id: string]: ArticleType }> => {
    let output: { [id: string]: ArticleType } = {};
    for (let i = 0; i < articles.length; i++) {
        let article = await handleArticle(articles[i]);
        output[article.id] = article;
    }
    return output;
}

const handleArticle = async (id: string): Promise<ArticleType> => {
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

export { createArticleList };