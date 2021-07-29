import React from 'react';

export default  (props) =>  {


    return (
        <div className='description-box'>
        <img src={props.imageUrl} />
        <h3>{props.heading}</h3>
        <p>{props.description}</p>
        </div>
    )
}