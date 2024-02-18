import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
import {Logo} from '../../ui/icons/svgIcons'
import UseValidation from '../../utils/UseValidation';

import { FormValue } from "../../models/props"
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { useSigninMutation, useSignupMutation } from '../../store/api/apiProfileSlice';
import { openInfoTooltipRegist } from '../../store/reducers/infoTooltipSlice';
import { setIsLoggedIn } from '../../store/reducers/authSlice';

function Register() {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
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

  const [handleRegiset, {error: regError}] = useSignupMutation();
  const [handleLogin, {error: loginError}] = useSigninMutation();

  // запрос не сразу на ошибку отправляется, а со второй попытки
  const onRegister = async (name: string, email: string, password: string) => {
    try {
      await handleRegiset({name, email, password}).unwrap()
      
      try{ 
        await handleLogin({email, password}).unwrap()
        dispatch(openInfoTooltipRegist("Вы успешно зарегистрировались!"))
        navigate("/projects", { replace: true });
        dispatch(setIsLoggedIn(true));
      } catch {
        console.log(loginError)
        dispatch(openInfoTooltipRegist("Что-то пошло не так! Попробуйте ещё раз."));
      }
      
    } catch {
      if (regError && 'status' in regError && regError.status === 409) {
        dispatch(openInfoTooltipRegist("Пользователь с таким Email уже зарегистрирован"));
      } else {
        console.log(regError)
        dispatch(openInfoTooltipRegist("Что-то не так с введенными данными"));
      } 
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onRegister(formValue.name, formValue.email, formValue.password!);
  }

  
  return (
    <section className='register'>
      <Link className='register__logo-link' to='/'><Logo /></Link>
      <h2 className='register__title'>Регистрация</h2>
      
      <form className='register__form' onSubmit={handleSubmit}>

        <div className='register__inputbox'>
          <label className='register__label'>Имя
            <input 
              className={`register__input ${formErrors.name ? "register__input_error" : ""}`}
              type='name' placeholder='Ваше имя' 
              id='name' name='name' required
              minLength={2} maxLength={30}
              value={formValue.name} onChange={handleChange}
            />
            <span className="register__input-span register__input-span_error">{formErrors.name}</span>
          </label>
          
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
        >Зарегистрироваться</button>
      
      </form>
      
      <p className='register__postscript'>
        Уже зарегистрированы? <Link className='register__link' to='/signin'>Войти</Link>
      </p>
      
      
    </section>
  );
}

export default Register;