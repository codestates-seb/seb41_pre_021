import styled from 'styled-components';

const CommunityLink = styled.li`
  display: flex;
  flex-direction: column;
  padding: 8px;

  border-bottom: 1px solid var(--black-075);
  a {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    padding: 8px;
  }
  p {
    width: 100%;
    padding-left: 30px;
  }
  span {
    padding-left: 2px;
    font-weight: 400;
  }
  .title-wrapper {
    width: 100%;
    display: flex;
  }
  .detail {
    font-weight: 400;
    color: var(--black-400);
  }
`;
const Icon = styled.div`
  width: 16px;
  height: 16px;
  vertical-align: top;
  flex: none;
  background-size: 16px 7038px;
  background-image: url('https://cdn.sstatic.net/Img/favicons-sprite32.png?v=7a8e256012f1');
  background-position: ${(props) => `0 ${props.icon}px`};
  margin: 0 4px;
`;
export default function Community({ title, detail, subdomain, icon }) {
  return (
    <CommunityLink>
      <a href={`https://${subdomain}.stackexchange.com`}>
        <div className="title-wrapper">
          <Icon icon={icon} />
          <span>{title}</span>
        </div>
        <p className="detail">{detail}</p>
      </a>
    </CommunityLink>
  );
}
