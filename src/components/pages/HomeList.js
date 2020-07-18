import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { todoUrl } from '../../urls';
import { Link } from 'react-router-dom';
import Title from './../Title';
import Footer from './../Footer';
import Create from '../Create';
import UserInfo from '../UserInfo';

const HomeList = () => {

  const [todos, setTodo] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const selectionChanged = async (e, todo) => {
    const updatedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted
    }
    await axios.put(`${todoUrl}${todo.id}`, updatedTodo);
    loadTodos();
  }

  const loadTodos = async () => {
    const result = await axios.get(`${todoUrl}`);
    setTodo(result.data);
  }

  const deleteTodo = async id => {
    await axios.delete(`${todoUrl}${id}`);
    loadTodos();
  }

  let todoZero = '';
  if(todos.length > 9 && todos.length < 100) {
    todoZero = '0';
  } else if(todos.length <= 9) {
    todoZero = '00';
  } else {
    todoZero= '';
  }

  return (
    <div className="container todolist">
      <UserInfo />
      <div className="todolist__wrapper d-flex flex-column justify-content-center align-items-center">
        <Title />
        <Create loadTodos={loadTodos} />
        <div className="card w-100 mt-2">
          <div className="card-body p-0">
            <ul className="list-group">
              {todos.map((item, index) => (
                <li key={index} className="list-group-item list-group-item-action">
                  <Link to={`/todolist/${item.id}`}>
                    <span className={`mr-2${item.isCompleted ? " is-done" : ""}`}>
                      {item.title} <i className="float-right">{todoZero + (index + 1)}</i>
                    </span>
                  </Link>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" defaultChecked={item.isCompleted} name={`isCompleted${item.id}`} value={item.isCompleted} 
                    onChange={e => selectionChanged(e, item)} />
                  </div>
                  <div className="form-check-inline">
                    <button className="btn btn-danger btn-sm delete-btn rounded-circle p-1"
                      onClick={() => deleteTodo(item.id)}>
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default HomeList;
