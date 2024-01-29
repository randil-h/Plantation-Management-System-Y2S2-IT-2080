import '../index.css';
import Navbar from "../components/Navbar";
import WelcomeBanner from "../components/Welcome_banner"
import FunctionBar from "../components/Function_bar";
import SubscribeNewsletter from "../components/subscribe_newsletter";
import LandingPageBanner from "../components/LandingPageBanner";
import Footer from "../components/Footer";

export default function LandingPage() {
    return (
        <div>
            <Navbar/>
            <LandingPageBanner/>
            <WelcomeBanner/>
            <FunctionBar/>
            <SubscribeNewsletter/>
            <Footer/>
        </div>
    )
}