import ArticleLand from "./ArticleLand.jsx";

export default function Article() {
    return (
        <article>
            <ul className="lineArticle">
                <ArticleLand />
                <ArticleLand />
                <ArticleLand />
                <ArticleLand />
                <ArticleLand />
            </ul>
            <ul className="paginator">
                <li className="active"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </article>
    );
}