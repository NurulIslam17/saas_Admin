import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Create = (props) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const saveCategory = async (data) => {
    data.status = data.status === false ? "inactive" : "active";
    
    const csrfToken = document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/categories",
        data,
        {
          headers: {
            "X-CSRF-TOKEN": csrfToken,
          },
        }
      );
      console.log("Response:", response.data);
      alert("Category Created successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form");
    }
  };

  return (
    <>
      <dialog id={props.modalOpenFor} className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(saveCategory)}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>

            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Create New Category
                </h2>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-full">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name <span className="text-red-700">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        {...register("category", {
                          required: "Category name is required.",
                        })}
                        id="category"
                        name="category"
                        type="text"
                        autoComplete="given-name"
                        placeholder="Enter Category name"
                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {errors.category && (
                        <p className="text-red-700">Last name is required.</p>
                      )}
                    </div>
                  </div>

                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        {...register("status")}
                        id="status"
                        name="status"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="status"
                        className="font-medium text-gray-900"
                      >
                        Active
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Create;
