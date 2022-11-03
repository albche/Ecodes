import { Route, Routes } from "react-router-dom";
import Item from "./components/Item.js"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/item" element={<Item />} />
      </Routes>
    </div>
  );
}

export default App;
