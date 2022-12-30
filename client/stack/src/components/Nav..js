/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { FaGlobeAmericas } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Bar = styled.nav`
  width: 164px;
  padding-top: 24px;
  color: var(--black-600);
  border-right: 1px solid var(--black-100);
  font-size: 13px;
  .none {
    visibility: hidden;
  }

  .focused {
    background-color: var(--black-050);
    font-weight: bold;
    border-right: 3px solid var(--orange);
    color: black;
  }

  .hide {
    border-bottom: none;
  }

  .menulink {
    text-decoration: none;
    color: var(--black-600);
  }
`;

const Home = styled.ul`
  cursor: pointer;
  line-height: 34px;
  height: 34px;
  padding: 4px 4px 4px 8px;

  .focused {
    background-color: var(--black-050);
    font-weight: bold;
  }
`;

const Public = styled.div`
  ul {
    font-size: 11px;
    line-height: 34px;
    height: 34px;
    padding: 4px 4px 4px 8px;
  }

  .none {
    visibility: hidden;
  }

  .focused {
    background-color: var(--black-050);
    font-weight: bold;
    border-right: 3px solid var(--orange);
    color: black;
  }

  .hide {
    border-bottom: none;
  }
`;

const Menu = styled.li`
  line-height: 34px;
  height: 34px;
  padding: 4px 4px 4px 8px;
  list-style: none;
  cursor: pointer;
  display: flex;
  .icon {
    position: relative;
    justify-items: row;
  }

  .flex {
    margin-top: 2.5px;
  }

  /* &:active {
    background-color: var(--black-050);
    font-weight: bold;
  } */
`;

const menu = ['Questions', 'Tags', 'Users'];
const urlmenu = ['questions', 'tags', 'users'];

function Span({ space = 5 }) {
  return <span style={{ paddingRight: space }}></span>;
}

export const Nav = ({ navurl }) => {
  const [currentMenu, setCurrentMenu] = useState(-1);
  const [click, setClick] = useState(false);

  const selectHandler = (idx) => {
    setCurrentMenu(idx);
    setClick(true);
    console.log('CM', currentMenu);
    console.log('idx', idx);
  };

  return (
    <Bar>
      <Link className="menulink" to={`/`}>
        <Home
          key={5}
          className={`${currentMenu === 5 ? 'focused' : ''} 
          ${click ? '' : 'hide'} ${
            navurl === 'Home' && currentMenu === -1 ? 'focused' : ''
          }`}
          onClick={() => selectHandler(5)}
        >
          Home
        </Home>
      </Link>
      <Public>
        <ul>PUBLIC</ul>
        {menu.map((el, idx) => {
          return (
            <Link className="menulink" key={idx} to={`/` + `${urlmenu[idx]}`}>
              <Menu
                key={idx}
                className={`${currentMenu === idx ? 'focused' : ''} 
                ${click ? '' : 'hide'} ${
                navurl === 'Questions' && idx === 0 ? 'focused' : ''
              } `}
                onClick={() => selectHandler(idx)}
              >
                <div className="flex">
                  <FaGlobeAmericas
                    className={`${idx === 0 ? 'globe' : 'none'}`}
                    size="17"
                  />
                </div>
                <Span />
                {el}
              </Menu>
            </Link>
          );
        })}
      </Public>
    </Bar>
  );
};
