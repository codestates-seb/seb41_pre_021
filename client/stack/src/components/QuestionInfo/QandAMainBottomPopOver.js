import styled from 'styled-components';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { Arrow } from '../Header/style';
const ShareLinkWrapper = styled.div`
  background-color: white;
  z-index: 1000;
  min-width: 25em;
  max-width: 28em;
  position: absolute;
  inset: auto auto 0px 0px;
  margin: 0px;
  border: 1px solid var(--black-100);
  border-radius: 5px;
  box-shadow: var(--bs-md);
  transform: translate(0px, 80px);
  padding: 12px;
  div {
    font-weight: 500;
    font-size: 13px;
    color: black;
  }
  &:hover {
    cursor: default;
  }
`;
const Input = styled.input`
  width: 100%;
  margin: 8px 0 8px;
  padding: 0.6em 8px;
  border: 1px solid var(--black-200);
  border-radius: 3px;
  background-color: var(--white);
  color: var(--black-700);
  font-size: 13px;
  font-family: inherit;
  &:hover {
    cursor: not-allowed;
  }
  &:focus {
    outline: none;
    border-color: var(--blue-300);
    box-shadow: 0 0 0 4px var(--powder-100);
  }
  &::selection {
    background-color: var(--blue-100);
    color: var(--black);
  }
`;
const Bottomdiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button,
  a {
    color: var(--blue-600) !important;
    font-weight: 400;
  }
  a {
    margin-left: 5px;
  }
  svg {
    margin: 5px 5px 0px 5px;
    &:hover {
      cursor: pointer;
    }
  }
`;
const QArrow = styled(Arrow)`
  top: -54px;
  left: 16px;
`;
//type이 question 인지 answer인지 prop으로 받아온다
export default function QandAMainBottomPopOver({ type }) {
  const clickHandler = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('클립보드에 링크가 복사되었습니다.');
    } catch (e) {
      alert('복사에 실패하였습니다');
    }
  };
  return (
    <ShareLinkWrapper>
      <QArrow />
      <div>Share a link to this {type} </div>
      <Input type="text" value={window.location.href} readOnly />
      <Bottomdiv>
        <button onClick={clickHandler}>Copy link</button>
        <a
          href="https://creativecommons.org/licenses/by-sa/4.0/"
          target="_blank"
          rel="noreferrer"
        >
          CC BY-SA 4.0
        </a>
        <div className="icons">
          <TwitterIcon
            onClick={() =>
              window.open(
                'https://www.facebook.com/sharer/sharer.php?u=' +
                  encodeURIComponent(window.location.href)
              )
            }
          />
          <FacebookIcon
            onClick={() =>
              window.open(
                'https://twitter.com/intent/tweet?url=' +
                  encodeURIComponent(window.location.href)
              )
            }
          />
          <LinkedinIcon
            onClick={() =>
              window.open(
                'https://www.linkedin.com/shareArticle?url=' +
                  encodeURIComponent(window.location.href)
              )
            }
          />
        </div>
      </Bottomdiv>
    </ShareLinkWrapper>
  );
}
