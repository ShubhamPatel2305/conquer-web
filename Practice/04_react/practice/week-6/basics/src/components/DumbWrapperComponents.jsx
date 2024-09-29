/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const DumbWrapperComponents = ({child}) => {
  return (
    <div style={{
        border:"1px solid black",
        padding:"10px",
        margin:"10px",
        width:"200px"
    }}>DumbWrapperComponents
        {child}
    </div>
  )
}


export default DumbWrapperComponents