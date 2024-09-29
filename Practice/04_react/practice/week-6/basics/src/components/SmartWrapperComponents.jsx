/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'


// children is a reserved keyword in prop that takes  the input within see in app.jsx
const SmartWrapperComponents = ({children}) => {
  return (
    <div style={{
        border:"1px solid black",
        padding:"10px",
        margin:"10px"
    }}>DumbWrapperComponents
        {children}
    </div>
  )
}

export default SmartWrapperComponents