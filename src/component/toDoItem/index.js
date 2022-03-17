import React from "react";
import "./toDoItem.css";




const TodoItem = (props) => {

    const {items , deleteItem} = props;
    let length=items.length;

    const listItem = length ? items.map(item =>{
        return(
            <div className="content" key={item.id}>
                <span className="name"> {item.name}</span>
                <span className="age"> {item.age}</span>
                <span className="action" onClick={ ()=>deleteItem(item.id)}> &times;</span>

            </div>
        )
    }):(
        <p> There's No Item to show</p>
    )

    
    return(
        <div className="listItem"> 
            <span className="name title"> name </span>
            <span className="age title"> age </span>
            <span className="action title"> &times; </span>
            <div> {listItem} </div>
        </div>
     
    ) 
};

export default TodoItem;
