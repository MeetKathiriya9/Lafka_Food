import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Helmet from '../Components/Helmet';

export default function Login() {
  const [change, Formchange] = useState(false);

  const changeHandle1 = () => {
    Formchange(true);
  };

  const changeHandle2 = () => {
    Formchange(false);
  };

  return (
    <Helmet title={'Login'}>
      <>

        <div className="account">
          <Header />
          {change ? (
            <div className="Acboxes clearfix">
              <div className="flex1 Acactive">
                <p className='AcText' onClick={changeHandle1}>Login</p>
              </div>
              <div className="flex1 Acbox">
                <p className='AcText' onClick={changeHandle2}>Register</p>
              </div>
            </div>
          ) : (
            <div className="Acboxes clearfix">
              <div className="flex1 Acbox">
                <p className='AcText' onClick={changeHandle1}>Login</p>
              </div>
              <div className="flex1 Acactive">
                <p className='AcText' onClick={changeHandle2}>Register</p>
              </div>
            </div>
          )}

          <div className="form">
            {change ? (
              <form action="" className="loginform">
                <div>
                  <label htmlFor="name" className='lfLabel'>USERNAME OR EMAIL ADDRESS *</label><br />
                  <input type="email" id="name" name="name" className='lfInput' required />
                </div>
                <div>
                  <label htmlFor="pass" className='lfLabel'>PASSWORD *</label><br />
                  <input type="password" id="pass" name="pass" className='lfInput' required />
                </div>
                <button className='lfBtn'>LOG IN</button><br />
                <Link className='lfLink'>Lost Your Password?</Link>
              </form>
            ) : (
              <form action="" className="registerform">
                <div>
                  <label htmlFor="email" className='rfLabel'>EMAIL ADDRESS *</label><br />
                  <input type="email" id="email" name="email" className='rfInput' required />
                </div>
                <div>
                  <label htmlFor="pwd" className='rfLabel'>PASSWORD *</label><br />
                  <input type="password" id="pwd" name="pwd" className='rfInput' required />
                </div>
                <p className='rfPolicy'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='rePolicySpan'></span>privacy policy.</p>
                <button className='rfBtn'>REGISTER</button>
              </form>
            )}
          </div>

        </div>
      </>
    </Helmet>
  );
}
