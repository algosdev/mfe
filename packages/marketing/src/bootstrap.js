import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
const mount = (el) => {
  ReactDOM.render(<App />, el)
}

// In development render immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing_dev_root')
  if (devRoot) {
    mount(devRoot)
  }
}

// mount function for MFE container
export { mount }
