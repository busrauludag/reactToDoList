import React, { useState } from 'react';
import axios from 'axios';
import { todoUrl } from '../urls';

const Create = () => {
  const [todo, setTodo] = useState({
    title: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    isCompleted: false
  });

  const onInputChange = e => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${todoUrl}`, todo);
  }

  return (
    <div className="card add-form-wrapper w-100">
      <div className="card-body p-4 p-sm-5">
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="What needs to be done?" name="title" value={todo.title}
              onChange={e => onInputChange(e)} />
          </div>
          <div className="form-group add-form-button">
            <button className="btn btn-primary rounded-circle">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create;
