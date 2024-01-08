import { Component } from "react";
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class TodoCard extends Component{
    render(){
        const {todos} = this.props;
        return(
            <div>
            {
                todos.map(function(todo){ 
                //var index = todos.findIndex(idTodo => idTodo === todo.key)
                console.log(todo.value);
                return (<div className='todoDiv'>
                <h3 className='todoTitle' key={todos.key}>{todo.value}</h3>
                <h5 className='editBtn'><FontAwesomeIcon icon={faPenToSquare} /></h5>
                <h5 className='deleteBtn'><FontAwesomeIcon icon={faTrash} /></h5>
                </div>
                )})
            }
            </div>
        )
    }
}

export default TodoCard;