import './Home.css';
import {Link} from "react-router-dom";
import {useAuth} from "../../../../../contextGlobal/authContext/useAuth.js";
import {useState} from "react";

import userProfile from '../../../../../assets/images/userProfile.png';
import eyeOpen from '../../../../../assets/images/eyeOpen.png';
import Tirelire from '../../../../../assets/images/Tirelire.png';
import transfert from '../../../../../assets/images/transfert.png';
import pret from '../../../../../assets/images/pret.png';
import Remboursement from '../../../../../assets/images/Remboursement.png';
import Triangle from '../../../../../assets/images/Triangle.png';
import accueil from '../../../../../assets/images/accueil.png';
import story from '../../../../../assets/images/story.png';
import assistante from '../../../../../assets/images/assistante.png';
import MainMenu from "../../componant/general/mainMenu/MainMenu.jsx";
import Header from "../../componant/general/header/Header.jsx";


export default function Home() {
    const {isAuthenticated} = useAuth();
    if (!isAuthenticated) {
        return <div>Erreur : Veuillez revenir à la page précédente.</div>;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeMenu, setActiveMenu] = useState(" ");

    const handleMainMenu = () => {
        setActiveMenu("active");
    }
    const handleMenuClose = () => {
        setActiveMenu("");
    }

    return (
        <div className={`home`}>
            <MainMenu activeMenu={activeMenu} handleMenuClose={handleMenuClose} />
            <Header handleMainMenu={handleMainMenu} />
            <main>
                <section className="cardSide">
                    <div className="card">
                        <div className="top">
                            <h1>Solde actuelle</h1>
                            <img src={eyeOpen} alt="eye"/>
                        </div>
                        <div className="middle">
                            <h2>* * * * *</h2>
                            <span>FCFA</span>
                        </div>
                        <div className="bottom">
                            <button type="button" className="consult">Compte</button>
                            <button type="button" className="saving">Épargne</button>
                        </div>
                    </div>
                </section>
                <Link to={"/"}>Go to landing page</Link>
                <section className="transact">
                    <h3>Transactions</h3>
                    <div className="operation">
                        <a href="./html/deposit.html" className="opp">
                            <figure><img src={Tirelire}alt="deposit"/></figure>
                            <button type="button" className="depositBtn">DEPOT</button>
                        </a>
                        <a href="./html/transfert.html" className="opp">
                            <figure><img src={transfert} alt="transfert"/></figure>
                            <button type="button" className="transfertBtn">TRANSFERT</button>
                        </a>
                        <a href="./html/borrow.html" className="opp">
                            <figure><img src={pret} alt="borrow"/></figure>
                            <button type="button" className="borrowBtn">PRÊT</button>
                        </a>
                        <a href="./html/refund.html" className="opp">
                            <figure><img src={Remboursement} alt="return"/></figure>
                            <button type="button" className="">REMBOURSEMENT</button>
                        </a>
                    </div>
                </section>
                <section className="info">
                    <div className="top">
                        <h3>News</h3>
                        <button type="button" className="allBtn">VIEW ALL</button>
                    </div>
                    <section className="slider">
                        <ul>
                            <li>
                                <button type="button" className="see">CONSULTER</button>
                                <div className="new">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis
                                        exercitationem id ipsam iusto, mollitia nihil obcaecati sit. Aliquid at cumque,
                                        debitis dolores ratione voluptatem!
                                    </p>
                                </div>
                            </li>
                            <li>
                                <button type="button" className="see">CONSULTER</button>
                                <div className="new">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis
                                        exercitationem id ipsam iusto, mollitia nihil obcaecati sit. Aliquid at cumque,
                                        debitis dolores ratione voluptatem!
                                    </p>
                                </div>
                            </li>
                            <li>
                                <button type="button" className="see">CONSULTER</button>
                                <div className="new">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis
                                        exercitationem id ipsam iusto, mollitia nihil obcaecati sit. Aliquid at cumque,
                                        debitis dolores ratione voluptatem!
                                    </p>
                                </div>
                            </li>
                            <li>
                                <button type="button" className="see">CONSULTER</button>
                                <div className="new">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis
                                        exercitationem id ipsam iusto, mollitia nihil obcaecati sit. Aliquid at cumque,
                                        debitis dolores ratione voluptatem!
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div className="btn">
                            <button type="button" className="left"><img src={Triangle} alt="arrow"/>
                            </button>
                            <div className="paginator"><p><b>1</b>/15</p></div>
                            <button type="button" className="right"><img src={Triangle} alt="arrow"/></button>
                        </div>
                    </section>
                </section>
                <section className="bottomHeader">
                    <ul>
                        <li><a href="index.html" className="active"><img src={accueil} alt="home"/></a></li>
                        <li><a href="./html/story.html"><img src={story} alt="story"/></a></li>
                        <li><a href="./html/clientProfile.html"><img src={userProfile} alt="profile"/></a></li>
                        <li><a href="#"><img src={assistante} alt="client assistance"/></a></li>
                    </ul>
                </section>
            </main>
        </div>
    );
}