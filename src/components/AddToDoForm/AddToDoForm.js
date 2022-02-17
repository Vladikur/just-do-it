import React , { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addCardAction } from '../../utils/CardReducer';


function AddToDoForm() {
  const dispatch = useDispatch()

  const [data, setData] = useState({
    id: Date.now(),
    title: '',
    completed: '',
  });

  function handleChange(e) {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addCardAction(data))
    setData({
      id: Date.now(),
      title: '',
      completed: '',
    })
  }

  return (
    <form onSubmit={handleSubmit} className="form">
        <div className="form__input-container">
          <span className="form__input-name">To do:</span>
          <textarea value={data.title || ''} onChange={handleChange} className='form__textarea' type="text" name="title" required minLength="2" maxLength="80" />
          <button type="submit" className="form__submit" >Добавить</button>
        </div>
    </form>
  );
}

export default AddToDoForm;
