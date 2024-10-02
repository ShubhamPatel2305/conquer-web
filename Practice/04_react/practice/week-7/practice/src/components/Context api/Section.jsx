/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { LevelContext } from './LevelContext'

const Section = ({children, level}) => {
  return (
    <div>
      <section className="section">
      <LevelContext.Provider value={level}>
        {children}
      </LevelContext.Provider>
    </section>
    </div>
  )
}

export default Section