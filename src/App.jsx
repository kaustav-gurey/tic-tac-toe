import React from 'react'
import './App.css'
import Box from './components/Box'
import Heading from './components/Heading'
import ResetButton from './components/ResetButton'

export default function App(){
  //* stores all the values in the board in a 1D array
  const [values, setValues] = React.useState(Array(9).fill(null))
  //* current sign to be used
  const [currentSign, setCurrentSign] = React.useState('X')
  //* shows the current sign to be used in the board
  const [gameInfo, setGameInfo] = React.useState(null)
  //* shows if the current game has ended or not
  const [gameEnd, setGameEnd] = React.useState(false)
  const board = []
  for(let i = 0; i<9; i++){
    board.push(<Box 
      id = {i}
      value = {values[i]}
      setSign = {() => setSign(i)}
      />)
  }
  //* sets the sign of the clicked box with the current sign
  function setSign(id){
    if(values[id] || gameEnd){
      return
    }
    //* modifies the values of array holding the signs of the board
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
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for(let logic of winnerLogic){
      const[a, b, c] = logic
      if(values[a] && values[a] === values[b] && values[a] === values[c]){
        setGameEnd(true)
        setGameInfo(`Player ${values[a]} wins !!! 🎉`)
      }
    }
  },[values])
  function resetGame(){
    setValues(Array(9).fill(null))
    setGameEnd(false)
  }
  return (
    <main>
      <Heading quickGame={false}/>
      <div className='game-board'>
        {board}
      </div>
      <ResetButton resetGame={resetGame}/>
      <h1 className='game-info'>{gameEnd && gameInfo}</h1>
    </main>
  )
}
