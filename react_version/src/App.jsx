import './App.css'
import {Route, Routes} from "react-router-dom";
import HomeLanding from "./features/landing/ui/page/landingPage/HomeLanding.jsx";
import Register from "./features/landing/ui/page/register/Register.jsx";
import Login from "./features/landing/ui/page/login/Login.jsx";
import SuccessPage from "./features/landing/ui/page/successPage/SuccessPage.jsx";
import Home from "./features/wallet/ui/page/home/Home.jsx";
import Profile from "./features/wallet/ui/page/profile/Profile.jsx";
import History from "./features/wallet/ui/page/history/History.jsx";
import MAccountPage from "./features/moneyAccount/ui/page/mAccountPage/MAccountPage.jsx";
import FormAddMA from "./features/moneyAccount/ui/page/formAdd/FormAddMA.jsx";
import Success from "./features/wallet/ui/page/successPage/Success.jsx";
import Deposit from "./features/wallet/ui/page/deposit/Deposit.jsx";
import Transfer from "./features/wallet/ui/page/transfer/Transfer.jsx";
import Credit from "./features/wallet/ui/page/credit/Credit.jsx";
import Refund from "./features/wallet/ui/page/refund/Refund.jsx";
import ConfirmTransaction from "./features/wallet/ui/page/confirmTransaction/ConfirmTransaction.jsx";
import ProfileUpdate from "./features/wallet/ui/page/profileUpd/ProfileUpdate.jsx";
import FormUpdMA from "./features/moneyAccount/ui/page/formUpd/FormUpdMA.jsx";
import MaDeposit from "./features/moneyAccount/ui/page/formDeposit/MaDeposit.jsx";

function App() {

    return (
        <Routes>
            {/*Routes about landing page*/}
            <Route path="/" element={<HomeLanding/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/success" element={<SuccessPage/>}/>

            {/*Routes about wallet */}
            <Route path="/home" element={<Home/>}/>
            <Route path={`/profile`} element={<Profile/>}/>
            <Route path={'/update_profile'} element={<ProfileUpdate/>}/>
            <Route path={`/history`} element={<History/>}/>
            <Route path={`/successTransaction`} element={<Success/>}/>
            <Route path={'/deposit'} element={<Deposit/>}/>
            <Route path={'/transfer'} element={<Transfer/>}/>
            <Route path="/credit" element={<Credit/>}/>
            <Route path="/refund" element={<Refund/>}/>
            <Route path="/confirm" element={<ConfirmTransaction/>}/>

            {/*Routes about money accounts*/}
            <Route path={'/moneyAccount'} element={<MAccountPage/>}/>
            <Route path={'/formAddMoneyAccount'} element={<FormAddMA/>}/>
            <Route path={'/updateMoneyAccount'} element={<FormUpdMA/>}/>
            <Route path={'/account_deposit'} element={<MaDeposit/>}/>
        </Routes>
    )
}

export default App
