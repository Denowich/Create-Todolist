import React from "react";
import "./todoItem.css";

const ToDoItem = props => {
  const resolvedClass = {
    textDecoration: "line-through"
  }

  return (
    <div className="todo-item">
      <div className="description-wrapper">
        <p
          style={props.completed === true ? resolvedClass : {}}
        >
          {props.description}
        </p>
           <div className="input-wrapper">
              <input
                type="checkbox"
                defaultChecked={props.completed}
                onChange={props.handleChange}
              />
           </div>
        </div>
    </div>
  );
};

export default ToDoItem;
