import { useRef, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createApp } from 'vue'
import AppVue from './App.vue'



function App() {
  const [count, setCount] = useState(0)
  const ref = useRef(null)


  useEffect(() => {

    createApp(AppVue).mount('#vue')

  }, [])

  return (
    <>
      <div>
      <my-element/>
        <div id="vue"ref={ref}></div>
        <div className="div" dangerouslySetInnerHTML={{__html: '<my-element/>'}}></div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react spin" alt="React logo" />
        </a>
      </div>


    </>
  )
}

export default App
