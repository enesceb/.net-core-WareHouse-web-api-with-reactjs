import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import InventoryContainer from './components/InventoryContainer'



export default function App() {
  return (
   
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Feed/>} />
    <Route path="/Inventory/:id" exact element={<InventoryContainer/>} />
    </Routes>
    </BrowserRouter>
    
  );
}



