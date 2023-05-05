import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { MessagePage } from './pages/MessagePage';
import { RootLayout } from './pages/RootLayout';
import { Toaster } from 'react-hot-toast';
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";


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
      <div className='h-screen w-screen' style={{ height: `${window.innerHeight}px` }}>
      <SignedIn>
      <main  className="flex-1 relative bg-gray-100 overflow-hidden" >
        <Routes>
          <Route element={<RootLayout/>}>
            <Route path="/" element={<Navigate replace to="/messages"/>}/>
            <Route  path="/messages" element={<MessagePage/>}/>
          </Route>
        </Routes>
        </main>
      </SignedIn>
       <SignedOut>
          <RedirectToSignIn />
      </SignedOut>
      <Toaster position='top-right' />
    </div> 
  )
}

export default App
