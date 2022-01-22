import './login.css';

export default function Login() {
  return <>
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Social APP</h3>
          <div className="span login-desc">
            Connect with fiends and the world around you on Social APP.
          </div>
        </div>
        <div className="login-right">
          <div className="login-box">
            <input placeholder="Email" className="login-input" />
            <input placeholder="Password" className="login-input" />
            <button className='login-btn'>Log In</button>
            <span className="password-forgot">Forgot Password?</span>
            <button className='register-btn'>Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  </>;
}
