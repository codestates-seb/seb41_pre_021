/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/*나중에 지우기 */
import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { StacksEditor } from '@stackoverflow/stacks-editor';
import '@stackoverflow/stacks-editor/dist/styles.css';
import '@stackoverflow/stacks';
import '../../../src/newEditor.css';

const Wrapper = styled.div`
  width: 100%;
`;
const Header = styled.header`
  font-size: 19px;
  padding: 20px 0 20px;
`;
const EditorWrapper = styled.div`
  max-width: 100%;
  margin-bottom: 20px;
  ul,
  ol {
    padding: 0;
    margin-left: 2.8em;
  }
  ul ul,
  ol ul,
  ul ol,
  ol ol {
    margin-bottom: 0;
  }
  ul {
    list-style-type: disc;
  }
  ol {
    list-style-type: decimal;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    /* margin: 0; */
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
  }
  button.js-insert-image-btn {
    pointer-events: none;
    span {
      opacity: 0.2;
    }
  }
  form.js-link-editor {
    padding-top: 0;
    margin-top: 0;
  }
  .s-btn {
    opacity: 0.9;
    --_bu-p: 0.6em;
    &:focus {
      box-shadow: none;
    }
  }

  .ProseMirror {
    border-top: 1px solid var(--black-100);
    width: 100%;
    font-family: 'Menlo', monospace;
    min-height: 280px;
    p {
      word-break: break-word;
    }
    code {
      word-break: break-all;
    }
  }
  .js-plugin-container {
    padding: 0 !important;
  }
  .d-flex.overflow-x-auto.ai-center.px12 {
    padding: 4px 6px 4px 4px !important;
  }
`;
export const Previewdiv = styled.div`
  padding: 10px 0 0;
  font-size: 15px;
  line-height: 1.5;
  letter-spacing: 0.01rem;

  a {
    text-decoration: underline;
  }
  ul,
  ol {
    margin-left: 30px;
    margin-bottom: 1.1em;
  }
  ul li {
    list-style-type: disc;
    p {
      margin-bottom: 10px;
    }
  }
  ol li {
    list-style-type: decimal;
  }
  h1 {
    font-size: 2.07692308rem;
    margin-bottom: 0.6em;
    margin-top: 1.5em;
    font-weight: 700;
    & + h2,
    & + h3 {
      margin-top: 0;
    }
  }
  h2 {
    font-size: 1.61538462rem;
    margin-bottom: 0.7em;
    margin-top: 1.4em;
    font-weight: 700;
  }
  h3 {
    font-size: 1.46153846rem;
    margin-bottom: 0.74em;
    margin-top: 1.2em;
    font-weight: 700;
  }
  > h1:first-child,
  > h2:first-child,
  > h3:first-child {
    margin-top: 0;
  }
  & > code,
  p > code {
    background-color: var(--black-075);
    border-radius: var(--br-sm);
    color: var(--black-800);
    padding: 2px 4px;
    font-size: 13px;
    overflow: auto;
    line-height: 1.5;
    font-size: 13px;
    margin: 0 2px 0;
  }
  blockquote {
    --_pr-img-mb: 0;
    color: var(--black-600);
    margin: 1.1em 1em 1.1em 1.1em;
    padding: 0.8em;
    position: relative;
    > p:first-child {
      margin-top: 0;
    }
    > p:last-child {
      margin-bottom: 0%;
    }
    &::before {
      content: '';
      display: block;
      position: absolute;
      text-align: center;
      top: 0;
      bottom: 0;
      left: 0;
      width: var(--su-static4);
      border-radius: var(--br-lg);
      background: var(--black-150);
    }
  }
  pre {
    overflow-wrap: normal;
    background-color: var(--highlight-bg);
    border-radius: var(--br-md);
    color: var(--highlight-color);
    font-family: var(--ff-mono);
    font-size: var(--fs-body1);
    line-height: var(--lh-md);
    margin: 0 0 19.5px;
    max-height: 600px;
    overflow: auto;
    padding: 15px;
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: transparent;
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--black-150);
      border-radius: 100px;
    }
  }
  p {
    max-width: 100%;
    font-family: 'Pretendard Variable';
    font-size: 15px;
    margin-bottom: 1.1em;
    word-break: break-word;
    overflow-wrap: break-word;
    strong {
      font-weight: 700;
    }
  }
`;
const Postdiv = styled.div`
  padding: 5px 0 35px;
  button {
    pointer-events: ${(props) => (props.guide ? 'none' : 'auto')};
    opacity: ${(props) => (props.guide ? '0.5' : '1')};
    margin: 2px;
    border: 1px solid transparent;
    border-radius: var(--br-sm);
    padding: 0.8em;
    background-color: var(--blue-500);
    color: white;
    box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
    display: block;
    text-align: center;
    line-height: 1.1em;
    font-size: 13px;
    letter-spacing: 0.01rem;
    &:hover {
      background-color: var(--blue-700);
    }
  }
`;
const Guide = styled.span`
  color: var(--black-600);
  padding-top: 10px;
`;
export default function QandAEditor() {
  const editorRef = useRef();
  const [content, setContent] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  useEffect(() => {
    if (content) setShowPreview(true);
    else setShowPreview(false);
    if (editorRef.current.document?.content.content[0].content.size >= 20)
      setShowGuide(false);
    else setShowGuide(true);
  }, [content]);

  const inputHandler = () => {
    setContent(editorRef.current.content);
  };

  const clickHandler = () => {};
  return (
    <Wrapper>
      <Header>Your Answer</Header>
      <EditorWrapper>
        <div
          className="editor"
          ref={(el) => {
            if (el && !editorRef.current) {
              editorRef.current = new StacksEditor(el, '');
            }
          }}
          onKeyUp={inputHandler}
          onClick={inputHandler}
        ></div>
      </EditorWrapper>
      {showPreview && (
        <Previewdiv>
          <span style={{ fontSize: '12px', color: 'var(--green-600)' }}>
            preview
          </span>
          {/* eslint-disable-next-line react/no-children-prop*/}
          <ReactMarkdown children={content} />
        </Previewdiv>
      )}
      <Postdiv guide={showGuide}>
        <button onClick={clickHandler}>Post Your Answer</button>
        {showGuide && (
          <Guide>
            Need{' '}
            {20 -
              (editorRef.current?.document.content.content[0].content.size ||
                0)}{' '}
            {20 -
              (editorRef.current?.document.content.content[0].content.size ||
                0) ===
            1
              ? ' more character.'
              : ' more characters.'}
          </Guide>
        )}
      </Postdiv>
    </Wrapper>
  );
}
