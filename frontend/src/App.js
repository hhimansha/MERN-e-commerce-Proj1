// App.js
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderPart from "./components/headerPart";
import Home from "./components/Home"; // Update import to use uppercase 'Home'
import Footer from "./components/footer";
import SignUp from "./components/signUp";
import Login from "./components/login";

function App() {
  return (
    <Router>
      <div>
        <HeaderPart/>
        <Home/>
        
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
