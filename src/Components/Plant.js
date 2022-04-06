import React from 'react';
import Header from './Header';

const Plant = ({ plant, plantName }) => {
    return (
        <div className='big'>
            <Header></Header>
            <div className={plant}>
                <div className='title-wrapper'>
                    <h3>{plantName}</h3>
                </div>
            </div>
        </div>
    )
}

export default Plant