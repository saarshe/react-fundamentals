import * as React from 'react'
import '../box-styles.css'

const Box = ({style, size, ...otherProps}) => {
  const sizeClassName = size ? `box--${size}` : '';

  return <div className={`box ${sizeClassName}`} style={{fontStyle: 'italic', ...style}} {...otherProps}></div>
}

const smallBox = <Box size="small" style={{backgroundColor: 'lightblue'}}>
  small lightblue box
</Box>

const mediumBox = <Box size="medium" style={{backgroundColor: 'pink'}}>
  small lightblue box
</Box>

const largeBox = <Box size="large" style={{backgroundColor: 'orange'}}>
  small lightblue box
</Box>


function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
