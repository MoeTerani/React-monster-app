import React from 'react';
import { Card } from '../card/card.components';
import './card-list.style.css';

export const CardList = props => {
  return (
    <div className='card__list'>
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
