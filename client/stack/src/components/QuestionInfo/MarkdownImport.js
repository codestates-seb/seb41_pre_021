import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Previewdiv } from './QandAEditor';
import post from './../../data/QuestionInfo/dummyContent.md';
const MainContentWrapper = styled(Previewdiv)`
  width: 100%;
  max-width: 680px;
  padding-top: 8px;
`;

export default function MarkdownImport({ type, qinfo }) {
  let [readable, setReadable] = useState({ md: '' });

  useEffect(() => {
    fetch(post)
      .then((res) => res.text())
      .then((md) => {
        setReadable({ md });
      });
  }, []);

  return (
    <MainContentWrapper>
      {/*eslint-disable-next-line react/no-children-prop*/}
      <ReactMarkdown children={type === 'question' ? qinfo : readable.md} />
    </MainContentWrapper>
  );
}
