import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import Movies from "./pages/movies";
import TvSeries from "./pages/tv-series";
import Bookmark from "./pages/bookmark";
import Login from "./pages/login";
  
  
  
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children : [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/movies',
            element: <Movies/>
        },
        {
            path: '/tv-series',
            element: <TvSeries/>
        },
        {
            path: '/bookmark',
            element: <Bookmark/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        // {
        //     path: '/',
        //     element: </>
        // },
      ]
    },
  ]);
  
  
  
export default routers 