import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { MessagePage } from './pages/messages/MessagePage';
import { AddFriendPage } from './pages/friends/AddFriendPage';
import { FriendsPageLayout } from './pages/friends/FriendsPageLayout';
import { FriendRequestPage } from './pages/friends/FriendRequests';
import { AllFriendsPage } from './pages/friends/AllFriends';
import { RootLayout } from './pages/RootLayout';
import { Toaster } from 'react-hot-toast';
import { useTheme } from './providers/themeProvider';
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";


function App() {

  const {theme} = useTheme()

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
      <div className={`h-screen w-screen  ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`} style={{ height: `${window.innerHeight}px` }}>
      <SignedIn>
      <main  className="flex-1 h-screen w-full relative overflow-hidden" >
        <Routes>
          <Route element={<RootLayout/>}>
            <Route path="/" element={<Navigate replace to="/messages"/>}/>
            <Route  path="/messages" element={<MessagePage/>}/>
            <Route path="/friends" element={<FriendsPageLayout/>} >
              <Route path="add" element={<AddFriendPage/>}/>
              <Route path="pending" element={<FriendRequestPage/>}/>
            </Route>
            <Route path="/friends/all" element={<AllFriendsPage/>} />
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
