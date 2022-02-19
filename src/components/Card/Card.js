import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { removeCardAction, updateCardAction } from '../../utils/CardReducer';


function Card({ id, title, completed }) {
  const dispatch = useDispatch()

  const [redact, setRedact] = useState(false)
  const [data, setData] = useState({
    id: id,
    title: title,
    completed: completed,
  });

  function onRemoveCard() {
    dispatch(removeCardAction(data))
  }

  function handleChange(e) {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  function onCompleted() {
    if(data.completed === true) {
      const dataStae = {
        ...data,
        completed: false
      }
      setData(dataStae)
      dispatch(updateCardAction(dataStae))
    } else {
      const dataStae = {
        ...data,
        completed: true
      }
      setData(dataStae)
      dispatch(updateCardAction(dataStae))
    }
  }

  function onRedact() {
    if(!redact) {
      setRedact(true)
    } else {
      dispatch(updateCardAction(data))
      setRedact(false)
    }
  }

  const completeButtonClassName = (
    `card__button-complete ${data.completed ? 'card__button-complete_type_complete' : ''}`
  );

  const textClassName = (
    `card__text ${data.completed ? 'card__text_type_completed' : ''}`
  );

  return (
    <div className="card">
      { !redact ?
      <div className="card__text-container">
        <p className={textClassName}>{data.title}</p>
      </div>
      : <textarea value={data.title || ''} onChange={handleChange} className='card__textarea' type="text" name="title" required minLength="2" maxLength="80" />
      }
      <button onClick={onRemoveCard} type="button" className="card__button-remove"/>
      <button onClick={onRedact} type="button" className="card__button-redact">{ !redact ? 'Редактировать...' : 'Сохранить' }</button>
      <button onClick={onCompleted} type="button" className={completeButtonClassName}>{!data.completed ? 'Не выполнено' : 'Выполнено'}</button>
    </div>
  );
}

export default Card;
