import { searchHints } from '../../data/header/searchHints';
import { PopOver, PopOverBottom } from './style';
const Hints1 = searchHints.slice(0, 4);
const Hints2 = searchHints.slice(4, 8);

export default function SearchBarPopOVer() {
  return (
    <PopOver onClick={(e) => e.stopPropagation()}>
      <div className="total-wrapper">
        <div className="half-wrapper left">
          {Hints1.map((el, i) => (
            <div className="each-wrapper " key={i}>
              <span className="example">{el['example']}</span>
              <span className="details">{el['details']}</span>
            </div>
          ))}
        </div>
        <div className="half-wrapper right">
          {Hints2.map((el, i) => (
            <div className="each-wrapper " key={i}>
              <span className="example">{el['example']}</span>
              <span className="details">{el['details']}</span>
            </div>
          ))}
        </div>
      </div>
      <PopOverBottom>
        <a className="button_h q-button" href="/question/ask">
          Ask a question
        </a>
        <a className="search_h" href="https://stackoverflow.com/help/searching">
          Search help
        </a>
      </PopOverBottom>
    </PopOver>
  );
}
