import "../App.css";
import "./listingStyle.css";
import Header from "../components/Header";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function SignOn() {
    return (
      <>
       <div className="Home">
          <Header />
          <h1 className="sign-in-title">Sign in:</h1>
          <div className="input-bar">
          Email
            <input className="email-sign-in-input"></input>
          </div>
          <div className="input-bar">
          Password
            <input className="password-sign-in-input"></input>
          </div>
          <div className="button-div">
            <button className="sign-in-button">Sign In</button>
          </div>
        </div>

        <div className="Home">
          <Header />
          <h1 className="sign-up-title">Sign Up:</h1>
          <div className="input-bar">
          Email
            <input className="email-sign-up-input"></input>
          </div>
          <div className="input-bar">
          Password
            <input className="PasswordSignInInput"></input>
          </div>
          <div className="button-div">
            <button className="signInButton">Sign In</button>
          </div>
        </div>
      </>
    );
  }