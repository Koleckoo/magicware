import { Link } from "react-router-dom";
import './WelcomePage.scss'
import { useContext } from "react";
import UserContext from "../../UserContext/UserContext";

export default function WelcomePage () {
    const {user, setUser} = useContext(UserContext)

    return <section className="home">
    <div className="home__header">
        <h4>ONLINE BOOKING</h4>
        <h1>HOTEL & SPA</h1>
    </div>
    <div className="home__options">
        <div className="home__options-login">
            <h5 className="home__options-login-title">Login into your account</h5>
            <form className="home__options-login-form" action="">
                <input className="home__options-login-form-input" type="text" placeholder="Username" required />
                <input className="home__options-login-form-input" type="password" required placeholder="Password"/>
                <Link to='/results' onClick={() => setUser(true)} className="home__options-login-form-btn" type="submit">Login</Link>
            </form>
                <a href="#">Forgot your password?</a>
        </div>
        <div className="home__options-register">
            <h5 className="home__options-register-title">Create a new account</h5>
            <h5 className="home__options-register-title">Are you travale agency?</h5>
            <p className="home__options-register-description">Access to FREE online tools to help you publish faster adn easier.</p>
            <button className="home__options-register-btn">Register</button>
        </div>
    </div>    
</section>
}