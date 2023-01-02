import { useState, useRef } from 'react';
import styled from 'styled-components';
import { useClickDetect } from '../../utils/useClickDetect';
import QandAMainBottomPopOver from './QandAMainBottomPopOver';
import UserInfo from './UserInfo';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ShareEditdiv = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 16px;
  span {
    margin: 4px 8px 4px 0px;
    button {
      color: var(--black-500);
      background-color: transparent;
      &:hover {
        color: var(--black-400);
      }
    }
  }
`;

//edit은 링크고 share는 팝업창
export default function QandAMainBottom({ type, qinfo }) {
  const shareLinkRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  useClickDetect(shareLinkRef, isOpen, setIsOpen);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <ShareEditdiv>
        <span ref={shareLinkRef}>
          <button onClick={handleClick}>Share</button>
          {isOpen && <QandAMainBottomPopOver type={type} />}
        </span>
        <span>
          <button>Edit</button>
        </span>
        <span>
          <button>Delete</button>
        </span>
        <UserInfo type={type} qinfo={qinfo} />
      </ShareEditdiv>
    </Wrapper>
  );
}
