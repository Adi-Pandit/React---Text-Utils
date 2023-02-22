import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('text-light');
    document.body.classList.remove('text-dark');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if(cls === 'dark' || cls === 'primary' || cls === 'danger' || cls === 'success') {
      document.body.classList.add('text-light');
      setMode('light');
    } else if(cls === 'light' || cls === 'warning') {
      document.body.classList.add('text-dark');
      setMode('dark');
    }
  }

  return (
    <> 
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">  
          <Routes>
            <Route exact path="/about" element={<About />}/>  
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, case change" mode = {mode}/>}/>
          </Routes>   
        </div>
      </BrowserRouter> 
    </>
  );
}

export default App;
