import React, { Fragment } from 'react';
import Search from './Search';
import { SideNavBtn } from './SideNav';

export const NavMenuCollapseControler = ({cible, icon}) => {
    let stat = false

    const collapseToggle = (cible) => {
        const comp = document.getElementById(cible)

        stat = !stat
        stat ? comp.className="" : comp.className="collapse"
    }

    return (
        <a className="nav-link collapsed" href="#" onClick={e => collapseToggle(cible)}>
            <div className="sb-nav-link-icon"><i className={icon}></i> <i className="bi-chevron-down"></i></div>
        </a>
    )
}

export const NavMenuCollapseContainer = ({id, children}) => {
    return (
        <div className="text-white bg-dark">
            <ul id={id} className="collapse">
                {children}
            </ul>
        </div>
    )
}

const NavigationBar = () => {
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            {/* Navbar Brand */}
            <a className="navbar-brand ps-3" href="index.html">Start React</a>
            
            {/* Sidebar Toggle */}
            <SideNavBtn cible='layoutSidenav_nav' />
            
            {/* Navbar Search */}
            <Search />
            
            {/* Navbar */}
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <NavMenuCollapseControler cible="navbarDropdown" icon="bi-person-fill" />
                    
                    <NavMenuCollapseContainer id="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Settings</a></li>
                        <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#!">Logout</a></li>
                    </NavMenuCollapseContainer>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;