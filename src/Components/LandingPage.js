import React from "react";
import CvUpload from "./landingPageSections/CvUpload";
import FeatureJob from "./landingPageSections/FeatureJob";
import Footer from "./landingPageSections/Footer";
import LandingPageNav from "./landingPageSections/LandingPageNav";
import OnPlatform from "./landingPageSections/OnPlatform";
import RightJobSection from "./landingPageSections/RightJobSection";
import { DarkmodeContext } from "../contex/darkmode/index";

function LandingPage() {
  const [state, dispatch] = React.useContext(DarkmodeContext);

  return (
    <div
      style={{
        color: state.shades.new,
        backgroundColor: state.shades.primary,
      }}
    >
      {/* landing page consist of different section */}
      {/* navigation */}
      {/* get right job section */}
      {/* on platform */}
      {/* feature job */}
      {/* cv upload */}
      {/* footer */}
      <LandingPageNav />
      <RightJobSection />
      <OnPlatform />
      <FeatureJob />
      <CvUpload />
      <Footer />
    </div>
  );
}

export default LandingPage;
