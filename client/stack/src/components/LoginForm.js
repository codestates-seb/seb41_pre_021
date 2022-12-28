import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { setCookie } from '../util/cookie';

const LoginForm = () => {
  const [textInput, setTextInput] = useState({
    email: '',
    password: '',
  });

  const { email, password } = textInput;

  const handleInputChange = (e) => {
    setTextInput({ ...textInput, [e.target.name]: e.target.value });
  };

  const validateData = () => {
    validateEmail();
    validatePassword();
  };

  const navigate = useNavigate();
  const handleSubmitClick = async () => {
    validateData();
    if (isEmailValid && isPasswordValid) {
      try {
        const response = await axios.post('https://hyeon-dong.site/login', {
          username: email,
          password,
        });
        const userJwt = await response.headers.get('Authorization');
        const decodedJwt = jwt_decode(userJwt);
        setCookie('userJwt', userJwt);
        localStorage.setItem('memberId', JSON.stringify(decodedJwt.memberId));
        localStorage.setItem('username', JSON.stringify(decodedJwt.username));
        alert('Logged In!');
        navigate('/');
        return response;
      } catch (err) {
        console.error(err);
      }
    }
  };

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [emailNotice, setEmailNotice] = useState('');
  const [passwordNotice, setPasswordNotice] = useState('');

  // 이메일 유효성 검사
  const validateEmail = () => {
    if (email.length !== 0) {
      setIsEmailValid(true);
      setEmailNotice('');
    } else {
      setIsEmailValid(false);
      setEmailNotice(`Email cannot be empty.`);
    }
  };

  // 비밀번호 유효성 검사
  const validatePassword = () => {
    if (password.length !== 0) {
      setIsPasswordValid(true);
      setPasswordNotice('');
    } else {
      setIsPasswordValid(false);
      setPasswordNotice('Passwords cannot be empty.');
    }
  };

  return (
    <SignUpFormContainer>
      <SignUpInputWrapper>
        <SignUpFormLabel htmlFor="email_input">Email</SignUpFormLabel>
        <SignUpFormInput
          type="email"
          id="email_input"
          name="email"
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <SignUpFormNotice>{emailNotice}</SignUpFormNotice>
      </SignUpInputWrapper>
      <SignUpInputWrapper>
        <SignUpFormLabel htmlFor="password_input">Password</SignUpFormLabel>
        <SignUpFormInput
          type="password"
          id="password_input"
          name="password"
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <SignUpFormNotice>{passwordNotice}</SignUpFormNotice>
      </SignUpInputWrapper>
      <SignUpButtonWrapper>
        <SignUpFormButton type="button" onClick={handleSubmitClick}>
          Sign Up
        </SignUpFormButton>
        <SignUpFormParagraph>
          <p>
            By clicking “Sign up”, you agree to our{' '}
            <a href="https://stackoverflow.com/legal/terms-of-service/public">
              terms of service
            </a>
            ,{' '}
            <a href="https://stackoverflow.com/legal/privacy-policy">
              privacy policy{' '}
            </a>
            and{' '}
            <a href="https://stackoverflow.com/legal/cookie-policy">
              cookie policy
            </a>
          </p>
        </SignUpFormParagraph>
      </SignUpButtonWrapper>
    </SignUpFormContainer>
  );
};

const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 324px;
  margin-bottom: 24px;
  padding: 24px;
  box-shadow: var(--bs-sm);
  border-radius: 5px;
  box-sizing: border-box;
`;

const SignUpInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0;
`;

const SignUpFormLabel = styled.label`
  font-size: 15px;
  font-weight: 600;
  padding: 0 2px;
  margin: 2px 0;
`;

const SignUpFormInput = styled.input`
  width: 268px;
  height: 32px;
  margin: 2px 0;
  font-size: 13px;
  line-height: 17px;
`;

const SignUpFormNotice = styled.p`
  font-size: 12px;
  color: var(--red);
  margin: 2px 0;
`;

const SignUpButtonWrapper = styled.div`
  width: 100%;
`;

const SignUpFormButton = styled.button`
  width: 100%;
  height: 42px;
  background-color: var(--blue-500);
  color: white;
  font-size: 13px;
  border-radius: 3px;
  border: solid 1px var(--blue-600);
`;

const SignUpFormParagraph = styled.div`
  margin-top: 32px;
  p {
    font-size: 13px;
    line-height: 17px;
    color: rgb(106, 115, 124);
  }
  a {
    text-decoration-color: rgb(0, 116, 204);
    text-decoration-line: none;
  }
`;

export default LoginForm;
