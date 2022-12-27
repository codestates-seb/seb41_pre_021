import styled from 'styled-components';
import { useState } from 'react';

const SignUpForm = () => {
  const [textInput, setTextInput] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = textInput;

  const handleInputChange = (e) => {
    setTextInput({ ...textInput, [e.target.name]: e.target.value });
  };

  const handleSubmitClick = () => {
    validateDisplayName();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
  };

  // Validation
  // regNumber는 검사대상 전체(/g)에서 0-9안의 요소가 있는지 확인
  const regNumber = /[0-9]/g;
  // regString은 검사대상 전체에서(/g)에서 영어문자가 있는지 확인
  const regString = /[a-zA-Z]/g;
  // regEmail은 검사대상의 형식이 OOO@OOOO.OOO의 이메일 형태인지 확인(RFC-5322 방식)
  const regEmail =
    // eslint-disable-next-line
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  // Validation 상태
  const [isDiaplayNameValid, setIsDisplayNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConFirmPasswordValid, setIsConfirmPasswordValid] = useState(false);
  const [displayNameNotice, setDisplayNameNotice] = useState('');
  const [emailNotice, setEmailNotice] = useState('');
  const [passwordNotice, setPasswordNotice] = useState('');
  const [confirmPasswordNotice, setConfirmPasswordNotice] = useState('');

  // DiaplsyName 유효성 검사
  const validateDisplayName = () => {
    if (displayName.length !== 0) {
      setIsDisplayNameValid(true);
      setDisplayNameNotice('');
    } else {
      setIsDisplayNameValid(false);
      setDisplayNameNotice('Please input a Display name');
    }
  };

  // 이메일 유효성 검사
  const validateEmail = () => {
    if (regEmail.test(email)) {
      setIsEmailValid(true);
      setEmailNotice('');
    } else {
      setIsEmailValid(false);
      setEmailNotice(`${email} is not a valid email address`);
    }
  };

  // 비밀번호 유효성 검사
  const validatePassword = () => {
    if (
      8 < password.length &&
      regNumber.test(password) &&
      regString.test(password)
    ) {
      setIsPasswordValid(true);
      setPasswordNotice('');
    } else {
      setIsPasswordValid(false);
      setPasswordNotice(
        'Passwords must contain at least eight characters, including at least 1 letter and 1 number.'
      );
    }
  };

  // 비밀번호 확인 유효성 검사
  const validateConfirmPassword = () => {
    if (confirmPassword === password) {
      setIsConfirmPasswordValid(true);
      setConfirmPasswordNotice('');
    } else {
      setIsConfirmPasswordValid(false);
      setConfirmPasswordNotice('Both Passwords must be the same.');
    }
  };

  return (
    <SignUpFormContainer>
      <SignUpInputWrapper>
        <SignUpFormLabel htmlFor="displayName_input">
          Display name
        </SignUpFormLabel>
        <SignUpFormInput
          type="text"
          id="displayName_input"
          name="displayName"
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <SignUpFormNotice>{displayNameNotice}</SignUpFormNotice>
      </SignUpInputWrapper>
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
        <SignUpFormLabel htmlFor="password_input">
          Create a password
        </SignUpFormLabel>
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
      <SignUpInputWrapper>
        <SignUpFormLabel htmlFor="confirmPassword_input">
          Confirm your password
        </SignUpFormLabel>
        <SignUpFormInput
          type="password"
          id="confirmPassword_input"
          name="confirmPassword"
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <SignUpFormNotice>{confirmPasswordNotice}</SignUpFormNotice>
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

export default SignUpForm;
