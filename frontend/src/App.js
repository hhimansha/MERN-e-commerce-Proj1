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
import UpdateBook from './components/Admin/UpdateBook';
import ManageUsers from './components/Admin/ManageUsers';
import UserAddress from './components/UserAddress';
import User from './components/User'
import ProfileUpdate from './components/ProfileUpdate';
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
                        element={!user ? <><HeaderPart /><LogIn /><Footer /></> : user.Admin ? <Navigate to="/admindash" /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/admindash"
                        element={user?.Admin ? <AdminDash /> : <Navigate to="/" />}
                    />
                    <Route
                        path="/user"
                        element={user? <><HeaderPart /><User /><Footer /></> : <Navigate to="/" />}
                    />
                    <Route
                        path="/user/address"
                        element={user? <><HeaderPart /><UserAddress /><Footer /></> : <Navigate to="/" />}
                    />
                    <Route
                        path="/user/update"
                        element={user? <><HeaderPart /><ProfileUpdate /><Footer /></> : <Navigate to="/" />}
                    />
                    <Route
                        path="/admindash/products"
                        element={user?.Admin ? (
                            <>
                                <AdminDash />
                                <AddProducts />
                            </>
                        ) : (
                            <Navigate to="/" />
                        )}
                    />
                    <Route
                        path="/admindash/users"
                        element={user?.Admin ? (
                            <>
                                <AdminDash />
                                <ManageUsers />
                            </>
                        ) : (
                            <Navigate to="/" />
                        )}
                    />
                    <Route
                        path="/admindash/products/update/:id"
                        element={user?.Admin ? (
                            <>
                                <AdminDash />
                                <UpdateBook />
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
