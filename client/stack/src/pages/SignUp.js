import SignUpForm from '../components/SignUpForm';

import styled from 'styled-components';

const SignUp = () => {
  return (
    <SignUpContainer>
      <LeftSection>
        <h1>Join the Stack Overflow community</h1>
        <Paragraph>Get unstuck — ask a question</Paragraph>
        <Paragraph>Unlock new privileges like voting and commenting</Paragraph>
        <Paragraph>Save your favorite tags, filters, and jobs</Paragraph>
        <Paragraph>Earn reputation and badges</Paragraph>
        <SubParagraph>
          <p>Collaborate and share knowledge with a private group for FREE.</p>
          <a href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up">
            <p>Get Stack Overflow for Teams free for up to 50 users.</p>
          </a>
        </SubParagraph>
      </LeftSection>
      <RightSection>
        <SignUpForm />
        <p>
          Already have an account? <a href="">Log in</a>
        </p>
        <p>
          Are you an employer? <a href="">Sign up on Talent</a>{' '}
        </p>
      </RightSection>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: var(--black-050);
`;

const LeftSection = styled.div`
  width: fit-content;
  margin-right: 48px;
  margin-bottom: 128px;
  h1 {
    font-size: 27px;
    font-weight: 400;
    vertical-align: baseline;
    margin-bottom: 32px;
  }
`;

const RightSection = styled.div`
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

const Paragraph = styled.div`
  font-size: 15px;
  margin-bottom: 24px;
`;

const SubParagraph = styled.div`
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

export default SignUp;
