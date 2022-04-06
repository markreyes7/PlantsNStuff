import React from 'react'

const HPContent = ({ plant, plantName, plantDescription }) => {
    return (
        <div className='main-content'>
            <article>
                <div className='info'>
                    <h2>Plant Parenthood</h2>
                    <p>Becoming a plant parent is an amaziinng experience! Not only can your plants look good, but they can help you feel good. With a little care and knowledge plant parenthood has never been so easy!</p>
                </div>

                <div className='img-wrapper'>
                    <div id='plant-image-1'></div>
                </div>
            </article>
            <article>

                <div id='plant-image-2'>
                    <h2>Grow</h2>
                    <p>You're here to grow, and so are your plants. Keep track of all your plants listed here and find out what you can do to maintain them.</p>
                    <div className='box-wrapper'>
                        <div className='box'>
                            <p>Click me to go somewhere.</p>
                        </div>
                    </div>
                </div>

            </article>
        </div>
    )
}

export default HPContent