import styled from 'styled-components';
import { Nav } from '../components/Nav.';
import { MdOutlineSearch } from 'react-icons/md';
import { useState } from 'react';
import { Tag } from './Tags/Tag';

const baseUrl = 'https://localhost:8080/tags';

const Tags = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [click, setClick] = useState(false);
  const [tags, setTags] = useState([]);

  const selectMenuHandler = (index) => {
    console.log(index);
    setCurrentTab(index);
    setClick(true);
  };

  // const TagsFilterClick = async () => {
  //   try {
  //     const response = axios.get(baseUrl + '/' + filterUrl[currentTab]);
  //     return response;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const getTags = () => {
    return fetch(baseUrl + '?tab=' + filterUrl[currentTab])
      .then((res) => res.json())
      .then((data) => {
        setTags(data);
      });
  };

  const filterUrl = ['popular', 'name', 'new'];
  const filter = ['Popular', 'Name', 'New'];

  return (
    <Container>
      <Nav />
      <Content>
        <h1> Tags </h1>
        <p>
          A tag is a keyword or label that categorizes your question with other,
          similar questions. Using
          <br />
          the right tags makes it easier for others to find and answer your
          question.
        </p>
        <FilterTagdiv>
          <TagSearchdiv>
            <MdOutlineSearch size="25" className="searchIcon" />
            <input placeholder="Filter by tag name"></input>
          </TagSearchdiv>
          <TagFilterdiv>
            {filter.map((el, idx) => {
              return (
                <FilterTab
                  key={idx}
                  className={`${currentTab === idx ? 'focused' : ''} 
                    ${click ? '' : 'hide'} ${idx !== 2 ? '' : 'bord'}
                    ${idx === 0 ? 'radius-left' : ''} 
                    ${idx === 2 ? 'radius-right' : ''}
                    `}
                  onClick={() => {
                    selectMenuHandler(idx);
                    getTags();
                  }}
                  id={idx}
                >
                  {el}
                </FilterTab>
              );
            })}
          </TagFilterdiv>
        </FilterTagdiv>
        <TaglistContainer>
          <TagBox>
            {tags.map((tag, idx) => {
              return <Tag tag={tag} key={idx} />;
            })}
          </TagBox>
        </TaglistContainer>
      </Content>
    </Container>
  );
};

// const Tagslist = [
//   {
//     tag: 'javascript',
//     info: 'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind',
//     questions: 2460651,
//     today: 306,
//     week: 3533,
//   },
//   {
//     tag: 'python',
//     info: 'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind',
//     questions: 2460651,
//     today: 306,
//     week: 3533,
//   },
//   {
//     tag: 'java',
//     info: 'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind',
//     questions: 2460651,
//     today: 306,
//     week: 3533,
//   },
//   {
//     tag: 'c#',
//     info: 'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind',
//     questions: 2460651,
//     today: 306,
//     week: 3533,
//   },
//   {
//     tag: 'javascript',
//     info: 'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind',
//     questions: 2460651,
//     today: 306,
//     week: 3533,
//   },
//   {
//     tag: 'python',
//     info: 'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind',
//     questions: 2460651,
//     today: 306,
//     week: 3533,
//   },
//   {
//     tag: 'java',
//     info: 'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind',
//     questions: 2460651,
//     today: 306,
//     week: 3533,
//   },
//   {
//     tag: 'c#',
//     info: 'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind',
//     questions: 2460651,
//     today: 306,
//     week: 3533,
//   },
// ];

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
`;

const Content = styled.div`
  width: 1051px;
  display: flex;
  flex-direction: column;
  padding: 24px;

  h1 {
    font-size: 27px;
    margin: 0 0 16px;
  }

  p {
    margin: 0 0 24px;
    font-size: 15px;
  }
`;

const FilterTagdiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
`;

const TagSearchdiv = styled.div`
  .searchIcon {
    position: absolute;
    margin-left: 5px;
    margin-top: 4px;
  }
  input {
    padding: 7.8px 9.1px 7.8px 32px;
    border: 1px solid var(--bc-darker);
    border-radius: 5px;

    ::placeholder {
      color: var(--black-200);
    }
  }
`;

const TagFilterdiv = styled.div`
  margin-left: auto;

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
  font-size: 13px;
  padding: 10.4px;
  cursor: pointer;
  border-top: 1px solid var(--black-400);
  border-left: 1px solid var(--black-400);
  border-bottom: 1px solid var(--black-400);
  &:hover {
    background-color: var(--black-025);
  }
`;

const TaglistContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 12px;
`;

// const Tagslistdiv = styled.div`
//   border: 1px solid var(--bc-medium);
//   border-radius: 3px;
//   padding: 12px;
// `;

// const Tagdiv = styled.div`
//   margin: 0 0 12px;

//   a {
//     text-decoration-line: none;
//     background-color: var(--powder-100);
//     color: var(--powder-700);
//     border-radius: 5px;
//     padding: 4.8px 6px;
//     font-size: 12px;
//     margin: 0 4px 0 0;
//   }
// `;

// const Taginfodiv = styled.div`
//   margin: 0 0 12px;
//   font-size: 13px;
//   color: var(--fc-medium);
// `;

// const TagBottomdiv = styled.div`
//   display: flex;
//   justify-content: space-between;
//   color: var(--black-400);
//   font-size: 12px;
// `;

// const TagQuestiondiv = styled.div``;

// const TagDaydiv = styled.div``;

export default Tags;
