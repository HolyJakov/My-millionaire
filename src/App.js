import {useState} from 'react'
import './App.css';
import Games from './components/Games';
import Money from './components/Money';
import Start from './components/Start';


function App() {
  const [questionNumber,setQuestionNumber] = useState(0)
  const [showCode,setShowCode] = useState(false)
  const [username,setUsername] = useState(null)
  return (
    <div className="App">
    <>
    {!username? (<Start setUsername ={setUsername} setShowCode={setShowCode}/>)
    :
    (<div className='flex w-[100%]'>
    <div className='game w-[75%]'>
      <Games 
      questionNumber={questionNumber}
       setQuestionNumber={setQuestionNumber}
       showCode = {showCode}
       setShowCode = {setShowCode}
       username = {username}
       setUsername ={setUsername}
      />
    </div>
    <div className='real-money w-[25%] bg-slate-900 flex justify-center py-6 items-center '>
      <Money questionNumber ={questionNumber}/>
    </div>
  </div>)
    }
    </>  
      
    </div>
  );
}

export default App;
