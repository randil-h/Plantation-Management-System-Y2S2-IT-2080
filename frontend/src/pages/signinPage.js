import '../index.css';
import Navbar from "../components/utility/Navbar";
import SignIn from "../components/sign_in"
import Footer from "../components/utility/Footer";


export default function SigninPage() {
    return (
        <div>
            <Navbar/>

            <SignIn/>
            <Footer/>
        </div>
    )
}