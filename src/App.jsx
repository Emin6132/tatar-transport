import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from './pages/Home'
import AboutUs from './pages/AboutUs'
import RootLayout from './pages/Root'
import Services from './pages/Services'
import Contact from './pages/Contact'


const router = createBrowserRouter([
  {
    path: "/", element: <RootLayout />, children: [
      { path: "/", element: <HomePage /> },
      { path: "/Anasayfa", element: <HomePage /> },
      { path: "/Hakkımızda", element: <AboutUs /> },
      { path: "/Hizmetlerimiz", element: <Services /> },
      { path: "/İletişim", element: <Contact /> },
    ]
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
