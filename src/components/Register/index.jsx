/* eslint-disable no-unused-vars */
import './register.css'
import { useDispatch, useSelector } from 'react-redux';
import { signInWithGoogle, signOut } from '../../store/authSlice';
import { clearUser } from '../../store/authSlice';

export default function Register() {

  const dispatch = useDispatch();
  // const user = useSelector((state) => state.auth.user);
  // const loading = useSelector((state) => state.auth.loading);
  // const error = useSelector((state) => state.auth.error);

  const handleSignInWithGoogle = async() => {
    await dispatch(signInWithGoogle());
    window.location.href = '/';
  };

  return (
    <div className="wrapper flex justify-center align-center my-60">
      <div className="card-switch">
        <label className="switch">
          <input className="toggle" type="checkbox" />
          <span className="slider" />
          <span className="card-side" />
          <div className="flip-card__inner">
            <div className="flip-card__front">
              <div className="title">Log in</div>
              <form action="" className="flip-card__form">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="flip-card__input"
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="flip-card__input"
                />
                <button type="submit" className="flip-card__btn">Let`s go!</button>
                <button type="button" onClick={handleSignInWithGoogle} className="">Sign in with Google</button>
              </form>
            </div>
            <div className="flip-card__back">
              <div className="title">Sign up</div>
              <form action="" className="flip-card__form">
                <input
                  type="name"
                  placeholder="Name"
                  className="flip-card__input"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="flip-card__input"
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="flip-card__input"
                />
                <button className="flip-card__btn">Confirm!</button>
              </form>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}
