import React, { useState } from 'react';
import Product from './Product';

function App() {
  var[a,b] = useState(69);
  return (
   <div className="w-full h-screen bg-red-700 p-4">
    <div className="w-44 h-32  rounded-xl bg-black p-3">
      <h3 className="text-slate-100">Hello from react</h3>
    </div>
    <h1>{a}</h1>
    <button onClick={()=>b(a+1)} className="px-3 py-1 bg-green-500 text-xs">click</button>
  <Product />
   </div>
 
  );
}

export default App