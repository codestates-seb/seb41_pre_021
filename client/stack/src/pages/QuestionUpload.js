import styled from 'styled-components';

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
  font-size: 27px;
  font-weight: 600;
  h1 {
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
  flex-direction: space-around;
`;

const TitleBoxdiv = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 3px;
  border: 1px solid var(--black-075);
`;

const Titleflexdiv = styled.div``;

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
  button {
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
  width: 801px;
  border-radius: 3px;
  border: 1px solid var(--black-075);
  button {
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
    width: 801px;
    border-radius: 3px;
    border: 1px solid var(--black-075);
    display: flex;
    flex-direction: column;
  }

  button {
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

  button {
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

  .blue {
    color: var(--blue-600);
    cursor: pointer;
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

const QuestionUpload = () => {
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
                <button>Next</button>
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
                <button>Next</button>
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
                <button>Next</button>
              </div>
            </div>
            <Sidebardiv>
              <TitleSidebar>
                <div className="flex">
                  <SidebarTitle>Introduce the problem</SidebarTitle>
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
                <button>Next</button>
              </Detaildiv>
            </div>
            <Sidebardiv>
              <TitleSidebar>
                <div className="flex">
                  <SidebarTitle>Introduce the problem</SidebarTitle>
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
                    <p className="blue">Learn more about tagging </p>
                  </SidebarInfo>
                </div>
              </TitleSidebar>
            </Sidebardiv>
          </Tagsdiv>

          {/* Tag 안쓰면 못넘어감 */}
          <Reviewbtndiv>
            <div className="btn">
              <button className="post">Post your question</button>
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

export default QuestionUpload;
