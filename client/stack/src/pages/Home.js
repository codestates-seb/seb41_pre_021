import { Nav } from '../components/Nav.';
import styled from 'styled-components';
import { useState } from 'react';
import { HiPencil } from 'react-icons/hi';
import { FaStackOverflow } from 'react-icons/fa';

const filter = ['Interesting', 'Bountied', 'Hot', 'Week', 'Month'];

const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

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
  width: 751px;
  margin: 0 0 27px 0;
  padding: 24px;

  h2 {
    font-size: 27px;
  }
`;
const AskQuestion = styled.button`
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
`;

const Tab = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: flex-end;
  flex-direction: flex-end;
  width: 351.96px
  height: 38.7px;
  border-radius: 5px;
  margin: 0 0 16px;
  margin-right: 20px;

  .focused {
    background-color: var(--black-075);
  }
  .bord {
    border-right: 1px solid var(--black-400);
  }
  .radius-left {
    border-radius: 5px 0 0 5px;
  }
  .radius-right {
    border-radius: 0px 5px 5px 0px;
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
    border-radius: 5px;
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
  border-radius: 5px;
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
  border-radius: 5px;
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
      border-radius: 5px;
      color: var(--blue-500);
    }
  }
`;

const WatchedTag = styled.div`
  box-shadow: var(--bs-sm);
  margin: 0 0 16px;
  border-radius: 5px;
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
    border-radius: 5px;
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
  border-radius: 5px;
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
    border-radius: 5px;
    color: var(--powder-800);
    font-size: 12px;
    height: 35.04px;
    line-height: 30px;
    display: flex;
    margin: auto;
  }
`;

function Span({ space = 5 }) {
  return <span style={{ paddingRight: space }}></span>;
}

const Home = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [click, setClick] = useState(false);

  const selectMenuHandler = (index) => {
    console.log(typeof index);
    setCurrentTab(index);
    setClick(true);
  };

  return (
    <Container id="container">
      <Nav />
      <Content id="content">
        <Main id="main">
          <Top>
            <h2>Top Questions</h2>
            <AskQuestion>Ask Question</AskQuestion>
          </Top>
          <Tab>
            {filter.map((el, idx) => {
              return (
                <FilterTab
                  key={idx}
                  className={`${currentTab === idx ? 'focused' : ''} 
                  ${click ? '' : 'hide'} ${idx !== 4 ? '' : 'bord'}
                  ${idx === 0 ? 'radius-left' : ''} 
                  ${idx === 4 ? 'radius-right' : ''}
                  `}
                  onClick={() => selectMenuHandler(idx)}
                  id={idx}
                >
                  {el}
                </FilterTab>
              );
            })}
          </Tab>
          <Lists id="lists">
            {dummyData.map((el, idx) => {
              return (
                <Question key={idx} id="question">
                  <PostStates id="post-states">
                    <Vote id="vote">
                      <Number id="vote-number">{el}</Number>
                      <Span />
                      <span>votes</span>
                    </Vote>
                    <Answers id="answers">
                      <Number id="answers-number">{idx}</Number>
                      <Span />
                      <span>answers</span>
                    </Answers>
                    <Views id="views">
                      <Number id="views-number">0</Number>
                      <Span />
                      <span>views</span>
                    </Views>
                  </PostStates>

                  <Post>
                    <Title id="title">
                      <h3>How to call api in ?</h3>
                    </Title>
                    <Bottom id="bottom">
                      <Tags id="tags">
                        <List id="list">
                          <li id="tag">javascript</li>
                          <li id="tag">react</li>
                        </List>
                      </Tags>
                      <Writer id="writer">
                        <img
                          alt="profile"
                          src={`${process.env.PUBLIC_URL}/profile.png`}
                          id="profile"
                        ></img>
                        <Span />
                        <WriterName id="name">kimid</WriterName>
                        <Span />
                        <WriteTime id="time">asked {48} secs ago</WriteTime>
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
              <p>I'm standing down as a moderator</p>
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

export default Home;