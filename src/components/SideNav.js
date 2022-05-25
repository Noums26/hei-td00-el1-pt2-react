import React from 'react';

const SideNav = ({children}) => {
    return (
        <div id="layoutSidenav">
            {children}
        </div>
    );
}

export const SideNavBtn = ({cible}) => {
    let stat = true;

    const SideBarToggle = (cible) => {
        const sideBar = document.getElementById(cible)
        stat = !stat
        stat ? sideBar.className = '' : sideBar.className = 'collapse'
    }

    return <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" onClick={e => SideBarToggle(cible)}><i className="bi-list"></i></button>
}

export const SideNavContainer = ({children}) => {
    return (
        <div id="layoutSidenav_content">
            {children}
        </div>
    )
}

export const SideNavMenuHeading = ({title}) => {
    return (
        <div className="sb-sidenav-menu-heading">
            {title}
        </div>
    )
}

export const SideNavLink = ({label, target, icon}) => {
    return (
        <a class="nav-link" href={target}>
            <div class="sb-nav-link-icon"><i class={icon}></i></div>
            {label}
        </a>
    )
}

export const SideNavCollapseControler = ({cible, icon, label}) => {
    let stat = false

    const collapseToggle = (cible) => {
        const comp = document.getElementById(cible)

        stat = !stat
        stat ? comp.className="" : comp.className="collapse"
    }

    return (
        <a className="nav-link collapsed" href="#" onClick={e => collapseToggle(cible)}>
            <div className="sb-nav-link-icon"><i className={icon}></i></div>
            {label}
            <div className="sb-sidenav-collapse-arrow"><i className="bi-chevron-down"></i></div>
        </a>
    )
}

export const SideNavCollapseContainer = ({id ,children}) => {
    return (
        <div className="collapse" id={id}>
            {children}
        </div>
    )
}

export const SideNavNav = ({children}) => {
    return (
        <div id="layoutSidenav_nav" className=''>
            {children}
        </div>
    );
};

export default SideNav;