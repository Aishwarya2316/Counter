import './counter.css'
import React,{useState} from "react";

const Counter=()=>{
    const[count,setCount]=
    useState(0);
    return(
        <>
        <div className="d1">
            <p className='p2'> Counter With Hook</p>
            <p  className="p1">click {count}  time</p>
            <button className='b1' onClick={()=>setCount(count+1)}>increase</button>
            <button className='b2' onClick={()=>setCount(count-1)}>decrease</button>

        </div>
        
        </>
    );
}
export default Counter;