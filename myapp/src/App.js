import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component /Footer";
import Home from "./component /Home";
import Navbar from "./component /Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );

}

export default App;
