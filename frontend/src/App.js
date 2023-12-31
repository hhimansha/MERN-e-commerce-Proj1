// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HeaderPart from "./components/headerPart";
import Home from "./components/Home";
import Footer from "./components/footer";
import SignUp from "./components/signUp";
import Login from "./components/login";

function App() {
  return (
    <Router>
      <div>
        <HeaderPart/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
