import React from 'react'
import "./Form.css"

const InputType = ({labelFor,labelText,inputType,value,name,onChange}) => {
    return (
        <div>
      
           <div className="mb-1">
                <label htmlFor={labelFor} className="form-label"  >{labelText}</label>
                <input  type={inputType} className="form-control"  name={name} value={value} onChange={onChange} />

            </div>
        </div>
    )
}

export default InputType
