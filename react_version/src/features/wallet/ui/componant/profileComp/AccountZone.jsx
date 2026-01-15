import addIcon from '../../../../../assets/images/addIcon.png';

import AccountItem from "./AccountItem.jsx";
import UseMaLoading from "../../../../moneyAccount/application/UseMaLoading.js";
import {Link} from "react-router-dom";

export default function AccountZone() {
    const {loading, error, accounts} = UseMaLoading();

    if (loading) {
        return <section className={`accountZone`}><p>Money accounts loading...</p></section>
    }

    if (error) {
        return <section className={`accountZone`}><p style={{color: 'red'}}>Money accounts loading rise an error: {error}</p></section>
    }

    if (accounts.length === 0) {
        return (
            <section className={`accountZone`}>
                <div className="top">
                    <h2>Money Accounts</h2>
                    <Link to={"/formAddMoneyAccount"} className="addBtn">
                        <figure><img src={addIcon} alt="add button"/></figure>
                    </Link>
                </div>
                <div className="account"><p>No stored money account yet.</p></div>
            </section>
        )
    }

    return(
        <section className="accountZone">
            <div className="top">
                <h2>Comptes Externes</h2>
                <Link to={"/formAddMoneyAccount"} className="addBtn">
                    <figure><img src={addIcon} alt="add button"/></figure>
                </Link>
            </div>
            <div className="account">
                <ul>
                    {accounts.map(account => (
                        <AccountItem key = {account.id} account = {account} />
                    ))}
                </ul>
                <button type="button" className="seeMore">Voir Plus</button>
            </div>
        </section>
    );
}