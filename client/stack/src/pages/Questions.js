import { Nav } from '../components/Nav.';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { HiPencil } from 'react-icons/hi';
import { FaStackOverflow } from 'react-icons/fa';
import axios from 'axios';

const baseUrl = 'https://hyeon-dong.site/';

const filter = ['Newest', 'Active', 'Bountied', 'Unanswered'];

const Questions = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [click, setClick] = useState(false);
  const [quesitons, setQuestions] = useState([]);

  const selectMenuHandler = (index) => {
    console.log(typeof index);
    setCurrentTab(index);
    setClick(true);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  function getQuestions() {
    axios
      .get(baseUrl + 'questions')
      .then((res) => {
        console.log('res.data.qP', res.data.data[0].questionPart);
        console.log('res.data.qP', res.data.data[0]);
        setQuestions(res.data.data);
      })
      .catch((err) => console.error(err));
  }

  // const navurl = 'Questions';

  return (
    <Container id="container">
      <Nav />
      <Content id="content">
        <Main id="main">
          <Top>
            <Titlediv>
              <h2>All Questions</h2>
            </Titlediv>
            <Askdiv>
              <AskQuestion>Ask Question</AskQuestion>
            </Askdiv>
          </Top>
          <Middlediv>
            <Questionslengthdiv>
              {quesitons.length} questions
            </Questionslengthdiv>
            <Tab>
              {filter.map((el, idx) => {
                return (
                  <FilterTab
                    key={idx}
                    className={`${currentTab === idx ? 'focused' : ''} 
                  ${click ? '' : 'hide'} ${idx !== 3 ? '' : 'bord'}
                  ${idx === 0 ? 'radius-left' : ''} 
                  ${idx === 3 ? 'radius-right' : ''}
                  `}
                    onClick={() => selectMenuHandler(idx)}
                    id={idx}
                  >
                    {el}
                  </FilterTab>
                );
              })}
            </Tab>
          </Middlediv>
          <Lists id="lists">
            {quesitons.map((el, idx) => {
              return (
                <Question key={idx} id="question">
                  <PostStates id="post-states">
                    <Vote id="vote">
                      <Number id="vote-number">
                        {el.questionPart.questionVoteCnt}
                      </Number>
                      <span> votes</span>
                    </Vote>
                    <Answers id="answers">
                      <Number id="answers-number">
                        {el.questionPart.answerCnt}
                      </Number>
                      <span> answers</span>
                    </Answers>
                    <Views id="views">
                      <Number id="views-number">{el.questionPart.views}</Number>
                      <span> views</span>
                    </Views>
                  </PostStates>

                  <Post>
                    <Title id="title">
                      <h3>{el.questionPart.questionTitle}</h3>
                    </Title>
                    <Bottom id="bottom">
                      <Tags id="tags">
                        <List id="list">
                          {el.questionPart.tags.map((tag, idx) => {
                            return (
                              <li key={idx} id="tag">
                                {tag.tagName}
                              </li>
                            );
                          })}
                        </List>
                      </Tags>
                      <Writer id="writer">
                        <img
                          alt="profile"
                          src={`${process.env.PUBLIC_URL}/profile.png`}
                          id="profile"
                        ></img>
                        <WriterName id="name">
                          &nbsp; {el.memberPart.username}
                        </WriterName>
                        <WriteTime id="time">
                          &nbsp; asked {el.questionPart.asked}
                        </WriteTime>
                      </Writer>
                    </Bottom>
                  </Post>
                </Question>
              );
            })}
          </Lists>
        </Main>
        <Sidebar id="sidebar">
          <YellowBar id="yellowbar">
            <Overflow>The Overflow Blog</Overflow>
            <div className="margin">
              <HiPencil className="icon" />
              <p>I spent two years trying to do </p>
            </div>
            <div className="margin">
              <HiPencil className="icon" />
              <p>The complete guide to protecting APIs</p>
            </div>
            <Meta>Featured on Meta</Meta>
            <div className="margin">
              <FaStackOverflow className="icon stack" />
              <p>2022 Community Moderator Election</p>
              <br />
            </div>

            <div className="margin">
              <FaStackOverflow className="icon stack" />
              <p>Temporary policy: ChatGPT is banned</p>
              <br />
            </div>

            <div className="margin">
              <FaStackOverflow className="icon stack" />
              <p>im standing down as a moderator</p>
            </div>
          </YellowBar>
          <CustomFilter id="CustomFilter">
            <ul>Custom Filters</ul>
            <li>Create a custom filter</li>
          </CustomFilter>
          <WatchedTag id="WatchedTag">
            <ul>Watched Tags</ul>
            <li>Watch tags to curate your list of questions.</li>
            <div className="watchbtn">
              <button>Watch a tag</button>
            </div>
          </WatchedTag>
          <IgnoredTag id="IgnoredTag">
            <ul>Ignored Tags</ul>
            <div className="tagbtn">
              <button>Add an ignored tag</button>
            </div>
          </IgnoredTag>
        </Sidebar>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 1100px;
  display: flex;
`;

const Main = styled.div``;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  padding-top: 24px;
  margin-bottom: 24px;

  h2 {
    font-size: 27px;
  }
`;

const Titlediv = styled.div`
  display: flex;
`;

const Askdiv = styled.div`
  display: flex;
  display: flex;
  justify-content: flex-end;
  flex-direction: flex-end;
`;

const AskQuestion = styled.button`
  background-color: var(--blue-500);
  color: white;
  font-size: 13px;
  border: none;
  border-radius: 3px;
  padding: 10.4px;
  cursor: pointer;
`;

const Middlediv = styled.div`
  display: flex;
  font-size: 17px;
`;

const Questionslengthdiv = styled.div`
  padding-left: 24px;
  line-height: 37px;
`;

const Tab = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: flex-end;
  flex-direction: flex-end;
  width: 351.96px
  height: 38.7px;
  border-radius: 3px;
  margin-left: auto;
  margin-bottom: 16px;
  color: var(--black-500);

  .focused {
    background-color: var(--black-075);
    color: black;
  }
  .bord {
    border-right: 1px solid var(--black-400);
  }
  .radius-left {
    border-radius: 3px 0 0 3px;
  }
  .radius-right {
    border-radius: 0px 3px 3px 0px;
  }
`;

const FilterTab = styled.a`
  padding: 10.4px;
  cursor: pointer;
  border-top: 1px solid var(--black-400);
  border-left: 1px solid var(--black-400);
  border-bottom: 1px solid var(--black-400);
  &:hover {
    background-color: var(--black-025);
    color: var(--black-600);
  }
`;

const Lists = styled.div``;

const Question = styled.div`
  display: flex;
  border-top: 1px solid var(--black-100);
  padding: 16px;
  width: 751px;
  height: 90px;
  font-size: 13px;
`;

const PostStates = styled.div`
  width: 108px;
  text-align: right;
  margin: 0px 16px 4px 0px;
  border: 1px solid transparent;
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
`;

const Number = styled.span`
  font-weight: 500;
`;

const Vote = styled.div`
  margin-bottom: 15px;
`;

const Answers = styled.div`
  margin-bottom: 15px;
  color: var(--fc-light);
`;

const Views = styled.div`
  margin-bottom: 4px;
  color: var(--fc-light);
`;

const Title = styled.div`
  color: var(--blue-600);
  font-size: 17px;
  &:hover {
    color: var(--blue-500);
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Tags = styled.div`
  width: 468px;
`;

const List = styled.ul`
  display: flex;
  justify-content: row;
  list-style: none;
  margin: 10px 0;

  li {
    padding: 4px;
    border-radius: 3px;
    background-color: var(--powder-100);
    color: var(--powder-700);
    padding: 4.8px 6px;
    font-size: 12px;
    margin: 0 4px 0 0;
  }
`;

const Writer = styled.div`
  font-size: 12px;
  display: flex;
  margin-left: auto;
  flex-direction: flex-end;
  height: 38.6px;
  line-height: 38.6px;
  #profile {
    width: 16px;
    height: 16px;
    display: flex;
    margin: auto;
    border-radius: 3px;
  }
`;

const WriterName = styled.ul`
  color: var(--blue-600);
`;

const WriteTime = styled.ul`
  color: var(--black-500);
`;

const Sidebar = styled.div`
  margin-left: 24px;
  margin-top: 24px;
  width: 298px;
`;

const YellowBar = styled.div`
  background-color: var(--yellow-050);
  border-radius: 3px;
  border: 1px solid var(--black-075);

  p {
    color: var(--black-700);
    font-size: 13px;
    padding: 0 16px 10px;
  }

  list-style: none;
  margin: 0 0 16px;
  box-shadow: var(--bs-sm);

  .icon {
    margin-left: 16px;
  }

  .stack {
    color: gray;
  }

  .margin {
    display: flex;
    margin: 12px 0;
  }
`;

const Overflow = styled.li`
  font-weight: bold;
  font-size: 12px;
  color: var(--black-600);
  background-color: var(--yellow-100);
  padding: 12px 15px;
  border-bottom: 1px solid var(--black-075);
`;

const Meta = styled.li`
  font-weight: bold;
  font-size: 12px;
  color: var(--black-600);
  background-color: var(--yellow-100);
  padding: 12px 15px;
  border-top: 1px solid var(--black-075);
  border-bottom: 1px solid var(--black-075);
`;

const CustomFilter = styled.div`
  margin: 0 0 16px;
  border-radius: 3px;
  border: 1px solid var(--black-075);
  box-shadow: var(--bs-sm);

  ul {
    background-color: var(--black-025);
    padding: 12px 15px;
    border-bottom: 1px solid var(--black-075);
  }

  li {
    list-style: none;
    color: var(--blue-600);
    font-size: 13px;
    padding: 4px 15px;
    height: 50px;
    line-height: 50px;

    &:hover {
      border-radius: 3px;
      color: var(--blue-500);
    }
  }
`;

const WatchedTag = styled.div`
  box-shadow: var(--bs-sm);
  margin: 0 0 16px;
  border-radius: 3px;
  border: 1px solid var(--black-075);

  ul {
    background-color: var(--black-025);
    padding: 12px 15px;
    border-bottom: 1px solid var(--black-075);
  }

  li {
    list-style: none;
    color: var(--black-500);
    font-size: 13px;
    padding: 4px 15px;
    height: 50px;
    line-height: 50px;

    &:hover {
      color: var(--blue-500);
    }
  }

  .watchbtn {
    padding: 30px;
  }

  button {
    background-color: var(--powder-100);
    border: 1px solid var(--powder-500);
    border-radius: 3px;
    color: var(--powder-800);
    font-size: 12px;
    height: 35.04px;
    line-height: 30px;
    display: flex;
    margin: auto;
  }
`;

const IgnoredTag = styled.div`
  margin: 0 0 16px;
  border-radius: 3px;
  border: 1px solid var(--black-075);
  box-shadow: var(--bs-sm);

  ul {
    background-color: var(--black-025);
    padding: 12px 15px;
    border-bottom: 1px solid var(--black-075);
  }

  .tagbtn {
    padding: 16px 15px;
  }

  button {
    background-color: var(--powder-100);
    border: 1px solid var(--powder-500);
    border-radius: 3px;
    color: var(--powder-800);
    font-size: 12px;
    height: 35.04px;
    line-height: 30px;
    display: flex;
    margin: auto;
  }
`;

export default Questions;
