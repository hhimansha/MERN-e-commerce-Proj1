import { Link } from 'react-router-dom';
import React, { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import UserOrder from './UserOrder';

const User = ({ successMessage }) => {
  const { user } = useAuthContext();

  return (
    <div className=''>
    <main class="flex-1 md:p-0 lg:pt-8 lg:px-56  flex flex-col  mx-auto">
  <section class="bg-grey-light shadow rounded-3xl shadow-lg mt-10">

    <div class="md:flex">
      <h2 class="text-lg text-primary font-semibold bg-grey mb-4 text-left w-full py-2 pl-10 rounded-t-3xl">User Profile Details</h2>
    </div>
    <form className='p-10'>
      <div class="md:flex mb-8 ">
        <div class="md:w-1/3">
          <legend class="tracking-wide text-sm">Personal Details</legend>
        </div>
      {user && (
      <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
        <div class="md:flex mb-4">
          <div class="md:flex-1 md:pr-3">
            <label class="block  tracking-wide text-charcoal-darker text-xs font-bold">First Name</label>
            <input class="w-full rounded-xl  p-2 border-0" type="text" readOnly  placeholder={user.firstname}/>
          </div>
          <div class="md:flex-1 md:pl-3">
            <label class="block  tracking-wide text-charcoal-darker text-xs font-bold">Last Name</label>
            <input class="w-full shadow-inner p-2 border-0" type="text" readOnly placeholder={user.lastname}/>
          </div>
        </div>
        <div class="md:flex mb-4">
          <div class="md:flex-1 md:pr-3">
              <label class="block  tracking-wide text-charcoal-darker text-xs font-bold">Email Address</label>
              <input class="w-full shadow-inner p-2 border-0" type="text" readOnly placeholder={user.email}/>
            </div>
            <div class="md:flex-1 md:pl-3">
              <label class="block  tracking-wide text-charcoal-darker text-xs font-bold">Password</label>
              <input class="w-full shadow-inner p-2 border-0" type="password" readOnly placeholder="********"/>
            </div>
          </div>
        </div>
      )}
      </div>
    
      <div class="md:flex mb-8">
        <div class="md:w-1/3">
          <legend class=" tracking-wide text-sm">Delivery Address</legend>
        </div>
      {user && user.DeliveryAddress && Object.keys(user.DeliveryAddress).length > 0 && (
        <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
          <div class="mb-4">
            <label class="block  tracking-wide text-xs font-bold">Street Address</label>
            <input class="w-full shadow-inner p-2 border-0" type="text" readOnly placeholder={user.DeliveryAddress.street}/>
          </div>
          <div class="mb-4">
            <label class="block  tracking-wide text-charcoal-darker text-xs font-bold">City</label>
            <input class="w-full shadow-inner p-2 border-0" type="text" readOnly placeholder={user.DeliveryAddress.city}/>
          </div>
          <div class="mb-4">
            <label class="block  tracking-wide text-charcoal-darker text-xs font-bold">State</label>
            <input class="w-full shadow-inner p-2 border-0" type="text" readOnly placeholder={user.DeliveryAddress.state}/>
          </div>
      <div class="mb-4">
            <label class="block  tracking-wide text-charcoal-darker text-xs font-bold">Zip Code</label>
            <input class="w-full shadow-inner p-2 border-0" type="text" readOnly placeholder={user.DeliveryAddress.zipCode}/>
          </div>
        </div>
      )}
      </div>
      
      </form>
  </section>
  <div className='My-orders'>
        <UserOrder />
      </div>
  </main>

  </div>





  );
};

export default User;
