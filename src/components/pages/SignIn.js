import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import _ from 'lodash';
import Title from './../Title';
import Footer from './../Footer';

const SignIn = () => {
  let history = useHistory();

  const onSubmit = e => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('user'));
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    if (_.isEqual(formData, userData)) {
      history.push('/todolist');
    } else if(formData.email === '' && formData.password === '') {
      alert('Kullanıcı adı ve şifre boş olamaz!');
    } else {
      alert('Kullanıcı adı ya da şifre yanlış!');
    }
  }

  return (
    <div className="container signin">
      <div className="form-wrapper d-flex flex-column justify-content-center align-items-center">
        <Title />
        <form className="w-100" onSubmit={e => onSubmit(e)}>
          <div className="form-group mb-0 mail-wrapper">
            <input type="text" className="form-control pl-5 border-bottom-0 mail" placeholder="email" name="email" />
          </div>
          <div className="form-group mb-0 pass-wrapper">
            <input type="text" className="form-control pl-5 pass" placeholder="password" name="password" />
          </div>
          <div className="form-wrapper__links form-group mt-2 mb-0 d-flex justify-content-between align-items-center">
            <Link to="#">beni hatırla</Link>
            <Link to="#">şifremi unuttum?</Link>
          </div>
          <div className="form-group text-center mt-4">
            <button type="submit" className="btn btn-primary login-btn">LOGIN</button>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  )
}

export default SignIn;
