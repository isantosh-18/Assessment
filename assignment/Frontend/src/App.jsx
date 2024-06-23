import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios'

import './App.css'

function App() {
  const  [data,setData]=useState([]);
  const [page,setPage]=useState(0)

  // useEffect (  ()=>{
  //   axios.get("http://localhost:3000/getprod",{headers:{"page":page}}).then((res)=>{
  //     setData(res.data);
  //     console.log(res.data)
    
  //   })
  // },[])
  
  useEffect(() => {
    (async ()=>{
    
        const response = await axios.get('http://localhost:3000/getprod', {
          'headers': { 'page': page }
        });
        setData(response.data);
        console.log("hi");
      
        
      })()}
  ,[page]);

 
    function change(Index){
  setPage((prev)=>{
    if((Index===-1 && prev===0)|| (Index===1 &&data.length<10)){
      return prev
    }
    return prev+Index
  });
}
 return(
  <div>
    <div className='search'>
    <input type='search'/>
    <button>search</button>
    <select className='months' >
      <option>select</option>
      <option>january</option>
      <option>febuary</option>
      <option selected>march</option>
      <option>april</option>
      <option>may</option>
      <option>june</option>
      <option>july</option>
      <option>August</option>
      <option>September</option>
      <option>october</option>
      <option>November</option>
      <option>December</option>
      

    </select>
    </div>
   
  
    <table border={1}>
      <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Price</th>
        <th>Description</th>
        <th>Category</th>
        <th>Image</th>
        <th>Sold</th>
        <th>DateOfSale</th>
      </tr>
      </thead>

    <tbody>
    {data.map((ind,index)=>{
      console.log(ind.sold)
      return(
      <tr key={index}>
        <td>{ind.id}</td>
        <td>{ind.title}</td>
        <td>{ind.price}</td>
        
        <td>{ind.description}</td>
        <td>{ind.category}</td>
        
        <td><img src={ind.image} style={{width:"40%",height:"40%"}}/></td>
        <td>{ind.sold?"true":"false"}</td>
        <td>{ind.dateOfSale}</td>
        
      </tr>
      )
    })}
    </tbody>
    </table>
    <div className='buttons'>{page!==0 &&<button onClick={()=>change(-1)} className='but1'>prev</button>}
    {data.length===10&&<button onClick={()=>change(1)}next className='but2'>next</button>}
    </div>
  </div>
 )
}

export default App
