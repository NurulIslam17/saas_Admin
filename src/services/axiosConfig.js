import axios from "axios";

const axiosInstance = axios.create();

const csrfToken = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute("content");

  if (csrfToken) {
    axiosInstance.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
  } else {
    console.error("CSRF token not found in meta tag.");
  }
export default axiosInstance;
