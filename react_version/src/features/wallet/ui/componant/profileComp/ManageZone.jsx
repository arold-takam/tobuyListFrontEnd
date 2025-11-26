import manageIcon from '../../../../../assets/images/gestion.png';
import manageAccount from '../../../../../assets/images/manage_accounts.png';
import borrowIcon from '../../../../../assets/images/pret.png';
import returnIcon from '../../../../../assets/images/Remboursement.png';
import cdOfferIcon from '../../../../../assets/images/creditOfferIcon.png';

export default function ManageZone(){
    return (
        <section className="manageZone">
            <div className="top">
                <h2>Espace De Gestion</h2>
                <a href="#" className="addBtn">
                    <figure><img src={manageIcon} alt="add button"/></figure>
                </a>
            </div>
            <div className="optionsManage">
                <ul>
                    <li>
                        <a href="#">
                            <figure><img src={manageAccount} alt="account icon"/></figure>
                            <p>
                                <b>Gestion Des Comptes</b>
                                <span> &gt; </span>
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <figure><img src={borrowIcon} alt="borrow Icon"/></figure>
                            <p>
                                <b>Gestion Des Emprunts</b>
                                <span> &gt; </span>
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <figure><img src={returnIcon} alt="return icon"/></figure>
                            <p>
                                <b>Gestion Des Remboursements</b>
                                <span> &gt; </span>
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="../html/creditOfferManagement.html">
                            <figure><img src={cdOfferIcon} alt="credit offer icon"/>
                            </figure>
                            <p>
                                <b>Gestion Des Offres De Credit</b>
                                <span> &gt; </span>
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}