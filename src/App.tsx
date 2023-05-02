import { useEffect } from 'react'
import  SideBar from './components/SideBar'

function App() {

const getPageZoom = () => {
        const zoomVal = window.localStorage.getItem('zoom')
        if (zoomVal) {
            const zoomNum = parseInt(zoomVal as string)
            const mainDiv = document.getElementById('mainApp')
            if (!mainDiv) return
            mainDiv.style.zoom = `${zoomNum}%`
        }
    }
    window.addEventListener('zoom', getPageZoom)
    window.addEventListener('resize', () => {
        const app = document.getElementById('app')
        if (!app) return
        app.style.height = `${window.innerHeight}px`
    })

    useEffect(() => {
        getPageZoom()
    }, [])
  
  return (
    <div id="mainApp" style={{ height: `${window.innerHeight}px` }}>
      <main  className="h-screen w-screen  bg-gray-100 overflow-hidden" >
      <SideBar/>
      </main>
    </div>
  )
}

export default App
