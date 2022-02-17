import React from 'react';
import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';
import { useSelector } from 'react-redux'


function Main({ preloader }) {
  const cards = useSelector(state => state.cards);

  return (
    <div className="main">
      {preloader ? <Preloader/> : ''}
      <div className="main__card-container">
        {cards.map((todo) => (
          <Card
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            id={todo.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
