import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../../node_modules/axios/index';
import { logout } from '../../modules/auth';
import Header from '../../components/common/Header';

const HeaderContainer = () => {
  const user = useSelector(({ auth }) => auth.user);
  const dispatch = useDispatch();
  const onLogout = async () => {
    await axios.get('/auth/logout');
    dispatch(logout());
  };
  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
