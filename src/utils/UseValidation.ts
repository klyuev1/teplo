import React from 'react';
import {ValidationProps, FormValue, FormErrors} from "../models/props"

const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/;


export default function UseValidation({ formValue, setFormValue }: ValidationProps) {

  const [formErrors, setFormErrors] = React.useState<FormErrors>({});
  const [isValidForm, setIsValidForm] = React.useState<boolean>(false);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const input = evt.target;
    const value = input.value;
    const name = input.name;

    setFormValue({ ...formValue, [name]: value });

    if (input.name === 'email') {
        if ((regexEmail.test((value)) !== true)) {
          setFormErrors({ ...formErrors, [name]: 'Проверьте адрес почты' });
          setIsValidForm(false);
        } else {
            setFormErrors({ ...formErrors, [name]: input.validationMessage });
            setIsValidForm(input.closest('form')?.checkValidity() || false);
        }
  
    } else {
        setFormErrors({ ...formErrors   , [name]: input.validationMessage });
        setIsValidForm(input.closest('form')?.checkValidity() || false);
    }
    
  };

  const resetForm = React.useCallback(
    (newValue: FormValue = { name: '', email: '', password: '' }, newErrors = {}, newIsValid = false) => {
      setFormValue(newValue);
      setFormErrors(newErrors);
      setIsValidForm(newIsValid);
    },
    [setFormValue, setFormErrors, setIsValidForm]
  );

  return { formErrors, isValidForm, handleChange, resetForm };
}