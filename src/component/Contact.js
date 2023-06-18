import Nav from './Nav.js';
import React,{useState} from 'react';
function Contact(){
    var[mail,setmail]=useState(null);
    var[phone,setphone]=useState(null);
    var[whatsapp,setwhatsapp]=useState(null);
    const[data,setdata]=useState(null);
    
    setTimeout(()=>{mail=<li>Mail:<span class="text-info">kvggokulnathv@gmail.com</span></li>
setmail(mail);},1000)
setTimeout(()=>{phone=<li>phone:<span class="text-info">7339647054</span></li>
setphone(phone);},2000)
setTimeout(()=>{whatsapp= <li>whats App:<span class="text-info">8903969441</span></li>
setwhatsapp(whatsapp);},3000)
setTimeout(()=>{setdata("have a good day");},3000);
    return(
        <div>
    <Nav/>
    <div  style={{backgroundImage:"url('https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg&ga=GA1.2.1950086803.1687017148&semt=sph')",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",position:"absolute",height:"90%"}} class="w-100">
    <div><h1 class="text-white"><br/>
        Contact Me through<br/>
        <ul class="text-white" type="none">
        {mail}
        {phone}
       {whatsapp}</ul>
        </h1></div>
    </div>
    <h1 class="text-white" style={{position:"absolute" ,bottom:"0px",left:"40%"}}>{data}</h1>
    </div>
        );
        
}
export default Contact;