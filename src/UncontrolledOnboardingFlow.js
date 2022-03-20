import React, { useState } from 'react'

const UncontrolledOnboardingFlow = ({ children, onFinish }) => {
  const [onboardingData, setOnboardingData] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentChild = React.Children.toArray(children)[currentIndex]

  const goToNext = stepData => {
    const nextIndex = currentIndex + 1;
    const updatedData = {
      ...onboardingData,
      ...stepData
    }
    console.log(`Step${currentIndex} data:`, updatedData);

    if (nextIndex < children.length) {
      setCurrentIndex(currentIndex + 1)
    } else {
      onFinish(updatedData)
    }

    setOnboardingData(updatedData)
  }

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext })
  }
  return currentChild
}

export default UncontrolledOnboardingFlow
