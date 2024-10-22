import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import { useEffect } from "react";
import Gemini from './gemini';

function App() {
  

  return (
    <>
     <div className="bg-primaryBg-default h-screen flex">
      <div className="xl:block hidden">
      <SideBar></SideBar>
      </div>
      
     <Outlet/>
     </div>
    
    </>
  )
}

export default App
