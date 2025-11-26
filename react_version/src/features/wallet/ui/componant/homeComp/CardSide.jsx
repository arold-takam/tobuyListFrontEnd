import eyeOpen from "../../../../../assets/images/eyeOpen.png";

export default function CardSide() {
    return (
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
    );
}