import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';

function Layout() {
    return (
        <>
            <div className="layout">
                <NavBar />
                <Main />
            </div>
        </>
    )
}

export default Layout
