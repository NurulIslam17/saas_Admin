import { Route, Routes } from "react-router-dom";
import "./App.css";
import NoPage from "./pages/NoPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
