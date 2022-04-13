import React from 'react';
import Header from './Header';
import AvailablePlants from './AvailablePlants';
import axios from 'axios';
import { useState, useEffect } from 'react';
const Plant = ({ plant, plantName, plantDescription }) => {
    const [data, setData] = useState([]);

   useEffect(() => {
       const query =plantName.toLowerCase();
       axios.get(`http://localhost:8000/${query}/`).then((response) => {
           setData(response.data);
           console.log(response.data);   
       })
   },[])

   
    return (
        <div className='big'>
            <Header></Header>
            <div className={plant}>
                <div className='title-wrapper'>
                    <h3>{plantName}</h3>
                </div>
            </div>
            <div className='plant-description'>
                <div className='h4-wrapper'>
                    <h4>About</h4>
                </div>

                <div className='plant-p'>
                    <p>{plantDescription}</p>
                </div>
            </div>

            {(typeof data == 'undefined') ? <p>Loading.. </p> : data.map((index) => <AvailablePlants data={index}></AvailablePlants>)}
        </div>
    )
}

export default Plant