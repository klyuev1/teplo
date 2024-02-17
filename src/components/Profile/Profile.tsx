import React from 'react';
import {useState, useContext, useEffect } from "react";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import UseValidation from '../../utils/UseValidation'; 

import {ProfileProps, FormValue} from "../../utils/interfaces"
import { useGetUserQuery } from '../../store/api/apiProfileSlice';

function Profile({onSignOut, onUpdateUser}: ProfileProps) {

  const {data: user} = useGetUserQuery();

  // const currentUser = useContext(CurrentUserContext);

  const [formValue, setFormValue] = useState<FormValue>({
    name: '',
    email: '',
    password: ''
  });

  const [isChanges, setIsChanges] = useState(false);
  const { formErrors, isValidForm, handleChange, resetForm } = UseValidation({formValue, setFormValue});

  useEffect(() => {

    if (user && ((formValue.email !== user.email) || (formValue.name !== user.name))) {
        setIsChanges(true);
    } else {
        setIsChanges(false);
    }
  }, [formValue, setIsChanges]);


  useEffect(() => {
    if (user) {

      resetForm(user, {}, true);
    }
    setIsChanges(false);
  }, [user, resetForm]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onUpdateUser(formValue.name, formValue.email)
  }
  
  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, {user!.name}!</h1>
      <form className='profile__form' noValidate>
        
        <label className='profile__label'>
          Имя
          <input
            className={`profile__input ${formErrors.name ? "profile__input_error" : ""}`}
            id='name' name='name' type="name" placeholder='Ваше имя' required
            value={formValue.name} 
            onChange={handleChange}
          />
        </label>
        <span className="profile__input-span_error">{formErrors.name}</span>
        
        <label className='profile__label'>
          E-mail
          <input
            className={`profile__input ${formErrors.email ? "profile__input_error" : ""}`}
            id='email' name='email' type="email" placeholder='Ваш Email' required
            value={formValue.email} 
            onChange={handleChange}
          />
        </label>
        <span className="profile__input-span_error">{formErrors.email}</span>

      </form>

      <button
        className='profile__edit-button'type='submit'
        disabled={!isValidForm || !isChanges}
        onClick={handleSubmit}
        >Редактировать</button>
      <button className='profile__exit-button' type='button' 
        onClick={onSignOut}
      >Выйти из аккаунта</button>

    </section>
  )
}

export default Profile;