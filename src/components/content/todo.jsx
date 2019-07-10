import React, { Component } from 'react';

class Todo extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="dashboard-main">
            <div className="row">
                <ul className="list-group w-100">
                    {this.props.todos.map(todo => 
                        <li className="list-group-item d-flex justify-content-between align-items-center " key={todo.id}>
                            {todo.title}
                            <span className={todo.completed? 'badge badge-primary badge-pill p-2' : 'badge badge-danger badge-pill p-2'}>{todo.completed? 'Completed' : 'Incompleted'}</span>
                        </li>
                    )}
                </ul>    
            </div>
        </div>
         );
    }
}

 
export default Todo;


