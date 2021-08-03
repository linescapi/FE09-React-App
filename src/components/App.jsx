import { useState } from "react";
import { AddItem } from "./AddItem";
import { Items } from "./Items";

export const App = () => {
  const [items, setItems] = useState([]);
  return <> 
  <AddItem addItem = {(item) => {setItems([...items, item])}} /> 
  <Items items = {items} /> 
  </>
}