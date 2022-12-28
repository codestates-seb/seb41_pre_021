import styled from 'styled-components';
export const PopOver = styled.div`
  z-index: 1;
  position: absolute;
  border-radius: 5px;
  border: 1px solid var(--bc-medium);
  background-color: white;
  box-shadow: var(--bs-md);
  width: 100%;
  min-width: 400px;
  max-width: 100%;
  inset: 0px auto auto 0px;
  transform: translate(0%, 43px);
  .total-wrapper {
    display: flex;
    font-size: 13px;
  }
  .half-wrapper {
    padding: 13px 12px 0px;
    width: 50%;
    overflow-wrap: anywhere;
  }
  .each-wrapper {
    margin-bottom: 13px;
  }
  .example {
    font-family: 'Menlo', monospace;
    color: var(--fc-dark);
    margin-right: 6px;
  }
  .details {
    color: var(--black-500);
  }
  @media screen and (max-width: 1024px) {
    .total-wrapper {
      display: flex;
      flex-direction: column;
    }
    .right {
      padding-top: 0px !important;
    }
    .half-wrapper {
      width: 100%;
    }
  }
`;
//searchbarpopover
export const PopOverBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  padding: 12px;
  border-color: var(--black-075);
  border-top-style: solid;
  border-top-width: 1px;
  .button_h {
    background-color: var(--powder-100);
    color: var(--powder-700);
    padding: 0.6em;
    line-height: calc(15 / 13);
    border: 1px solid var(--powder-500);
    box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.7);
    &:hover {
      background-color: var(--powder-300);
      color: var(--powder-800);
    }
  }
  .search_h {
    color: var(--blue-600);
    margin: 4px;
    &:hover {
      background-color: transparent;
      color: var(--blue-500);
    }
  }
`;
//searchbarpopover
export const SoIcon = styled.div`
  width: 16px;
  height: 16px;
  vertical-align: top;
  flex: none;
  background-size: 16px 7038px;
  background-image: url('https://cdn.sstatic.net/Img/favicons-sprite32.png?v=7a8e256012f1');
  background-position: 0 -6138px;
  margin: 0 4px;
`;
export const MetaSoIcon = styled(SoIcon)`
  background-position: 0 -6156px;
`;
//Logoutdialog
export const Logo = styled.a`
  margin-left: 8px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  height: 100%;
  span {
    background-image: url('	https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27');
    background-position: 0 -500px;
    display: flex;
    align-items: center;
    text-indent: -9999em;
    width: 146px;
    height: 30px;
    margin-top: -4px;
  }
`;
//Header.js
export const Form = styled.form`
  z-index: 1;
  padding: 0 8px;
  display: flex;
  flex-grow: 1;
  .searchbar-wrapper {
    position: relative;
    color: var(--black-400);
    flex-grow: 1;
  }
  input {
    width: 100%;
    margin: 0;
    padding: 0.6em 8px 0.6em 32px;
    border: 1px solid var(--black-200);
    border-radius: 3px;
    background-color: var(--white);
    color: var(--black-700);
    font-size: 13px;
    font-family: inherit;
    &:focus {
      outline: none;
      border-color: var(--blue-300);
      box-shadow: 0 0 0 4px var(--powder-100);
    }
    &::selection {
      background-color: var(--blue-100);
      color: var(--black);
    }
    &::placeholder {
      color: var(--black-400);
    }
  }
  svg {
    fill: var(--black-400);
    position: absolute;
    top: 50%;
    right: auto;
    right: auto;
    left: 0.7em;
    margin-top: -9px;
    pointer-events: none;
  }
`;
export const LogInButton = styled.a`
  padding: 8px 10.4px;
  border-color: var(--powder-500);
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.7);
  background-color: var(--powder-100);
  color: var(--powder-700);
  border: 1px solid var(--powder-500);
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.7);
  border-radius: 3px;
  margin-right: 5px;
  &:hover {
    background-color: var(--powder-300) !important;
    color: var(--powder-800);
  }
`;
export const SignUpButton = styled.a`
  padding: 8px 10.4px;
  border-color: var(--powder-500);
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.7);
  background-color: var(--blue-500);
  color: white;
  border: 1px solid var(--powder-500);
  box-shadow: inset 0 0.5px 0 0 hsla(0, 0%, 100%, 0.7);
  border-radius: 3px;
  margin-right: 18px;
  &:hover {
    background-color: var(--blue-600) !important;
  }
`;
export const Arrow = styled.span`
  z-index: 10000;
  position: absolute;
  left: 50%;
  top: -7px;
  height: 12px;
  width: 12px;
  &::after {
    left: 50%;
    content: '';
    position: absolute;
    border-radius: 2px;
    height: 12px;
    width: 12px;
    top: 46px;
    background-color: white;
    transform: translate(-100%, 0) rotate(45deg);
    box-shadow: -2px -2px 2px -1px var(--black-100);
  }
`;

export const Dialog = styled.div`
  letter-spacing: 0.03rem;
  font-weight: 700;
  color: var(--blue-600);
  z-index: 999;
  position: absolute;
  margin-left: 0;
  top: 47px;
  right: 0;
  max-width: 1332.5px;
  width: 375px;
  overflow-y: scroll;
  overflow-x: hidden;
  min-height: 390px;
  max-height: 390px;
  box-shadow: var(--bs-sm);
  background-color: white;
  &::-webkit-scrollbar {
    background-color: white;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--black-150);
    border-radius: 100px;
  }
  header {
    font-size: 11px;
    background-color: var(--black-050);
    width: 100%;
    box-sizing: border-box;
    position: relative;
    display: flex;
    padding: 8px 10px;
    flex-wrap: wrap;
    &:hover {
      cursor: default;
    }
  }
  ul {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    background-color: white;
  }
  li {
    padding: 1px 3px;
    color: var(--blue-600);
    display: flex;

    width: 100%;
    &:hover,
    a:hover {
      background-color: var(--black-075);
    }
    a {
      display: flex;
      align-items: center;
      &:visited {
        color: var(--blue-600);
      }
    }
  }
  span {
    margin-left: 3px;
  }
  .left-link {
    flex: 1 auto;
  }
  .links {
    display: flex;
    font-weight: 400;
    color: var(--blue-600);
    a {
      margin-left: 10px;
    }
  }

  .L-shpaed-icon-wrapper {
    margin: 5px 0 8px 17px;
    height: 10px;
    span {
      width: 10px;
      height: 10px;
      border: solid #b9c1c5;
      border-width: 0 0 1px 1px;
      display: inline-block;
    }
  }
  .your-communities {
    background-color: white;

    div {
      display: flex;
    }
    a {
      padding: 8px;
      display: flex;
      flex: 1 auto;
    }
    span {
      font-weight: 400;
    }
    .left-link {
      flex: 1 auto;
    }
    .link-number {
      color: var(--black-400);
      padding-right: 2px;
    }
  }
  a:hover,
  span:hover {
    color: var(--blue-500);
  }
  .so-link,
  .meta-link {
    background-color: var(--powder-050);
    div {
      display: flex;
      align-items: center;
      padding: 8px;
    }
    &:hover,
    a:hover {
      background-color: var(--powder-100);
    }
  }
  .meta-link {
    font-weight: 400;
    div {
      padding-left: 0;
    }
  }
`;
