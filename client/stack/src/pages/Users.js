import styled from 'styled-components';
import { Nav } from '../components/Nav.';
import { MdOutlineSearch } from 'react-icons/md';
import { useState } from 'react';

const Users = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [click, setClick] = useState(false);
  const selectMenuHandler = (index) => {
    setCurrentTab(index);
    setClick(true);
  };

  const filter = ['Reputation', 'New users', 'Voters', 'Editors', 'Moderators'];

  const [currentPeriod, setCurrentPeriod] = useState(0);
  const [perclick, setPerClick] = useState(false);
  const selectPeriod = (idx) => {
    setCurrentPeriod(idx);
    setPerClick(true);
  };

  const period = ['week', 'month', 'quarter', 'year', 'all'];

  const navurl = 'Users';

  return (
    <Container>
      <Nav navurl={navurl} />
      <Content>
        <h1> Users </h1>
        <FilterUserdiv>
          <UserSearchdiv>
            <MdOutlineSearch size="25" className="searchIcon" />
            <input placeholder="Filter by user"></input>
          </UserSearchdiv>
          <UserFilterdiv>
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
          </UserFilterdiv>
        </FilterUserdiv>
        <Periodfilterdiv>
          {period.map((per, idx) => {
            return (
              <Perioda
                key={idx}
                className={`${currentPeriod === idx ? 'focused' : ''} 
              ${perclick ? '' : 'hide'}
              `}
                onClick={() => selectPeriod(idx)}
                id={idx}
              >
                {per}
              </Perioda>
            );
          })}
        </Periodfilterdiv>
        <UserBrowserdiv>
          <Griddiv>
            {Userslist.map((user, idx) => {
              return (
                <UserItemBoxdiv key={idx}>
                  <div className="flex">
                    <UserImgdiv>
                      <img alt={user.username} src={user.img}></img>
                    </UserImgdiv>
                    <UserDetailsdiv>
                      <a href={user.username}>{user.username}</a>
                      <span>{user.country}</span>
                      <span className="reputation">{user.reputation}</span>
                    </UserDetailsdiv>
                  </div>
                  <UserTagsdiv>
                    {user.lang.map((tag, idx) => {
                      return (
                        <a href="tag" key={idx}>
                          {tag}
                          {user.lang.length - 1 !== idx ? (
                            <a href="idx">, </a>
                          ) : (
                            ''
                          )}
                        </a>
                      );
                    })}
                  </UserTagsdiv>
                </UserItemBoxdiv>
              );
            })}
          </Griddiv>
        </UserBrowserdiv>
      </Content>
    </Container>
  );
};

const Userslist = [
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 523,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 250,
    lang: [],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 240,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 200,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 523,
    lang: ['git', 'python', 'python', 'python', 'python', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 250,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 240,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 200,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 523,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 250,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    reputation: 240,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 200,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 523,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 250,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 240,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 200,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 523,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 250,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 240,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 200,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 523,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 250,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 240,
    lang: ['git', 'python'],
  },
  {
    img: `${process.env.PUBLIC_URL}/profile.png`,
    username: 'Kim O O',
    country: 'Korea',
    reputation: 200,
    lang: ['git', 'python'],
  },
];

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 1051px;
  display: flex;
  flex-direction: column;
  padding: 24px;

  h1 {
    font-size: 27px;
    margin: 0 0 24px;
  }

  p {
    margin: 0 0 24px;
    font-size: 15px;
  }
`;

const FilterUserdiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
`;

const UserSearchdiv = styled.div`
  .searchIcon {
    position: absolute;
    margin-left: 5px;
    margin-top: 4px;
    color: var(--black-500);
  }
  input {
    padding: 7.8px 9.1px 7.8px 32px;
    border: 1px solid var(--bc-darker);
    border-radius: 3px;

    ::placeholder {
      color: var(--black-200);
    }
  }

  /* input:focus {
    border: 5px solid var(--power-600);
    outline: 0;
    box-shadow: 5px var(--power-600);
  } */
`;

const UserFilterdiv = styled.div`
  margin-left: auto;

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
  font-size: 13px;
  padding: 10.4px;
  cursor: pointer;
  border-top: 1px solid var(--black-400);
  border-left: 1px solid var(--black-400);
  border-bottom: 1px solid var(--black-400);
  color: var(--black-500);
  &:hover {
    background-color: var(--black-025);
    color: var(--black-700);
  }
`;

const Periodfilterdiv = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 40px;
  color: var(--black-500);
  margin-bottom: 10px;
  .focused {
    border-bottom: 1px solid var(--orange);
    font-weight: 700;
    color: black;
  }
`;

const Perioda = styled.a`
  cursor: pointer;
  padding: 8px;
  margin: 0 0 0 2px;
  font-size: 12px;
  line-height: 20px;
  &:hover {
    color: var(--black-700);
    border-bottom: 1px solid var(--orange);
  }
`;

const UserBrowserdiv = styled.div``;

const Griddiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
`;

const UserItemBoxdiv = styled.div`
  padding: 5px 6px 7px 7px;
  color: var(--black-500);
  a {
    text-decoration-line: none;
    font-size: 15px;
    color: var(--blue-600);
    margin-bottom: 2px;
  }

  span {
    margin-bottom: 2px;
  }
  .flex {
    display: flex;
  }
`;

const UserImgdiv = styled.div`
  width: 48px;

  img {
    width: 48px;
  }
`;

const UserDetailsdiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 9px;

  span {
    font-size: 12px;
  }

  .reputation {
    font-weight: bold;
  }

  .space {
    margin-bottom: 5px;
    padding-bottom: 5;
  }
`;

const UserTagsdiv = styled.div`
  margin-left: 57px;
  a {
    text-decoration-line: none;

    font-size: 12px;
  }
`;

export default Users;
