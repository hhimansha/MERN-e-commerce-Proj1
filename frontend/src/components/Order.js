import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Order = () => {
    const { user } = useAuthContext();
    const [carts, setCarts] = useState([]);
  
    useEffect(() => {
      // Retrieve cart items from local storage
      const storedCarts = JSON.parse(localStorage.getItem("cart")) || [];
      setCarts(storedCarts);
    }, []);
  
    // Calculate total price
    const total = carts.reduce((acc, cart) => acc + cart.TotPrice, 0);

    return(
        <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div class="flex flex-col justify-start items-start px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full bg-grey-light rounded-3xl drop-shadow-md">
              <p class="text-lg md:text-xl dark:text-black font-semibold leading-6 xl:leading-5 text-black">Customer’s Cart</p>
            {carts.map((cart) => (
              <div key={cart.id} class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                <div class="pb-4 md:pb-8 w-full md:w-40">
                  <img class="w-full hidden md:block" src={cart.imageSrc} alt={cart.bookName} />
                  <img class="w-full md:hidden" src={cart.imageSrc} alt={cart.bookName} />
                </div>
                <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                  <div class="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 class="text-xl dark:text-black xl:text-2xl font-semibold leading-6 text-black">{cart.bookName}</h3>
                    <div class="flex justify-start items-start flex-col space-y-2">
                      <p class="text-sm dark:text-gray-400 leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Author: </span> {cart.author}</p>
                    </div>
                  </div>
                  <div class="flex justify-between space-x-8 items-start w-full">
                    <p class="text-base dark:text-black xl:text-lg leading-6">{cart.price}</p>
                    <p class="text-base dark:text-black xl:text-lg leading-6 text-gray-800">{cart.qty}</p>
                    <p class="text-base dark:text-black xl:text-lg font-semibold leading-6 text-gray-800">{cart.TotPrice}</p>
                  </div>
                </div>
              </div>
          ))}
              
            </div>
            <div class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
              <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full  bg-grey-light rounded-3xl drop-shadow-md space-y-6">
                <h3 class="text-xl e font-semibold leading-5 text-black">Summary</h3>
                <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div class="flex justify-between w-full">
                    <p class="text-base text-black leading-4 ">Subtotal</p>
                    <p class="text-base text-black leading-4 ">${total}</p>
                  </div>
                  <div class="flex justify-between items-center w-full">
                    <p class="text-base text-black leading-4 ">Discount <span class="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">STUDENT</span></p>
                    <p class="text-base text-black leading-4 ">-$28.00 (50%)</p>
                  </div>
                  <div class="flex justify-between items-center w-full">
                    <p class="text-base text-black leading-4 ">Shipping</p>
                    <p class="text-base text-black leading-4 ">$8.00</p>
                  </div>
                </div>
                <div class="flex justify-between items-center w-full">
                  <p class="text-base text-black font-semibold leading-4 ">Total</p>
                  <p class="text-base text-black font-semibold leading-4 ">$36.00</p>
                </div>
              </div>
              <div class="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-grey-light rounded-3xl drop-shadow-md space-y-6">
                <h3 class="text-xl  font-semibold leading-5 text-black">Shipping</h3>
                <div class="flex justify-between items-start w-full">
                  <div class="flex justify-center items-center space-x-4">
                    <div class="w-8 h-8">
                      <img class="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                    </div>
                    <div class="flex flex-col justify-start items-center">
                      <p class="text-lg leading-6 text-black font-semibold ">DPD Delivery<br /><span class="font-normal">Delivery with 24 Hours</span></p>
                    </div>
                  </div>
                  <p class="text-lg font-semibold leading-6 text-black">$8.00</p>
                </div>
           
              </div>
            </div>
          </div>
          <div class="bg-grey-light rounded-3xl drop-shadow-md w-full xl:w-1/2 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
            <div class="w-full max-w-lg mx-auto">
            <h2 class="text-lg font-medium mb-6">Delivery Address</h2>
            <div className="delivery info border-gray-200 flex mb-4">
            <p className="text-base text-black font-semibold leading-4">Street : </p>
            <p className="text-base text-gray-400 font-semibold leading-4"> {user?.DeliveryAddress?.street || 'N/A'}</p>
          </div>
          <div className="delivery info border-gray-200 flex mb-4">
            <p className="text-base text-black font-semibold leading-4">City : </p>
            <p className="text-base text-gray-400 font-semibold leading-4"> {user?.DeliveryAddress?.city || 'N/A'}</p>
          </div>
          <div className="delivery info border-gray-200 flex mb-4">
            <p className="text-base text-black font-semibold leading-4">State : </p>
            <p className="text-base text-gray-400 font-semibold leading-4"> {user?.DeliveryAddress?.state || 'N/A'}</p>
          </div>
          <div className="delivery info border-gray-200 border-b pb-4a flex mb-4">
            <p className="text-base text-black font-semibold leading-4">Zip code : </p>
            <p className="text-base text-gray-400 font-semibold leading-4 mb-6"> {user?.DeliveryAddress?.zipCode || 'N/A'}</p>
          </div>

                <h2 class="text-lg font-medium mb-6 mt-4">Payment Information</h2>
                <form>
                    <div class="grid grid-cols-2 gap-6">
                        <div class="col-span-2 sm:col-span-1">
                            <label for="card-number" class="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                            <input type="text" name="card-number" id="card-number" placeholder="0000 0000 0000 0000" class="w-full py-3 px-4 border border-gray-400 rounded-full focus:outline-none focus:border-blue-500"/>
                        </div>
                        <div class="col-span-2 sm:col-span-1">
                            <label for="expiration-date" class="block text-sm font-medium text-gray-700 mb-2">Expiration Date</label>
                            <input type="text" name="expiration-date" id="expiration-date" placeholder="MM / YY" class="w-full py-3 px-4 border border-gray-400 rounded-full focus:outline-none focus:border-blue-500"/>
                        </div>
                        <div class="col-span-2 sm:col-span-1">
                            <label for="cvv" class="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                            <input type="text" name="cvv" id="cvv" placeholder="000" class="w-full py-3 px-4 border border-gray-400 rounded-full focus:outline-none focus:border-blue-500"/>
                        </div>
                        <div class="col-span-2 sm:col-span-1">
                            <label for="card-holder" class="block text-sm font-medium text-gray-700 mb-2">Card Holder</label>
                            <input type="text" name="card-holder" id="card-holder" placeholder="Full Name" class="w-full py-3 px-4 border border-gray-400 rounded-full focus:outline-none focus:border-blue-500"/>
                        </div>
                    </div>
                    <div class="mt-8">
                        <button type="submit" class="w-full bg-primary  text-white font-medium py-3 rounded-full focus:outline-none">Place order</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Order;