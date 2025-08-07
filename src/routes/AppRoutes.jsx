import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from '../components/Nav'
import HomePage from '../pages/HomePage'

const router = createBrowserRouter([
    {
        path: '/',element: <HomePage/>,

    }
])

const AppRoutes = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default AppRoutes
