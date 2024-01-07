import {Route, Routes } from "react-router-dom";
import Clients from "./Components/Clients/App";

import Productor from "./Components/Producteur/App";
import Admin from "./Components/Admin/App";
import Page from "./Page"


function App(): JSX.Element {
  return (
    <div className="app-container">
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/user/*" element={<Clients />} />
          <Route path="/productor/*" element={<Productor />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
    </div>
  );
}

export default App;
