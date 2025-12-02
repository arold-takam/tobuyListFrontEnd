import Tirelire from '../../../../../assets/images/Tirelire.png';
import transfert from '../../../../../assets/images/transfert.png';
import pret from '../../../../../assets/images/pret.png';
import Remboursement from '../../../../../assets/images/Remboursement.png';
import {Link} from "react-router-dom";

export default function TransactList () {
    return (
        <section className="transact">
            <h3>Transactions</h3>
            <div className="operation">
                <Link to={'/deposit'} className="opp">
                    <figure><img src={Tirelire || ""} alt="deposit"/></figure>
                    <button type="button" className="depositBtn">DEPOT</button>
                </Link>
                <Link to={'/transfer'} className="opp">
                    <figure><img src={transfert} alt="transfert"/></figure>
                    <button type="button" className="transfertBtn">TRANSFERT</button>
                </Link>
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
    );
}