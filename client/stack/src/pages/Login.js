import LoginForm from '../components/LoginForm';

import styled from 'styled-components';

const Login = () => {
  return (
    <LoginContainer>
      <Section>
        <LoginForm />
        <p>
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
        <p>
          Are you an employer? <a href="/signup">Sign up on Talent</a>
        </p>
      </Section>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: var(--black-050);
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  p {
    font-size: 13px;
    margin-top: 12px;
  }
`;

export default Login;
