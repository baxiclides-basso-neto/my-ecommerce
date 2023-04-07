import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #222;
`;

export const Logo = styled.h1`
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Nav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
  }

  li {
    margin-left: 1.5rem;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 1.1rem;
  }

  a:hover {
    color: #ff6347;
  }
`;