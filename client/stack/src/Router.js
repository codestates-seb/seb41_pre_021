import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Questions from './pages/Questions';
import Tags from './pages/Tags/Tags';
import Users from './pages/Users';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Logout from './pages/Logout';
import QuestionUpload from './pages/QuestionUpload';

const Router = ({ setIsLoggedIn }) => {
  // 로그인 기능 구현 후, isLoggedIn 상태로 조건부 라우팅 해야 함.
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/tags" element={<Tags />} />
      <Route path="/users" element={<Users />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route
        path="/logout"
        element={<Logout setIsLoggedIn={setIsLoggedIn} />}
      />
      <Route path="/questions/ask" element={<QuestionUpload />} />
    </Routes>
  );
};

export default Router;
