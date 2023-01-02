import styled from 'styled-components';
import { Nav } from '../../components/Nav.';
import { MdOutlineSearch } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { Tag } from './Tag';
import axios from 'axios';

const baseUrl = 'https://hyeon-dong.site/tags';

const Tags = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [click, setClick] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagfilter, setFilter] = useState('');

  const selectMenuHandler = (index) => {
    console.log(index);
    setCurrentTab(index);
    setClick(true);
  };

  useEffect(() => {
    getTags();
  }, []);

  function getTags() {
    if (tagfilter.length === 0) {
      axios
        .get(baseUrl + '?tab=' + filterUrl[currentTab])
        .then((res) => {
          console.log('res.data', res.data);
          setTags(res.data.tags);
        })
        .catch((err) => console.error(err));
    }
    if (tagfilter.length > 0) {
      axios
        .get(baseUrl + '/filter?name=' + tagfilter)
        .then((res) => {
          console.log('filter res.data', res.data);
          setTags(res.data);
        })
        .catch((err) => console.error(err));
    }
  }
  console.log('tags', tags);
  console.log('tags.typeof', typeof tags.data);
  const filterUrl = ['popular', 'name', 'new'];
  const filter = ['Popular', 'Name', 'New'];

  const searchTags = () => {
    const text = document.getElementById('text').value;
    setFilter(text);
    console.log('tagfilter', tagfilter);
    getTags();
  };

  const navurl = 'Tags';

  return (
    <Container>
      <Nav navurl={navurl} />
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
            <input
              type="text"
              id="text"
              placeholder="Filter by tag name"
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  searchTags(e);
                }
              }}
            ></input>
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
              return <Tag tag={tag} key={idx} getTags={getTags} />;
            })}
          </TagBox>
        </TaglistContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 1051px;
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px 24px;

  h1 {
    font-size: 27px;
    margin: 24px 0 16px;
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

export default Tags;
