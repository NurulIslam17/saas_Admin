import React from "react";

const Modal = ({ isVisible, onClose, children,modalSize }) => {
  if (!isVisible) return null;
  return (
    <>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className={`bg-white p-6 rounded-lg shadow-lg w-${modalSize}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Create</h2>
            <button
              onClick={onClose}
              className="bg-red-500 p-1 text-slate-200 hover:text-gray-700"
            >
              &times;
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
