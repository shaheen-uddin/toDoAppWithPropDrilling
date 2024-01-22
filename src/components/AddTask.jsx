import { useState } from "react";
export default function AddTask({ onAdd }) {
  const [name, setName] = useState("");
   
  return (
    <div className="flex gap-1 justify-center">
      <input type="text" className="border rounded-md w-64"
      placeholder="Add name"
      value={name}
      onChange={(e) => setName(e.target.value)}/>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          onAdd(name);
          setName("");
        } }
      >
        
        Add name
      </button>
    </div>
  );
}
