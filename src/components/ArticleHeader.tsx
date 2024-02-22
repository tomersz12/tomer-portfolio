interface ArticleHeaderProps {
    image: any;
    title: string;
    date: string;
    tags: string[];
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ image, title, date, tags }) => {
    return (
        <div className="header">
            <div className="header-image">
                <img src={URL.createObjectURL(image)} alt={title}/>
            </div>
            <div className="header-data">
                <div className="header-text">
                    <h1>{title}</h1>
                    <p>{date}</p>
                </div>
                <div className="tags">
                    {tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArticleHeader;