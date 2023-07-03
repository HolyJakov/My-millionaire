import {React,useState} from 'react'
import Trivia from './Trivia';
import Timer from './Timer';
const Games = ({questionNumber, setQuestionNumber,showCode,setShowCode,username,setUsername}) => { 
  const [time,setTime] = useState(30)
  const [score,setScore] = useState("$0")
  return (
    <div className='h-[100%] relative'>
      <div className='user flex justify-between font-bold p-3 items-center'>
        <div className='logout flex gap-2'>
          <div ><button className='bg-red-700 px-2 py-1 rounded-md' onClick={()=>setShowCode(true)} >Quit</button></div>
          <div > 
          <button className='exit bg-red-900 px-2 py-1 rounded-md'
          onClick={()=>{
          setUsername(null)
          setQuestionNumber(0)
          setScore("$0")
            }}
      >Exit</button></div>
        </div>
        <div className='user-details flex flex-col gap-2'>
          <h3 className='username text-orange-300'>User:{username}</h3>
          <h3 className='earnings text-orange-300'>Earnings:{score}</h3>
        </div>
      </div>


      <div className='h-[35%] flex items-center'>
        <div className='p-4 border border-4 rounded-full w-[75px] h-[75px] flex items-center justify-center font-bold text-2xl'>
          <h1><Timer
          questionNumber={questionNumber}
          setShowCode ={setShowCode}
          time={time}
          setTime={setTime}
          /></h1>
        </div>
      </div>
      <div className='h-[65%}'>
        <Trivia
        questionNumber={questionNumber}
        setQuestionNumber ={setQuestionNumber}
        showCode ={showCode}
        setShowCode ={setShowCode}
        setTime={setTime}
        score={score}
        setScore ={setScore}
        />
        </div>
    </div>
  )
}

export default Games