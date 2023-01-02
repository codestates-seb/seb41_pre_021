import styled from 'styled-components';
export const FooterTag = styled.footer`
  background-color: var(--black-800);
  width: 100%;
  .footer-wrapper {
    max-width: 1264px;
    width: 100%;
    margin: 0 auto;
    padding: 32px 12px 12px;
    display: flex;
    flex-flow: row wrap;
  }
  .logo-wrapper {
    flex: 0 0 64px;
    margin: -12px 0 32px 0;
  }
  svg {
    width: 32px;
    height: 37px;
  }
  nav {
    display: flex;
    flex: 2 1 auto;

    div {
      font-weight: 800;
      letter-spacing: 0.03rem;
      color: var(--black-200);
      padding: 0 12px 24px 0;
      flex: 1 0 auto;
    }
    h5 {
      margin-bottom: 12px;
    }
    li {
      color: white;
      padding: 4px 0;
    }
    a {
      font-weight: 300;
      color: var(--black-350);
      padding: 4 0;
      line-height: calc(17 / 13);
      display: inline-block;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 1024px) {
    .logo-wrapper {
      margin-bottom: 0px;
    }
    .footer-wrapper {
      flex-direction: column;
    }
    .footerMenu-wrapper {
      padding: 10px 0 10px 0;
      margin-bottom: 5px;
      h5 {
        margin-bottom: 2px;
      }
    }
    padding-left: 10px;
    nav {
      flex-direction: column;
    }
    ul {
      flex-wrap: wrap;
      display: flex;
      flex-direction: row;
      row-gap: 0px;
    }
    li {
      margin-right: 12px;
    }
    a {
      margin: 0 !important;
    }
    section {
      padding: 0 0 10px 20px;
    }
  }
`;

export const Section = styled.div`
  font-size: 11px;
  color: var(--black-350);
  flex: 1 1 150px;
  display: flex;
  flex-direction: column;
  ul {
    display: flex;
  }
  a {
    margin-right: 12px;
    font-size: 11px;
    color: var(--black-350);
  }
  p {
    margin-top: auto;
    margin-bottom: 28px;
  }
  @media screen and (max-width: 1024px) {
    flex: 1 1 30px;
    margin: 30px 0 10px 0;
    p {
      margin: 30px 0 10px 0;
    }
  }
`;
