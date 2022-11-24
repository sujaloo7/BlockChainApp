import {BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import CoinDetails from "./pages/CoinDetails";
import Coins from "./pages/Coins";
import Exchanges from "./pages/Exchanges";
import Home from "./pages/Home";
function App() {
  return (
   <>
<Router>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/coins" element={<Coins/>}/>
    <Route path="/exchanges" element={<Exchanges/>}/>
    <Route path="/coin/:id" element={<CoinDetails/>}/>

  </Routes>
  <Footer/>
</Router>
   </>
  );
}

export default App;
