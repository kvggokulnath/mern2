import React,{ useState } from "react";

var update={height:"570px"};
function Task3(){
    var [ent,setdata]=useState(0);
   function calculate(){
    var c=ent.length;
    
    let temp="";
    var j=0;
    for( j=0;j<c;j++){
      if(Number.isInteger(+ent[j]) || ent[j]=="."){
        temp+=ent[j];
      }
      else
      break;
    }
    for(let i=j;i<c;i++){
      let ts="";let ten="";
        if(ent[i]=="+"){
            for(let x=i+1;x<c;x++){
              if(!Number.isInteger(Number(+ent[x])) && ent[x]!="." ){
              break;}
            ts+=ent[x];
            let sa=Number(ten)+Number(ts);
            }

            temp=parseFloat(temp)+parseFloat(ts);
            
        }
        else if(ent[i]=="-"){
             for(let x=i+1;x<c;x++){
              if(!Number.isInteger(Number(+ent[x])) && ent[x]!="." ){
              break;}
            ts+=ent[x];
            }
            temp=(+temp)-(+ts);
        }
        else if(ent[i]=="*"){
             for(let x=i+1;x<c;x++){
              if(!Number.isInteger(Number(+ent[x])) && ent[x]!="." ){
              break;}
            ts+=ent[x];
            }
            temp=(+temp)*(+ts);
        }
        else if(ent[i]=="/"){
             for(let x=i+1;x<c;x++){
              if(!Number.isInteger(Number(+ent[x])) && ent[x]!="." ){
              break;}
            ts+=ent[x];
            }
            temp=(+temp)/(+ts);
        }
       
       
    }
   
    ent=temp; 
    update={backgroundImage:"linear-gradient(to right,pink,yellow)",height:"570px"}
    setdata(ent);
     
   }
  

  return(
  <div class="t4 w-100 h-100"><div style={update} ><br/><br/><div style={{width:"30%",height:"250px",backgroundColor:"rgb(100,0,255)",marginLeft:"400px"}} class="text-white ra">
    <p style={{textAlign:"right",fontSize:"35px"}}>{ent}</p></div>
  <div style={{height:"200px",marginLeft:"400px",width:"30%" ,backgroundColor:"black"}} class="text-white rad">
    <br/>
  <div class="row h-25 d-flex">
<span onClick={()=>{ent+="7";setdata(ent)}} class="col-3">7</span>
<span onClick={()=>{ent+="8";setdata(ent)}} class="col-3">8</span>
<span onClick={()=>{ent+="9";setdata(ent)}} class="col-3">9</span>
<span onClick={()=>{ent="";setdata(ent); update={backgroundImage:"linear-gradient(to bottom,red,green,blue)",height:"570px"}}} class="col-1">C</span>
<span onClick={()=>{ent+="/";setdata(ent)}} class="col-1">/</span></div>

<div class="row h-25">
<span onClick={()=>{ent+="4";setdata(ent)}} class="col-3">4</span>
<span onClick={()=>{ent+="5";setdata(ent)}} class="col-3">5</span>
<span onClick={()=>{ent+="6";setdata(ent)}} class="col-3">6</span>
<span onClick={()=>{ent=ent.substring(0,ent.length-1);setdata(ent);}} class="col-1">Del</span>
<span onClick={()=>{ent+="*";setdata(ent)}} class="col-1">X</span></div>
<div class="row h-25">
<span onClick={()=>{ent+="1";setdata(ent)}} class="col-3">1</span>
<span onClick={()=>{ent+="2";setdata(ent)}} class="col-3">2</span>
<span onClick={()=>{ent+="3";setdata(ent)}} class="col-3">3</span>
<span onClick={()=>{ent+="-";setdata(ent)}} class="col-3">-</span></div>
<div class="row h-25">
<span onClick={()=>{ent+="0";setdata(ent)}} class="col-3">0</span>
<span onClick={()=>{ent+=".";setdata(ent)}} class="col-3">.</span>
<span onClick={calculate} class="col-3">=</span>
<span onClick={()=>{ent+="+";setdata(ent)}} class="col-3">+</span></div><br/>
  </div>
  </div>
  </div>
  );
  

}
export default Task3;