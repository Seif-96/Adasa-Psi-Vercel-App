import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Personal from './Components/Personal/Personal';
import Layout from './Components/Layout/Layout';
import Footer from './Components/Footer/Footer';
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import Info from './Components/Info/Info';
import Articles from './Components/Articles/Articles';
import Lighting from './Components/Lighting/Lighting';
import Portrait from './Components/Portrait/Portrait';
import LandScape from './Components/LandScape/LandScape';
import Techniq from './Components/Techniq/Techniq';
import Equipment from './Components/Equipment/Equipment';
  



function App() {




let routers= createBrowserRouter([
  {path :"" ,element :<Layout />,
  children :[
    {index: true ,element :<Home />},
    {path :"blog" ,element :<Blog />,
    children :[
      {index :true ,element :<Articles />},
      {path :"lighting" ,element :<Lighting />},
      {path :"portrait" ,element :<Portrait />},
      {path :"landScape" ,element :<LandScape />},
      {path :"techniq" ,element :<Techniq />},
      {path :"Equipment" ,element :<Equipment />},
      {path :"*" ,element :<Articles />},
    ]
  },
    {path :"info" ,element :<Info />},
    {path :"personal/:slug" ,element :<Personal />},
    {path :"*" ,element :<Home />},
  ]
}, 
]) 


  return (
   <>
    <RouterProvider router={routers} ></RouterProvider>
   </>
  )
}

export default App
