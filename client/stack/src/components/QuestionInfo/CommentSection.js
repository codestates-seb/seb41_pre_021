import styled from 'styled-components';
import Comment from './Comment';
const Commentdiv = styled.div`
  ul {
    border-top: 1px solid var(--black-050);
    margin-bottom: 10px;
  }
`;

const AddCommentdiv = styled.div`
  margin-bottom: 20px;
  a {
    color: var(--black-400);
    opacity: 0.6;
    &:hover {
      color: var(--blue-500);
    }
  }
`;
let dummyComment = [
  {
    id: '1',
    user: 'user1',
    content:
      'Nam molestie eros at est mollis, id tincidunt velit auctor. Proin gravida lorem urna, aliquam accumsan dolor hendrerit sed. Fusce dapibus, odio non aliquet bibendum...',
    createdAt: '2022-12-31T02:10:00',
  },
  {
    id: '2',
    user: 'person2',
    content:
      'Vestibulum ut eleifend nulla, sed placerat nisi. Etiam vel mattis ipsum, vel aliquet turpis. Morbi commodo velit sed lectus tempor, et dignissim metus venenatis. Aliquam scelerisque eget turpis sed posuere. Cras ac suscipit est, nec faucibus diam. Vestibulum pellentesque felis arcu, vitae porttitor sapien placerat sit amet. Nunc congue sapien eget fermentum laoreet. ',
    createdAt: '2022-12-10T12:05:00',
  },
  {
    id: '3',
    user: 'person3',
    content:
      'Donec rhoncus ante libero? <p>Lorem ipsum dolor sit amet</p><section>consectetur adipiscing elit</section> In hac habitasse platea dictumst.',
    createdAt: '2022-08-02T12:05:00',
  },
];
export default function CommentSection({ qinfo }) {
  dummyComment[1]['user'] = qinfo.memberPart.username;
  return (
    <Commentdiv>
      <ul className="comment">
        {dummyComment.length !== 0 &&
          dummyComment.map((el) => (
            <Comment
              key={el.id}
              user={el.user}
              content={el.content}
              createdAt={el.createdAt}
              qinfo={qinfo.memberPart.username}
            />
          ))}
      </ul>
      <AddCommentdiv>
        <a href="#!">Add a comment</a>
      </AddCommentdiv>
    </Commentdiv>
  );
}
