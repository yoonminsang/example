import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import AuthForm from '../../components/auth/AuthForm';
import { login } from '../../modules/auth';
const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const onLogin = useCallback((user) => dispatch(login(user)), [dispatch]);
  const [error, setError] = useState(null);
  const [errorType, setErrorType] = useState(null);
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = input;
    if (email === '') {
      setError('이메일을 입력하세요');
      setErrorType('email');
    } else if (password === '') {
      setError('비밀번호를 입력하세요');
      setErrorType('password');
    } else {
      dispatch(login(email, password));

      // try {
      //   const res = await axios({
      //     method: 'post',
      //     url: '/auth/login',
      //     data: {
      //       email,
      //       password,
      //     },
      //   });
      //   if (res.data.status === 200) {
      //     onLogin(res.data.user);
      //     history.push('/');
      //   } else alert(res.data.text);
      // } catch (e) {
      //   console.error('login error', e);
      // }
    }
  };
  return (
    <AuthForm
      type="login"
      input={input}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      errorType={errorType}
    />
  );
};

export default LoginForm;
