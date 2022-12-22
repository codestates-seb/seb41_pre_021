import Nav from '../components/Nav.';
import styled from 'styled-components';

const filter = ['Interesting', 'Bountied', 'Hot', 'Week', 'Month'];

const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const Container = styled.div`
  display: flex;
`;

const Content = styled.div``;

const Main = styled.div``;

const Top = styled.div`
  display: flex;

  h2 {
    font-size: 27px;
  }
`;
const AskQuestion = styled.button`
  background-color: #2196f3;
  color: white;
  font-size: 13px;
`;

const Tab = styled.div`
  display: flex;
  justify-content: column;
  flex-direction: flex-end;
`;

const FilterTab = styled.li`
  background-color: #dfdfdf;
  list-style: none;
  padding: 15px;
  font-size: 13px;
`;

const Lists = styled.div``;

const Question = styled.div``;

const PostStates = styled.div``;

const Vote = styled.div``;

const Answers = styled.div``;

const Views = styled.div``;

const Title = styled.div``;

const Bottom = styled.div``;

const Tags = styled.div``;

const List = styled.ul`
  display: flex;
  justify-content: row;
  list-style: none;
  li {
    padding: 4px;
    border-radius: 5px;
    background-color: #c8dee8;
    color: #225d9c;
  }
`;

const Writer = styled.div`
  display: flex;
`;

const Sidebar = styled.div``;

const YellowBar = styled.div``;

const Home = () => {
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
                <FilterTab id={idx} key={idx}>
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
                      <span id="vote-number">{el}</span>
                      <span>votes</span>
                    </Vote>
                    <Answers id="answers">
                      <span id="answers-number">{idx}</span>
                      <span>answers</span>
                    </Answers>
                    <Views id="views">
                      <span id="views-number">0</span>
                      <span>views</span>
                    </Views>
                  </PostStates>
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
                      <img alt="profile" id="profile"></img>
                      <ul id="name">kimid</ul>
                      <ul id="time">asked {48} secs ago</ul>
                    </Writer>
                  </Bottom>
                </Question>
              );
            })}
          </Lists>
        </Main>
        <Sidebar id="sidebar">
          <YellowBar id="yellowbar">
            <ul>The Overflow Blog</ul>
            <ul>Featured on Meta</ul>
          </YellowBar>
          <div id="CustomFilter">
            <ul>Custom Filters</ul>
          </div>
          <div id="WatchedTag">
            <ul>Watched Tags</ul>
          </div>
          <div id="IgnoredTag">
            <ul>Ignored Tags</ul>
          </div>
        </Sidebar>
      </Content>
    </Container>
  );
};

export default Home;
