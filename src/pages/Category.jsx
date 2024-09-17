import React, { useEffect, useState } from "react";
import MainHeader from "../components/MainHeader";
import Loader from "../components/Loader";
import Create from "../components/category/Create";
import axiosInstance from "../services/axiosConfig";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = () => {
    axiosInstance.get(`http://127.0.0.1:8000/api/categories`).then((data) => {
      setCategories(data.data.data);
      setLoading(false);
    });
  };

  const deleteCategory = (e, id) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this category?")) {
      alert(`Category with ID ${id} will be deleted.`);

      axiosInstance
        .delete(`http://127.0.0.1:8000/api/categories/${id}`)
        .then((response) => {
          console.log("Category deleted:", response.data);
        })
        .catch((error) => {
          console.error("There was an error deleting the category!", error);
        });
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <MainHeader name="Category List" modalId="create_category" />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>
        </div>
        {loading ? <Loader /> : ""}

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 p-5">
          <thead className="text-xs uppercase bg-gray-500 text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                SL
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categories &&
              categories.map((category, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="text-base font-semibold">
                      {category.name}
                    </div>
                  </th>

                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${
                          category.status === "active"
                            ? " bg-green-500 me-2"
                            : " bg-red-500 me-2"
                        }`}
                      ></div>
                      {category.status === "active" ? "Active" : "Inactive"}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={(e) => deleteCategory(e, category.id)}
                      className="bg-red-500 p-1 text-white border-r-4"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Create modalOpenFor="create_category" />
    </>
  );
};

export default Category;
