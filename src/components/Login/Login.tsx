import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import {Logo} from '../../ui/icons/svgIcons'
import UseValidation from '../../utils/UseValidation';

import { FormValue } from "../../models/props"
import { useSigninMutation } from '../../store/api/apiProfileSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { openInfoTooltipLogin } from '../../store/reducers/infoTooltipSlice';
import { setIsLoggedIn } from '../../store/reducers/authSlice';

function Login() {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn === true) {
      navigate('/profile');
    }
    
  }, [dispatch])
  
  
  const [formValue, setFormValue] = React.useState<FormValue>({
    name: '',
    email: '',
    password: ''
  });

  const { formErrors, isValidForm, handleChange, resetForm } = UseValidation({formValue, setFormValue});

  React.useEffect(() =>{
    resetForm({
      name: '',
      email: '',
      password: ''
    }, {}, false);
  }, [resetForm])

  const [handleLogin, {error}] = useSigninMutation();

  // запрос не сразу на ошибку отправляется, а со второй попытки
  const onLogin = async (email: string, password: string) => {
    try {
      await handleLogin({email, password}).unwrap()
      dispatch(openInfoTooltipLogin("Вы успешно авторизировались!"))
      navigate("/projects", { replace: true });
      dispatch(setIsLoggedIn(true));
    } catch {
      console.log(error)
      dispatch(openInfoTooltipLogin("Что-то пошло не так! Попробуйте ещё раз."));
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(formValue.email, formValue.password!)
  }
  
  return (
    <section className='register'>
      <Link className='register__logo-link' to='/'><Logo /></Link>
      <h2 className='register__title'>Вход</h2>
      
      <form className='register__form' onSubmit={handleSubmit}>

        <div className='register__inputbox'>
          <label className='register__label'>E-mail
            <input 
              className={`register__input ${formErrors.email ? "register__input_error" : ""}`}
              type='email' placeholder='Ваш Email'
              id='email' name='email' required
              value={formValue.email} onChange={handleChange}
            />
            <span className="register__input-span register__input-span_error">{formErrors.email}</span>
          </label>
          
          <label className='register__label'>Пароль
            <input 
              className={`register__input ${formErrors.password ? "register__input_error" : ""}`}
              type='password' placeholder='Ваш пароль'
              id='password' name='password' required
              value={formValue.password} onChange={handleChange}
            />
            <span className="register__input-span register__input-span_error">{formErrors.password}</span>
          </label>
        </div>

        <button 
          className={`register__submit ${!isValidForm ? "register__submit_disabled" : ""}`} type='submit'
          disabled={!isValidForm}
        >Войти</button>
      </form>
      
      <p className='register__postscript'>
        Ещё не зарегистрированы? <Link className='register__link' to='/signup'>Регистрация</Link>
      </p>
      
      
    </section>
  );
}

export default Login;