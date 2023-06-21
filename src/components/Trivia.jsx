import {React,useState,useEffect} from 'react'
import useSound from 'use-sound'
import data from './Data'
import money from './Constant'
import play from '../assets/lets-play.mp3'
import correct from '../assets/correct-answer.mp3'
import wrong from '../assets/wrong-answer.mp3'


const Trivia = ({questionNumber,setQuestionNumber,showCode, setShowCode,setTime,score,setScore}) => {
    
    const [giveClass, setGiveClass] = useState("")
    const [selectedAnswer,setSelectedAnswer] =useState(null)
    
    
    const [letsPlay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);
    


    useEffect(()=>{
      if(questionNumber>1){
        setScore(money.find((item)=>item.id === questionNumber).amount);
      } else if(questionNumber===1){setScore(money.find((item)=>item.id === 1).amount)}
      
      else{setScore("$0")}
    },[questionNumber,setScore])
    
    
    useEffect(()=>{
      letsPlay()
    },[letsPlay])
    const handleAnswer = (answer)=>{
      console.log(answer)
      if(answer.isCorrect===true ){
        setSelectedAnswer(answer)
        setGiveClass("answers correct")
        correctAnswer()
        questionNumber===10 && setScore(money.find((item)=>item.id === 11).amount)
        
        setTimeout(()=>{
          if (questionNumber < data.length - 1) {
            setQuestionNumber(questionNumber + 1);
            setSelectedAnswer(null);
          }
          
          else {
            setShowCode(true);
          }
        },[4000])
        
        
         
      }
       else {
         setSelectedAnswer(answer)
        setGiveClass("answers wrong")
        wrongAnswer()
         setTimeout(()=>{setShowCode(true)},[4000])
       
      }
    };
    
  return (
    <>
      {showCode?
      (<>
        <div className='money-total text-3xl font-extrabold'>You've  earned {score}</div>
        {setTime(0)}
      </>)
      :
      (<div className='flex flex-col items-center justify-around h-[100%]  '>
        <div className='questions w-[80%] border rounded-3xl bg-slate-900 text-center p-4 text-[20px]'>
          <h1>{data[questionNumber].questions}</h1>
        </div>

        <div className='answerdiv flex w-[100%] mt-10 justify-center flex-wrap'>
         {
           data[questionNumber].options.map((a)=>(
             
            <div key={a.id} onClick={()=>!selectedAnswer && handleAnswer(a)}className={selectedAnswer===a? giveClass:'answers'} >{a.option}</div>
           ))
         }
        
        
        </div>
      </div>)}
    </>)
}

export default Trivia