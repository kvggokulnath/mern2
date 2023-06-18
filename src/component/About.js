import Nav from './Nav.js';
import React,{useState} from 'react';
function About(){
    const[myself,myset]=useState(null);
    const[sty,styset]=useState(null);
    const[hob,hobset]=useState(null);
    setTimeout(()=>{myset("I am Gokulnath, I am good at web development and java programming and also I am good problem solver, my home town is Tiruvarur,Tamilnadu")},1000)
    setTimeout(()=>{styset("I am Final year student of B.Tech IT in VIT University vellore.")},2000);
    setTimeout(()=>{hobset("My hobbies are explore new things,listening songs and traveling")},3000)
    return(<div>
    <Nav/>
    <div  style={{backgroundImage:"url('https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg&ga=GA1.2.1950086803.1687017148&semt=sph')",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",position:"absolute",height:"90%"}} class="w-100">
   <div class="row">
    <div></div>
<div class="col-6"><h1 class="text-white">{myself}</h1></div>
<div class="col-6"><h1 class="text-white">{sty} </h1></div>
   </div>
<div class="row">
    <div class="col-4"></div>
    <div class="col-5">
    <h1 class="text-white">{hob}</h1></div></div>


    </div>
    </div>
    );
}
export default About;