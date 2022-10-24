import React from 'react';
import Button from './Button';
import quotesss from "../src/quotes"
import { useState } from 'react';
const Cardcam = () => {
    const [index,setIndex]=useState(Math.floor(Math.random()*quotesss.length))
       
           
        const colores=["linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,51,1) 35%, rgba(0,212,255,1) 100%);","linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);","linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);","linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);","linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(161,85,99,1) 24%, rgba(161,85,99,1) 26%, rgba(87,0,0,1) 100%);","linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);"]
      document.body.style=`background:${colores[Math.floor(Math.random()*colores.length)]}`
    const cambio=()=>{
        setIndex(Math.floor(Math.random()*quotesss.length))  
        
    }
    return (
        <div className='Tarjetita'>
            <h2 className='textito'>{quotesss[index].quote}</h2>
            <p className='textito'>{quotesss[index].author}</p>
        <Button cambio={cambio}></Button>
        </div>
    );
};

export default Cardcam;