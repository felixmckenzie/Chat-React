import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { ChatLinksLayout } from './pages/chats/ChatLinks';
import { AddFriendPage } from './pages/friends/AddFriendPage';
import { NewChatPage } from './pages/chats/ChatPage';
import { ActionLinksLayout } from './pages/friends/ActionLinks';
import { FriendRequestPage } from './pages/friends/FriendRequests';
import { ContactLinksLayout } from './pages/friends/ContactLinks';
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
      <div id='mainApp' className={`flex h-screen w-screen overflow-hidden   ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`} style={{ height: `${window.innerHeight}px` }}>
      <SignedIn>
      <main className="flex h-full w-full relative z-0 overflow-hidden">
        <Routes>
          <Route element={<RootLayout/>}>
           
            <Route path="/" element={<Navigate replace to="/messages"/>}/>
            
            <Route  path="/messages" element={<ChatLinksLayout/>} >
              <Route path=":id" element={<></>} />
              </Route>
            
            <Route path="/friends" element={<ActionLinksLayout/>} >
              <Route path="add" element={<AddFriendPage/>}/>
              <Route path="pending" element={<FriendRequestPage/>}/>
            </Route>

            <Route path="/friends/all" element={<ContactLinksLayout/>} >
              <Route path="new-message" element={<NewChatPage/>} />
            </Route>

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
