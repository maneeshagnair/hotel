import React from 'react'
import Carddata from './Carddata'
import { useState } from 'react'

const Menu =() =>{
    const[data,setData] = useState(Carddata);
    return(
    data.map((element, id)=>{
  return (
    <div class="cd">
        <div className="card" >
                <img className="card-img-top" src={element.image} alt="image" />
                <div className="card-body">
                <h4 className="card-title">{element.text}</h4>
                <p className="card-text">Rs. {element.price}</p>
                <button href="#" className='btn btn-danger' >Add to Cart</button>

                </div>
            </div>
    </div>
  )
})
    )
}

export default Menu;
