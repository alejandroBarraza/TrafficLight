import React from 'react'

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg'
import { TrafficLight } from './TrafficLight'

//create your first component
const Home = () => {
  const [color, setColor] = React.useState(null)

  function handleColor(selectedColor) {
    if (selectedColor === 'green') {
      setColor('green')
    } else if (selectedColor === 'yellow') {
      setColor('yellow')
    } else if (selectedColor === 'red') {
      setColor('red')
    }
  }
  return <TrafficLight handleColor={handleColor} color={color} />
}

export default Home
