import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { userUrl } from '../../urls';
import { useHistory, useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  let history = useHistory();
  const [user, setUser] = useState({
    type: '',
    tckn: '',
    name: '',
    phone: '',
    email: '',
    related_firm: '',
    address: ''
  });
  const { type, tckn, name, phone, email, related_firm, address } = user;

  const onInputChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const selectionChanged = e => {
    setUser({
      ...user,
      type: e.target.value
    })
  }

  const firmChange = (e) => {
    setUser({
      ...user,
      related_firm: e.target.value
    })
  }

  useEffect(() => {
    loadUserData();
  }, []);

  const onSubmit = async e => {
    console.log(e)
    await axios.put(`${userUrl}${id}`, user);
    history.push('/');
  }

  const loadUserData = async () => {
    const result = await axios.get(`${userUrl}${id}`);
    setUser(result.data);
  }

  return (
    <div className="container">
      <div className="py-4">
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="type">Customer Type</label>
            <br />
            <span className="mr-2">
              <input type="radio" id="gercek" className="mr-1" name="type" onChange={selectionChanged}
                value="Gerçek" checked={type === 'Gerçek'} />
              <label htmlFor="gercek">Gerçek</label>
            </span>
            <span className="mr-2">
              <input type="radio" id="tuzel" className="mr-1" name="type" onChange={selectionChanged}
                value="Tüzel" checked={type === 'Tüzel'} />
              <label htmlFor="tuzel">Tüzel</label>
            </span>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Customer Name" name="tckn" value={tckn} readOnly />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Customer Name" name="name" value={name} onChange={e => onInputChange(e)} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="GSM" name="phone" value={phone} onChange={e => onInputChange(e)} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="E-mail" name="email" value={email} onChange={e => onInputChange(e)} />
          </div>
          <div className="form-group">
            <select className="form-control" name="related_firm" value={related_firm} onChange={firmChange}>
              <option value="">Related Firm</option>
              <option value="Firm 1">Firm 1</option>
              <option value="Firm 2">Firm 2</option>
            </select>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Address" name="address" value={address} onChange={e => onInputChange(e)} />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Edit;
