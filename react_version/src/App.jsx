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
import Success from "./features/wallet/ui/page/successPage/Success.jsx";
import Deposit from "./features/wallet/ui/page/deposit/Deposit.jsx";

function App() {

  return (
      <Routes>
          {/*Routes about landing page*/}
          <Route path="/" element={<HomeLanding />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/success" element={<SuccessPage />} />

          {/*Routes about wallet */}
          <Route path="/home" element={<Home />} />
          <Route path={`/profile`} element={<Profile />} />
          <Route path={`/history`} element={<History />} />
          <Route path={`/successTransaction`} element={<Success />} />
          <Route path={'/deposit'} element={<Deposit />} />


          {/*Routes about money accounts*/}
          <Route path="/moneyAccount" element={<MAccountPage />} />
      </Routes>
  )
}

export default App
