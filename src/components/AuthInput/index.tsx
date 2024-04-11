import { ChangeEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores";
import { loggedIn, loggedOut } from "../../stores/auth";

const AuthInput = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { hardcodedLogin, hardcodedPassword } = useSelector((state: RootState) => state.auth)

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (password === hardcodedPassword && login === hardcodedLogin) {
      dispatch(loggedIn());
    } else {
      dispatch(loggedOut())
    }
  }

  return (
    <div>
      <input type="text" value={login} onChange={handleLoginChange} onKeyPress={handleKeyPress} placeholder="login"/>
      <input type="password" value={password} onChange={handlePasswordChange} onKeyPress={handleKeyPress} placeholder="password"/>
      <button onClick={handleSubmit}>Войти</button>
    </div>
  );
}

export default AuthInput;