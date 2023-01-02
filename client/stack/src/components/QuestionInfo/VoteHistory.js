import styled from 'styled-components';
import { useState } from 'react';
import { ReactComponent as ArrowUpIcon } from '../../assets/arrow-up.svg';
import { ReactComponent as ArrowDownIcon } from '../../assets/arrow-down.svg';
import { ReactComponent as BookMarkIcon } from '../../assets/bookmark.svg';
import { ReactComponent as HistoryIcon } from '../../assets/history.svg';
const Voteleftdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  span {
    font-size: 1.61538462rem;
    color: var(--black-500);
  }
`;
const Button = styled.button`
  background-color: transparent;
  margin-top: ${(props) => (props.className === 'lastbutton' ? '10px' : '2px')};

  svg {
    fill: ${(props) =>
      props.checked ? 'var(--orange-500)' : 'var(--black-200)'};
    transition: all 0.2s ease;
  }
  &.active:hover {
    svg {
      cursor: pointer;
      fill: var(--orange-500);
      transform: ${(props) =>
        props.direction === 'up'
          ? 'translateY(-0.25em)'
          : 'translateY(+0.25em)'};
    }
  }
`;

export default function VoteHistory({ qinfo }) {
  const [isVoted, setIsVoted] = useState(0);
  const [voteNum, setVoteNum] = useState(qinfo.questionPart.questionVoteCnt);
  const clickUpVoteHandler = () => {
    if (isVoted === 1) {
      setIsVoted(isVoted - 1);
      setVoteNum((p) => p - 1);
    } else {
      setIsVoted(isVoted + 1);
      setVoteNum((p) => p + 1);
    }
  };
  const clickDownVoteHandler = () => {
    if (isVoted === -1) {
      setIsVoted(isVoted + 1);
      setVoteNum((p) => p + 1);
    } else {
      setIsVoted(isVoted - 1);
      setVoteNum((p) => p - 1);
    }
  };
  return (
    <Voteleftdiv>
      <Button
        className="active"
        checked={isVoted === 1}
        direction="up"
        onClick={clickUpVoteHandler}
      >
        <ArrowUpIcon />
      </Button>
      <span>{voteNum}</span>
      <Button
        className="active"
        checked={isVoted === -1}
        direction="down"
        onClick={clickDownVoteHandler}
      >
        <ArrowDownIcon />
      </Button>
      <Button>
        <BookMarkIcon />
      </Button>
      <Button className="lastbutton">
        <HistoryIcon />
      </Button>
    </Voteleftdiv>
  );
}
