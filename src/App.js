import { useState } from "react";
import { useHistory, BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/welcome">
          <WelcomePage />
        </Route>
      </Switch>
    </Router>
  );
}

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    const user = registeredUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      alert("로그인 성공!");
      history.push("/welcome"); // 페이지 이동
    } else {
      alert("로그인 실패");
    }
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { username: regUsername, password: regPassword };
    setRegisteredUsers([...registeredUsers, newUser]);
    alert(`등록된 아이디: ${regUsername}, 비밀번호: ${regPassword}`);
    setShowModal(false);
    setRegUsername("");
    setRegPassword("");
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <button type="button" onClick={handleModal}>
        회원가입
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModal}>
              &times;
            </span>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
              <label>
                Username:
                <input
                  type="text"
                  value={regUsername}
                  onChange={(e) => setRegUsername(e.target.value)}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                />
              </label>
              <br />
              <button type="submit">등록</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function WelcomePage() {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>로그인이 완료되었습니다.</p>
    </div>
  );
}

export default App;