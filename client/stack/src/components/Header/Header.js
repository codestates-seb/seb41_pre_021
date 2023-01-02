import styled from 'styled-components';
import SearchBar from './SearchBar';
import HeaderNav from './HeaderNav';
import { Logo, LogInButton, SignUpButton } from './style';

const HOME_URL = '/';
const Wrapper = styled.header`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  top: 0;
  left: 0;
  height: 50px;
  background-color: var(--black-025);
  width: 100%;
  box-shadow: var(--bs-sm);
  z-index: 10;
  border-top: 3px solid var(--orange-400);
  div.wrapper {
    width: var(--s-full);
    max-width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    align-items: center;
  }
  .products {
    padding: 6px 12px;
    border-radius: 50px;
    color: var(--black-600);
    display: flex;
    align-items: center;
    line-height: 17px;
  }
  a:hover,
  li:hover {
    background-color: var(--black-075);
  }
`;

export default function Header({ isLoggedIn }) {
  return (
    <Wrapper>
      <div className="wrapper">
        <Logo href={HOME_URL}>
          <span>Stack Overflow</span>
        </Logo>
        {isLoggedIn ? (
          <a className="products" href="#!">
            Products
          </a>
        ) : (
          <>
            <a className="products" href="#!">
              about
            </a>
            <a className="products" href="#!">
              Products
            </a>
            <a className="products" href="#!">
              For Teams
            </a>
          </>
        )}

        <SearchBar />
        {isLoggedIn ? (
          <HeaderNav />
        ) : (
          <>
            <LogInButton href="/login">Log in</LogInButton>
            <SignUpButton href="/signup">Sign up</SignUpButton>
          </>
        )}
      </div>
    </Wrapper>
  );
}
