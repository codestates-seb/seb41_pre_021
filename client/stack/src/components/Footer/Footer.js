import { FooterTag, Section } from './style';
import { ReactComponent as SoLogo } from '../../assets/footerstackoverflow.svg';
import { footerList, social } from '../../data/footer/footerList';

const footerListArr = Object.keys(footerList);

export default function Footer() {
  return (
    <FooterTag>
      <div className="footer-wrapper">
        <div className="logo-wrapper">
          <SoLogo />
        </div>
        <nav>
          {footerListArr.map((el, i) => (
            <div key={i} className="footerMenu-wrapper">
              <h5>{el}</h5>
              <ul>
                {footerList[el].map((el, i) => {
                  return (
                    <li key={i}>
                      <a
                        href={el[1]}
                        style={{
                          margin: el[0] === 'API' ? '16px 0 0 ' : 'inherit',
                        }}
                      >
                        {el[0]}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
        <Section>
          <ul>
            {social.map((el, i) => (
              <li key={i}>
                <a href={el['url']}>{el['name']}</a>
              </li>
            ))}
          </ul>
          <p>
            Site design / logo © 2022 Stack Exchange Inc; user contributions
            licensed under{' '}
            <a
              href="https://stackoverflow.com/help/licensing"
              style={{ textDecoration: 'underline', margin: '0' }}
            >
              CC BY-SA
            </a>{' '}
            .<br></br> rev 2022.12.21.43127
          </p>
        </Section>
      </div>
    </FooterTag>
  );
}
