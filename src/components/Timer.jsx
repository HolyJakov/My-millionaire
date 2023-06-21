import {React,useEffect} from 'react'

const Timer = ({questionNumber,setShowCode,time,setTime}) => {
    

    useEffect(()=>{
        if (time === 0) return setShowCode(true)
        const interval =setInterval(()=>{
            setTime((prev)=>prev-1);
        },1000)
        return ()=>clearInterval(interval)
    },[setTime,time,setShowCode])

    useEffect(()=>{
        setTime(30)
    },[setTime, questionNumber])
  return (
    <div>{time}</div>
  )
}

export default Timer