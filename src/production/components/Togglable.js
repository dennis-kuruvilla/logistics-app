import React, { useState} from 'react'

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  
  return (
    <div className="text-center ">
      <div style={hideWhenVisible}>
        <button type="button" className="btn btn-primary btn-lg" onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}  className="togglableContent">
        {props.children}
        <br/>
        <button type="button" className="btn btn-secondary btn-lg" onClick={toggleVisibility}>Cancel</button>
      </div>
    </div>
  )
}

export default Togglable