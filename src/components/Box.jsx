import React from 'react'
import './Box.css'

export default function Box(props){
    const style = props.value === 'X' ? 'box x' : 'box o'
    return(
        
        <button className={style} onClick={props.setSign}>{props.value}</button>
    )
}
