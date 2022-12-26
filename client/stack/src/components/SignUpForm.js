import styled from 'styled-components';

const SignUpForm = () => {
  return (
    <SignUpFormContainer>
      <SignUpFormLabel htmlFor="displayName_input">
        Display name
      </SignUpFormLabel>
      <SignUpFormInput type="text" id="displayName_input" />
      <SignUpFormLabel htmlFor="email_input">Email</SignUpFormLabel>
      <SignUpFormInput type="email" id="email_input" />
      <SignUpFormLabel htmlFor="password_input">Password</SignUpFormLabel>
      <SignUpFormInput type="password" id="password_input" />
      <SignUpFormButton type="button">Sign Up</SignUpFormButton>
    </SignUpFormContainer>
  );
};

const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SignUpFormLabel = styled.label``;

const SignUpFormInput = styled.input``;

const SignUpFormButton = styled.button``;

export default SignUpForm;
