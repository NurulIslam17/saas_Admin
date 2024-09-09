import { Route, Routes } from "react-router-dom";
import "./App.css";
import NoPage from "./pages/NoPage";
import Layout from "./components/layout/Layout";
import Category from "./pages/Category";
import Post from "./pages/Post";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/category" element={<Category />} />
        <Route path="/post" element={<Post />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
