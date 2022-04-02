import React, { useState } from "react";

const Input = (props) => {
    const [value, setValue] = useState(props.data?.default);
    return (
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">{props.data?.title}</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={props.data?.placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}

export default Input;