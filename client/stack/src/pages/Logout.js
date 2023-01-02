import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { removeCookie } from '../utils/cookie';

const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie();
    localStorage.removeItem('memberId');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <LogoutContainer>
      <h1>
        Clicking “Log out” will log you out of the following domains on this
        device:
      </h1>
      <LogoutForm>
        <ItemContainer>
          <LogoutItem>
            <span>askubuntu.com</span>
          </LogoutItem>
          <LogoutItem>
            <span>mathoverflow.net</span>
          </LogoutItem>
          <LogoutItem>
            <span>serverfault.com</span>
          </LogoutItem>
          <LogoutItem>
            <span>stackapps.com</span>
          </LogoutItem>
          <LogoutItem>
            <span>stackapps.com</span>
          </LogoutItem>
          <LogoutItem>
            <span>stackoverflow.com</span>
          </LogoutItem>
          <LogoutItem>
            <span>superuser.com</span>
          </LogoutItem>
        </ItemContainer>
        <DivCheckbox>
          <input type="checkbox" name="checkbox" />
          <label htmlFor="checkbox">Log out on all devices</label>
        </DivCheckbox>
        <ButtonContainer>
          <BlueButton onClick={() => handleLogout()}>Log out</BlueButton>
          <WhiteButton onClick={() => navigate(-1)}>Cancel</WhiteButton>
        </ButtonContainer>
        <p>
          If you’re on a shared computer, remember to log out of your Open ID
          provider (Facebook, Google, Stack Exchange, etc.) as well.
        </p>
      </LogoutForm>
    </LogoutContainer>
  );
};

const LogoutContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: var(--black-050);
  h1 {
    font-size: 21px;
    margin-bottom: 24px;
    line-height: 28px;
    width: 530px;
    text-align: center;
  }
`;

const LogoutForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 324px;
  margin-bottom: 24px;
  padding: 24px;
  box-shadow: var(--bs-sm);
  border-radius: 5px;
  box-sizing: border-box;
  p {
    margin-top: 32px;
    font-size: 12px;
    color: rgb(106, 115, 124);
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--black-100);
  padding-bottom: 12px;
  margin-bottom: 16px;
`;

const LogoutItem = styled.a`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin: 4px 0;
  .icon {
    margin: 4px;
  }
  span {
    color: rgb(0, 116, 204);
  }
`;

const DivCheckbox = styled.div`
  margin-bottom: 16px;
  input {
    margin: 1px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const ButtonLogout = styled.button`
  padding: 10px;
  border: 1px solid;
  margin: 2px;
`;

const BlueButton = styled(ButtonLogout)`
  background-color: var(--blue-500);
  border: 1px solid var(--blue-600);
  color: white;
  &:hover {
    filter: brightness(0.9);
  }
`;

const WhiteButton = styled(ButtonLogout)`
  background-color: white;
  border: 1px solid white;
  color: var(--blue-500);
  &:hover {
    filter: brightness(0.9);
  }
`;

export default Logout;
