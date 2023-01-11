import React from 'react'
import "../../src/index.css"
import { CirclesWithBar } from 'react-loader-spinner';
import "../../src/index.css"

const Loader = () => {
  return (
    <CirclesWithBar
      height="100"
      width="100"
      color="#bcffc7ff"
      wrapperStyle={{}}
      wrapperClass="loader"
      visible={true}
      outerCircleColor=""
      innerCircleColor=""
      barColor=""
      ariaLabel='circles-with-bar-loading'
    />
  )
}

export default Loader