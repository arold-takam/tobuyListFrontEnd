import {Link, useLocation, useNavigate} from "react-router-dom";
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
import UseMADelete from "../../../application/UseMADelete.js";

export default function MAccountPage() {
    const {isAuthenticated, error ,user} = useAuth();
    const {loading, deleteMAccount} = UseMADelete();
    const [activeMenu, setActiveMenu] = useState("");
    const [passVisible, setPassVisible] = useState(false);
    const [priceVisible, setPriceVisible] = useState(false);
    const [cardColor, setCardColor] = useState(' ');
    
    const [account, setAccount] = useState({});

    if (!isAuthenticated) {
        return <div>Erreur : Veuillez revenir à la page précédente.</div>;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

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

    const delMAccount = async (e) => {
        e.preventDefault();

        const password = prompt("Entrer votre mot de pass: ");

        // console.log("yo for account: ", id, password);

        if (password !== user.password) {
            return alert("Votre mot de password est incorrect.");
        }

        const delData = {
            clientID: user.id,
            mAccountID: account.id,
            password: user.password
        };

        try {
            await deleteMAccount(delData);

            alert("Compte supprimé avec succès.");

            navigate("/profile");
        }catch(err){
            console.error(err.message);
            alert("Erreur lors de la suppression : " + error);
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const accountId = location.state?.account?.id || {};

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const stored = localStorage.getItem("moneyAccounts");
        const maList = stored ? JSON.parse(stored) : [];
        
        const accountFound = maList.find(acc => acc.id === accountId);
        if (!accountFound) {
            console.warn("Compte introuvable, redirection...");
            navigate("/profile");
        }

        setAccount(accountFound);

        // console.log("Compte chargé :", accountFound);
    }, [accountId, navigate]);

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
                            <Link to={"/account_deposit"} state={{account: account}} className="depositAccount">Depot</Link>
                            <Link to={'/account_withdraw'} state={{account: account}} className="withdrawAccount">Retrait</Link>
                        </div>
                    </div>
                    <section className="infoLine">
                        <div className="top">
                            <h2>A Propos De Ce Compte</h2>
                            <Link to={'/updateMoneyAccount'} state={{account: account}} className="updateBtn">
                                <p>MODIFIER</p>
                                <figure><img src={updateIcon} alt="pencil"/></figure>
                            </Link>
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
                        {loading?
                            <a onClick={delMAccount} disabled>
                                <p>EN COURS DE SURPRESSION...</p>
                                <img src={deleteIcon} alt="waste icon"/>
                            </a>
                            : <a onClick={delMAccount}>
                                <p>SUPPRIMER CE COMPTE</p>
                                <img src={deleteIcon} alt="waste icon"/>
                            </a>
                        }
                    </section>
                    <BottomHeader />
                </main>
        </div>
    );
}