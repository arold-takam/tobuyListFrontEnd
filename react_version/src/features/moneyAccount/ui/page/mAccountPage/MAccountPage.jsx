import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import './MAccountPage.css';

import Header from "../../../../wallet/ui/componant/general/header/Header.jsx";
import BottomHeader from "../../../../wallet/ui/componant/general/bottomHeader/BottomHeader.jsx";
import MainMenu from "../../../../wallet/ui/componant/general/mainMenu/MainMenu.jsx";
import {useAuth} from "../../../../../contextGlobal/authContext/useAuth.js";

import updateIcon from '../../../../../assets/images/Crayon.png';
import deleteIcon from '../../../../../assets/images/delete.png';
import eyeOpen from '../../../../../assets/images/eyeOpen.png';
import eyeClose from '../../../../../assets/images/eyeClosed.png';


export default function MAccountPage() {
    const {isAuthenticated} = useAuth();
    if (!isAuthenticated) {
        return <div>Erreur : Veuillez revenir à la page précédente.</div>;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeMenu, setActiveMenu] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [passVisible, setPassVisible] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [priceVisible, setPriceVisible] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cardColor, setCardColor] = useState(' ');

    const handleMainMenu = () => {
        setActiveMenu("active");
    }
    const handleMenuClose = () => {
        setActiveMenu("");
    }

    const handlePassShowing = () =>{
        setPassVisible(!passVisible);
    }
    const handlePriceShowing = () =>{
        setPriceVisible(!priceVisible);
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation();
    const {account} = location.state || {};

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log(account);
    }, [account]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (account.name === 'MTN_Mobile_Money') {
            setCardColor('#FFCA06');
        } else if (account.name === 'PayPal') {
            setCardColor('#0096DA');
        } else if (account.name === 'Orange_Money') {
            setCardColor('#F08012');
        }
    }, [account.name]);

    return (
            <div className="mAccountPage">
                <MainMenu activeMenu={activeMenu} handleMenuClose={handleMenuClose} />
                <Header handleMainMenu={handleMainMenu} />
                <main>
                    <section className="upAccount">
                        <h1>{account.name}</h1>
                        <p>Manage your money account here</p>
                    </section>
                    <div className="card" style={{backgroundColor: cardColor}}>
                        <div className="top">
                            <h1>Solde actuelle</h1>
                            {priceVisible ? <img src={eyeClose} alt="eye" onClick={handlePriceShowing}/> : <img src={eyeOpen} alt="eye" onClick={handlePriceShowing}/>}
                        </div>
                        <div className="middle">
                            <h2>{priceVisible ? account.amount : '********'}</h2>
                            <span>FCFA</span>
                        </div>
                        <div className="bottom">
                            <button type="button" className="depositAccount">Depot</button>
                            <button type="button" className="withdrawAccount">Retrait</button>
                        </div>
                    </div>
                    <section className="infoLine">
                        <div className="top">
                            <h2>A Propos De Ce Compte</h2>
                            <a href="#" className="updateBtn">
                                <p>MODIFIER</p>
                                <figure><img src={updateIcon} alt="pencil"/></figure>
                            </a>
                        </div>
                        <div className="line">
                            <ul>
                                <li>
                                    <p>Name</p>
                                    <b>{account.name}</b>
                                </li>
                                <li>
                                    <p>Numero de compte</p>
                                    <b>{account.phone}</b>
                                </li>
                                <li className="pass">
                                    <div className="left">
                                        <p>Password</p>
                                        <b>{passVisible ? account.password : '*****'}</b>
                                    </div>
                                    <div className="right" onClick={handlePassShowing}>{passVisible ? <img src={eyeClose} alt="see button"/> : <img src={eyeOpen} alt="see button"/>}</div>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="deleteAccount">
                        <a href="#">
                            <p>SUPPRIMER CE COMPTE</p>
                            <img src={deleteIcon} alt="waste icon"/>
                        </a>
                    </section>
                    <BottomHeader />
                </main>
        </div>
    );
}