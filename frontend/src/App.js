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
                {/*}<HeaderPart />{*/}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/" />} />
                    <Route path="/product" element={<Productpage />} />
                    <Route
                        path="/login"
                        element={!user ? <LogIn /> : user.isAdmin ? <Navigate to="/admindash" /> : <Navigate to="/" />}
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
                {/*}<Footer />{*/}
            </div>
        </Router>
    );
}

export default App;

