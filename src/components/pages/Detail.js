import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { todoUrl } from '../../urls';
import Title from './../Title';
import Footer from './../Footer';
import UserInfo from '../UserInfo';

const Detail = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState({
    title: '',
    description: '',
    isCompleted: ''
  });

  useEffect(() => {
    const loadTodo = async () => {
      const result = await axios.get(`${todoUrl}${id}`);
      setTodo(result.data);
    }
    loadTodo();
  }, [id]);

  return (
    <div className="container detail">
      <UserInfo />
      <div className="detail__wrapper d-flex flex-column justify-content-center align-items-center">
        <Title />
        <div className="card w-100 mb-4">
          <div className="card-body pb-5">
            <h5 className="card-title mb-3 py-2">{todo.title}</h5>
            <p className="card-text">{todo.description}</p>
          </div>
          <Link to={'/todolist'} className="btn btn-primary text-center">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Detail;
