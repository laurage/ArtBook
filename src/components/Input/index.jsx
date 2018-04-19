import React from 'react'

const Input = ({className, type, value, onChange, onSubmit, placeholder, required, submitValue}) => (
    <form onSubmit={onSubmit}>
        <div className="box-container-h">
            <input 
                className={className}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required
            />
        </div>
        {(submitValue || onSubmit) &&
        (<div className="box-container">
            <input className="btn" type="submit" value={submitValue}/>
        </div>
        )}
    </form>
)

export default Input