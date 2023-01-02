/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { Nav } from '../components/Nav.js';
import { useParams } from 'react-router-dom';
import QuestionInfoTop from '../components/QuestionInfo/QuestionInfoTop.js';
import QandAMain from '../components/QuestionInfo/QandAMain.js';
import QuestionfoSideBar from '../components/QuestionInfo/QuestionInfoSideBar.js';
import AnswerHeader from '../components/QuestionInfo/AnswerHeader.js';
import QandAEditor from '../components/QuestionInfo/QandAEditor.js';
import QandARecommend from '../components/QuestionInfo/QandARecommend.js';
import { useFetch } from '../utils/useFetch.js';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: 100%;
`;

const MainWrapper = styled.div`
  display: flex;
  margin-left: 22px;
`;
const QandAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 739px;
`;

const QuestionInfo = () => {
  let { id } = useParams();
  const [data, isPending] = useFetch(`/questions/${id}`);

  return (
    <>
      {!isPending && (
        <Container id="container">
          <Nav />
          <Content id="content">
            <QuestionInfoTop qinfo={data.questionPart} />
            <MainWrapper>
              <QandAWrapper>
                <QandAMain type="question" qinfo={data} />
                <AnswerHeader />
                <QandAMain type="answer" qinfo={data} />
                <QandAMain type="answer" qinfo={data} />
                <QandAEditor />
                <QandARecommend qinfo={data.questionPart.tags} />
              </QandAWrapper>
              <QuestionfoSideBar />
            </MainWrapper>
          </Content>
        </Container>
      )}
    </>
  );
};

export default QuestionInfo;
