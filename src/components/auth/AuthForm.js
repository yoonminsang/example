import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import oc from 'open-color';
import { Link } from 'react-router-dom';

const AuthFormBlock = styled.div``;

const Input = styled.input`
  font-size: 1rem;
  width: 100%;
  padding-bottom: 0.5rem;
  outline: none;
  border-bottom: 1px solid ${oc.gray[5]};
  &:focus {
    border-bottom: 1px solid ${oc.gray[9]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const MarginButton = styled(Button)`
  margin-top: 1rem;
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${oc.gray[5]};
    border-bottom: 1px solid ${oc.gray[5]};
    &:hover {
      color: ${oc.gray[9]};
      border-bottom: 1px solid ${oc.gray[9]};
    }
  }
`;

const ErrorDiv = styled.div`
  color: red;
  text-align: center;
`;

const AuthForm = ({ type, input, onChange, onSubmit, error, errorType }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  useEffect(() => {
    if (errorType === 'email') emailRef.current.focus();
    else if (errorType === 'password') passwordRef.current.focus();
    else if (errorType === 'passwordConfirm')
      passwordConfirmRef.current.focus();
  }, [errorType]);
  const { email, password, passwordConfirm } = input;
  const text = type === 'login' ? '로그인' : '회원가입';
  return (
    <>
      <AuthFormBlock>
        <form onSubmit={onSubmit}>
          <Input
            ref={emailRef}
            placeholder="이메일"
            name="email"
            value={email}
            onChange={onChange}
          ></Input>
          <Input
            ref={passwordRef}
            placeholder="비밀번호"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          ></Input>
          {type === 'register' && (
            <Input
              ref={passwordConfirmRef}
              placeholder="비밀번호 확인"
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={onChange}
            ></Input>
          )}
          {error && <ErrorDiv>{error}</ErrorDiv>}
          <MarginButton blue fullWidth>
            {text}
          </MarginButton>
          <Footer>
            {type === 'login' ? (
              <Link to="/register">회원가입</Link>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </Footer>
        </form>
      </AuthFormBlock>
    </>
  );
};

export default AuthForm;
