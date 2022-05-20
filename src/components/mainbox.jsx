import { useState } from "react";
import {Box}from "./box";
import { Popup } from "./popup";
export const Mainbox=()=>{
  const [player,setPlayer]=useState("p1");
  const [winstat,setWinstat]=useState(false);
  const [tictac,setTictac]=useState({
      f1:"",
      f2:"",
      f3:"",
      f4:"",
      f5:"",
      f6:"",
      f7:"",
      f8:"",
      f9:"",
  })



  

  const change=()=>{
      if(player=="p1"){
          setPlayer("p2");
      }
      else(
          setPlayer("p1")
      )
    
  }
  const first=(e)=>{
      if(player=="p1"){
        setTictac({...tictac,[e.target.id]:"X"})
        
      }
      else{
          setTictac({...tictac,[e.target.id]:"O"})
          check()
      }
     
      change()
      
  }

const check=()=>{
    if(tictac.f1==tictac.f5&& tictac.f5==tictac.f9){
        if(tictac.f1!=""&&tictac.f5!=""&&tictac.f9!=""){
            setWinstat(true);
        }
    }
    else if(tictac.f1==tictac.f4&& tictac.f4==tictac.f7){
        if(tictac.f1!=""&&tictac.f4!=""&&tictac.f7!=""){
            setWinstat(true);
        }
    }
    else if(tictac.f2==tictac.f5&& tictac.f5==tictac.f8){
        if(tictac.f2!=""&&tictac.f5!=""&&tictac.f8!=""){
            setWinstat(true);
        }
    }
    else if(tictac.f3==tictac.f6&&tictac.f6==tictac.f9){
        if(tictac.f3!=""&&tictac.f6!=""&&tictac.f9!=""){
            setWinstat(true);
        }
    }
    else if(tictac.f3==tictac.f5&&tictac.f5==tictac.f7){
        if(tictac.f3!=""&&tictac.f5!=""&&tictac.f7!=""){
            setWinstat(true);
        }
    }
    else if(tictac.f1==tictac.f2&&tictac.f2==tictac.f3){
        if(tictac.f1!=""&&tictac.f2!=""&&tictac.f3!=""){
            setWinstat(true);
        }
    }
    else if(tictac.f4==tictac.f5&&tictac.f5==tictac.f6){
        if(tictac.f4!=""&&tictac.f5!=""&&tictac.f6!=""){
            setWinstat(true);
        }
    }
    else if(tictac.f7==tictac.f8&&tictac.f8==tictac.f9){
        if(tictac.f7!=""&&tictac.f8!=""&&tictac.f9!=""){
            setWinstat(true);
        }
        
    }
}
console.log(tictac)
console.log(winstat)
    return(
        <div>
            <h3>player 1 [X]</h3>
            <h3>player 2 [O]</h3>
            <p>*first player start the game always.</p>

        {winstat?<Popup player={player}/>:<div style={{display:"grid",gridTemplateColumns:"repeat(3,60px)",gridGap:"4px",marginLeft:"43%"}}> 
          <Box id="f1" onClick={first}>{tictac.f1}</Box>
          <Box id="f2"onClick={first}>{tictac.f2}</Box>
          <Box id="f3" onClick={first}>{tictac.f3}</Box>
          <Box id="f4" onClick={first}>{tictac.f4}</Box>
          <Box id="f5" onClick={first}>{tictac.f5}</Box>
          <Box id="f6" onClick={first}>{tictac.f6}</Box>
          <Box id="f7" onClick={first}>{tictac.f7}</Box>
          <Box id="f8" onClick={first}>{tictac.f8}</Box>
          <Box id="f9" onClick={first}>{tictac.f9}</Box>
        </div>}
        </div>
    )
}