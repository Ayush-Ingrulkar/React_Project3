import React, { useContext } from 'react'
import { ContextApi } from './ContextApi'
function MyComponent() {
    const {text,setText}=useContext(ContextApi)
  return (
    <>
    <div>{text}</div>
    <button onClick={()=>setText('Form is Successfully Submitted')}>SUBBMIT</button>
    </>
  )
}

export default MyComponent