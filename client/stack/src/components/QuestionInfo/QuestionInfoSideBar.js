import styled from 'styled-components';
import { HiPencil } from 'react-icons/hi';
import { FaStackOverflow } from 'react-icons/fa';
const Sidebar = styled.div`
  margin: 7px 15px 0 24px;
  width: 300px;
`;

const YellowBar = styled.div`
  width: 300px;
  background-color: var(--yellow-050);
  border-radius: 3px;
  border: 1px solid var(--black-075);
  p {
    color: var(--black-700);
    font-size: 13px;
    padding: 0 8px 0;
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
    align-items: center;
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
export default function QuestionfoSideBar() {
  return (
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
    </Sidebar>
  );
}
