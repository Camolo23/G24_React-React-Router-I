import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter , Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Contacto from "./views/Contacto";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contacto' element={<Contacto />}></Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
