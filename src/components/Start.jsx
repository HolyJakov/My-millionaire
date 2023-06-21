import {React,useRef} from 'react'

const Start = ({setUsername,setShowCode}) => {
    const inputRef = useRef()
    const handleClick = ()=>{
        inputRef.current.value && setUsername(inputRef.current.value)
        setShowCode(false)
    }
  return (
    <div className='start'>
        <input type="text" placeholder='Enter Name' ref={inputRef} />
        <button onClick={handleClick}>Start Game</button>
    </div>
  )
}

export default Start