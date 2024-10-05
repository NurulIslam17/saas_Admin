import React, { useEffect, useState } from "react";
import MainHeader from "../components/MainHeader";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUsers = () => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Something went wrong.");
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <MainHeader name="User List" />
      <div className="overflow-x-auto shadow-slate-200 border-slate-950">
        <table className="table border-spacing-3">
          <thead className="bg-black text-yellow-50">
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Email</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {loading
              ? "Loading..."
              : users &&
                users.map((user, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <div
                        className={`badge badge-${
                          user.is_active === 1 ? "primary" : "neutral"
                        } font-mono font-bold`}
                      >
                        {user.is_active === 1 ? "Active" : "Inactive"}
                      </div>
                    </td>
                    <td>
                      <div
                        className={`badge badge-${
                          user.type === 1 ? "accent" : "warning"
                        } font-mono font-bold`}
                      >
                        {user.type === 1 ? "Admin" : "User"}
                      </div>
                    </td>
                    <td>
                      <button className="bg-blue-500 badge-neutral my-0 py-1 px-3 font-serif font-bold ms-2">
                        Edit
                      </button>
                      <button className="bg-red-500 my-0 py-1 px-3 font-serif font-bold ms-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
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

export default User;
