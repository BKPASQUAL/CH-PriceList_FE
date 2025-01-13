import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Dashbourd from "./components/pages/Dashbourd";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Product />} /> */}
      <Route path="/" element={<Dashbourd />}>
        {/* Home layout with sidebar */}
       
      </Route>
    </Routes>
  );
}

export default App;
