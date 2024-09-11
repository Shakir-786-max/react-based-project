import {useState} from 'react';
import Card from './Card'
import { useRef } from 'react';


const Forground = () => {
  useState
  const ref = useRef(null);
  const data = [
    {
      desc:"this is description",
      filesize:".9mb",
      close: true,
      tag: {isOpen:true, tagTitle:'Download now', tagColor:'yellow'},
    },
    {
      desc:"this is description",
      filesize:".9mb",
      close: false,
      tag: {isOpen:false, tagTitle:'Upload', tagColor:'blue'},
    },
    {
      desc:"this is description",
      filesize:".9mb",
      close: false,
      tag: {isOpen:true, tagTitle:'Download now', tagColor:'yellow'},
    },
  ];
  return (
    <div ref={ref} className="fixed z-[3] w-full h-screen bg-red-400/50 flex gap-5 flexwrap-wrap p-5">
        {data.map((item, index)=>(
          <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Forground