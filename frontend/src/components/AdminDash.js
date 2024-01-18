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
    
    <aside class="bg-grey text-white h-screen w-64 fixed">
        <div class="p-4">
          <img
            src={img1}
            className="max-w-full"
            alt="logo"
          />
        </div>
        <ul class="mt-6 text-center">
            <li class="mb-2 py-5"><a href="#" class="text-gray-300 hover:text-white py-5 px-24 w-full hover:bg-primary ">Dashboard</a></li>
            <li class="mb-2 py-5"><a href="#" class="text-gray-300 hover:text-white py-5 px-24 w-full hover:bg-primary ">Users</a></li>
            <li class="mb-2 py-5"><a href="#" class="text-gray-300 hover:text-white py-5 px-24 w-full hover:bg-primary ">Products</a></li>
        </ul>
    </aside>


    <main class="ml-64 p-8">
        <h2 class="text-2xl font-bold mb-4">Dashboard</h2>
        {user && (
        <><span className="p-2 font-semibold text-primary">{user.email.split('@')[0]}</span><Link to="/" className="mx-2">
                <button type="button" onClick={handleClick} className="px-5 py-2 text-20 text-black-600 font-semibold rounded-full border border-black transition duration-1000 ease-in-out hover:text-white hover:bg-grey hover:border-black">Log Out</button>
            </Link></>
        )}

    </main>
    </div>
  );
};

export default AdminDash;
