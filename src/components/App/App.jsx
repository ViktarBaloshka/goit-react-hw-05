import { Routes, Route } from "react-router-dom";
import "./App.modal.css";
import HomePage from "../../pages/HomePage/HomePage";
import Navigation from "../Navigation/Navigation";

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}
