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
import UpdateProtein from './components/Admin/UpdateProtein';
import AddProductsNew from './components/Admin/AddProductsNew';
import ManageUsers from './components/Admin/ManageUsers';
import UserAddress from './components/UserAddress';
import User from './components/User'
import ProfileUpdate from './components/ProfileUpdate';
import Cart from './components/Cart';
import Order from './components/Order';
import OrderHandler from './components/Admin/orderHandler';
import UserOrder from './components/UserOrder';
import UpdateAddressinOrder from './components/UpdateAddressinOrder';
import Dashboard from './components/Admin/Dashboard';
function App() {
    const { user } = useAuthContext();

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<><Home /><Footer /></>} />
                    <Route path="/signup" element={!user ? <><HeaderPart /><SignUp /><Footer /></> : <Navigate to="/" />} />
                    <Route path="/product/:proteinId" element={<><HeaderPart /><Productpage /><Footer /></>} />
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
                        path="/cart"
                        element={ <><HeaderPart /><Cart /><Footer /></>}
                    />
          
                    <Route
                        path="/user/address"
                        element={user? <><HeaderPart /><UserAddress /><Footer /></> : <Navigate to="/" />}
                    />
                    <Route
                        path="/user/order-address"
                        element={user? <><HeaderPart /><UpdateAddressinOrder /><Footer /></> : <Navigate to="/" />}
                    />
                    <Route
                        path="/user/update"
                        element={user? <><HeaderPart /><ProfileUpdate /><Footer /></> : <Navigate to="/" />}
                    />
                    <Route
                        path="/place-order"
                        element={user? <><HeaderPart /><Order /><Footer /></> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/admindash/dashboard"
                        element={user?.Admin ? (
                            <>
                                <AdminDash />
                                <Dashboard />
                            </>
                        ) : (
                            <Navigate to="/" />
                        )}
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
                        path="/admindash/products/add"
                        element={user?.Admin ? (
                            <>
                                <AdminDash />
                                <AddProductsNew />
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
                        path="/admindash/orders"
                        element={user?.Admin ? (
                            <>
                                <AdminDash />
                                <OrderHandler />
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
                                <UpdateProtein />
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