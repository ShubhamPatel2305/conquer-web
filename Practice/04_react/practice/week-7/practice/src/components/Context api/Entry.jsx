/* eslint-disable no-unused-vars */
import React from 'react'
import Section from './Section'
import Heading from './Heading'

/*
You will do it in three steps:

Create a context. (You can call it LevelContext, since it’s for the heading level.)
Use that context from the component that needs the data. (Heading will use LevelContext.)
Provide that context from the component that specifies the data. (Section will provide LevelContext.)
*/

const Entry = () => {
  return (
    <div>Entry
        <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section level={4}>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
    </div>
  )
}

export default Entry