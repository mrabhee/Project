import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component /Footer";
import Home from "./component /Home";
import About from "./component /About";
import Navbar from "./component /Navbar";
import Project from "./component /Project";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Project" element={<Project/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );

}

export default App;
