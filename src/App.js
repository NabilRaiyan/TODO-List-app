import './App.css';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faClock } from '@fortawesome/free-solid-svg-icons'



 class App extends Component {
  constructor(){
    super();
    this.state = {
      todos : [],
      newTodoTask: '',

    }; 
  }

  

  onTodoInputChange = (event)=>{
    this.state.newTodoTask = event.target.value;
  }

  onAddButtonClick = (event)=>{
    
    console.log(this.state.todos)
    let newTodoList = this.state.todos.push(this.state.newTodoTask);
  }

  render(){
    const { todos, newTodoTask } = this.state;
  return (
    <div className="App">
      <header className="App-header">
       <div className='navbar'>
         <h4>XERO<span>TODO</span><span className='clock'><FontAwesomeIcon icon={faClock} /></span></h4>
       </div>
       {/* Upper section to display text and total completed todos */}
       <div className='upperSection'>
          <div className='textDiv'>
            <h3>Todo Done</h3>
            <h5>keep it up</h5>
          </div>
          <div className='todoTrack'>
            <h1>1/{todos.length}</h1>
          </div>
       </div>
      {/* Middle section  to add todos and show todos*/}
       <div className='middleSection'>
          <input name='todoInput' className='todoInput' type='text' placeholder='write your next task' onChange={this.onTodoInputChange}></input>
          <button className='addTodoBtn' type='submit' onClick={this.onAddButtonClick}>+</button>
          {
            todos.map((todo)=>{ 
            var index = todos.findIndex(id => id === todo.todo);
            return (<div className='todoDiv'>
              <h3 className='todoTitle' key={index}>{todo.todo}</h3>
              <h5 className='editBtn'><FontAwesomeIcon icon={faPenToSquare} /></h5>
              <h5 className='deleteBtn'><FontAwesomeIcon icon={faTrash} /></h5>
            </div>
            )})
          }
       </div>
      </header>
      <footer className='lowerSection'>Copyright © {new Date().getFullYear()} Raiyan Al Sultan </footer>
    </div>
  );
  }
}

export default App;
