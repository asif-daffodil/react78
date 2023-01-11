import "flowbite/dist/flowbite.min.js";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yousuf" element="Amader Yousuf Vai" />
        <Route path="/*" element="Page not found 404!" />
      </Routes>
    </>
  );
}

export default App;
