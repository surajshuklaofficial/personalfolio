import React from 'react';

import { NavigationDots, SocialMedia } from '../components';

const AppWrap = ( Component, idName, className ) => function HOC() {

  return (
    <div id={ idName } className={`w-full min-h-screen flex mb-2 pb-12 ${className}`} >
        <SocialMedia />

        <div className={`flex-1 w-full flex-col pt-6 sm:px-8 px-0 mt-8`}>
            <Component />

            {/* <div className='w-full pt-8 flex flex-col justify-end items-end'>
                <p className='uppercase text-black'>@2023 SURAJSHUKLA</p>
                <p className='uppercase text-black'>All rights reserved</p>
            </div> */}
        </div>

        <NavigationDots active={ idName }/>
    </div>
  )
}

export default AppWrap;