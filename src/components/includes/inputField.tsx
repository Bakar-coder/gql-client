import React, { FC, InputHTMLAttributes } from 'react';

type propTypes = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  error: any;
  field?: string;
};

const InputField: FC<propTypes> = ({ label, size: _, ...props }) => {
  return (
    <div className='form-group'>
      <label htmlFor={props.id} className='form-label'>
        {label} {props.required && <span className='red-text'>*</span>}
      </label>
      <input
        type={props.type ? props.type : 'text'}
        name={props.name}
        id={props.id}
        value={props.value}
        className={props.error ? 'form-control error-input' : 'form-control'}
        onChange={props.onChange}
        required={props.required}
      />
      {props.error && <p className='error'>{props.error}</p>}
    </div>
  );
};

export default InputField;
