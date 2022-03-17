import { Component } from "react";
import "./App.css";
import AddItem from "./component/addItem";
import TodoItem from "./component/toDoItem";
class App extends Component {
  state = {
    items: [
    ],
  };

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id;
    });
    this.setState({ items });
  }
  addItem = (item) => {
    item.id =Math.random();
    let items= this.state.items;
    items.push(item);
    this.setState({items});

  }

  render() {
    return (
      <div className="App container">
        <h2> First App With React</h2>
        <AddItem addItem={this.addItem} />
        <TodoItem items={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
