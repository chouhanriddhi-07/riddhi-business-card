import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Interests from "./components/Interests";
import Profile from "./components/Profile";

function App() {
    return (
        <div className="app">
            <Profile />
            <AboutMe />
            <Interests />
            <Footer />

        </div >
    );
}

export default App;