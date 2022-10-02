import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import InventoryTable from './components/InventoryTable'
import AddWareHouse from "./components/AddWareHouse"
import UpdateWareHouse from "./components/UpdateWareHouse"
import InventoryItemsTable from './components/InventoryItemsTable'
import AddInventoryItem from './components/AddInventoryItem'

export default function App() {
  return (
   
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Feed/>} />
    <Route path="/AddWareHouse" exact element={<AddWareHouse/>} />
    <Route path="/AddInventoryItem/:id/add" exact element={<AddInventoryItem/>} />
    <Route path="/UpdateWareHouse/:id" exact element={<UpdateWareHouse/>} />
    <Route path="/WareHouseid/:id" exact element={<InventoryTable/>} />
    <Route path="/WareHouseid/:id/inventoryid/:id" exact element={<InventoryItemsTable/>} />
    </Routes>
    </BrowserRouter>
    
  );
}



