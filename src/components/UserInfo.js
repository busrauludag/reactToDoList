import React from 'react';

const UserInfo = () => {
  const userData = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="user-info d-flex justify-content-between align-items-center">
      <p className="footer-text text-center my-1 mr-2">{userData.email}</p>
      <img src="http://via.placeholder.com/25x25" alt={userData.email} className="rounded-circle" />
    </div>
  )
}

export default UserInfo;
