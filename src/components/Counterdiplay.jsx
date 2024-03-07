import React from 'react'
import { useRecoilState,useRecoilValue } from 'recoil'
import { counter } from '../atom/counter'
import { Computecounter } from '../selector/Computecounter';
export default function Counterdisplay() {
    const [data,setData]=useRecoilState(counter);
    const res=useRecoilValue(Computecounter)
  return (
    <div>
    <h1> you have clicked  {data} times</h1>
     <button onClick={()=>setData(data+1)}> Increment</button>
     <h1>two times of click {res}</h1>
    </div>
  )
}
