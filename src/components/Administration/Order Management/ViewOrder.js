import React, { useEffect, useState } from 'react'
import { Card, Container, Form, Row, Col,Dropdown } from "react-bootstrap";
import axios from 'axios';

function ViewOrder(props) {
  const [orders,setOrders]=useState('');
  useEffect(()=>{
axios.get(`http;//localhost:8070/orders`).then(res=>{
setOrders(res.data);
}).catch(err=>{
  console.log("err=>"+err);
})
  },[3])
  
  
  return (
 <div>
<h2>Order List</h2>
{orders.map((order,map)=>{
return(
<div>
<h1>{order.user}</h1>

</div>

);
})}
</div>

  );
}

export default ViewOrder;
