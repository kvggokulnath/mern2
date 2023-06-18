import React,{ useState } from "react";


function Task1(){
    var [data,setdata]=useState(null);
    function update(val){
       
     // var v=setdata(val.target.value)
     const re=(val.target.value);
     var c=re.length;
     let v=1;
     if(c==0){
      v=0;
     }
    for(let i=0;i<c;i++){
    if((re[i]===" " || re[i]=="\n") && re[i+1]!=null){
    v=v+1;}
     }
    setdata(v);
    //  data=val.target.value;
       }
    return(<div>
        <h1>Responsive paragraph word <br/>counter</h1>
      <textarea style={{height:"100px",width:"400px"}} onChange={update}></textarea>
    <h1>Word counting:{data}</h1>
    </div>);

}
export default Task1;