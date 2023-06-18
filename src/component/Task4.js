import { useEffect, useState } from "react";
import axios from 'axios';


function Task4() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url="https://dummyjson.com/users";
    axios.get(url)
    .then((res) => {
      if(res.status===200){
      console.log(res);
      setData(res.data.users);
      console.log(data);}
      else{
        Promise.reject();
      }
    })
    .catch((err) => {
      alert(err);
    });
  }, []);

  return (
    <div className="App">
    
      <table cellspacing="2" cellpadding="2" class="border-dark table-bordered table-hover table-stripped" style={{borderStyle:"solid"}}>
        <tr class="border border-danger bg-warning"> 
         <th rowspan="3" class="border border-dark">ID</th>
         <th rowspan="3" class="border border-dark">FirstName</th>
         <th rowspan="3" class="border border-dark">LastName</th>
         <th rowspan="3" class="border border-dark">age</th>
         <th rowspan="3" class="border border-dark">Gender</th>
         <th rowspan="3" class="border border-dark">Email</th>
         <th rowspan="3" class="border border-dark">Phone</th>
         <th rowspan="3" class="border border-dark">Username</th>
         <th rowspan="3" class="border border-dark">birthdate</th>
         <th rowspan="3" class="border border-dark">Image</th>
         <th rowspan="3" class="border border-dark">height</th>
         <th rowspan="3" class="border border-dark">Weight</th>
         <th colspan="3" class="border border-dark">Address</th>
         <th rowspan="1" class="border border-dark">Bank</th>
         <th rowspan="1" class="border border-dark">Company</th>
        </tr>
        <tr class="border border-dark bg-warning">
            <th rowspan="2" class="border border-dark">City</th>
            <th rowspan="1" colspan="2" class="border border-dark">Coordinates</th>
            <th rowspan="2" class="border border-dark">Card Expire</th>
            <th rowspan="2" class="border border-dark">Name</th>
        </tr>
        <tr class="bg-warning"><th class="border border-dark">lat</th>
        <th class="border border-dark">Ing</th>
        </tr>
        

        <tbody>
        {data.map((data) => (
            <tr class="bg-secondary text-white">
            <td>{data.id}</td>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.age}</td>
            <td>{data.gender}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>{data.username}</td>
            <td>{data.birthDate}</td>
            <td><img src={data.image} alt={data.image} height="70px" width="70px"/></td>
            <td>{data.height}</td>
            <td>{data.weight}</td>
            <td >{data.address.city}</td>
            <td>{data.address.coordinates.lat}</td>
            <td>{data.address.coordinates.lng}</td>
            <td>{data.bank.cardExpire}</td>
            <td>{data.company.name}</td>
                </tr>
        ))}
      </tbody></table>
    </div>
  );
}

export default Task4;