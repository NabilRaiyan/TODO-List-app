import { Component } from "react";
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class TodoCard extends Component{

    // function for deleting todos
    deleteTodo = (event)=>{
        console.log("Delete todo");
    }

    render(){
        const {deleteTodo} = this;
        const {todos} = this.props;
        return(
            <div>
            {
                todos.map(function(todo){ 
                return (<div className='todoDiv'>
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