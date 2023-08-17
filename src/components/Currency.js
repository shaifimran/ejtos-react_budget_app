import React, { useContext } from "react"
import { AppContext } from "../context/AppContext"


const Currency = () =>{
    const {currency, dispatch} = useContext(AppContext);
    const changeCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
};


return (
    <div className='alert alert-secondary'> Currency: {
  <select 
    className="form-select"
    onChange={event=>changeCurrency(event.target.value)}
    value = {currency}
    style={{background:'lightgreen',color:'white',size:10}}

  >
    
    <option value="Rs">Rs Rupees</option>
    <option value="£">£ Pound</option>
    <option value="€">€ Euro</option>
    <option value="$">$ Dollar</option>
  </select>	
  }	
</div>
);
};

export default Currency;