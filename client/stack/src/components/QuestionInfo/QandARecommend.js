import styled from 'styled-components';
import TagList from './TagList';
const Wrapper = styled.h2`
  font-size: 17px;
  margin-bottom: 50px;
  font-weight: 400;
  a:hover {
    color: var(--blue-500);
  }
`;

const dummycommentNum = 0;
export default function QandARecommend({ qinfo }) {
  return (
    <Wrapper>
      {dummycommentNum > 0
        ? "Not the answer you're looking for? Browse other questions tagged "
        : 'Browse other questions tagged '}
      <TagList qinfo={qinfo} />
      or <a href="#!">ask your own question.</a>
    </Wrapper>
  );
}
