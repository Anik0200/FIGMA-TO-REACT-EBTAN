import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './LauOuts/Layout'
import Home from './Pages/Home'
import Title from './Components/Common/Title'

function App() {

    const route = createBrowserRouter(createRoutesFromElements(
        <Route>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
        </Route>
    ))

    return (
        <>
            <RouterProvider router={route} />
        </>
    )
}

export default App
