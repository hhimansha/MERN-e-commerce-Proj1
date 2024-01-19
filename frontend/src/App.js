import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import HeaderPart from './components/headerPart';
import Home from './components/Home';
import Footer from './components/footer';
import SignUp from './components/signUp';
import LogIn from './components/login';
import Productpage from './components/productPage';
import AdminDash from './components/Admin/AdminDash';
import AddProducts from './components/Admin/AddProducts'
function App() {
    const { user } = useAuthContext();

    return (
        <Router>
            <div>
                

                <Routes>
                    <Route path="/" element={<><HeaderPart /><Home /><Footer /></>} />
                    <Route path="/signup" element={!user ? <><HeaderPart /><SignUp /><Footer /></> : <Navigate to="/" />} />
                    <Route path="/product" element={<><HeaderPart /><Productpage /><Footer /></>} />
                    <Route
                        path="/login"
                        element={!user ? <><HeaderPart /><LogIn /><Footer /></> : user.isAdmin ? <Navigate to="/admindash" /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/admindash"
                        element={user?.isAdmin ? <AdminDash /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/admindash/products"
                        element={user?.isAdmin ? (
                            <>
                                <AdminDash />
                                <AddProducts />
                            </>
                        ) : (
                            <Navigate to="/" />
                        )}
                    />
                </Routes>
                
            </div>
        </Router>
    );
}

export default App;