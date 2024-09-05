import React from 'react';

const InputField = ({ label, type, name, register, errors, placeholder }) => (
    <div className="form-group">
        <label>{label}</label>
        <input
            type={type}
            name={name}
            {...register(name)}
            placeholder={placeholder}
            className={`input-field ${errors[name] ? 'input-error' : ''}`}
        />
        {errors[name] && <span className="error-message">{errors[name].message}</span>}
    </div>
);

export default InputField;
