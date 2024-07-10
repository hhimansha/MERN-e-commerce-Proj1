import React, { useEffect, useState, useReducer } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useProteinsContext } from "../../hooks/useProteinsContext";
import { Link } from "react-router-dom";

const ManageUsers = () => {
    const { dispatch } = useProteinsContext();
  const { user } = useAuthContext();
  const [usersList, setUsersList] = useState(null);
  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);

  const handleClick = async (userId) => {
    if (!user) {
      return;
    }
  
    try {
      const response = await fetch(`https://mern-e-commerce-proj1.onrender.com/api/users/admindash/users/${userId}`, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // Dispatch the 'DELETE_USER' action with the userId
        dispatch({ type: 'DELETE_USER', payload: { _id: userId } });
      } else {
        const errorJson = await response.json();
        console.error("Error deleting user:", errorJson);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://mern-e-commerce-proj1.onrender.com/api/users/admindash/users/");
        forceUpdate();
        if (response.ok) {
          const json = await response.json();
          setUsersList(json);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [reducerValue]);

  return (
    <div className="ml-[160px] ">
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />
 
<div class="mx-auto  max-w-screen-xl bg-white">
  <h1 class="mt-8  ml-[120px] text-2xl font-bold text-gray-900">User Management</h1>
  
</div>
<div class="ml-[100px] bg-gray-50">
  <div class="mx-auto max-w-screen-xl px-2 py-10">
    <div class="mt-4 w-full">
      <div class="flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
        <form class="relative flex w-full max-w-2xl items-center">
          <svg class="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" class=""></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
          </svg>
          <input type="name" name="search" class="h-12 w-full border-b-gray-400 bg-transparent py-4 pl-12 text-sm outline-none focus:border-b-2" placeholder="Search by Order ID, Date, Customer" />
        </form>

        <button type="button" class="relative mr-auto inline-flex cursor-pointer items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-center text-sm font-medium text-gray-800 hover:bg-gray-100 focus:shadow sm:mr-0">
          <span class="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          <svg class="mr-2 h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filter
        </button>
      </div>
    </div>

    <div class="mt-6 overflow-hidden rounded-xl bg-grey-light px-6 shadow lg:px-4">
      <table class="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
        <thead class="hidden border-b lg:table-header-group">
          <tr class="">
            <td class="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
              User ID
             
            </td>

            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">First Name</td>
            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Last Name</td>
            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Email</td>

            <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Action</td>

          </tr>
        </thead>

        <tbody class="bg-grey-light lg:border-gray-300">
        {usersList && usersList.map((user) => (
              <tr key={user._id} >

            <td class="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
              {user._id}
              <div class="mt-1 flex flex-col text-xs font-medium lg:hidden">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  
                </div>
                <div class="">{user.email}</div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  1 Kg
                </div>
              </div>
            </td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{user.firstname}</td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{user.lastname}</td>

            <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
              {user.email}
            </td>
            <td class="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left"><button className="py-1 px-2 text-white  font-semibold rounded-full bg-black" onClick={() => {
                    if (window.confirm("Do you want to delete this book?")) {
                      handleClick(user._id);
                    }
                  }}
>Delete User</button></td>
            
          </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  </div>
</div>

    </div>


  );
};

export default ManageUsers;