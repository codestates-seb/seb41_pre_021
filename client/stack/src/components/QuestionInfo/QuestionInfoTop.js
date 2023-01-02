import styled from 'styled-components';
import { getAgoTime } from '../../utils/getTime';

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-left: 24px;
  padding-top: 24px;
  margin: 0 16px 10px 0;

  h2 {
    font-size: 27px;
    font-weight: 400;
    color: var(--black-700);
  }
`;

const Titlediv = styled.div`
  display: flex;
  h2 {
    word-break: keep-all;
  }
`;
const TitleWrapperdiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Askbuttondiv = styled.div``;

const AskQuestion = styled.button`
  background-color: var(--blue-500);
  color: white;
  font-size: 13px;
  border: none;
  border-radius: 3px;
  border: 1px solid transparent;
  padding: 0.8em;
  margin-left: 15px;
  white-space: nowrap;
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  cursor: pointer;
  &:hover {
    background-color: var(--blue-600);
  }
`;

const Askdaydiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuestionInfoWrapperdiv = styled.div`
  display: flex;
  font-size: 13px;
  padding: 10px 24px 10px 0px;
  border-bottom: solid var(--black-075);
`;

const QuestionInfodiv = styled.div`
  margin: 0 16px 8px 0;

  span {
    color: var(--fc-light);
    margin-right: 6px;
  }
  time {
    color: var(--black-800);
  }
`;

export default function QuestionInfoTop({ qinfo }) {
  const { questionTitle, asked, modified, views } = qinfo;
  return (
    <Top>
      <TitleWrapperdiv>
        <Titlediv>
          <h2>{questionTitle}</h2>
        </Titlediv>
        <Askbuttondiv>
          <AskQuestion>Ask Question</AskQuestion>
        </Askbuttondiv>
      </TitleWrapperdiv>
      <QuestionInfoWrapperdiv>
        <Askdaydiv>
          <QuestionInfodiv>
            <span>Asked</span>
            <time>{getAgoTime(asked)}</time>
          </QuestionInfodiv>
          <QuestionInfodiv>
            <span>Modified</span>
            <time>{getAgoTime(modified)}</time>
          </QuestionInfodiv>
          <QuestionInfodiv>
            <span>Viewed</span>
            {views} times
          </QuestionInfodiv>
        </Askdaydiv>
      </QuestionInfoWrapperdiv>
    </Top>
  );
}
