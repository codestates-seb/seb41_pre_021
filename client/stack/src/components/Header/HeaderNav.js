import { useState, useRef } from 'react';
import styled from 'styled-components';
import { useClickDetect } from '../../utils/useClickDetect';
import imgfile from '../../assets/tempprofile.png';
import { menu } from '../../data/header/menu';

const Nav = styled.nav`
  height: 100%;
  margin-right: 8px;
  padding-left: 4px;
  ul {
    display: flex;
    height: 100%;
    align-items: center;
  }
  li {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 600;
    color: var(--black-600);

    .user-info-text {
      padding-left: 3px;
      font-size: 12px;
    }
    .inbox-info-svg {
      position: relative;
    }
    .inbox-unread {
      font-size: 11px;
      display: flex;
      align-items: center;
      height: 17px;
      color: white;
      position: absolute;
      right: 1px;
      top: calc(50% - 14px);
      border-radius: 1000px;
      background-color: var(--red-500);
      padding: 2px 4.5px;
      line-height: 1.1;
      box-shadow: 0 0 0 2px var(--black-025);
      transition: top cubic-bezier(0.165, 0.84, 0.44, 1) 0.15s;
    }
    .logout-dialog {
      position: absolute;
    }
    &:hover {
      .inbox-unread {
        top: calc(50% - 18px);
        box-shadow: 0 0 0 2px var(--black-075);
      }
    }
    &.submenu {
      padding: 0 10px;
      &:hover {
        cursor: pointer;
        background-color: var(--black-075);
      }
    }
  }
  .avatar {
    width: 24px;
    height: 24px;
    border-radius: 3px;
  }
  svg {
    fill: var(--black-600);
    margin: 0 1px;
  }
  li.selected {
    background-color: var(--black-075);
    svg {
      fill: var(--black-800);
    }
  }
`;

export default function HeaderNav() {
  const menuRef = useRef();
  const [currentMenu, setCurrentMenu] = useState(false);

  const clickHandler = (isActive, order) => {
    if (!isActive) {
      return;
    } //비활성 버튼은 처리 안함
    if (currentMenu !== order) setCurrentMenu(order);
    else setCurrentMenu(false);
  };
  useClickDetect(menuRef, currentMenu, setCurrentMenu);
  //onclick에 의해서 toggle되는 순간 부터 동작

  return (
    <Nav>
      <ul>
        <li className="user-info submenu">
          <img src={imgfile} className="avatar" alt="profile" />
          <span className="user-info-text">1</span>
        </li>
        {menu.map((el, i) => [
          /* eslint-disable */
          <li
            key={i}
            className={currentMenu === i ? 'submenu selected' : 'submenu'}
            onClick={el.active ? () => clickHandler(el.active, i) : undefined}
            ref={menuRef}
          >
            {el.icon}
            {!!el.unread && <span className="inbox-unread">{el.unread}</span>}
          </li> /* eslint-disable */,
          <li
            key={i + 'content'}
            style={{ display: currentMenu === i ? 'block' : 'none' }}
          >
            {el.content}
          </li>,
        ])}
      </ul>
    </Nav>
  );
}
//선택할 수 있는 메뉴,선택할 수 있는 메뉴는 클릭하면 setcurrentmenu에 업데이트
//unread출력: 데이터 받아올 수 있으면 userinfo로 수정
