import styled from 'styled-components';
const PostTagul = styled.ul`
  display: inline;
`;
const Tagli = styled.li`
  display: inline;
  margin-right: 0 4px 8px 0;
  a {
    letter-spacing: 0.03rem;
    color: var(--powder-700);
    background-color: var(--powder-100);
    border-color: transparent;
    display: inline-block;
    padding: 0.4em 0.5em;
    margin: 2px 6px 5px 0;
    font-size: 12px;
    line-height: 1;
    white-space: nowrap;
    text-decoration: none;
    text-align: center;
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    &:hover {
      background-color: var(--powder-200);
      color: var(--powder-800) !important;
    }
  }
`;

export default function TagList({ qinfo }) {
  return (
    <PostTagul>
      {qinfo.map((el, i) => (
        <Tagli key={i}>
          <a href="#!">{el}</a>
        </Tagli>
      ))}
    </PostTagul>
  );
}
