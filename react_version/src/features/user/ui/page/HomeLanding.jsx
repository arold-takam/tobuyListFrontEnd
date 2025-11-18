import '../page/HomeLanding.css';
import {Link} from "react-router-dom";
import imgLogo from '../../../../assets/images/imgLogo.png';
import backImgArticle from '../../../../assets/images/tobuylist_landingImg.jpg';
import easyIcon from '../../../../assets/images/Facile.png';
import rapidIcon from '../../../../assets/images/Vitesse.png';
import accesibleIcon from '../../../../assets/images/accessible.png';

export default function HomeLanding() {
    return (
        <div className="homeLanding">
            <header>
                <Link to="/" className="linkPage"><img src={imgLogo} alt="logo icon"/></Link>
                <div className="authCta">
                    <a href="#" className="login">CONNECTION</a>
                    <a href="#" className="register">INSCRIPTION</a>
                </div>
            </header>
            <div className="main">
                <h1>ToBuyList</h1>
                <article>
                    <ul className="lineArticle">
                        <li>
                            <figure className="imgDemo"><img src={backImgArticle}
                                                             alt="demo cover"/></figure>
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
                        <li>
                            <figure className="imgDemo"><img src={backImgArticle}
                                                             alt="demo cover"/></figure>
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
                        <li>
                            <figure className="imgDemo"><img src={backImgArticle}
                                                             alt="demo cover"/></figure>
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
                        <li>
                            <figure className="imgDemo"><img src={backImgArticle}
                                                             alt="demo cover"/></figure>
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
                    </ul>
                    <ul className="paginator">
                        <li className="active"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </article>
                <section className="about">
                    <h2>ABOUT US</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis id, libero minima
                        necessitatibus odio optio perferendis, quae quo rem sed sunt suscipit veniam voluptates?
                        Adipisci commodi cupiditate earum est excepturi, fugiat id impedit ipsa nisi nulla, quas quidem
                        suscipit unde.
                    </p>
                    <a href="#" className="aboutCta">EN SAVOIR PLUS</a>
                </section>
                <section className="skill">
                    <h2>NOS ATOUTS</h2>
                    <ul>
                        <li>
                            <img src={easyIcon} alt="easy image"/>
                            <div className="right">
                                <h3>Simplicité</h3>
                                <p>Vos transactions s'effectuent juste en quelques clicks(Trop Facile).</p>
                            </div>
                        </li>
                        <li>
                            <img src={rapidIcon} alt="speed image"/>
                            <div className="right">
                                <h3>Rapidité</h3>
                                <p>Effectuer toutes vos transactions <i>en moins 1 min.</i></p>
                            </div>
                        </li>
                        <li>
                            <img src={accesibleIcon} alt="accessible image"/>
                            <div className="right">
                                <h3>Accessibilité</h3>
                                <p>Compatible avec MTN momo, Orange mobile money, PayPal, etc</p>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className="meetUs">
                    <h2>Alors Rejoignez-nous !</h2>
                    <div className="callZone">
                        <a href="#" className="login">CONNECTION</a>
                        <h4>OU</h4>
                        <a href="#" className="register">INSCRIPTION</a>
                    </div>
                </section>
                <footer>
                    <p>&copy; Copyright 2025, TobuyList; Tout droits reservé.</p>
                </footer>
            </div>
        </div>
    )
}