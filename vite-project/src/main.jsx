import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Function in React</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: "https://google.com",
//       target: '_blank' 
//   },
//   children: 'Click me to visit Google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

const anotherName = "React"
const ReactElement = React.createElement(
  'a',
  {
    href:"https://google.com", 
    target:'_blank'
  },
  'click to go on google',
  anotherName
)

ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
    // <App />
)
