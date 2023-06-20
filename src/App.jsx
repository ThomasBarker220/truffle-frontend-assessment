import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import BillForm from "./pages/BillForm";
import { useSelector } from "react-redux";
import Modal from "./components/Modal";

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <>
                {isOpen && <Modal />}
                <Home />
              </>
            }
          />
          <Route path="bill-form" element={<BillForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
