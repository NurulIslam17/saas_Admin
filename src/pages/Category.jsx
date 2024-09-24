import React, { useEffect, useState } from "react";
import MainHeader from "../components/MainHeader";
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

  useEffect(() => {
    loadData();
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      <MainHeader name="Category List" modalId="create_category" />

      <div className="overflow-x-auto shadow-slate-200 border-slate-950">
        <table className="table border-spacing-3 text-center">
          <thead className="bg-black text-yellow-50">
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? "Loaging..." : " "}

            {categories && categories.length > 0 ? (
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

        <div className="py-3 flex justify-between">
          <div>Total Recoord : 1323</div>
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
