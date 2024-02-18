import React from 'react';
import {useState, useEffect } from "react";
import UseValidation from '../../utils/UseValidation'; 

import { FormValue } from "../../models/props"
import { useGetUserQuery, useSignoutMutation, useUpdateUserMutation } from '../../store/api/apiProfileSlice';
import { openInfoTooltipProfile } from '../../store/reducers/infoTooltipSlice';
import { useAppDispatch } from '../../store/hooks/hooks';
import { setIsLoggedIn } from '../../store/reducers/authSlice';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data: user } = useGetUserQuery();

  const [formValue, setFormValue] = useState<FormValue>({ name: '', email: '', password: '' });
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
      resetForm(user!, {}, true);
    }
    setIsChanges(false);
  }, [user, resetForm]);


  const [handleUpdateProfile, {error}] = useUpdateUserMutation();

  const onUpdateProfile = async (name: string, email: string) => {
    try {
      await handleUpdateProfile({ name, email }).unwrap()
      dispatch(openInfoTooltipProfile("Данные о профиле изменены"))
    } catch {
      console.log(error)
      dispatch(openInfoTooltipProfile("Что-то пошло не так! Попробуйте ещё раз."));
    }
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onUpdateProfile(formValue.name, formValue.email)
  }

  const [handleSignout, {error: signoutError}] = useSignoutMutation();

  // запрос не сразу на ошибку отправляется, а со второй попытки
  const OnSignOut = async () => {
    try {
      await handleSignout()
      dispatch(setIsLoggedIn(false));
      navigate("/");
    } catch {
      console.log(signoutError)
      dispatch(openInfoTooltipProfile("Что-то пошло не так! Попробуйте ещё раз."));
    } finally {
      localStorage.clear();
    }
  }

  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, {user && user.name}!</h1>
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
        onClick={OnSignOut}
      >Выйти из аккаунта</button>

    </section>
  )
}

export default Profile;