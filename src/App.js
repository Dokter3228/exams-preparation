import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sau from "./pages/Sau";
import Thermo from "./pages/Thermo";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import Material from "./pages/Material";
import Material2 from "./pages/Material2";
import ExtraMaterial from "./pages/ExtraMaterial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Material />} />
          <Route path="material" element={<Material />} />
          <Route path="material2" element={<Material2 />} />
          <Route path="extraMaterial" element={<ExtraMaterial />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
