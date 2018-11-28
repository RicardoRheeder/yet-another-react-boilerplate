import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentText: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput(event) {
    this.setState({ currentText: event.target.value });
  }

  addItem(event) {
    event.preventDefault();
    let { currentText, items } = this.state;
    // Append the items list
    items.push(currentText);
    this.setState({
      items,
      currentText: ''
    });
  }

  render() {
    return (
      <div className='App'>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.props.addItem}>
          <p>What needs to be done ?</p>
          <input
            id='add-todo'
            placeholder="Task"
            onChange={this.handleInput}
            value={this.state.currentText} />
          <button onClick={this.addItem} >Add Task</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

