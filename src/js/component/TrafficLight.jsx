import React from 'react'

export const TrafficLight = ({ color, handleColor }) => {
  return (
    <div className='container-custom'>
      <div className='top'></div>
      <div className='box'>
        <div
          className={`green ${color === 'green' ? 'light' : ''}`}
          onClick={() => handleColor('green')}
        ></div>
        <div
          className={`yellow ${color === 'yellow' ? 'light' : ''}`}
          onClick={() => handleColor('yellow')}
        ></div>
        <div
          className={`red ${color === 'red' ? 'light' : ''}`}
          onClick={() => handleColor('red')}
        ></div>
      </div>
    </div>
  )
}
