import React from 'react';

const SideNavLink = ({href, label, icon}) => {
    return (
        <a className="nav-link" href="index.html">
            <div className={href}><i className={icon}></i></div>
            {label}
        </a>
    );
};

export default SideNavLink;