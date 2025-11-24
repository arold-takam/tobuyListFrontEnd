import backImgArticle from '../../../../../assets/images/tobuylist_landingImg.jpg';

export default function ArticleLand() {
    return (
        <li>
            <figure className="imgDemo"><img src={backImgArticle} alt="demo cover"/></figure>
            <div className="info">
                <h2>Titre De L'Article</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid aperiam beatae
                    blanditiis dicta dignissimos dolores doloribus eveniet in incidunt obcaecati quia
                    quis quod sunt, tempora totam ut vel vitae!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolore et,
                    fugit incidunt iusto minima molestiae optio quod. Dolor, possimus.
                </p>
                <a href="#" className="articleCta">CONSULTER CET ARTICLE</a>
            </div>
        </li>
    );
}