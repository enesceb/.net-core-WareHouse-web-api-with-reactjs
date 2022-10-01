import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import InventoryContainer from './components/InventoryContainer'
import AddWareHouse from "./components/AddWareHouse"
import UpdateWareHouse from "./components/UpdateWareHouse"


export default function App() {
  return (
   
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Feed/>} />
    <Route path="/AddWareHouse" exact element={<AddWareHouse/>} />
    <Route path="/UpdateWareHouse/:id" exact element={<UpdateWareHouse/>} />
    <Route path="/Inventory/:id" exact element={<InventoryContainer/>} />
    </Routes>
    </BrowserRouter>
    
  );
}



