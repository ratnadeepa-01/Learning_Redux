import React, { useState } from 'react';
import CustomerView from "./CustomerView";
export default function CustomerAdd(){
    const [input,setInput] = useState();
    const [customer,setCustomer] = useState([]);

    function addCustomer(){
        if(input){
            setCustomer([...customer,input]);
            // console.log(customer);
            setInput("");
        }
    }
    return (
    <><div>
    <h3>Add new Customer</h3>
    <input type="text" 
    value={input} 
    onChange={
        (e)=>setInput(e.target.value)
        }
    onKeyDown={
        (e)=>{
            if(e.key==='Enter'){
                addCustomer()
            }
        }
    }/>
    <button onClick={addCustomer}>Add</button>
    </div>
    <CustomerView customers={customer}/>
    </>
    );
    
}