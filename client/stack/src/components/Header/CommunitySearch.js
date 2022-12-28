import { useState, startTransition } from 'react';
import styled from 'styled-components';
import Community from './Community';
import { Form } from './style';
import { communities } from '../../data/header/communities';
import { ReactComponent as MGlass } from '../../assets/magnifying-glass.svg';

const SearchBar = styled(Form)`
  flex-direction: column;
  padding: 0;
  input {
    width: auto;
    margin: 8px;
    color: var(--black-700);
    font-weight: 400;
  }
  svg {
    fill: var(--black-400);
    top: 205px;
    left: 16px;
    color: red;
  }
  input::placeholder {
    font-weight: 400;
    color: var(--black-200);
  }
`;

export default function CommunitySeach() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    startTransition(() => setInputValue(e.target.value));
  };
  return (
    <>
      <SearchBar onSubmit={(e) => handleSubmit(e)}>
        <MGlass></MGlass>
        <input
          placeholder="Find a Stack Exchange community"
          onChange={(e) => handleChange(e)}
        ></input>
      </SearchBar>
      <ul>
        {communities
          .filter(
            (el) =>
              el.title.toUpperCase().includes(inputValue.toUpperCase()) ||
              el.detail.toUpperCase().includes(inputValue.toUpperCase())
          )
          .map((el, i) => (
            <Community
              key={i}
              title={el.title}
              detail={el.detail}
              subdomain={el.subdomain}
              icon={el.icon}
            />
          ))}
      </ul>
    </>
  );
}
