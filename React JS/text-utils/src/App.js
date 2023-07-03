import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Enabled", "Success");
      document.title = 'Text Utils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "Success");
      document.title = 'Text Utils - Light Mode';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          {/* Routing */}
          <Routes>
            {/* exact path: Good practice as if not used it might partial match the path instead of exact
            , element: Element to which we want to route */}
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>

      {/* <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}>
          </Route>
        </Routes>
      </div> */}
    </>
  );
}

export default App;
