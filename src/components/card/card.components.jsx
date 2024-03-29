import React from 'react';
import './card.style.css';

export const Card = props => (
  <div className='card-container'>
    <img
      className='card-img'
      src={`https://robohash.org/${props.monster.id}?set=set1`}
      alt='Monster'
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
