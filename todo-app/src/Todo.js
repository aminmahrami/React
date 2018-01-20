import React from 'react';
import Description from './Description';
import Deadline from './Deadline';


export default class Todo extends React.Component{
   

    render(){

        const { todo, handleDoneToggle } = this.props;

        return(
            <li className="Todo">

                <div className="Todo-Description">
                   <Description task={todo.task}/>
                </div> 
                    
                <div className="Todo-Deadline">
                   <Deadline time={todo.time}/>
                </div> 

                <div>
                   is done : <input onClick={() => handleDoneToggle(todo.id)} 
                   // done={todo.done}
                   type="checkbox" />
                </div>

            </li>
        );    
    }
}

