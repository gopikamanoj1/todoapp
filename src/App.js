// import React from 'react'
// import { useState } from 'react'

//===============================================================


//  import Color from './component/color';
//  import Counter from './component/counter';
// import Assignment1 from './component/Assignment1'

//===========================================================================================
// function App() {
//   const obj = [
//     { name: 'GOPIKA MANOJ', email: 'gopika@gmail.com' },
//     { name: 'DHEERAJ MANOJ', email: 'dheeraj@gmail.com' }
//   ];

//   return (
//     <div>
//       <h1>Assignment-1</h1> 

// {

// obj.map((ob, index) => (
//   <div className='profile_wrapper' key={index}>
//     <Assignment1 obj={ob} />
//   </div>
// ))

// }

//     </div>
//   );
// }

// export default App;

//=============================================================================


// class App extends Component{
//   render(){
//     return(
//       <div className='App'>
// <h1>Assignment-1</h1>

//  <Counter /> 
// <Color />
//       </div>
//     )
//   }
// }


// export default App;
// import React from 'react';
// import Assignment1 from './component/Assignment1';


//========================================================================


// function Practice() {
// const [state,setState]=useState(false)

//   return (
//     <div>
//       <h1 onClick={()=>(setState(!state))}>show/hidden</h1>
//     {state && <Counter />}
//     </div>

//   )
// }

// export default Practice

// ===========================================================================================================================



import React from 'react'
import { useState } from 'react'
import './App.css';
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const MAX_TASK_LENGTH = 10; 
function App() {
  const [toDos, setTodos] = useState([])
  const [toDo, setTodo] = useState('')
  const [editId, setEditId] = useState(0)

  const onDelete = (id) => {
    setTodos(toDos.filter((obj) => obj.id !== id))
  }

  const onEdit = (id) => {
    const editTodo = toDos.find((to) => to.id === id)
    setTodo(editTodo.text)
    setEditId(editTodo.id)
  }
  const addToDo = () => {
    const isTaskExists = toDos.some((todo) => todo.text.toLowerCase().trim() === toDo.toLowerCase().trim())

    if (isTaskExists) {
      alert('Task already exists!');
    } else if (toDo.trim() === '') {
      alert('Task cannot be empty!');
    } else if (toDo.length > MAX_TASK_LENGTH) {
      alert(`Task length cannot exceed ${MAX_TASK_LENGTH} characters!`);
    } else {
      setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setTodo('');
    }
  
    if (editId) {
      // const editTodo = toDos.find((todo) => todo.id === editId);
      const updatedTodos = toDos.map((todo) =>
        todo.id === editId ? { ...todo, text: toDo } : todo
      );

      setTodos(updatedTodos);
      setEditId(0);
    }
  };


  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
     
      <div className="input">
        <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={addToDo} className="fas fa-plus" >add </i>

      </div>
      <div className="todos">

        {
          toDos.map((obj) => { 
            return (
              <div className="todo" >
                <div className="left" id={obj.status ? "list-item" : ''}>
                  <input onChange={(e) => {
                    console.log(e.target.checked)
                    console.log(obj);
                    setTodos(toDos.filter(obj2 => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked
                      } return obj2
                    }))
                  }} value={obj.status} type="checkbox" name="" id="" />
                  <p> {obj.text}</p>

                </div>
                <div className="right" >

                  <FaEdit className='list-icon-items' id='edit' title='Edit'
                    onClick={() => onEdit(obj.id)}
                  />
                  <MdDeleteOutline className='list-icon-items' id='delete' title='Delete'
                    onClick={() => onDelete(obj.id)}
                  />
                </div>
              </div>
            )
          })}

      </div>
    </div>
  );
}

export default App;
// ===========================================================================================================

// import React from 'react'
// import Assignment4 from './component/assignment4'

// function App() {
//   return (
//     <div>
//   <Assignment4 />
//     </div>
//   )
// }

// export default App
// ==================================================================================================

// import React from 'react'
// import Form from './component/Form'
// import Example from './component/Example'

// function App() {
//   return (
//     <div>
//       <Form />
//     <Example/>
//     </div>
//   )
// }

// export default App
// ===========================================================================================================

// import React from 'react'
// import {Practice,obj} from './component/Practice'
// function App() {
//   return (
//     <div>
//       {
//         obj.map((a)=>
//        (  
//         <div>
//         <p>Name:{a.name}</p>
//         <p>Age:{a.age}</p>

//       </div>
//        )
//         )
//       }
//             <Practice />

//     </div>
//   )
// }

// export default App

// =========================================================================================================================React
// import React,{useState} from 'react'
// import Assignment3  from './component/Assignment3'


// function App() {

//   const [state,setState]=useState([])
//   function Hello(obj){

// setState(obj)
// console.log(obj);
//   }
//   return (
//     <div>

// {
// state.map((val)=>{
//   return(
//     <p>name:{val.name}</p>
//   )
// })
// }
//       <Assignment3 data={Hello}/>
//     </div>
//   )
// }

// export default App
