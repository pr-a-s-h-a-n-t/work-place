import React from 'react'
import CvUpload from './landingPageSections/CvUpload'
import FeatureJob from './landingPageSections/FeatureJob'
import Footer from './landingPageSections/Footer'
import LandingPageNav from './landingPageSections/LandingPageNav'
import OnPlatform from './landingPageSections/OnPlatform'
import RightJobSection from './landingPageSections/RightJobSection'

function LandingPage() {
  return (
    <div>
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
  )
}

export default LandingPage
