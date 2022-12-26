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
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConFirmPasswordValid, setIsConfirmPasswordValid] = useState(false);
  const [emailNotice, setEmailNotice] = useState('');
  const [passwordNotice, setPasswordNotice] = useState('');
  const [confirmPasswordNotice, setConfirmPasswordNotice] = useState('');

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
          required
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
      </SignUpInputWrapper>
      <SignUpInputWrapper>
        <SignUpFormLabel htmlFor="email_input">Email</SignUpFormLabel>
        <SignUpFormInput
          type="email"
          id="email_input"
          name="email"
          required
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
      </SignUpInputWrapper>
      <SignUpInputWrapper>
        <SignUpFormLabel htmlFor="password_input">
          Create a password
        </SignUpFormLabel>
        <SignUpFormInput
          type="password"
          id="password_input"
          name="password"
          required
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
      </SignUpInputWrapper>
      <SignUpInputWrapper>
        <SignUpFormLabel htmlFor="confirmPassword_input">
          Confirm your password
        </SignUpFormLabel>
        <SignUpFormInput
          type="confirmPassword"
          id="confirmPassword_input"
          name="confirmPassword"
          required
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
      </SignUpInputWrapper>
      <SignUpButtonWrapper>
        <SignUpFormButton type="button">Sign Up</SignUpFormButton>
      </SignUpButtonWrapper>
    </SignUpFormContainer>
  );
};

const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SignUpInputWrapper = styled.div``;

const SignUpFormLabel = styled.label``;

const SignUpFormInput = styled.input``;

const SignUpButtonWrapper = styled.div``;

const SignUpFormButton = styled.button``;

export default SignUpForm;
