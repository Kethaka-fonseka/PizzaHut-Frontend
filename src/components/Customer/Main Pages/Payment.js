import { Card } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router';

const Payment=()=>{
const location=useLocation();
const total=location.state.delivery.total;
const deliveryCode=location.state.delivery_code;
const fullname=location.state.delivery.fullname;
const email=location.state.delivery.email;
const address=location.state.delivery.address;
const state=location.state.delivery.state;
const [products,setProducts]=useState([]);
  
useEffect(() => {
    axios.get(`http://localhost:8070/carts/${localStorage.getItem("userid")}`).then((res) => {
        setProducts(res.data);
    }).catch((err) => {
        console.log("err=>" + err);
    });
}, [6]);

const addNewOrder=()=>{
const newOrder={
    products:products,
    total_price:total,
    order_date:new Date().toLocaleString(),
    status:"new",
    user:localStorage.getItem("userid"),
    delivery_code:deliveryCode
}

axios.post('http://localhost:8070/orders/add',newOrder).then((res)=>{
alert('Order successfully placed...');
axios.delete(`http://localhost:8070/carts/delete/all/${localStorage.getItem("userid")}`)
.then((res)=>{
    console.log("res=>" + res);
}).catch((err)=>{
    console.log("err=>" + err);
})
}).catch((err)=>{
    console.log("err=>" + err);
})

}

return(
<React.Fragment>
<h1>Payment to pay:{total}</h1>
<h1>deliveryCode:{deliveryCode}</h1>
<h1>email:{email}</h1>
<h1>address:{address}</h1>
{
    products.map((product,index)=>{
       return(
        <Card key={index}>
        <h1>{product.title}</h1>
        <h1>{product.size}</h1>
        <h1>{product.qty}</h1>
        </Card>

       );
    })
}
<button onClick={addNewOrder}>Place the order</button>
</React.Fragment>

);

}
export default Payment;