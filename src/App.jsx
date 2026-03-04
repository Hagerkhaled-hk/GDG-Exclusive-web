
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/layouts/mainLayout'
import Home from './pages/Home/Home'
import Cart from './pages/cart/cart'
import Payment from './pages/payment/payment'
import Account from './pages/Account/Account'
import ProfilePart from './components/account/profilePart'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const router = createBrowserRouter([
{
    path:"/",
    element :<MainLayout/>,
    children :[
      {
      path:"",
      element:<Home/>
      
    },
      {
      path:"cart",
      element:<Cart/>
      
    },
     {
      path:"payment",
      element:<Payment/>
      
    }
    ,
     {
      path:"account",
      element:<Account/>,
      children:[
        {
          path:"",
          element:<ProfilePart/>
        }
      ]
    }
  ]

  }
  ]) 

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
     <ToastContainer 
        position="top-right"
        autoClose={2000}
      />
    </>
  
  )
}

export default App
