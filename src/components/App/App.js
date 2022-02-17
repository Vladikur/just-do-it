import React, { useEffect } from 'react';
import { Route, Switch, } from 'react-router-dom';
import * as MainApi from '../../utils/MainApi';
import Main from '../Main/Main';
import Header from '../Header/Header';
import AddToDoForm from '../AddToDoForm/AddToDoForm';
import { useDispatch, useSelector } from 'react-redux'
import { addManyCardAction } from '../../utils/CardReducer';


function App() {

  const [isReceiving, setIsReceiving] = React.useState(false);
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards);

  useEffect(() => {
    setIsReceiving(true)
    MainApi
    .getContent()
    .then (data => {
      const initialCards = data.filter((c) => c.userId === 1);
      if(cards.length === 0) {
        dispatch(addManyCardAction(initialCards))
      }
    })
    .catch(err => console.log(err))
    .finally(() => {
      setIsReceiving(false)
    });
  }, []);

  return (
    <div className="page">
      <Header/>

      
      <Switch>

        <Route exact path='/'>
          <div className="app__container">
            <h1 className="app__header">Just do it!</h1>
            <p className="app__text">Приветствую! Это мое маленькое React приложение для создания и управления списком задач. При помощи сервиса пользователи могут создать список для будущих задач. Приложение подойдёт как для повседневного использования, так и для работы.</p>
          </div>
        </Route>

        <Route exact path='/todos'>
          <AddToDoForm/>
          <Main
            preloader={isReceiving}
          />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
