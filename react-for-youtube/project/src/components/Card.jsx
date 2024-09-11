import React from 'react';
import { FaFileLines } from "react-icons/fa6";
import { FaArrowCircleDown } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion"

function Card ({data, reference}) {
  console.log("fetching data", data);
  return (
    < motion.div 
    drag 
    dragConstraints={reference} 
     whileDrag={{scale:1}}
     dragElastic={0.1}
     dragTransition={{bounceStiffness:100,bounceDamping:150}}
    className="relative  flex-shrink-0 w-60  h-72 bg-zinc-800 rounded-[30px] text-white py-5 px-5 overflow-hidden">
      <FaFileLines />
      <p className="text-xs mt-5 font-semibold">{data.desc}</p>
      <div className=' absolute bottom-0 left-0 footer w-full  '>
       <div className='flex items-center justify-between px-8 py-3 mb-3'>
       <h5>{data.filesize}</h5>
       {data.close ?<IoCloseCircle /> :<FaArrowCircleDown />}
       
        </div> 
        {data.tag.isOpen && (
        <div className={`tag w-full py-4 ${data.tag.tagColor  ==='blue'? 'bg-blue-600':'bg-green-600'} flex items-center justify-center`}>
          <h3 className='text-sm font-semibold' >{data.tag.tagTitle}</h3>
        </div>
        )}
        

      </div>
    </motion.div>
  )
}

export default Card