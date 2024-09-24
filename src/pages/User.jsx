import React from "react";
import MainHeader from "../components/MainHeader";

const User = () => {
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
              <th>Phone</th>
              <th>Profession</th>
              <th>Status</th>
              <th>Status</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>app@gmail.com</td>
              <td>01929123</td>
              <td>Software Engineer</td>
              <td>
                <div className="badge badge-accent font-mono font-bold">
                  Inactive
                </div>
              </td>
              <td>
                <button className="bg-blue-500 my-0 py-1 px-3 font-serif font-bold ms-2">Edit</button>
                <button className="bg-red-500 my-0 py-1 px-3 font-serif font-bold ms-2">Delete</button>
              </td>
            </tr>
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
