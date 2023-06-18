import React,{useState} from 'react';
var update={};
function Task2(props){
    var[green,setgreen]=useState(null);
    var[red,setred]=useState(null);
    var[yellow,setyellow]=useState(null);
    var[orange,setorange]=useState(null);
    var[pink,setpink]=useState(null);
    var[blue,setblue]=useState(null);
    function buttons(){
green=<button style={{width:"60px",height:"60px",backgroundColor:"green"}} onClick={()=>{ update={backgroundColor:"green"};
setgreen("");}}>{props.name[0]}</button>;

red=<button style={{width:"60px",height:"60px",backgroundColor:"red"}} onClick={()=>{ update={backgroundColor:"red"};
setred("");}}>{props.name[1]}</button>;

yellow=<button style={{width:"60px",height:"60px",backgroundColor:"yellow"}} onClick={()=>{ update={backgroundColor:"yellow"};
setyellow("");}}>{props.name[2]}</button>;

orange=<button style={{width:"60px",height:"60px",backgroundColor:"orange"}} onClick={()=>{ update={backgroundColor:"orange"};
setorange("");}}>{props.name[3]}</button>;

pink=<button style={{width:"60px",height:"60px",backgroundColor:"pink"}} onClick={()=>{ update={backgroundColor:"pink"};
setpink("");}}>{props.name[4]}</button>;

blue=<button style={{width:"60px",height:"60px",backgroundColor:"blue"}} onClick={()=>{ update={backgroundColor:"blue"};
setblue("");}}>{props.name[5]}</button>;
setgreen(green);
setred(red);
setyellow(yellow);
setorange(orange);
setpink(pink);
setblue(blue);
    }
    return(<div><div>{green}{red}{yellow}{orange}{pink}{blue}</div><button onClick={buttons} style={update}>Pick a color</button></div>);
}
export default Task2;