import { Link } from "react-router-dom";

function LandingPage() {
    return (
    <div>
        <h1>Bored?</h1>
        <div>
            <p>Anything can be an adventure!</p>
        </div>
        <br></br>
        <div>
            <p>Your next adventure awaits...</p>
            <Link to="/signup">
                <button>sign up now!</button>
            </Link>
        </div>
        <br></br>
        <div>
            <p>Already have an account? Log in
                <Link to="/login">
                <button>here</button>
                </Link>
            </p>
        </div>
    </div>
    );
}

export default LandingPage;
