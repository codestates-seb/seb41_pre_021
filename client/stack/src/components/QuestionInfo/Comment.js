import styled from 'styled-components';
import { getMixedTime } from '../../utils/getTime';
const Commentli = styled.li`
  display: contents;
  div {
    border-bottom: 1px solid var(--black-050);
    width: 100%;
    padding: 8px 15px 5px;
  }
  p {
    padding: 6px 15px;
  }
  .content {
    padding-right: 1px;
  }
  .comment,
  .comment-created-t {
    letter-spacing: 0.03rem;
    color: var(--blue-600);
    border-color: transparent;
    display: inline-block;
    padding: 3px 4px 3px 3px;

    font-size: 13px;
    line-height: 1;
    white-space: nowrap;
    text-decoration: none;
    text-align: center;
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
  }
  .who-uploaded {
    background-color: #d9e9f7;
    margin: 2px 6px 0 5px;
  }
  .comment-created-t {
    color: var(--black-350);
  }
`;

//comment user id 와 질문자 id가 같으면 classname: who-uploaded
export default function Comment({ keyValue, user, content, createdAt, qinfo }) {
  return (
    <Commentli key={keyValue}>
      <div>
        <span className="content">{content}</span>
        &nbsp;&ndash;&nbsp;
        <span className={user === qinfo ? 'comment who-uploaded' : 'comment'}>
          {user}
        </span>
        <span className="comment-created-t">{getMixedTime(createdAt)}</span>
      </div>
    </Commentli>
  );
}
