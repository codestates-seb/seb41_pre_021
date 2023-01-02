import styled from 'styled-components';
import '@stackoverflow/stacks-editor/dist/styles.css';
import { StacksEditor } from '@stackoverflow/stacks-editor';
import '@stackoverflow/stacks';
import { useEffect, useRef, useState } from 'react';
import '../../src/newEditor.css';

const QuestionUpload = () => {
  const prbeditorRef = useRef();
  const expeditorRef = useRef();
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);

  useEffect(() => {}, [content]);

  const inputHandler = () => {
    setContent(prbeditorRef.current.content);
  };
  const clickHandler = () => {};

  const removeTags = (indexToRemove) => {
    tags.splice(indexToRemove, 1);
    setTags([...tags]);
  };

  const addTags = () => {
    const text = document.getElementById('text').value;
    console.log(text);
    if (tags.indexOf(text) > 0) {
      console.log('중복');
    } // 추가X
    else if (text === '') console.log('빈 내용'); // 실행X
    else {
      document.getElementById('text').value = '';
      setTags([...tags, text]);
    }
  };

  return (
    <PageContainer>
      <PageContentdiv>
        <QuestionformMain>
          <Topdiv>
            <Headerdiv>
              <h1>Ask a public question</h1>
            </Headerdiv>
            <Infodiv>
              <Infoflexdiv>
                <InfoBoxdiv>
                  <h2>Writing a good question</h2>
                  <p>
                    You’re ready to ask a programming-related question and this
                    form will help guide you through the process.
                  </p>
                  <p>
                    Looking to ask a non-programming question? See the topics
                    here to find a relevant site.
                  </p>
                  <h5>Steps</h5>
                  <ul>
                    <li>Summarize your problem in a one-line title.</li>
                    <li>Describe your problem in more detail.</li>
                    <li>
                      Describe what you tried and what you expected to happen.
                    </li>
                    <li>
                      Add “tags” which help surface your question to members of
                      the community.
                    </li>
                    <li>Review your question and post it to the site.</li>
                  </ul>
                </InfoBoxdiv>
              </Infoflexdiv>
            </Infodiv>
          </Topdiv>
          <Titlediv>
            <TitleBoxdiv>
              <Titleflexdiv>
                <TitleTopdiv>
                  <div className="title">Title</div>
                  <div className="info">
                    Be specific and imagine you’re asking a question to another
                    person.
                  </div>
                </TitleTopdiv>
                <TitleBottomdiv>
                  <input placeholder="e.g. Is there an R function for finding the index of an element in a vector?"></input>
                </TitleBottomdiv>
              </Titleflexdiv>
              <Titlebtndiv>
                <button className="blue">Next</button>
              </Titlebtndiv>
            </TitleBoxdiv>
            <Sidebardiv>
              <TitleSidebar>
                <div className="flex">
                  <SidebarTitle>Writing a good title</SidebarTitle>
                  <SidebarInfo>
                    <p>Your title should summarize the problem.</p>
                    <p>
                      You might find that you have a better idea of your title
                      after writing out the rest of the question.
                    </p>
                  </SidebarInfo>
                </div>
              </TitleSidebar>
            </Sidebardiv>
          </Titlediv>
          {/* Title 안쓰면 못넘어감 */}
          <Problemdiv>
            <div>
              <Detaildiv>
                <DetailInfodiv>
                  <div className="title">
                    What are the details of your problem?
                  </div>
                  <div className="info">
                    Introduce the problem and expand on what you put in the
                    title. Minimum 20 characters.
                  </div>
                </DetailInfodiv>
                <EditorWrapper>
                  <textbox
                    className="editor"
                    ref={(el) => {
                      if (el && !prbeditorRef.current) {
                        prbeditorRef.current = new StacksEditor(el, '');
                      }
                    }}
                    onKeyUp={inputHandler}
                    onClick={inputHandler}
                  ></textbox>
                </EditorWrapper>
                <button className="blue" onClick={clickHandler}>
                  Next
                </button>
              </Detaildiv>
            </div>

            <Sidebardiv>
              <TitleSidebar>
                <div className="flex">
                  <SidebarTitle>Introduce the problem</SidebarTitle>
                  <SidebarInfo>
                    <p>
                      Explain how you encountered the problem you’re trying to
                      solve, and any difficulties that have prevented you from
                      solving it yourself.
                    </p>
                  </SidebarInfo>
                </div>
              </TitleSidebar>
            </Sidebardiv>
          </Problemdiv>
          {/* Problem 안쓰면 못넘어감 */}
          <TryExpectdiv>
            <div>
              <div className="design">
                <TryExpectInfodiv>
                  <div className="title">
                    What did you try and what were you expecting?
                  </div>
                  <div className="info">
                    Describe what you tried, what you expected to happen, and
                    what actually resulted. Minimum 20 characters.
                  </div>
                </TryExpectInfodiv>
                <EditorWrapper>
                  <textbox
                    className="editor"
                    ref={(el) => {
                      if (el && !expeditorRef.current) {
                        expeditorRef.current = new StacksEditor(el, '');
                      }
                    }}
                    onKeyUp={inputHandler}
                    onClick={inputHandler}
                  ></textbox>
                </EditorWrapper>
                <button className="blue">Next</button>
              </div>
            </div>

            <Sidebardiv>
              <TitleSidebar>
                <div className="flex">
                  <SidebarTitle>Expand on the problem</SidebarTitle>
                  <SidebarInfo>
                    <p>
                      Show what you’ve tried, tell us what happened, and why it
                      didn’t meet your needs.
                    </p>
                    <p>
                      Not all questions benefit from including code, but if your
                      problem is better understood with code you’ve written, you
                      should include a minimal, reproducible example.
                    </p>
                    <p>
                      Please make sure to post code and errors as text directly
                      to the question (and not as images), and format them
                      appropriately.{' '}
                    </p>
                  </SidebarInfo>
                </div>
              </TitleSidebar>
            </Sidebardiv>
          </TryExpectdiv>
          {/* Title 안쓰면 못넘어감 */}
          <Tagsdiv>
            <div>
              <Detaildiv>
                <TagsTopdiv>
                  <div className="title">Tags</div>
                  <div className="info">
                    Add up to 5 tags to describe what your question is about.
                    Start typing to see suggestions.
                  </div>
                </TagsTopdiv>
                <TitleBottomdiv>
                  <div className="tags">
                    <ul id="tags">
                      {tags.map((tag, index) => (
                        <li key={index} className="tag">
                          <span className="tag-title">{tag}</span>
                          <button
                            className="tag-close-icon"
                            onClick={() => removeTags(index)}
                          >
                            X
                          </button>
                        </li>
                      ))}
                    </ul>
                    <input
                      className="tag-input"
                      type="text"
                      id="text"
                      onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                          addTags(e);
                        }
                      }}
                      placeholder="e.g. (string databse spring)"
                    ></input>
                  </div>
                </TitleBottomdiv>
                <button className="blue">Next</button>
              </Detaildiv>
            </div>
            <Sidebardiv>
              <TitleSidebar>
                <div className="flex">
                  <SidebarTitle>Adding tags</SidebarTitle>
                  <SidebarInfo>
                    <p>
                      Tags help ensure that your question will get attention
                      from the right people.{' '}
                    </p>
                    <p>
                      Tag things in more than one way so people can find them
                      more easily. Add tags for product lines, projects, teams,
                      and the specific technologies or languages used.{' '}
                    </p>
                    <p className="bluet">Learn more about tagging </p>
                  </SidebarInfo>
                </div>
              </TitleSidebar>
            </Sidebardiv>
          </Tagsdiv>

          {/* Tag 안쓰면 못넘어감 */}
          <Reviewbtndiv>
            <div className="btn">
              <button className="post blue">Post your question</button>
            </div>
            <div className="discard">
              <button className="discardbtn">Discard draft</button>
            </div>
          </Reviewbtndiv>
        </QuestionformMain>
      </PageContentdiv>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f8f9f9;
`;

const PageContentdiv = styled.div`
  padding: 0 24px 24px;
  display: flex;
`;

const QuestionformMain = styled.main`
  width: 1216px;
  display: flex;
  flex-direction: column;
`;

const Topdiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 851px;
`;

const Headerdiv = styled.div`
  font-weight: 600;
  h1 {
    font-size: 27px;
    margin: 24px 0 27px;
  }
`;

const Infodiv = styled.div``;

const Infoflexdiv = styled.div``;

const InfoBoxdiv = styled.div`
  background-color: #ebf4fb;
  border-radius: 3px;
  border: 1px solid var(--blue-200);
  padding: 24px;

  h2 {
    font-size: 21px;
    font-weight: 400;
    margin: 0 0 8px;
  }

  p {
    font-size: 15px;
  }

  h5 {
    font-size: 15px;
    font-weight: 600;
    margin-top: 15px;
    margin-bottom: 8px;
  }

  ul {
    font-size: 13px;
    margin-left: 30px;
  }
`;

const Titlediv = styled.div`
  margin-top: 20px;
  display: flex;
`;

const TitleBoxdiv = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 3px;
  border: 1px solid var(--black-075);
`;

const Titleflexdiv = styled.div`
  width: 801px;
`;

const TitleTopdiv = styled.div`
  .title {
    font-size: 15px;
    font-weight: 600;
  }

  .info {
    margin-top: 2px;
    margin-bottom: 2px;
    font-size: 12px;
  }
`;

const TitleBottomdiv = styled.div`
  input {
    width: 756.4px;
    padding: 0.6em 0.7em;
    margin-top: 4px;
    margin-bottom: 2px;
    margin-right: 24px;
    border: 1px solid var(--bc-darker);
    border-radius: 3px;
  }
`;

const Titlebtndiv = styled.div`
  .blue {
    margin-top: 5px;
    background-color: var(--blue-500);
    color: white;
    font-size: 13px;
    border: none;
    border-radius: 3px;
    padding: 10.4px;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    flex-direction: flex-end;
  }
`;

const Sidebardiv = styled.div`
  margin-left: 20px;
  width: 348px;
`;

const TitleSidebar = styled.div`
  border: 1px solid var(--bc-medium);
  border-radius: 3px;
  margin-left: auto;
  box-shadow: var(--bs-sm);
  .flex {
    display: flex;
    flex-direction: column;
  }
`;

const SidebarTitle = styled.div`
  background-color: #f8f9f9;
  padding: 12px;
  border-bottom: 1px solid var(--bc-medium);
`;

const SidebarInfo = styled.div`
  background-color: white;
  font-size: 12px;
  p {
    margin: 16px;
  }
`;

const Problemdiv = styled.div`
  margin-top: 20px;
  display: flex;
`;

const Detaildiv = styled.div`
  background-color: white;
  padding: 24px;
  width: 851px;
  border-radius: 3px;
  border: 1px solid var(--black-075);
  .blue {
    margin-top: 10px;
    background-color: var(--blue-500);
    color: white;
    font-size: 13px;
    border: none;
    border-radius: 3px;
    padding: 10.4px;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    flex-direction: flex-end;
  }
`;

const DetailInfodiv = styled.div`
  .title {
    font-size: 15px;
    font-weight: 600;
  }

  .info {
    margin-top: 2px;
    margin-bottom: 2px;
    font-size: 12px;
  }
`;

const TryExpectdiv = styled.div`
  display: flex;
  margin-top: 20px;

  .design {
    background-color: white;
    padding: 24px;
    width: 851px;
    border-radius: 3px;
    border: 1px solid var(--black-075);
    display: flex;
    flex-direction: column;
  }

  .blue {
    margin-top: 10px;
    background-color: var(--blue-500);
    color: white;
    font-size: 13px;
    border: none;
    border-radius: 3px;
    padding: 10.4px;
    cursor: pointer;
    width: 47.52px;
  }
`;

const TryExpectInfodiv = styled.div`
  .title {
    font-size: 15px;
    font-weight: 600;
  }

  .info {
    margin-top: 2px;
    margin-bottom: 2px;
    font-size: 12px;
  }
`;

const Tagsdiv = styled.div`
  display: flex;
  margin-top: 20px;

  .blue {
    background-color: var(--blue-500);
    color: white;
    font-size: 13px;
    border: none;
    border-radius: 3px;
    padding: 10.4px;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    flex-direction: flex-end;
  }

  .bluet {
    color: var(--blue-600);
    cursor: pointer;
  }
  .tags {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    > ul {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 8px 0 0 0;

      > .tag {
        width: auto;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--powder-700);
        padding: 0 4px 0px 8px;
        font-size: 12px;
        list-style: none;
        border-radius: 6px;
        margin: 0 8px 8px 0;
        background-color: var(--powder-100);
        > .tag-close-icon {
          width: 16px;
          height: 16px;
          line-height: 16px;
          font-weight: 700;
          text-align: center;
          font-size: 14px;
          margin-left: 4px;
          color: var(--powder-700);
          border-radius: 50%;
          background-color: transparent;
          cursor: pointer;
        }
      }
      > input {
        flex: 1;
        border: none;
        height: 46px;
        font-size: 14px;
        padding: 4px 0 0 0;
        :focus {
          outline: transparent;
        }
      }
    }
  }
`;

const TagsTopdiv = styled.div`
  .title {
    font-size: 15px;
    font-weight: 600;
  }

  .info {
    margin-top: 2px;
    margin-bottom: 2px;
    font-size: 12px;
  }
`;

const Reviewbtndiv = styled.div`
  margin-top: 20px;
  display: flex;
  .post {
    background-color: var(--blue-500);
    color: white;
    font-size: 13px;
    border: none;
    border-radius: 3px;
    padding: 10.4px;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    flex-direction: flex-end;
  }

  .discard {
    margin-left: 20px;
  }

  .discardbtn {
    font-size: 13px;
    color: var(--red-600);
    padding: 10.4px;
    background-color: transparent;
    border: none;

    &:hover {
      background-color: var(--red-050);
    }
  }
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
    & + h2,
    & + h3 {
      margin-top: 0;
    }
  }
  h2 {
    font-size: 1.61538462rem;
    margin-bottom: 0.7em;
    margin-top: 1.4em;
  }
  h3 {
    font-size: 1.46153846rem;
    margin-bottom: 0.74em;
    margin-top: 1.2em;
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

export default QuestionUpload;
