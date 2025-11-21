import './App.css'
import {Route, Routes} from "react-router-dom";
import HomeLanding from "./features/landingPage/ui/page/lading/HomeLanding.jsx";
import Register from "./features/landingPage/ui/page/register/Register.jsx";

function App() {

  return (
      <Routes>
          <Route path="/" element={<HomeLanding />} />
          <Route path="/register" element={<Register />} />
      </Routes>
  )
}

export default App
