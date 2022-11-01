import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Item from "./Item.js"
import './App.css';

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
