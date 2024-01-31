import '../index.css';
import Navbar from "../components/Navbar";
import SignIn from "../components/sign_in"
import Footer from "../components/Footer";

export default function SigninPage() {
    return (
        <div>
            <Navbar/>

            <SignIn/>
            <Footer/>
        </div>
    )
}