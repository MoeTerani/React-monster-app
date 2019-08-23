import React from 'react';

import './card-list.style.css';

const cardList = props => {
  return <div className='card__list'>{props.children}</div>;
};

export default cardList;
