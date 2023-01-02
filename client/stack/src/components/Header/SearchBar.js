import { useState, useRef } from 'react';
import SearchBarPopOVer from './SearchBarPopOver';
import { useClickDetect } from '../../utils/useClickDetect';
import { Form, Arrow } from './style';
import { ReactComponent as MGlass } from '../../assets/magnifying-glass.svg';

export default function SearchBar() {
  const searchBarRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useClickDetect(searchBarRef, isVisible, setIsVisible);

  return (
    <Form
      autoComplete="off"
      onSelect={() => setIsVisible(true)}
      ref={searchBarRef}
    >
      <div className="searchbar-wrapper">
        <MGlass></MGlass>
        <input placeholder="Search..."></input>
        {isVisible && (
          <>
            <SearchBarPopOVer />
            <Arrow />
          </>
        )}
      </div>
    </Form>
  );
}
