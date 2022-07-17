import { useContext } from 'react'
import { IndexContext } from '../reducer/IndexReducer'

function TextButton() {
  const [state, dispatch] = useContext(IndexContext)
  return(
    <div className='space'>
      <button onClick={() => dispatch({ type: 'changeToKor'})}>한글</button>
      <button onClick={() => dispatch({ type: 'changeToEng'})}>English</button>
      <div>{state.text}</div>
    </div>
  )
}

function CountButton() {
  const [state, dispatch] = useContext(IndexContext)
  return(
    <div className='space'>
      <button onClick={() => dispatch({ type: 'minusCount'})}>-</button>
      <button onClick={() => dispatch({ type: 'plusCount'})}>+</button>
      <div>{state.count}</div>
    </div>
  )
}

function Box() {
  
  return (
    <div >
      <TextButton />
      <CountButton />
    </div>
  )
}

export default Box



