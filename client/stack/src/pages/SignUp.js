import SignUpForm from '../components/SignUpForm';

import styled from 'styled-components';

const SignUp = () => {
  return (
    <SignUpContainer>
      <Section>
        <h1>Join the Stack Overflow community</h1>
        <Paragraph>Get unstuck — ask a question</Paragraph>
        <Paragraph>Unlock new privileges like voting and commenting</Paragraph>
        <Paragraph>Save your favorite tags, filters, and jobs</Paragraph>
        <Paragraph>Earn reputation and badges</Paragraph>
        <div>
          <p>Collaborate and share knowledge with a private group for FREE.</p>
          <a href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up">
            <p>Get Stack Overflow for Teams free for up to 50 users.</p>
          </a>
        </div>
      </Section>
      <SignUpForm></SignUpForm>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
  display: flex;
`;

const Section = styled.div``;

const Paragraph = styled.div``;

export default SignUp;
