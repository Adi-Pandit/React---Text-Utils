import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

//import About from "./components/About";

function App() {
  const [mode, setMode] = useState('light');
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

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }
  }

  return (
    <> 
      {/* <BrowserRouter> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">  
          {/* <Routes>
            <Route exact path="/about" element={<About/>}/>  
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode}/>}/>
          </Routes>    */}
          <TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode} />
        </div>
      {/* </BrowserRouter>  */}
    </>
  );
}

export default App;
