import { ReactComponent as Achivement } from '../../assets/achievement.svg';
import { ReactComponent as Qmark } from '../../assets/questionmark.svg';
import { ReactComponent as Winterbash } from '../../assets/winterbash.svg';
import { ReactComponent as Communities } from '../../assets/communities.svg';
import { ReactComponent as Inbox } from '../../assets/inbox.svg';
import MenuDialog from '../../components/Header/MenuDialog';
export const menu = [
  { icon: <Inbox />, content: null, active: false, unread: 1 },
  { icon: <Achivement />, content: null, active: false, unread: 0 },
  { icon: <Qmark />, content: null, active: false, unread: 0 },
  { icon: <Winterbash />, content: null, active: false, unread: 0 },
  { icon: <Communities />, content: <MenuDialog />, active: true, unread: 0 },
];
//active: 선택 가능 메뉴, order: 메뉴 순서, content: 메뉴 내용, unread: 미확인 메시지
