import React from 'react'
import './Heading.css'

export default function Heading(props){
    // const heading =  props.quickGame ?
    //  <h1 className='heading'>Quick Game</h1> :
    //  <h1 className='heading'>Not a Quick Game</h1>
    return(
        <div>
            {/* {heading}          */}
            <h1 className='heading'>Quick Game of tic-tac-toe</h1>
        </div>
    )
}