// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import HeaderPart from "./components/headerPart";
import Home from "./components/Home";
import Footer from "./components/footer";
import SignUp from "./components/signUp";
import Login from "./components/login";
import Productpage from "./components/productPage";
import AdminDash from './components/AdminDash';

function App() {

  const {user}=useAuthContext()
  return (
    <Router>
      <div>
        <HeaderPart/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to = "/" />} />
          <Route path="/signup" element={!user ? <SignUp /> : <Navigate to = "/" />} />
          <Route path="/product" element={<Productpage />} />
          <Route path="/admindash" element={<AdminDash />} />
        </Routes>
        
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
