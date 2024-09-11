import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import DataTable from 'react-data-table-component'


const customStyles ={
  headRow:{
  style: {
    backgroundColor :'blue',
    color: 'white'
  }
  },
}


const App = () => {
  const column =[
    {
      name:"ID",
      selector :row =>row.id,
      sortable: true
    },
    {
      name:"Name",
      selector :row=> row.name,
      sortable: true
    },
    {
      name:"Email",
      selector : row=> row.email
    },
    {
      name:"City",
      selector : row=> row.address.city
    }
  ]

  useEffect(()=> {
const fetData = async ()=>{
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => setRecords(res.data))
  .catch(err=> console.log(err));
}
fetData();
  }, [])
  const [records, setRecords]=useState([])
  return (
    <div>
        <DataTable
        columns={column}
        data={records}
        customStyles={customStyles}
        pagination
        ></DataTable>
    </div>
  )
}

export default App