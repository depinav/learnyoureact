import React from 'react';

export default class TodoBox extends React.Component {
  render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList />
        <TodoForm />
      </div>
    )
  }
}

class TodoList extends React.Component {
  render() {

    let tableStyle = {
      border: '2px solid black'
    };

    return (
      <div className="todoList">
        <table style={tableStyle}>
          <tbody>
            <Todo title="Shopping">Milk</Todo>
            <Todo title="Hair cut">13:00</Todo>
            <Todo title="Learn React">15:00</Todo>
          </tbody>
        </table>
      </div>
    )
  }
}

class TodoForm extends React.Component {
  render() {
    return (
      <div className="todoForm">
        I am a TodoForm.
      </div>
    )
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checked: false};
  }

  handleChange(e) {
    this.setState({checked: e.target.checked});
  }

  render() {
    let todoStyle = {
      border: '1px solid black'
    };

    return (
      <tr>
        <td style={todoStyle}>
          <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
        </td>
        <td style={todoStyle}>{this.props.title}</td>
        <td style={todoStyle}>{this.props.children}</td>
      </tr>
    )
  }
}

Todo.propTypes = {
  title: React.PropTypes.string.isRequired
};