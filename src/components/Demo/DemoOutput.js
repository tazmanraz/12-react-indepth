import React from 'react'
import MyParagraph from './MyParagraph'

const DemoOutput = (props) => {
  return (
    <div>
      <MyParagraph>{ props.show ? 'This is new!' : '' }</MyParagraph>
    </div>
  )
}

export default DemoOutput
