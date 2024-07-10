import React from "react";
import { useReducer } from "react";
import { useProteinsContext } from "../../hooks/useProteinsContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";

const ManageProteins = ({ proteins }) => {
  const { dispatch } = useProteinsContext();
  const { user } = useAuthContext();
  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);

  const handleClick = async (proteinId) => {
    if (!user) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:9092/api/proteins/admindash/products/${proteinId}`,
        {
          method: "DELETE",
          headers: {
            'Authorization': `Bearer ${user.token}`,
          },
        }
      );
      forceUpdate()

      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "DELETE_PROTEIN", payload: json });
      }
    } catch (error) {
      console.error("Error deleting protein:", error);
    }
  };




  return (
    <div className="ml-[160px]">
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />

      <div class="mx-auto  max-w-screen-xl bg-white">
        <h1 class="mt-8  ml-4 text-2xl font-bold text-gray-900">Product Management</h1>

      </div>
      <div class=" bg-gray-50">
        <div class="mx-auto max-w-screen-xl px-2 py-4">
          <div class="mt-4 w-full">
            <div class="flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
              <form class="relative flex w-full max-w-2xl items-center">
                <svg class="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8" class=""></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
                </svg>
                <input type="name" name="search" class="h-12 w-full border-b-gray-400 bg-transparent py-4 pl-12 text-sm outline-none focus:border-b-2" placeholder="Search by Order ID, Date, Customer" />
              </form>

              <Link to="/admindash/products/add"><button type="button" class="relative mr-auto inline-flex cursor-pointer items-center rounded-full border border-gray-200 bg-primary px-5 py-2 text-center text-sm font-medium text-white hover:bg-black focus:shadow sm:mr-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                Add Products
              </button></Link>
            </div>
          </div>

          <div class="mt-6 overflow-hidden rounded-xl bg-grey-light px-6 shadow lg:px-4">
            <table class="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
              <thead class="hidden border-b lg:table-header-group">
                <tr class="">
                  <td class="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                    Product ID

                  </td>

                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Image</td>
                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Title</td>
                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Company</td>
                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Price</td>
                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Action</td>

                </tr>
              </thead>

              <tbody class="bg-grey-light lg:border-gray-300">
                {proteins.map((protein) => (
                  <tr key={protein._id} className="">

                    <td class="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                      {protein._id}

                    </td>

                    <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell"><div className="w-32 h-36">
                      <img
                        src={protein.imageSrc}
                        className="rounded-t-lg w-24 h-auto rounded-xl"
                      />
                    </div></td>

                    <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{protein.title}</td>
                    <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{protein.company}</td>


                    <td class="whitespace-no-wrap hidden py-4 text-sm  text-primary font-semibold sm:px-3 lg:table-cell">
                      Rs.{protein.price}
                    </td>
                    <td class="  grid gap-4 py-4 text-left text-sm text-gray-600 sm:px-3 ">
                      <button className="py-1 px-2 text-grey-light border border-gray-500 font-semibold rounded-full bg-grey-light">Edit</button>

                      <button className="py-1 px-2 text-white  font-semibold rounded-full bg-black" 
                        onClick={() => {
                          if (window.confirm("Do you want to delete this protein?")) {
                            handleClick(protein._id);
                          }
                        }}
                        >Delete
                      </button>
                    </td>

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

export default ManageProteins;