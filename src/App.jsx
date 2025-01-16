import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Dashbourd from "./components/pages/Dashbourd";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Product />} /> */}

      <Route path="dashbourd" element={<Dashbourd />}>
        {/* Home layout with sidebar */}
      </Route>
      <Route path="/" element={<Login />} /> 
    </Routes>
  );
}

export default App;
