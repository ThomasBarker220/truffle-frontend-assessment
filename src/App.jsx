import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import BillForm from "./pages/BillForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="bill-form" element={<BillForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
