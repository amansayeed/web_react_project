import React,{useState} from 'react';
 const Loction = () => {
  
const [count,setCount]=useState();


const search=(event)=>
{

 const data=event.target.value;
 if (data=='')
 {
    setCount();
 }
 else{
    setCount(data);
 }


}

    return(<>
            <img src={`https://loremflickr.com/320/240/${count}`} alt={count}/>
       <input type="search" name="" id="" onChange={search}/>
       
    
    
    </>);

}

export default Loction;


















