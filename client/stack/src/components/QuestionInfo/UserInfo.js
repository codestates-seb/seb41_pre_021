import styled from 'styled-components';
import imgfile from '../../assets/tempprofile.png';
import { getMixedTime } from '../../utils/getTime';
const UserInfoWrapperdiv = styled.div`
  min-width: 200px;
  box-sizing: border-box;
  padding: 6px 10px 10px;
  color: var(--black-500);
  background-color: ${(props) =>
    props.type === 'question' ? '#d9e9f7' : 'transparent'};
  font-size: 12px;
  border-radius: 3px;
  margin-left: auto;
  letter-spacing: 0.01rem;
  .user {
    margin-top: 4px;
    font-size: 13px;
    color: var(--blue-600);
    display: flex;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
      margin-right: 10px;
    }
  }
`;

export default function UserInfo({ type, qinfo }) {
  return (
    <UserInfoWrapperdiv type={type}>
      <div className="date">
        {type === 'question' ? 'asked' : 'answered'}
        {' ' + getMixedTime(qinfo.questionPart.asked)}
      </div>
      <div className="user">
        <img src={imgfile} className="avatar" alt="profile" />
        <div>{qinfo.memberPart.username}</div>
      </div>
    </UserInfoWrapperdiv>
  );
}
