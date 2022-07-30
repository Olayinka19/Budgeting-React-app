import React from 'react'
import { useSpring, animated } from 'react-spring';

function Transition() {
    const styles = useSpring({
      loop: true,
      from: { rotateZ: 1000 },
      to: { rotateZ: 280 },
    })
  
    return (
      <animated.div
        style={{
          width: 180,
          height: 180,
          backgroundColor: '#46e891',
          borderRadius: 16,
          ...styles,
        }}
      />
    )
  }
export default Transition;