import {Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import Contact from "./pages/Contact"
import Cong from "./pages/cong"

function App () {
  return <Routes>
   <Route path="/" element={<Home />}  ></Route>
   <Route path="/Contact" element={<Contact />}  ></Route>
   <Route path="/cong" element={< Cong />}  ></Route>

  </Routes>
}
export default App