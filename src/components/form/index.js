import React, { useState } from "react";
import './style.scss';
import Input from './input';
import schema from '../../schema-example.json';

const Form = () => {
    console.log('schema ==', schema);
    return (
        <div className="form-1">
            <div className="title">{schema?.title}</div>
            <div>
                {
                    Object.keys(schema?.properties).map((key, index) => (
                        <Input
                            data={schema?.properties[key]}
                            key={schema?.properties[key].title}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Form;