import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Alert from "./components/Alert";
import './scss/app.scss';


// Pages
import StartPage from "./pages/StartPage";
import About from "./pages/About";
import Resources from "./pages/Resources";
import { useSelector } from "react-redux";

function App() {
  const isAlert = useSelector(state => state.setAlert.value)
  console.log(isAlert)
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/home" element={<StartPage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/resources" element={<Resources />}/>
      </Routes>
      {isAlert.class && <Alert/>}
      
      <Footer/>
    </div>
  );
}

export default App;
