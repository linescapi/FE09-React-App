import { useState } from "react";

export const AddItem = ({addItem}) => {
  const [item, setItem] = useState("");
  return <div>
  <button onClick = {() => {addItem(item)}}>Add</button>
  <input type="text" value={item} onChange = {e => {setItem(e.target.value)}} />
  </div>
};