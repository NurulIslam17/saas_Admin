import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Modal from "../components/Modal";

const Post = () => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addMore, setAddMore] = useState(false);
  const [inputFields, setInputFields] = useState([
    { id: 1, name: "", image: "" },
  ]);

  const loadpost = () => {
    axios.get("http://127.0.0.1:8000/api/posts").then((response) => {
      setPost(response.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadpost();
  }, []);

  const handleAddMore = () => {
    setAddMore((setAddMore) => !addMore);
    setInputFields([{ id: 1, name: "", image: "" }]);
  };

  const addField = (e) => {
    e.preventDefault();
    setInputFields([
      ...inputFields,
      { id: inputFields.length + 1, value1: "", value2: "" },
    ]);
  };

  const removeField = (id) => {
    setInputFields(inputFields.filter((field) => field.id !== id));
  };

  const handleInputChange = (id, event) => {
    const newInputFields = inputFields.map((field) => {
      if (field.id === id) {
        return {
          ...field,
          [event.target.name]: event.target.value,
        };
      }
      return field;
    });

    setInputFields(newInputFields);
  };

  return (
    <>
      <div className="flex justify-between mb-4 bg-slate-300 py-1">
        <div>
          <h1 className="font-mono font-extrabold text-[25px] p-2">
            Post List
          </h1>
        </div>

        <div>
          <h1 className="font-mono font-bold text-white text-lg p-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 rounded-full px-3"
            >
              Create
            </button>
          </h1>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
          <div>
            <button
              id="dropdownActionButton"
              data-dropdown-toggle="dropdownAction"
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            >
              <span className="sr-only">Action button</span>
              Action
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdownAction"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownActionButton"
              >
                <li>
                  <Link
                    to=""
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Reward
                  </Link>
                </li>
              </ul>
              <div className="py-1">
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Delete User
                </Link>
              </div>
            </div>
          </div>
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
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                SL
              </th>
              <th scope="col" className="px-6 py-3">
                title
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Post By
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
            {posts &&
              posts.map((post, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="text-base font-semibold">{post.title}</div>
                  </th>
                  <td className="px-6 py-4">{post.category.name}</td>
                  <td className="px-6 py-4">{post.user.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${
                          post.status === "active"
                            ? "bg-green-600"
                            : "bg-red-600"
                        } me-2`}
                      ></div>
                      {post.status === "active" ? "Active" : "Inactive"}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href="#"
                      className="bg-green-500 p-2 font-medium text-white hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Modal
        isVisible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modalSize="1/2"
      >
        <form>
          <div className="mb-4  w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
              required
            />
          </div>
          <div className="flex justify-center gap-4">
            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Category
              </label>
              <select
                name="service"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">-- Select a Category --</option>
                <option value="web_design">Sports</option>
                <option value="seo">Health</option>
                <option value="marketing">Education</option>
              </select>
            </div>

            <div className="mb-4 w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photo
              </label>
              <input
                type="file"
                name="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="mb-4  w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name=""
              id=""
            ></textarea>
          </div>

          <div className="mb-2">
            <input
              type="checkbox"
              name="add_more"
              onChange={handleAddMore}
              id="add-more"
              className="my-3 pl-5"
            />
            <label htmlFor="add-more" className="ml-2">
              Add More Image
            </label>
          </div>

          <div className={addMore ? "block" : "hidden"}>
            {inputFields.map((field) => (
              <div className="flex flex-row w-full gap-3 mb-2" key={field.id}>
                <div className="basis-2/5">
                  <input
                    type="text"
                    name="value1"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter post title"
                    value={field.value1}
                    onChange={(e) => handleInputChange(field.id, e)}
                    required
                  />
                </div>
                <div className="basis-2/5">
                  <input
                    type="file"
                    name="value2"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter post title"
                    value={field.value2}
                    onChange={(e) => handleInputChange(field.id, e)}
                    required
                  />
                </div>
                <div className="basis-1/5 gap-2">
                  <div className="flex justify-end items-end">
                    <button
                      type="button"
                      onClick={(e) => addField(e)}
                      className="bg-green-600 py-2 px-3 text-white"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeField(field.id)}
                      className={`bg-red-600 py-2 px-3 text-white ${
                        field.id == 1 ? "hidden" : ""
                      }`}
                    >
                      x
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between gap-10">
            <button
              type="reset"
              className="px-4 py-2 bg-red-500 text-white rounded-lg w-full"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Post;
