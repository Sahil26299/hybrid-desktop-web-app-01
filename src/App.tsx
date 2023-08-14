import "./App.scss";
import ResponsiveAppBar from "./components/appBar/TopNavBar";
import LandingPage from "./screens/LandingPaage/LandingPage.screen";
import { BackgroundVideoComponent } from "./components/backgroundVideoComponent/BackgroundVideoComponent";
import { AboutUs } from "./screens/AboutUs/AboutUs.screen";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <div className="app-wrapper">
        {/* <div className="backgroundImageContainer" /> */}
        <BackgroundVideoComponent />
        <ResponsiveAppBar />
        <LandingPage />
        <AboutUs />
      </div>
    </ParallaxProvider>
  );
}

export default App;
