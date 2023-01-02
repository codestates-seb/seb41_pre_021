import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  margin: 15px 0;

  div {
    font-size: 19px;
    flex-grow: 1;
    padding-top: 5px;
  }
  label {
    padding: 0.8em;
  }
`;
const SelectFilter = styled.select`
  padding: 0.6em 0.7em;
  border: 1px solid var(--bc-darker);
  border-radius: 3px;
  &:focus {
    outline: none;
    border-color: var(--blue-300);
    box-shadow: 0 0 0 4px var(--powder-100);
  }
`;

const dummyNumber = 2;
/*option 선택시 answer를 다시 fetch해온다 */
export default function AnswerHeader() {
  return (
    <Wrapper>
      <div>
        {dummyNumber}
        {dummyNumber === 1 ? ' Answer' : ' Answers'}
      </div>
      <label htmlFor="sort-answer">Sorted by:</label>
      <SelectFilter id="sort-answer">
        <option>Date modified (default)</option>
        <option>Date created (oldest first)</option>
      </SelectFilter>
    </Wrapper>
  );
}
