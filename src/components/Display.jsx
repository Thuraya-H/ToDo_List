import react, { useState } from 'react';
    
    
const Display = (props) => {
	const {index, task, setList, list} =props
	console.log(task)
	const completed = () =>{
		let newList = [...list];
		newList[index].complete = (!newList[index].complete);
		setList(newList);
	}
	const onClickhandler = () =>{
		setList(() =>{
			return list.filter(task => list.indexOf(task) !== index);
		});
	}
    return (
        <div className="m-4">
            <form>
                <div className="d-flex justify-content-center">
                	<h4 style= {task.complete ? {textDecorationLine: 'line-through'} : {}}>{task.name}</h4>
            	    <input className="mx-3" type="checkbox" onChange={completed} name="comp"></input>
					<button onClick={onClickhandler} className="btn btn-dark" type="button" click="submitForm()">Delete</button>
				</div>
            </form>
        </div>
    );
};
    
export default Display;