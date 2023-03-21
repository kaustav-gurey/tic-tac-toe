import React from 'react'
import './App.css'
import Box from './components/Box.jsx'
import ResetButton from './components/ResetButton'

export default function App(){
  //* stores all the values in the board in a 1D array
  const [values, setValues] = React.useState(Array(9).fill(null))
  //* current sign to be used
  const [currentSign, setCurrentSign] = React.useState('X')
  const [gameInfo, setGameInfo] = React.useState(null)
  const [gameEnd, setGameEnd] = React.useState(false)
  const board = []
  for(let i = 0; i<9; i++){
    board.push(<Box 
      id = {i}
      value = {values[i]}
      setSign = {() => setSign(i)}
      />)
  }
  function setSign(id){
    if(values[id] || gameEnd){
      return
    }
    setValues(oldValues => {
      let newValues = [...oldValues]
      newValues[id] = currentSign
          return newValues
    })
  }
  React.useEffect(() => {
    //* current sign changes everytime the a box is clicked i.e. when the values array is modified
    setCurrentSign(oldSign =>  oldSign === 'X' ? 'O' : 'X' )
    if(!gameEnd && values.every(element => element)){
      setGameEnd(true)
      setGameInfo('Game draw, nobody wins.')
    }
    else{
      if(values[0] && values[0] === values[1]  && values[0] === values[2]){
        setGameEnd(true)
        setGameInfo(`Player ${values[0]} wins!!!`)
      }
      else if(values[3] && values[3] === values[4]  && values[3] === values[5]){
        setGameEnd(true)
        setGameInfo(`Player ${values[3]} wins!!!`)
      }
      else if(values[6] && values[6] === values[7]  && values[6] === values[ 8]){
        setGameEnd(true)
        setGameInfo(`Player ${values[6]} wins!!!`)
      }
      else if(values[0] && values[0] === values[3]  && values[0] === values[6]){
        setGameEnd(true)
        setGameInfo(`Player ${values[0]} wins!!!`)
      }
      else if(values[1] && values[1] === values[4]  && values[1] === values[7]){
        setGameEnd(true)
        setGameInfo(`Player ${values[1]} wins!!!`)
      }
      else if(values[2] && values[2] === values[5]  && values[2] === values[8]){
        setGameEnd(true)
        setGameInfo(`Player ${values[2]} wins!!!`)
      }
      else if(values[0] && values[0] === values[4]  && values[0] === values[8]){
        setGameEnd(true)
        setGameInfo(`Player ${values[0]} wins!!!`)
      }
      else if(values[2] && values[2] === values[4]  && values[2] === values[6]){
        setGameEnd(true)
        setGameInfo(`Player ${values[2]} wins!!!`)
      }
    } 
    
  },[values])
  function resetGame(){
    setValues(Array(9).fill(null))
    setGameEnd(false)
  }
  return (
    <main>
      <div className='game-board'>
        {board}
      </div>
      <ResetButton resetGame={resetGame}/>
      <h1>{gameEnd && gameInfo}</h1>
    </main>
  )
}
