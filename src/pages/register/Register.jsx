import axios from 'axios';
import React, { useRef } from 'react';
import './Register.css';
export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();

    //パスワードと確認用のパスワードが合っているかどうか確認
    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity('パスワードが違います');
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        // registerApIを叩く
        await axios.post('/auth/register', user);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Reacl SNS</h3>
          <span className="loginDesc">本格的なSNSを自分の手で</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">新規登録はこちら</p>
            <input
              type="text"
              className="loginInput"
              placeholder="ユーザー名"
              required
              ref={username}
            />
            <input
              type="email"
              className="loginInput"
              placeholder="Eメール"
              required
              ref={email}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="パスワード"
              required
              minLength="6"
              ref={password}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="確認用パスワード"
              required
              minLength="6"
              ref={passwordConfirmation}
            />
            <button className="loginButton" type="submit">
              サインアップ
            </button>

            <button className="loginRegisterButton">ログイン</button>
          </form>
        </div>
      </div>
    </div>
  );
}
