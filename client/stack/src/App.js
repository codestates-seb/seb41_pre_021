import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import Router from './Router';
import Footer from '../src/components/Footer/Footer';
import { getMemberId } from './utils/getMemberId';
import axios from 'axios';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(getMemberId());
  const [userInfo, setUserInfo] = useState({
    memberId: null,
    username: '',
    email: '',
    reputation: null,
  });

  const getUserInfo = async () => {
    const response = await axios.get(
      `https://hyeon-dong.site/members/${getMemberId()}`
    );
    setUserInfo({
      memberId: response.memberId,
      username: response.username,
      email: response.email,
      reputation: response.reputation,
    });
  };

  useEffect(() => {
    getUserInfo();
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} userInfo={userInfo} />
      <Router setIsLoggedIn={setIsLoggedIn} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
