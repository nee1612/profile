import React from 'react'
import Lottie from "lottie-react";
import profile from "./assets/profile.json"
function Loading() {
  return (
    <div className='flex justify-center mt-[10rem]'>
        <div className='w-[15rem] '>
        <Lottie animationData={profile} loop={true} />
        </div>
    </div>
  )
}

export default Loading