import './register.css';

export default function Register() {
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
          <h2 className="register-title">Create a New Account</h2>
            <input placeholder="Username" className="login-input" />
            <input placeholder="Email" className="login-input" />
            <input placeholder="Password" className="login-input" />
            <input placeholder="Password Confirm" className="login-input" />
            <button className='login-btn'>Sign Up</button>
            <button className='register-btn'>Log Into Account</button>
          </div>
        </div>
      </div>
    </div>
  </>;
}
