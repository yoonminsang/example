import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import AuthForm from '../../components/auth/AuthForm';

const RegisterForm = () => {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [errorType, setErrorType] = useState(null);
  const [input, setInput] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password, passwordConfirm } = input;
    if (email === '') {
      setError('이메일을 입력하세요');
      setErrorType('email');
    } else if (password === '') {
      setError('비밀번호를 입력하세요');
      setErrorType('password');
    } else if (passwordConfirm === '') {
      setError('비밀번호 확인을 입력하세요');
      setErrorType('passwordConfirm');
    } else if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다');
      setErrorType('password');
    } else if (
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
        email
      ) === false
    ) {
      setError('이메일 형식을 확인하세요');
      setErrorType('email');
    } else {
      try {
        const res = await axios({
          method: 'post',
          url: '/auth/register',
          data: {
            email,
            password,
          },
        });
        alert(res.data.text);
        if (res.data.status === 200) history.push('/');
      } catch (e) {
        console.error('register error', e);
      }
    }
  };
  return (
    <AuthForm
      type="register"
      input={input}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      errorType={errorType}
    />
  );
};

export default RegisterForm;
