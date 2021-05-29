import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Link } from 'react-router-dom';

const AuthTemplateBlock = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: ${oc.gray[1]};
  align-items: center;
  justify-content: center;
`;

const Inner = styled.div`
  background: white;
  padding: 2rem;
  width: 22.5rem;
  div:nth-child(1) {
    margin-bottom: 2rem;
    text-align: center;
    h1 {
      font-size: 1.125rem;
      color: ${oc.gray[7]};
    }
  }
`;

const AuthTemplate = ({ children }) => {
  return (
    <>
      <AuthTemplateBlock>
        <Inner>
          <div>
            <h1>
              <Link to="/">React Blog</Link>
            </h1>
          </div>
          {children}
        </Inner>
      </AuthTemplateBlock>
    </>
  );
};

export default AuthTemplate;
