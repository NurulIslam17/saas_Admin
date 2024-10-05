import React, { useEffect, useState } from "react";
import MainHeader from "../components/MainHeader";
import axiosInstance from "../services/axiosConfig";
import Loader from "../components/Loader";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = () => {
    setLoading(true);
    axiosInstance.get(`http://127.0.0.1:8000/api/categories`).then((data) => {
      setCategories(data.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <MainHeader name="Category List" modalId="create_category" />

      <div className="overflow-x-auto shadow-slate-200 border-2 rounded-lg border-slate-950">
        <table className="table border-spacing-3 text-center p-2">
          <thead className="bg-black text-yellow-50">
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {loading ? (
              <tr>
                <td colSpan="4">
                  <Loader />
                </td>
              </tr>
            ) : categories && categories.length > 0 ? (
              categories.map((category, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{category.name}</td>
                  <td>
                    <div className="badge badge-accent font-mono font-bold">
                      {category.status === "active" ? "Active" : "Inactive"}
                    </div>
                  </td>
                  <td>
                    <button className="bg-blue-500 my-0 py-1 px-3 font-serif font-bold rounded-full ms-2">
                      Edit
                    </button>
                    <button className="bg-red-500 my-0 py-1 px-3 font-serif font-bold ms-2 rounded-full text-white hover:bg-slate-500">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No Data Found</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="bg-gray-400 h-1"></div>
        <div className="py-3 px-2 flex justify-between">
          <div className="border-spacing-y-5">
            Total Recoord : {categories ? categories.length : 0}
          </div>
          <div className="join">
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="1"
              defaultChecked
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="2"
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="3"
            />
            <input
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label="4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
