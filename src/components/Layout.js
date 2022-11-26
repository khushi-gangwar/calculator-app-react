import React,{useState} from 'react'
import "./Layout.css"
import Output from './output'
import logo from '../assets/img/logo.png'
function Layout(props) {
  let [input,setInput]= useState('0')
  let [result,setresult]=useState('')

  const handleClick=(event)=>{
    const value=event.target.value;
    if (value==='='){
      if(input!==''){
        let res=''
        try{
          res=eval(input)
        }
        catch(err){
          setresult('Math error')
        }
        if(res===undefined){
          setresult('Math error')
        }
        else{
          setresult(input + '=')
          setInput(res)
        }

      }
    }
    else if(value==='C'){
      setInput('0')
      setresult('')
    }
    else if(value ==='DEL'){
      let str =input
      str=str.substring(0,str.length-1)
      setInput(str)
    }
    else if(input ==='0'){
      setInput(value)
    }
    else{
      setInput((input += value))
    }

  }
  return (
    <div className='frame'>
      <div className='calculator'>
        <br></br>
        <Output user={input} answer={result}/>
        <img src={logo} width='300px'/>
        <fiv className='keys'>
          <input type='button' value={'C'} className='button clear' onClick={handleClick}></input>
          <input type='button' value={'DEL'} className='button clear' onClick={handleClick}></input>
          <input type='button' value={'%'} className='button' onClick={handleClick}></input>
          <input type='button' value={'/'} className='button' onClick={handleClick}></input>
          <input type='button' value={'7'} className='button operator' onClick={handleClick}></input>
          <input type='button' value={'8'} className='button operator' onClick={handleClick}></input>
          <input type='button' value={'9'} className='button operator' onClick={handleClick}></input>

          <input type='button' value={'*'} className='button' onClick={handleClick}></input>
          <input type='button' value={'4'} className='button operator' onClick={handleClick}></input>
          <input type='button' value={'5'} className='button operator' onClick={handleClick}></input>
          <input type='button' value={'6'} className='button operator' onClick={handleClick}></input>
          <input type='button' value={'-'} className='button' onClick={handleClick}></input>
          <input type='button' value={'1'} className='button operator' onClick={handleClick}></input>
          <input type='button' value={'2'} className='button operator' onClick={handleClick}></input>
          <input type='button' value={'3'} className='button operator' onClick={handleClick}></input>
          <input type='button' value={'+'} className='button ' onClick={handleClick}></input>
          <input type='button' value={'0'} className='button operator' onClick={handleClick}></input>
          <input type='button' value={'.'} className='button operator' onClick={handleClick}></input>
          <input type='button' value={'='} className='button equal-sign' onClick={handleClick}></input>

        </fiv>
      </div>
    </div>
  )
}

export default Layout
