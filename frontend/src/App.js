import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderPart from "./components/headerPart";
import Home from "./components/home";
import Footer from "./components/footer";

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
