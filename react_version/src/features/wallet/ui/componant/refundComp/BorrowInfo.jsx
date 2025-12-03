export default function BorrowInfo() {
    return (
        <section className="borrowInfo">
            <div className="field">
                <h2>INFORMATIONS SUR LE PRÊT CONTRACTÉ</h2>
                <ul className="news">
                    <li>
                        <div className="left">MONTANT:___</div>
                        <div className="right">/ <b>****</b> FCFA</div>
                    </li>
                    <li>
                        <div className="left">JOUR D'EMPRUNT:___</div>
                        <div className="right">/ <b>40/02/2025</b></div>
                    </li>
                    <li>
                        <div className="left">DÉLAIS ACCORDÉ:___</div>
                        <div className="right">/ <b>****</b> JOURS</div>
                    </li>
                    <li>
                        <div className="left">TAXE SUR LE REMBOURSEMENT:___</div>
                        <div className="right">/ <b>****</b> %</div>
                    </li>
                    <li>
                        <div className="left">STATUT D'EMPRUNT:___</div>
                        <div className="right">/ <b>EN COURS</b> <i>(**** FCFA RESTANT)</i></div>
                    </li>
                </ul>
            </div>
        </section>
    );
}