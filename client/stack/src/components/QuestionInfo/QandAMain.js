/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import VoteHistory from './VoteHistory';
import TagList from './TagList';
import QandAMainBottom from './QandAMainBottom';
import CommentSection from './CommentSection';
import MarkdownImport from './MarkdownImport';
//markdownimport 지우기

const Main = styled.div`
  width: 100%;
  display: flex;
  padding-right: 10px;
  flex-grow: 1;
  /* width: calc(100% - 300px - 24px); */
  border-bottom: ${(props) =>
    props.type === 'answer' ? '1px solid var(--black-075)' : 'none'};
`;

const Postdiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 15px;
  flex-grow: 1;
`;

const Postbodydiv = styled.div``;

const PostTagdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 24px 0 40px;
`;

export default function QuestionInfoMain({ type, qinfo }) {
  return (
    <Main id="main" type={type}>
      <VoteHistory qinfo={qinfo} />
      <Postdiv>
        <Postbodydiv>
          <MarkdownImport type={type} qinfo={qinfo.questionPart.content} />
        </Postbodydiv>
        {type === 'question' && (
          <PostTagdiv>
            <TagList qinfo={qinfo.questionPart.tags} />
          </PostTagdiv>
        )}
        <QandAMainBottom type={type} qinfo={qinfo} />
        <CommentSection qinfo={qinfo} />
      </Postdiv>
    </Main>
  );
}
