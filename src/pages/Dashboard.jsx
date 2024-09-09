import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-4">

        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-5">
          <div className="bg-green-500 p-6">
            <h2 className="text-white text-xl font-bold">User</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 text-lg">Number of Users:</p>
            <p className="text-2xl font-semibold text-blue-500">120</p>
          </div>
        </div>

        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-5">
          <div className="bg-blue-500 p-6">
            <h2 className="text-white text-xl font-bold">Category</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 text-lg">Number of Categoy:</p>
            <p className="text-2xl font-semibold text-blue-500">04</p>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-5">
          <div className="bg-yellow-500 p-6">
            <h2 className="text-white text-xl font-bold">Post</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 text-lg">Number of Posts:</p>
            <p className="text-2xl font-semibold text-blue-500">100</p>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-5">
          <div className="bg-emerald-500 p-6">
            <h2 className="text-white text-xl font-bold">User</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 text-lg">Number of Users:</p>
            <p className="text-2xl font-semibold text-blue-500">120</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
