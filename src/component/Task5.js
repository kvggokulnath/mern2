import React,{ useState } from "react";
var c="";
function Task5(){
    var [data,setdata]=useState(null);
    function update(val){
     const re=(val.target.value);
      c=re.split("-");
       }
       function display(){
        const da=new Date();
        if(c=="")
        setdata("please choose date of birth");
        else
        setdata("You are "+(da.getFullYear()-c[0])+" years old");

       }
    return(<div>
        <h1>Age calculator</h1><h4>Enter your data of birth</h4>
      <input type="date" style={{width:"400px"}}onChange={update}/><br/>
    <button onClick={display} style={{backgroundColor:"blue",color:"white",width:"200px"}}>calculate Age</button> 
    <h1>{data}</h1>
    </div>);

}
export default Task5;