import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import react - roter -dom


function App() {
  const [darkmode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type.toLowerCase()
    });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (darkmode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils - Dark Mode";
    
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = "TextUtils - Light Mode";
    
    }
  };
  return (
    <div>
      <Navbar title="TextUtils" mode={darkmode} toggleMode={toggleMode}/>
      <div className="container">
        <Alert alert={alert}/>
        <TextForm mode={darkmode} showAlert={showAlert}/> 
      </div>
   
    </div>
  );
}

export default App;