import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/movies" element={<h1>Movies Page</h1>} />
          <Route
            path="/moviedetails/:id"
            element={<h1>Home Details Page</h1>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
