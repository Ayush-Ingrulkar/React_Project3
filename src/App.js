import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// src/App.js
import React, { useEffect } from 'react';
import { UserProvider} from './UserContext';
import Navbar from './Components/Navbar';
import HomePage from './HomePage';
import LoginForm from './Components/LoginForm';
import About from './Components/About';
import Restrictions from './Components/Restrictions';
import Feed from './Components/Feed';
import HelpPage from './HelpPage';
import Dashboard from './Components/Dashboard';
// import LoginForm from './Components/LoginForm';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';

const App = () => {
    // <Router basename='/React_Project3'></Router>

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://localhost:5500');
                const data = await res.json();
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const router = createBrowserRouter([
        {
            path: "/",
            element: <><Navbar searchBar={true} /><HomePage /></>
        },
        {
            path: "/login",
            element: <><Navbar searchBar={true} /><LoginForm /></>
        },
        {
            path:"/dashboard",
            element:<><Navbar searchBar={true} /><Dashboard/></>

        },
        {
            path: "/about",
            element: <><Navbar searchBar={true} /><About /></>
        },
        {
            path: "/restrict",
            element: <><Navbar searchBar={true} /><Restrictions /></>
        },
        {
            path: "/feed",
            element: <><Navbar searchBar={true} /><Feed /></>
        },
        {
            path: "/help",
            element: <><Navbar searchBar={true} /><HelpPage /></>
        }
    ])
    return (
        
        // <Router>



        //     <div className='App'>
        //         <Navbar searchBar={true}/>
        //             {/* <Routes>
        //         <Route path="/" element={<HomePage/>}/>
        //         <Route path="/login" element={<LoginForm/>}/>
        //         </Routes> */}

        //     </div>
        //     </Router>

        <>
        <UserProvider>

            <RouterProvider router={router} />
            </UserProvider>
        </>

    );
};

export default App;