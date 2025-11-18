import './App.css'
import {Route, Routes} from "react-router-dom";
import HomeLanding from "./features/user/ui/page/HomeLanding.jsx";

function App() {

  return (
      <Routes>
          <Route path="/" element={<HomeLanding />} />
      </Routes>
  )
}

export default App
