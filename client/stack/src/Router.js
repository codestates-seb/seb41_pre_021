import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Questions from './pages/Questions';
import Tags from './pages/Tags';
import Users from './pages/Users';
import SignUp from './pages/SignUp';

const Router = () => {
  // 로그인 기능 구현 후, isLoggedIn 상태로 조건부 라우팅 해야 함.
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/tags" element={<Tags />} />
      <Route path="/users" element={<Users />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default Router;
