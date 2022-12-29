import styled from 'styled-components';

export const Tag = ({ tag }) => {
  return (
    <Tagslistdiv>
      <Tagdiv>
        <a href="/java">{tag.tagName}</a>
      </Tagdiv>
      <Taginfodiv>{tag.description}</Taginfodiv>
      <TagBottomdiv>
        <TagQuestiondiv>{tag.count} questions</TagQuestiondiv>
        <div></div>
      </TagBottomdiv>
    </Tagslistdiv>
  );
};

const Tagslistdiv = styled.div`
  border: 1px solid var(--bc-medium);
  border-radius: 3px;
  padding: 12px;
`;

const Tagdiv = styled.div`
  margin: 0 0 12px;

  a {
    text-decoration-line: none;
    background-color: var(--powder-100);
    color: var(--powder-700);
    border-radius: 5px;
    padding: 4.8px 6px;
    font-size: 12px;
    margin: 0 4px 0 0;
  }
`;

const Taginfodiv = styled.div`
  margin: 0 0 12px;
  font-size: 13px;
  color: var(--fc-medium);
`;

const TagBottomdiv = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--black-400);
  font-size: 12px;
`;

const TagQuestiondiv = styled.div``;
