import React,{useState} from 'react';
import Nav from './Nav.js';
function Portfolio(){
    
    const[pgm,setpgm]=useState(null);
    const[name,setname]=useState(null);
        
        setTimeout(()=>{setpgm("I am a web developer and java programmer")},2000);
        setTimeout(()=>{setname("Hi I am Gokulnath V")},1000);
    return(
        <div>
        <Nav/>
        <div  style={{backgroundImage:"url('https://img.freepik.com/free-vector/stream-binary-code-design_53876-97406.jpg?size=626&ext=jpg&ga=GA1.2.1950086803.1687017148&semt=ais')",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",position:"absolute",height:"90%"}} class="w-100">
        <h1> <marquee class="text-white">welcome to my Portfolio</marquee></h1>
        <h1 class="text-white">{name}</h1>
        <h1 class="text-white"> {pgm}</h1>
        
        
        
        </div></div> 
   );
}
export default Portfolio;