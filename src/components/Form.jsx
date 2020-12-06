import React, { useState } from 'react';

const Form = props =>{

    const [input, setInput] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.newList(input);
        setInput('');
    };
    
    return (
        <div className="d-flex justify-content-center">
            <h3>To do List</h3>
            <form>
                <input 
                    className="group-control bg-light border-0 rounded mx-3 p-2 pr-5 align-middle"
                    type="text"
                    onChange={ (e) => setInput(e.target.value)}
                    value={ input }
                />
                <input onClick={handleSubmit} className="btn btn-light px-4 border" type="submit" value="Add" />
            </form>
        </div>
    );
}

export default Form;