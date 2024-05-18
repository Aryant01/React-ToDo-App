import React from 'react';

const ToDoItem = ({item, index, markComplete}) => {
    return (
        <div style={{textDecoration: item.completed ? 'line-through' : ''}}>
            {item.text}
            <button onClick={() => markComplete(index)} style={{ marginLeft: '10px' }}>
                Complete
            </button>
        </div>
    );
}
export default ToDoItem;