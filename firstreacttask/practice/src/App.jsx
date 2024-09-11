import React from 'react';
import Mystate from './Mystate';
import Product from './Product';


function App() {
  return (
   <div className="w-full h-screen bg-red-900 p-4 ">
    <div className="w-40 h-40 bg-lime-600 m-8 p-6 text-white">
      <h1>Hello kaise ho</h1>
    </div>
    
    <Mystate  />
    <Product  age="25" data={{age:32,name:"shakir"}}/>
   </div>

  )
  
}

export default App