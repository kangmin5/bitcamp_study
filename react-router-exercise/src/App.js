import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home"
import Compo1 from "./components/Compo1"
import Compo2 from "./components/Compo2"
import Compo3 from "./components/Compo3"


export default function App(){
  return useRoutes([
    {path: "/", element:<Home/>},
    {path: "/compo1",element:<Compo1/>},
    {path: "/compo2", element:<Compo2/>},
    {path: "/compo3", element:<Compo3/>}
  ])
}