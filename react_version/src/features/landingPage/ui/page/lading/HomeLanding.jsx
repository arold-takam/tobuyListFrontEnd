import './HomeLanding.css';
import HeaderLanding from "../../component/general/headerLanding/HeaderLanding.jsx";
import Article from "../../component/landingComponant/Article.jsx";
import {useState} from "react";
import easyIcon from '../../../../../assets/images/Facile.png';
import rapidIcon from '../../../../../assets/images/Vitesse.png';
import accesibleIcon from '../../../../../assets/images/accessible.png';
import {Link} from "react-router-dom";

export default function HomeLanding() {
    const [landHederType, _] = useState("all");

    return (
        <div className="homeLanding">
            <HeaderLanding typeHeader = {landHederType}/>
            <div className="main">
                <h1>ToBuyList</h1>
                <Article />
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
                        <Link to="/register" href="#" className="register">INSCRIPTION</Link>
                    </div>
                </section>
                <footer>
                    <p>&copy; Copyright 2025, TobuyList; Tout droits reservé.</p>
                </footer>
            </div>
        </div>
    )
}