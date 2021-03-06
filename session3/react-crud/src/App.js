import axios from 'axios';
import React, { Component } from 'react';
import logo from './logo.svg';
import loadingGif from './loading.gif'
import './App.css';
import ListItem from './ListItem';

class App extends Component {
  constructor(){
    super();
    this.state = {
      newTodo: '',
      editing: false,
      editingIndex: null,
      notification: null,
      todos: [],
      loading: true
    }

    this.apiUrl = 'https://5be35c93d53daf0013250f4f.mockapi.io';

    this.alert = this.alert.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    //this.generateTodoId = this.generateTodoId.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount(){
    const response = await axios.get(`${this.apiUrl}/todos`);
    setTimeout(() => {
      this.setState({
        todos: response.data,
        loading: false
      })
    }, 1000);
  }

  handleChange(event){
    this.setState({
      newTodo: event.target.value
    });
    //console.log(event.target.name, event.target.value);
  }

  /*generateTodoId(){
    const lastTodo = this.state.todos[this.state.todos.length -1];
    if (lastTodo){
      return lastTodo.id + 1;
    }
    return 1;
  }*/

  async addTodo(){
    /*const newTodo = {
      name: this.state.newTodo,
      id: this.generateTodoId()
    }*/

    const response = await axios.post(`${this.apiUrl}/todos`,{
      name: this.state.newTodo
    });

    const todos = this.state.todos;
    //todos.push(newTodo);
    todos.push(response.data);

    //state is IMMUTABLE
    this.setState({
      todos: todos,
      newTodo: ''
    });

    this.alert('Todo added successfully.')
  }

  editTodo(index){
    const todo = this.state.todos[index];
    
    this.setState({
      editing: true,
      newTodo: todo.name,
      editingIndex: index
    })
  }

  async updateTodo(){
    const todo = this.state.todos[this.state.editingIndex];
    
    const response = await axios.put(`${this.apiUrl}/todos/${todo.id}`,{
      name: this.state.newTodo
    })

    //todo.name = this.state.newTodo;
    const todos = this.state.todos;
    //todos[this.state.editingIndex] = todo;
    todos[this.state.editingIndex] = response.data;
    this.setState({
      todos, 
      editing: false, 
      editingIndex: null,
      newTodo: ''
    });
    this.alert('Todo updated successfully.');
  }

  alert(notification){
    this.setState({
      notification
    });

    setTimeout(() => {
      this.setState({notification: null});
    }, 2000);
  }

  async deleteTodo(index){
    const todos = this.state.todos;
    const todo = todos[index];

    const response = await axios.delete(`${this.apiUrl}/todos/${todo.id}`);
    delete todos[index];
    this.setState({ todos });
    this.alert('Todo deleted successfully.')
  }

  render() {
    //console.log(this.state.newTodo);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>CRUD React</h1>
          <div className="container">
            {
              this.state.notification &&
              <div className="alert alert-success">
                <p className="text-center">{this.state.notification}</p>
              </div>
            }
            <input 
              type="text" 
              name="todo"
              className="my-4 form-control"
              placeholder="Add a new todo"
              onChange={this.handleChange}
              value = {this.state.newTodo}
            />

            <button 
              onClick={this.state.editing ? this.updateTodo : this.addTodo}
              className="btn-success mb-3 form-control" 
              disabled={this.state.newTodo.length < 5}
            >
              {this.state.editing ? 'Update todo' : 'Add todo'}
            </button>
            {
              this.state.loading &&
              <img src={loadingGif} alt=""/>
            }
            {
              (!this.state.editing || this.state.loading) && 
              <ul className="list-group">            
              {this.state.todos.map((item, index) => {
                return <ListItem
                  key = {item.id}
                  item = {item}
                  editTodo ={() => {this.editTodo(index)}}
                  deleteTodo = {() => {this.deleteTodo(index)}}
                />
              })}
            </ul>
            }
          </div>
        </header>
      </div>
    );
  }
}

export default App;
