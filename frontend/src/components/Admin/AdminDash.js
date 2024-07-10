import React from 'react';
import { Link} from 'react-router-dom';
import img1 from '../images/headerLogoH.png';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogout } from '../../hooks/useLogout';

const AdminDash = () => {
  const { Logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    Logout();
  };

  return (
    <div className=''>
      <div className="flex">
        <nav className="w-64 bg-grey-light min-h-screen fixed pt-10">
          <Link to = "/">
          <img src={img1} className="w-48 p-5 mx-auto" alt="logo" />
          </Link>
          <ul className="text-left text-lg">
            <Link to="/admindash/dashboard">
              <li className="py-5 px-6 text-grey ">
                <a href="#" className="flex font-semibold gap-4">
                  <span className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
                  </span>Dashboard
                </a>
              </li>
            </Link>
            <Link to="/admindash/users">
              <li className="py-5 px-6 text-grey ">
                <a href="#" className="flex font-semibold gap-4">
                  <span className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>  
                  </span>Users
                </a>
              </li>
            </Link>
            <Link to="/admindash/products">
              <li className="py-5 px-6 text-grey ">
                <a href="#" className="flex font-semibold gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg> Products
                </a>
              </li>
            </Link>
            <Link to="/admindash/orders">
              <li className="py-5 px-6 text-grey ">
                <a href="#" className="flex font-semibold gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-ordered"><line x1="10" x2="21" y1="6" y2="6"/><line x1="10" x2="21" y1="12" y2="12"/><line x1="10" x2="21" y1="18" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg>Active orders
                </a>
              </li>
            </Link>
          </ul>
          <div className="text-center">
            {user && (
              <>
                <p className="pb-2 font-semibold text-primary mt-56">{user.email}</p>
                <Link to="/" className="mx-2">
                  <button
                    type="button"
                    onClick={handleClick}
                    className="px-5 py-2 text-20 text-white font-semibold rounded-xl border hover:bg-black hover:text-white  hover:border-black transition duration-1000 ease-in-out bg-primary"
                  >
                    Log Out
                  </button>
                </Link>
                
              </>
            )}
          </div>
        </nav>

      </div>
    </div>
  );
};

export default AdminDash;