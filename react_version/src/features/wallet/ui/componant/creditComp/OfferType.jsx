import triangle from "../../../../../assets/images/Triangle.png";

export default function OfferType() {
    return (
        <div className="offerType">
            <h2>Choisir Votre Offre d'Emprunt</h2>
            <div className="screen">
                <ul>
                    <li className="active">
                        <span className="number">1</span>
                        <h3>OFFRE <b>STANDARD</b></h3>
                        <div className="details">
                            <div className="amount">
                                <p>Montant OFFERT:___</p>
                                <p>/<b>*****</b>FCFA</p>
                            </div>
                            <div className="delay">
                                <p>DÉLAIS D'EMPRUNT:___</p>
                                <p>/<b>*****</b>Jours</p>
                            </div>
                            <div className="taxe">
                                <p>TAXES PRÉLEVÉE:___</p>
                                <p>/<b>*****</b>%</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className="number">1</span>
                        <h3>OFFRE <b>PREMIUM</b></h3>
                        <div className="details">
                            <div className="amount">
                                <p>Montant OFFERT:___</p>
                                <p>/<b>*****</b>FCFA</p>
                            </div>
                            <div className="delay">
                                <p>DÉLAIS D'EMPRUNT:___</p>
                                <p>/<b>*****</b>Jours</p>
                            </div>
                            <div className="taxe">
                                <p>TAXES PRÉLEVÉE:___</p>
                                <p>/<b>*****</b>%</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className="number">1</span>
                        <h3>OFFRE <b>CUSTOM</b></h3>
                        <div className="details">
                            <div className="amount">
                                <p>Montant OFFERT:___</p>
                                <p>/<b>*****</b>FCFA</p>
                            </div>
                            <div className="delay">
                                <p>DÉLAIS D'EMPRUNT:___</p>
                                <p>/<b>*****</b>Jours</p>
                            </div>
                            <div className="taxe">
                                <p>TAXES PRÉLEVÉE:___</p>
                                <p>/<b>*****</b>%</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="btn">
                <button type="button" className="left">
                    <img src={triangle || ""} alt="arrow"/>
                </button>
                <div className="paginator"><p><b>1</b>/15</p></div>
                <button type="button" className="right">
                    <img src={triangle || ""} alt="arrow"/>
                </button>
            </div>
        </div>
    )
}