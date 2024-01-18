import React from 'react';
import {Link} from 'react-router-dom';
import img1 from './images/headerLogoOrange.png';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const AdminDash = () => {
  const {Logout} = useLogout()
  const {user} = useAuthContext()
  const handleClick = () => {
    Logout();
}

  return (
    <div>
    
      <div class="flex">
        <nav class="w-64 bg-grey min-h-screen fixed">
          <img
            src={img1}
            className="max-w-full p-5"
            alt="logo"
          />
          <ul className='text-center text-lg'>
              <Link to="/admindash"><li class="py-5 px-6 text-white hover:bg-primary"><a href="#" class="block">Dashboard</a></li></Link>
              <Link to="/admindash/users"><li class="py-5 px-6 text-white hover:bg-primary"><a href="#" class="block">Users</a></li></Link>
              <Link to="/admindash/products"><li class="py-5 px-6 text-white hover:bg-primary"><a href="#" class="block">Products</a></li></Link>
              <Link to="/admindash/orders"><li class="py-5 px-6 text-white hover:bg-primary"><a href="#" class="block">Active orders</a></li></Link>
          </ul>   
          <div className='text-center'>
          {user && (
          <><p className="pb-2 font-semibold text-primary mt-56">{user.email}</p>
          <Link to="/" className="mx-2">
            <button type="button" onClick={handleClick} className="px-5 py-2 text-20 text-white font-semibold rounded-full border border-black transition duration-1000 ease-in-out bg-primary">Log Out</button>
          </Link></>
          )}
          </div>
        </nav>
      </div>

      
    </div>
  );
};

export default AdminDash;
