import React , {useRef}from 'react'

function RefHook() {
    const currentWord = useRef();
  return (
    <div>RefHookEmail
<input  type='text' ref={currentWord}   onChange={() => currentWord.current } />
   <input  type='number' ref={currentWord} onChange={() => console.log(currentWord.current.value)  } />
  
    </div>

  )
}

export default RefHook