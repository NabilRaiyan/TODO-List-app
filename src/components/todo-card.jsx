import { Component } from "react";
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class TodoCard extends Component{

    // function for deleting todos
  deleteTodo = (todos)=>{
    console.log("deleted");
  }

    render(){
        const {deleteTodo} = this;
        const {todos, className} = this.props;
        return(
            <div>
            {
                todos.map(function(todo){ 
                return (
                    // using js string interpolation method to give multiple class name for 1 component
                    // So that we can style 1 component differently when we will use it in different location
                    <div className={`search-box ${className}`}>
                        <h3 className='todoTitle' key={todos.key}>{todo.value}</h3>
                        <h5 className='editBtn'><FontAwesomeIcon icon={faPenToSquare} /></h5>
                        <h5 className='deleteBtn' onClick={deleteTodo}><FontAwesomeIcon icon={faTrash} /></h5>
                    </div>
                )})
            }
            </div>
        )
    }
}

export default TodoCard;