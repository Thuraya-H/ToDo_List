import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [list, setList] = useState([]);

  const toDoList = ( name ) => {
    setList( [...list, {name: name,  complete: false}]);
}

return (
    <>
      <Form newList={toDoList} />
      <div>{
        list.map((task,i) =>
        <Display key={i} index={i} task={task} setList={setList} list={list} />
        )
      }
      </div>
    </>
);
}

export default App;
