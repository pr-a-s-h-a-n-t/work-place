

import React from 'react'
import FeaturedJobCard from '../common/FeaturedJobCard';
import './LandingPage.css'
import { DarkmodeContext } from '../../contex/darkmode';

function FeatureJob() {
  const[ state, dispatch ] = React.useContext(DarkmodeContext)
  return (
    <div className='section3'
    style={{
      color: state.shades.secondary,
      backgroundColor: state.shades.primary,
      // color: state.shades.secondary,
            
    }}
    >
      <h1 className='heading'>Featured Job Circulars</h1>
      <div className='job-container'>
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map((ele, i) => {
            return (
              <FeaturedJobCard key={i} />

            )
          })
        }

      </div>
      <button className='main-btn'> Find More Jobs</button>
    </div>
  )
}

export default FeatureJob;    
