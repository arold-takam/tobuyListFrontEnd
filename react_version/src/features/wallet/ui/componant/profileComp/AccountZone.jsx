import addIcon from '../../../../../assets/images/addIcon.png';
import mtnIcon from '../../../../../assets/images/mtnMomo.webp';
import orangeIcon from '../../../../../assets/images/orangeOM.webp';
import paypalIcon from '../../../../../assets/images/paypal.webp';
import AccountItem from "./AccountItem.jsx";

export default function AccountZone() {
    return(
        <section className="accountZone">
            <div className="top">
                <h2>Comptes Externes</h2>
                <a href="#" className="addBtn">
                    <figure><img src={addIcon} alt="add button"/></figure>
                </a>
            </div>
            <div className="account">
                <ul>
                    <AccountItem key = {`1`} imgIcon={mtnIcon} number={`+237 650 656 554`} />
                    <AccountItem key = {`2`} imgIcon={paypalIcon} number={`645 454 545`} />
                    <AccountItem key = {`3`} imgIcon={orangeIcon} number={`+237 690 655 879`} />
                </ul>
                <button type="button" className="seeMore">Voir Plus</button>
            </div>
        </section>
    );
}