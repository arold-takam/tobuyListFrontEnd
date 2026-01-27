import './ProfileInfo.css';
import MainMenu from "../../../../wallet/ui/componant/general/mainMenu/MainMenu.jsx";
import Header from "../../../../wallet/ui/componant/general/header/Header.jsx";
import BottomHeader from "../../../../wallet/ui/componant/general/bottomHeader/BottomHeader.jsx";
import {useState} from "react";
import {useAuth} from "../../../../../contextGlobal/authContext/useAuth.js";
import tirelire from "../../../../../assets/images/Tirelire.png";
import delIcon from "../../../../../assets/images/delete.png";
import storyImg from "../../../../../assets/images/story.png";

export default function ProfileInfo() {

    const [activeMenu, setActiveMenu] = useState("");
    const {isAuthenticated} = useAuth();

    if (!isAuthenticated) {
        return <div>Erreur : Veuillez revenir à la page précédente.</div>;
    }

    const handleMainMenu = () => {
        setActiveMenu("active");
    }
    const handleMenuClose = () => {
        setActiveMenu("");
    }

    return (
        <div className="profileInfo">
            <MainMenu activeMenu={activeMenu} handleMenuClose={handleMenuClose} />
            <Header handleMainMenu={handleMainMenu} />
            <main>
                <section className="allTransact">
                    <div className="upTitle">
                        <img src={storyImg} alt="history picture"/>
                        <h2>Son historique</h2>
                    </div>
                    <ul>
                        <li>
                            <figure><img src={tirelire || "#"} alt="deposit"/></figure>
                            <div className="right">
                                <div className="top">
                                    <h3>DEPOT</h3>
                                    <button type="button" className="status">Réussit</button>
                                </div>
                                <div className="description">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor error natus odit
                                        possimus, quia quod? Ex explicabo molestiae sequi voluptates.
                                    </p>
                                </div>
                                <div className="chrono">
                                    <div className="date"><p>Le <b>30/02/2025</b></p></div>
                                    <div className="time"><p>À <b>30h70</b></p></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <figure><img src={tirelire || "#"} alt="deposit"/></figure>
                            <div className="right">
                                <div className="top">
                                    <h3>DEPOT</h3>
                                    <button type="button" className="status">Réussit</button>
                                </div>
                                <div className="description">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor error natus odit
                                        possimus, quia quod? Ex explicabo molestiae sequi voluptates.
                                    </p>
                                </div>
                                <div className="chrono">
                                    <div className="date"><p>Le <b>30/02/2025</b></p></div>
                                    <div className="time"><p>À <b>30h70</b></p></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <figure><img src={tirelire || "#"} alt="deposit"/></figure>
                            <div className="right">
                                <div className="top">
                                    <h3>DEPOT</h3>
                                    <button type="button" className="status">Réussit</button>
                                </div>
                                <div className="description">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor error natus odit
                                        possimus, quia quod? Ex explicabo molestiae sequi voluptates.
                                    </p>
                                </div>
                                <div className="chrono">
                                    <div className="date"><p>Le <b>30/02/2025</b></p></div>
                                    <div className="time"><p>À <b>30h70</b></p></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <figure><img src={tirelire || ""} alt="deposit"/></figure>
                            <div className="right">
                                <div className="top">
                                    <h3>DEPOT</h3>
                                    <button type="button" className="status">Réussit</button>
                                </div>
                                <div className="description">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor error natus odit
                                        possimus, quia quod? Ex explicabo molestiae sequi voluptates.
                                    </p>
                                </div>
                                <div className="chrono">
                                    <div className="date"><p>Le <b>30/02/2025</b></p></div>
                                    <div className="time"><p>À <b>30h70</b></p></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <figure><img src={tirelire || ""} alt="deposit"/></figure>
                            <div className="right">
                                <div className="top">
                                    <h3>DEPOT</h3>
                                    <button type="button" className="status">Réussit</button>
                                </div>
                                <div className="description">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor error natus odit
                                        possimus, quia quod? Ex explicabo molestiae sequi voluptates.
                                    </p>
                                </div>
                                <div className="chrono">
                                    <div className="date"><p>Le <b>30/02/2025</b></p></div>
                                    <div className="time"><p>À <b>30h70</b></p></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className="delUser">
                    <a>
                        <p>SUPPRIMER CET UTILISATEUR</p>
                        <img src={delIcon} alt="Delete icon"/>
                    </a>
                </section>
                <BottomHeader />
            </main>

        </div>
    );
}