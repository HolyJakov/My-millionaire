import {React} from 'react'
import money from './Constant'
const Money = ({questionNumber}) => { 
  return (
    <div className='money-style w-[60%]'>
        {money.map((m)=>(
            <div  style={{backgroundColor:questionNumber+ 1===m.id? "teal":"#D97706"}} className='flex flex-col py-2 px-4 mt-2 rounded-[100px] text-center'>
                <h3>{m.amount}</h3>
                
            </div>
        ))}
    </div>
  )
}

export default Money