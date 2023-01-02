import CommunitySeach from './CommunitySearch';
import { Dialog, SoIcon, MetaSoIcon } from './style';

export default function MenuDialog() {
  return (
    <Dialog
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <header>
        <h3>CURRENT COMMUNITY</h3>
      </header>
      <ul>
        <li className="so-link">
          <div className="left-link">
            <a href="#!">
              <SoIcon />
              <span className="left-link">Stack Overflow</span>
            </a>
          </div>
          <div className="links">
            <a href="#!">help</a>
            <a href="#!">chat</a>
            <a href="/logout">log out</a>
          </div>
        </li>
        <li className="meta-link">
          <div className="L-shpaed-icon-wrapper">
            <span className="L-shaped-icon"></span>
          </div>
          <div>
            <a href="https://meta.stackoverflow.com">
              <MetaSoIcon />
              <span>Meta Stack Overflow</span>
            </a>
          </div>
        </li>
      </ul>
      <header>
        <h3>YOUR COMMUNITIES</h3>
      </header>
      <ul className="your-communities">
        <li>
          <a href="https://stackoverflow.com">
            <SoIcon />
            <span className="left-link">Stack Overflow</span>
            <span className="link-number">1</span>
          </a>
        </li>
      </ul>
      <header>
        <h3>MORE STACK EXCHANGE COMMUNITIES</h3>
      </header>
      <div>
        <CommunitySeach />
      </div>
    </Dialog>
  );
}
