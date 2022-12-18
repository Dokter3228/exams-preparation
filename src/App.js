import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sau from "./pages/Sau";
import Thermo from "./pages/Thermo";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Sau />} />
          <Route path="thermo" element={<Thermo />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
