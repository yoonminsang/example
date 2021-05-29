import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import Button from './Button';
import axios from 'axios';
import { useSelector } from 'react-redux';

const HeaderBlock = styled.header`
  position: fixed;
  width: 100%;
  background: white;
  border-bottom: 1px solid lightgray;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 62.5rem;
  height: 4.375rem;
  margin: 0 auto;
`;

const Left = styled.div`
  h1 {
    font-size: 1.5rem;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const SearchButton = styled.button`
  margin-right: 20px;
  width: 1.5rem;
  height: 1.5rem;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const ExistUser = styled.div`
  span {
    margin-right: 1rem;
  }
`;

const Empty = styled.div`
  height: 4.375rem;
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Flex>
          <Left>
            <h1>
              <Link to="/">React Blog</Link>
            </h1>
          </Left>
          <Right>
            <SearchButton>
              <AiOutlineSearch />
            </SearchButton>
            {user ? (
              <ExistUser>
                <span>{user.email}</span>
                <Button onClick={onLogout} gray radius="true">
                  로그아웃
                </Button>
              </ExistUser>
            ) : (
              <Button to="/login" gray="true" radius="true">
                로그인
              </Button>
            )}
          </Right>
        </Flex>
      </HeaderBlock>
      <Empty></Empty>
    </>
  );
};

export default Header;
