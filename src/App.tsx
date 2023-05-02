import { useEffect } from 'react'
import  SideBar from './components/SideBar'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";
const clerk_pub_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;


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
    <ClerkProvider publishableKey={clerk_pub_key}>
      <div id="mainApp" style={{ height: `${window.innerHeight}px` }}>
      <SignedIn>
        <main  className="h-screen w-screen  bg-gray-100 overflow-hidden" >
      <SideBar/>
      </main>
      </SignedIn>
       <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
    </ClerkProvider>
    
  )
}

export default App
